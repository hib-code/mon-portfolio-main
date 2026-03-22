"use client";

import { useRef, useState } from "react";
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
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const endpoint = "https://formspree.io/f/mqeyorjb"; 

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Message envoyé avec succès !");
        formRef.current.reset();
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      alert("Erreur réseau : " + error.message);
    } finally {
      setLoading(false);
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
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full">
            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
            <p className="text-white/60">
              Ensemble, construisons des solutions adaptées à vos besoins, avec innovation et expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input name="firstName" type="text" placeholder="Nom" required />
              <Input name="lastName" type="text" placeholder="Prénom" required />
              <Input name="email" type="email" placeholder="Adresse Email" required />
              <Input name="phone" type="tel" placeholder="Téléphone" required />
            </div>

            <Select name="service">
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

            <Textarea name="message" className="h-[150px]" placeholder="Entrer votre message ici" required />
            <Button type="submit" className="mt-4" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
            </Button>
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