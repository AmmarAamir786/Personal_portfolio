import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Mybutton from '../../components/Mybutton'
import Myfooter from '../../components/Myfooter'
import Mylogo from '../../components/Mylogo'
import Mynavbar from '@/components/Mynavbar'
import Mycard from '@/components/Mycard'
import homelander from "@/assets/illustrations/Homelander.png"
import madara from "@/assets/illustrations/MADARA.png"
import huey from "@/assets/illustrations/Huey.png"
import stormfront from "@/assets/illustrations/Stormfront.png"
import lamplighter from "@/assets/illustrations/Lamplighter.png"
import pheonix from "@/assets/illustrations/Pheonix.png"
import kimiko from "@/assets/illustrations/kimiko.png"
import lightstorm from "@/assets/illustrations/Lightstorm.png"

const illustrations = () => {
  return (
    <main className=' bg-myblack text-mywhite'>

        <header>

            <Mynavbar 
                homeclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
                aboutclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
                servicesclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
            ></Mynavbar>

        </header>

        <section className='flex justify-center items-start margin mt-5 bg-gray-600 px-10 py-6 rounded-3xl'>
            <h1 className='lg:text-6xl text-4xl font-bold text-amber-400'>ILLUSTRATIONS</h1>
        </section>

        <section>

            <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row flex-col">
                <Mycard title='Homelander' width={710} pic={homelander}></Mycard>

                <Mycard title='Madara' width={400} pic={madara}></Mycard>
            </div>

            <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row flex-col">
                <Mycard title='Huey' width={710} pic={huey}></Mycard>

                <Mycard title='Stormfront' width={710} pic={stormfront}></Mycard>
            </div>

            <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row-reverse flex-col-reverse">
                <Mycard title='Lamplighter' width={710} pic={lamplighter}></Mycard>

                <Mycard title='Pheonix' width={400} pic={pheonix}></Mycard>
            </div>

            <div className="flex margin gap-10 mt-10 justify-center items-center lg:flex-row flex-col">
                <Mycard title='Kimiko' width={710} pic={kimiko}></Mycard>

                <Mycard title='Lightstorm' width={710} pic={lightstorm}></Mycard>
            </div>

        </section>

        <Myfooter></Myfooter>

    </main>
  )
}

export default illustrations