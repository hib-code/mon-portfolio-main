"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link  from "next/link";


const services =[
    {
        "num": "01",
        "title": "Développement web",
        "description": "Création de sites web modernes, adaptés à tous les écrans, avec un focus sur l'expérience utilisateur et la performance.",
        "href": "/services/developpement-web"
    },
    
    {
        "num": "02",
        "title": "Développement backend",
        "description": "Conception d'architectures serveur sécurisées, gestion des bases de données et API pour des performances optimales et évolutivité.",
        "href": "/services/developpement-backend"
    },
    
    {
        "num": "03",
        "title": "Réseaux",
        "description": "Gestion d'infrastructures réseau sécurisées et performantes, assurant connectivité et optimisation pour une communication fiable.",
        "href": "/services/reseaux"
    },
    {
        "num": "04",
        "title": "Multimédia",
        "description": "Création de contenus visuels et interactifs, incluant vidéos, animations et graphismes, pour améliorer l'identité visuelle et l'engagement utilisateur.",
        "href": "/services/multimedia"
    }
    
     
];
import { motion } from "framer-motion";


const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center by-12 xl:py-8">
    <div className="container mx-auto">
    <motion.div className="grid-2-cols" 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          
          
        >
              {services.map((service, index) => {
                return (
                <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-580">{service.num}</div>
                                <Link href={service.href} className="w-[77px] h-[77px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                                <BsArrowDownRight  className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition all duration-500">{service.title}</h2>
                            <p className="text-white/68">{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
              );
              })}  
        </motion.div>
    </div>
  </section>
  
};

export default Services;