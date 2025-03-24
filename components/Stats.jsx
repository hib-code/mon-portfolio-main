"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 3,
        text: "nombre d'expériences"
    },
    {
        num: 20,
        text: "projets complet"
    },
    {
        num: 8,
        text: "technologies"
    },
];

const Stats = () => {
    return (
      <section className="pt-4 pb-12 xl:pt-8 xl:pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
            {stats.map((item, index) => (
              <div  className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                <CountUp  
                    end={item.num} 
                    delay={2} 
                    duration={5} 
                    className="text-4xl xl:text-6xl font-extrabold" 
                />
               <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px] leading-snug text-white/80"}`}>
  {item.text}
</p>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Stats;
