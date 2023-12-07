import React from "react";
import Link from "next/link";
import Image from "next/image";
import Mybutton from "../../components/Mybutton";
import Myfooter from "../../components/Myfooter";
import Mylogo from "../../components/Mylogo";
import Mynavbar from "../../components/Mynavbar";


const services = () => {
  return (
    <main className="text-mywhite bg-myblack h-screen">

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
