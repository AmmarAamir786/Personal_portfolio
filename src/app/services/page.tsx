import React from "react";
import Mynavbar from "../../components/Mynavbar";
import Image from "next/image";
import Link from "next/link";
import Mycard from '@/components/Mycard'
import homelander from "@/assets/illustrations/Homelander.png"
import madara from "@/assets/illustrations/MADARA.png"
import huey from "@/assets/illustrations/Huey.png"
import stormfront from "@/assets/illustrations/Stormfront.png"
import lamplighter from "@/assets/illustrations/Lamplighter.png"
import pheonix from "@/assets/illustrations/Pheonix.png"
import kimiko from "@/assets/illustrations/kimiko.png"
import lightstorm from "@/assets/illustrations/Lightstorm.png"
import alcetis from "@/assets/3d/alcetis.png"
import bloom from "@/assets/3d/asfa bloom.png"
import dark from "@/assets/3d/asfa dark.png"
import babyyoda from "@/assets/3d/Baby Yoda.png"
import earth from "@/assets/3d/Earth.png"
import gem from "@/assets/3d/gem.gif"
import hammer from "@/assets/3d/hammer.png"
import life from "@/assets/3d/life.gif"
import pirate from "@/assets/3d/pirate.gif"
import ufo from "@/assets/3d/ufo.gif"
import walk from "@/assets/3d/walk.gif"
import yoda from "@/assets/3d/Yoda with a dougnut.png"


const services = () => {
  return (
    <main className="text-mywhite bg-myblack min-h-screen">

      <header>

        <Mynavbar 
          homeclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
          aboutclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
          servicesclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-amber-400"
        ></Mynavbar>

      </header>

 


      
      

      


      

    </main>
  );
};

export default services;
