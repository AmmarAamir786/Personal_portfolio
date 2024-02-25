"use client";
import React, { useRef } from "react";
import Mybutton from "../Mybutton";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Description = ({
  h1,
  p,
  href,
  buttontext
}: {
  h1: string;
  p: string;
  href: string;
  buttontext: string
}) => {
  const skillref = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      className=" lg:w-1/2 flex flex-col justify-center  gap-10"
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
      }}
    >
      <h1 className="lg:text-6xl text-4xl text-amber-400">{h1}</h1>
      <p className=" text-xl">{p}</p>
      <div className="flex items-center text-xl lg:justify-start justify-center">
        <Link href={href}>
          <Mybutton title={buttontext}></Mybutton>
        </Link>
      </div>
    </motion.div>
  );
};

export default Description;
