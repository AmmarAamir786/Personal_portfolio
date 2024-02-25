import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { skillsData } from "./SkillData";
import { skillsImage } from "./SkiilsImage";

const Skills = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col text-center pt-10 gap-2">
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
