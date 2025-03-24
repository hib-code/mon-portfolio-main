"use client";


import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaPhp, FaNodeJs,FaLaravel,FaDocker,FaAngular, FaGithub,FaCuttlefish   } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiDjango,SiExpress,SiQt, SiJenkins, SiKubernetes,SiTypescript } from 'react-icons/si';
 
 

const about = {
  title: 'A propos de moi',
  description: "Développeur full-stack passionné par le web et l'intelligence artificielle, je crée des solutions innovantes et performantes.",
  info: [ 
    {
      fieldName: "Nom et Prenom",
      fieldValue: "Rochdi Hiba"
    },
    {
      fieldName: "Telephone",
      fieldValue: " (+212)6 12 46 31 72"
    },
    {
      fieldName: "Experience",
      fieldValue: " 3 ans"
    },
    {
      fieldName: "Github",
      fieldValue: " hib-code"
    },
    {
      fieldName: "Email",
      fieldValue: " hibarochdi775@gmail.com"
    },
    {
      fieldName: "languages",
      fieldValue: " Français, Espagnol, Anglais"
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Mes Expériance',
  description: "Voici un aperçu de mon parcours professionnel diversifié, combinant compétences en développement web, animation 2D/3D, et gestion de réseaux.",

  items: [
    {
      company: "La Province",
      position: "Conception et configuration de réseaux",
      duration: "01-08-2024 au 30-09-2024", 
    },
    {
      company: "Dervox",
      position: "Front-End & Back-End developper",
      duration: "2025 - present", 
    },
    {
      company: "freelance",
      position: "backend  ",
      duration: "2024 - present", 
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Ma education ',
  description: "Mon parcours académique m'a permis de développer des compétences solides en développement web, en animation 2D/3D, ainsi qu'en gestion des réseaux, me préparant ainsi à relever divers défis technologiques.",

  items: [
    {
      institution: " udemy",
      degree: "Full stack Web Developement",
      duration: "2024", 
    },
    {
      institution: " udemy",
      degree: "build complite AI ",
      duration: "2024", 
    },
    {
      institution: "MIAGE ",
      degree: "DEVELOPPEMENT INFORMATIQUE ",
      duration: "2023-2025", 
    },
    {
      institution: " microsoft ",
      degree: "front-end developpement",
      duration: "2024", 
    },
    {
      institution: " udemy ",
      degree: "devops",
      duration: "2024", 
    },
     

   
  ],
};
const skills = {
  title: "Mes Compétences",
  description: "Voici un aperçu des technologies et langages que je maitrise , Ces compétences me permettent de créer des applications web robustes et dynamiques.",
 skillLList: [
  {
  icon: <FaCss3 />,
  name: "css 3",
  },
  {
    icon: <FaJs />,
    name: "javascript",
  },
  {
    icon: <SiDjango />,  
    name: "django",
  },
  {
    icon: <FaNodeJs />,
    name: "node.js",
  },
  {
    icon: <FaHtml5 />,
    name: "html-5",
  },
  {
    icon: <FaPhp />,  
    name: "php",
  },
  {
    icon: <FaPython />,  
    name: "python",
  },
  {
    icon: <FaReact />,  
    name: "react",
  },
  {
    icon: <FaLaravel />,  
    name: "laravel",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiExpress />,  
    name: "expressejs",
  },
  {
    icon: <SiQt />,  
    name: "qt creator",
  },
  {
    icon: <FaAngular />,  
    name: "angular",
  },
  {
    icon: <FaDocker />,  
    name: "docker",
  },
  {
    icon: <SiJenkins />,
    name: "Jenkins",
  },
  {
    icon: <SiKubernetes />,
    name: "Kubernetes",
  },
  {
    icon: <FaCuttlefish />,
    name: "C#",
  },
   
]

  
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'


import { Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from '@/components/ui/tooltip';

 import { ScrollArea } from '@/components/ui/scroll-area';
 import { motion } from 'framer-motion';
const cv = () => {
  return <motion.div initial={{opacity: 0}} animate={{opacity: 1,transition: {delay:2.4, duration:0.4, ease: "easeIn"},
}}
className='min-h-[80vh] flex items-center justify-center py-12 xl:py-8'
>
<div className='container mx-auto'>
  <Tabs defaultValue='experience'
   className="flex flex-col xl:flex-row gap-[60px}"
  >
    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
      <TabsTrigger value="experience">Experience</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Competance</TabsTrigger>
      <TabsTrigger value="about">A propos de moi</TabsTrigger>
    </TabsList>
    <div className='min-h-[70vh] w-full ml-8'>
      <TabsContent value="experience" className="w-full">
        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <h3 className='text-4xl font-bold'>{experience.title}</h3>
          <p classeName='max-w-[680px] text-white/60 mx-auto xl:mx-8'>{experience.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {experience.items.map((item, index)=>{
                return (
                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                  <span className='text-accent'>{item.duration}</span>
                  <h3 className='text-xl max-w-[260px] min-h-[60] text-center lg:text-left'>{item.position}</h3>
                  <div className='#-[6px] h-[6px] rounded-full'>
                    <span></span>
                    <p classeName="text-white/60">{item.company}</p>
                  </div>
                </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent value="education" className="w-full">
      <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <h3 className='text-4xl font-bold'>{education.title}</h3>
          <p classeName='max-w-[680px] text-white/60 mx-auto xl:mx-8'>{education.description}</p>
          <ScrollArea className="h-[400px]">
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {education.items.map((item, index)=>{
                return (
                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                  <span className='text-accent'>{item.duration}</span>
                  <h3 className='text-xl max-w-[260px] min-h-[60] text-center lg:text-left'>{item.degree}</h3>
                  <div className='#-[6px] h-[6px] rounded-full'>
                    <span></span>
                    <p classeName="text-white/60">{item.institution}</p>
                  </div>
                </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent value="skills" className="w-full">
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          <h3 className='text-4xl font-bold'>{skills.title}</h3>
          <p className='max-w-[680px] text-white/60 mx-auto xl:mx-8'>{skills.description}</p>
          </div>
          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[30px]'>
            {skills.skillLList.map((skill, index)=> {
              return <li key={index}>
                <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className='w-full h-[140px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                    <div className='text-6xl group-hover:text-accent transition-all duration-380'>{skill.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='capitalize'>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>
                </li>;
            })}
          </ul>
        </div>
        
      </TabsContent>
      <TabsContent value="about" className="w-full text-center xl:text-left">
        <div className="flex flex-col gap-[30px]">
          <h3 className='text-4xl font-bold'>{about.title}</h3>
          <p className='max-w-[600px] text-white/60 mx-auto xl:mx-8'>{about.description}</p>
          <ul className='grid grid-cols-1 xl:grid-cols-2  gap-x-8 gap-y-6 max-w-[620px] mx-auto xl:px-8'>
            {about.info.map((item, index)=> {
              return (
              <li key={index} className='flex items-center justify-center xl:justify-start gap-3 '>
                <span className='text-white/60'>{item.fieldName}</span>
                <span className='text-xl'>{item.fieldValue}</span>
              </li>
                );
            })}
          </ul>
        </div>
      </TabsContent>
    </div>
  </Tabs>
</div>
</motion.div>
}

export default cv;