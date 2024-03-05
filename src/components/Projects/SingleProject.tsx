"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaCode } from "react-icons/fa";
import { motion, useInView } from "framer-motion";


const SingleProject = ({id, name, code, demo, image, alt}: {id: string, name: string, code: string, demo: string, image: any, alt: string}) => {
  
  const skillref = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillref, {once: true, margin: "-100px",});

  return (

    <motion.div key={id} className="text-black relative w-[320px] h-[450px] bg-amber-400 shadow-myshadow border-1 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all"
    ref={skillref}
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={isSkillRefInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        ease: "easeInOut",
        duration: .8,
        delay: 0.2,
      }}>

      <motion.div className="flex flex-col items-center justify-between h-full group">

        <div className="flex-grow">
          <h2 className="text-2xl font-bold pb-2 pt-3 bg-amber-400 text-center">{name}</h2>
          <Image
              src={image}
              alt={alt}
              width={550}
              className="object-cover w-full h-fit -z-50 group-hover:scale-[1.02] transition-all"
              loading="eager"
              placeholder="blur"

            />
          <div className="flex justify-around bg-amber-400/80  w-full absolute bottom-0 z-40 py-2">
            <Link href={demo}>
              <div
                className="w-10 h-10 rounded-full text-mywhite bg-myblack flex items-center justify-center transform hover:scale-110 transition-all duration-200 hover:text-amber-400"
                aria-label="Demo"
              >
                <FaPlay className="text-xl" />
              </div>
            </Link>
            <Link href={code}>
              <div
                className="w-10 h-10 rounded-full text-mywhite bg-myblack flex items-center justify-center transform hover:scale-110 transition-all duration-200 hover:text-amber-400"
                aria-label="Code"
              >
                <FaCode className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
