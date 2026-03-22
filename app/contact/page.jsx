"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: 'Téléphone', description: '(+212) 6 12 46 31 72' },
  { icon: <FaEnvelope />, title: 'Email', description: 'hibarochdi1234@gmail.com' },
  { icon: <FaMapMarkedAlt />, title: 'Adresse', description: 'Hay Essalam bloc G N15' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Formspree handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("https://formspree.io/f/mqeyorjb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message envoyé avec succès !");
      setFormData({ firstName:"", lastName:"", email:"", phone:"", service:"", message:"" });
    } else {
      alert("Erreur lors de l'envoi.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen py-10 mb-10 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-[30px] items-start">
        
        {/* Formulaire */}
        <div className="xl:w-[60%]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full">
            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
            <p className="text-white/60">
              Ensemble, construisons des solutions adaptées à vos besoins, avec innovation et expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input name="firstName" placeholder="Nom" value={formData.firstName} onChange={handleChange} required />
              <Input name="lastName" placeholder="Prénom" value={formData.lastName} onChange={handleChange} required />
              <Input name="email" type="email" placeholder="Adresse Email" value={formData.email} onChange={handleChange} required />
              <Input name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} required />
            </div>

            <Select name="service" value={formData.service} onValueChange={val => setFormData(prev => ({ ...prev, service: val }))}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sélectionner un service</SelectLabel>
                  <SelectItem value="Développement web">Développement web</SelectItem>
                  <SelectItem value="Réseaux">Réseaux</SelectItem>
                  <SelectItem value="Animation">Animation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea name="message" className="h-[150px]" placeholder="Entrer votre message ici" value={formData.message} onChange={handleChange} required />
            <Button type="submit" className="mt-4">Envoyer</Button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="xl:w-[40%] flex flex-col gap-10">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div>
                  <p className="text-white">{item.title}</p>
                  <h3 className="text-white/60">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;