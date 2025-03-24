"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { 
    icon: <FaPhoneAlt />,
    title: 'Telephone',
    description: '(+212) 6 12 46 31 72',
  },
  { 
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'hibarochdi1234@gmail.com',
  },
  { 
    icon: <FaMapMarkedAlt />,
    title: 'Adresse',
    description: 'Hay Essalam bloc G N15',
  },
];

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen py-10 mb-10 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-[30px] items-start">
        {/* Formulaire à gauche */}
        <div className="xl:w-[60%]">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full"> 
            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
            <p className="text-white/60">Ensemble, construisons des solutions adaptées à vos besoins, avec innovation et expertise.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input className="w-full" type="text" placeholder="Nom" />
              <Input className="w-full" type="text" placeholder="Prenom" />
              <Input className="w-full" type="email" placeholder="Adresse Email" />
              <Input className="w-full" type="tel" placeholder="Téléphone" />
            </div>
            
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sélectionner un service</SelectLabel>
                  <SelectItem value="est">Développement web</SelectItem>
                  <SelectItem value="ost">Réseaux</SelectItem>
                  <SelectItem value="nst">Animation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea className="h-[150px]" placeholder="Entrer votre message ici" />
            <Button className="mt-4">Envoyer</Button>
          </form>
        </div>

       
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
}

export default Contact;
