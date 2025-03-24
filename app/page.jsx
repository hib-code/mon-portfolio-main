import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload } from "react-icons/fi";

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full"> 
    <div className="flex flex-col xl:flex-row items justify-between xl:pt-8 xl:gb-24">
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl"> développeur full-stack </span>
        <h1 className="h1 mb-6">Je suis <br /> <span className="text-accent">Rochdi Hiba </span></h1>
        <p className="max-w-[500px] mb-9 text-white/80">
        J'excelle dans la création d'applications web complètes et élégantes, 
        en maîtrisant à la fois le développement front-end et back-end,
         ainsi que divers langages et technologies de programmation, 
         tout en ayant des compétences solides en DevOps pour la gestion des réseaux.</p>
           <div className="flex flex-col xl:flex-row items center gap-8">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="uppercase flex items-center gap-2">
                  <span>Telecharger cv</span>
                  <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:xb-8">
                  <Social containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                  />
                </div> 
           </div>
      </div>
      
    
      <div className="order-1 xl:order-none mb-8 xl:mb-8">
        <Photo />
      </div>
    </div>
    </div>
    <Stats />
  </section>
  );
};

export default Home;
