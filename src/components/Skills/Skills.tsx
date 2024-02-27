"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "./SkillData";
import { skillsImage } from "./SkiilsImage";
import { motion, useInView } from "framer-motion";

const Skills = () => {

  const skillref = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillref, {
    once: true,
    margin: "-100px",
  });
  
  return (
    <section className="pt-10 lg:h-screen bg-black flex justify-center overflow-hidden flex-col lg:gap-20 gap-10">

      <motion.div className="flex flex-col text-center items-center justify-center gap-10 lg:gap-5"
      ref={skillref}
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={isSkillRefInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        delay: 0.2,
      }}>
        <h1 className="lg:text-6xl text-4xl text-amber-400">Who Am I?</h1>
        <p className="text-xl lg:w-[1200px] margin">
          I am a professional front-end-web developer from Pakistan. My
          expertise includes using NextJs/React with TailwindCSS and Typescript
          to transform your ideas into responsive and dynamic code. I take pride
          in consistently upholding a high standard in the quality of work I
          deliver because I always consider my work my brand.
        </p>
      </motion.div>

      <div className="flex flex-col text-center gap-2">
        <h1 className=" lg:text-6xl text-amber-400 text-4xl">Proficient At:</h1>

        <div className="flex items-center justify-center w-full">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div className="bg-myblack shadow-myshadow border-2 border-amber-400 rounded-2xl w-32 h-32 lg:w-40 lg:h-40 mb-10 mx-10 mt-8 flex flex-col items-center gap-1 justify-center px-8 transition-all hover:scale-110" key={id}>
                  <Image src={skillsImage(skill)} alt={skill} />
                  <h3 className="text-center">{skill}</h3>
                </div>
              ))}
            </Marquee>
        </div>

      </div>
    </section>
  );
};

export default Skills;
