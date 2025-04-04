"use client";

import {motion} from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsArrowUpRightSquare, BsGithub} from 'react-icons/bs';
import { Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
 } from '@/components/ui/tooltip';
 import Link from 'next/link';
 import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';


 const projects =[
  {
    num:'01',
    category:'ai',
    title:' jarvis-ai',
    description: " Jarvis-AI est un projet innovant qui explore les possibilités de l'IA pour créer des assistants personnels.",
    stack: [
     {name: 'python'},{name: 'qt'} ,
    ],
    
    
    live: '',
    github:"https://github.com/hib-code/jarvisAI",

  },
  {
    num:'02',
    category:'reseaux',
    title:' dervox monitor server',
    description: " un outil de surveillance et de gestion des serveurs, conçu pour offrir une vue d'ensemble des performances du réseau et de l'infrastructure serveur. ",
    stack: [
      {name: 'c#'},{name: 'vb.net'},{name: 'react'},
    ],
    
    
    live: '',
    github:"https://github.com/hib-code/Dervox-Monitor-Serve-DMS-",

  },
  {
    num:'03',
    category:'gaming',
    title:' Shadow Realms',
    description: "Shadow Realms est un jeu d'action palpitant où vous incarnez un guerrier légendaire, ",
    stack: [
      {name: 'unity'},{name: 'c++'},{name: 'laravel'},
    ],
    
    
    live: '',
    github:"",

  },

 ]
const travail = () => {
  const[project, setProject] = useState(projects[0]);

  const handleSlideChange= (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease:"easeIn"},
    }} 
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-8'
    >
      <div className='container max-auto'> 
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[440px]flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item,index)=> {
                  return <li key={index} className='text-xl text-accent'>{item.name}
                  {index !== project.stack.length -1 &&","}
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live} >
                <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>

                <Link href={project.github} >
                <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github dépôt </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
          <Swiper
                spaceBetween={30} 
                slidesPerView={1} 
                className='xl:h-[520px] mb-12 relative'
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className='relative w-full h-full'>
                    <div className='h-[240px] w-[320px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='absolute top-0 bottom-8 w-full h-full bg-black/10 z-10'></div>
                      <div className='relative w-full h-full'>
                        <Image  
                          src={project.image} 
                          fill 
                          className='object-cover' 
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              
                <WorkSliderBtns 
                  containerStyles="flex gap-2 absolute right-8 bottom-[calc(50%_._22px)] xl:bottom-8 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                   />

            </Swiper>

          </div>
        </div>
      </div>


    </motion.section>
  )
}

export default travail;