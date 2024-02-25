"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaCode } from "react-icons/fa";
import p from "@/assets/illustrations/Pheonix.png";


const SingleProject = () => {
  return (

    <div key={1} className="my-10 text-black relative w-[320px] h-[450px] bg-amber-400 shadow-myshadow border-1 border-amber-400 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all">

      <div className="flex flex-col items-center justify-between h-full ">

        <div className="flex-grow">
          <h2 className="text-2xl font-bold pb-2 pt-3 text-center">Personal Portfolio</h2>
            <Image
              src={p}
              alt={"efef"}
              width={550}
              height={330}
              className="object-cover w-full h-[400px] -z-50"
            />
          <div className="flex justify-around bg-mywhite/50 w-full absolute bottom-0 z-50 py-2">
            <Link href={"/"}>
              <div
                className="w-10 h-10 rounded-full text-mywhite bg-myblack flex items-center justify-center transform hover:scale-110 transition-all duration-200 hover:text-amber-400"
                aria-label="Demo"
              >
                <FaPlay className="text-xl" />
              </div>
            </Link>
            <Link href={"/"}>
              <div
                className="w-10 h-10 rounded-full text-mywhite bg-myblack flex items-center justify-center transform hover:scale-110 transition-all duration-200 hover:text-amber-400"
                aria-label="Code"
              >
                <FaCode className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
