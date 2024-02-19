"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ImageCard = ({
  src,
  alt,
  width,
}: {
  src: any;
  alt: string;
  width: number;
}) => {
  const skillref = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.main
      ref={skillref}
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={isSkillRefInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        delay: 0.2,
      }}
    >
      <Image src={src} alt={alt} width={width}></Image>
    </motion.main>
  );
};

export default ImageCard;
