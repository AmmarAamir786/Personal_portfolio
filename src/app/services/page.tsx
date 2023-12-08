import React from "react";
import Mynavbar from "../../components/Mynavbar";
import Mycard from '@/components/Mycard'
import homelander from "@/assets/illustrations/Homelander.png"
import madara from "@/assets/illustrations/MADARA.png"
import huey from "@/assets/illustrations/Huey.png"
import stormfront from "@/assets/illustrations/Stormfront.png"
import lamplighter from "@/assets/illustrations/Lamplighter.png"
import pheonix from "@/assets/illustrations/Pheonix.png"
import kimiko from "@/assets/illustrations/kimiko.png"
import lightstorm from "@/assets/illustrations/Lightstorm.png"


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

      <section className="margin mt-10 ">
        
        <div className="grid gap-10 place-items-center lg:grid-cols-2 grid-cols-1">

          <Mycard title='Homelander' width={710} pic={homelander}></Mycard>
          <Mycard title='Madara' width={400} pic={madara}></Mycard>
          <Mycard title='Huey' width={710} pic={huey}></Mycard>
          <Mycard title='Stormfront' width={710} pic={stormfront}></Mycard>
          <Mycard title='Lamplighter' width={710} pic={lamplighter}></Mycard>
          <Mycard title='Pheonix' width={400} pic={pheonix}></Mycard>
          <Mycard title='Kimiko' width={710} pic={kimiko}></Mycard>
          <Mycard title='Lightstorm' width={710} pic={lightstorm}></Mycard>
        </div>
        

      </section>


      
      

      


      

    </main>
  );
};

export default services;
