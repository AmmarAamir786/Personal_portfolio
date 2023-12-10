import React from 'react'
import Mynavbar from '@/components/Mynavbar'
import Link from 'next/link'
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
import Mycard2 from '@/components/Mycard2'
import Myfooter from '@/components/Myfooter'
import thumbnail from "@/assets/3d/thumbnail.png"
import Image from 'next/image'

const blender = () => {
  return (
    <main className='bg-myblack text-mywhite'>

        <header>
            <Mynavbar
            homeclass='hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400'
            aboutclass='hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400'
            servicesclass='hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400'
            ></Mynavbar>
        </header>

        <section className='flex justify-center items-start margin mt-5 bg-gray-600 px-10 py-6 rounded-3xl'>
            <h1 className='lg:text-6xl text-4xl font-bold text-amber-400'>Blender MasterClass</h1>
        </section>

        <section className='flex flex-col mt-10 justify-center items-center margin'>

            <Link href="https://youtu.be/Ymj-BT31Os0?si=CGOiNDsgmHfdHyhQ">
                <div>
                    <Image src={thumbnail} alt='' className=' w-[700px] rounded-xl transition duration-300 ease-in-out transform hover:scale-110'></Image>
                </div>
            </Link>

        </section>

        <section className=' mt-10 margin flex justify-center items-center'>

            <Mycard2 pic={ufo} width={1100}></Mycard2>
            
        </section>

        <section className=' mt-10 margin flex justify-center items-center'>

            <Mycard2 pic={alcetis} width={1100}></Mycard2>
            
        </section>

        <section className=' mt-10 margin flex flex-col lg:flex-row lg:gap-5 gap-10 justify-center items-center'>
            <Mycard2 pic={bloom} width={500}></Mycard2>
            <Mycard2 pic={dark} width={500}></Mycard2>
        </section>

        <section className=' mt-10 margin flex flex-col lg:flex-row lg:gap-5 gap-10 justify-center items-center'>
            <Mycard2 pic={walk} width={500}></Mycard2>
            <Mycard2 pic={life} width={500}></Mycard2>
        </section>

        <section className=' mt-10 margin flex flex-col lg:flex-row lg:gap-5 gap-10 justify-center items-center'>
            <Mycard2 pic={yoda} width={448}></Mycard2>
            <Mycard2 pic={babyyoda} width={470}></Mycard2>
        </section>

        <section className=' mt-10 margin flex flex-col lg:flex-row lg:gap-5 gap-10 justify-center items-center'>
            <Mycard2 pic={pirate} width={500}></Mycard2>
            <Mycard2 pic={gem} width={500}></Mycard2>
        </section>

        <section className=' mt-10 margin flex flex-col lg:flex-row lg:gap-5 gap-10 justify-center items-center'>
            <Mycard2 pic={hammer} width={700}></Mycard2>
            <Mycard2 pic={earth} width={630}></Mycard2>
        </section>

        <Myfooter style='mt-10 bg-black'></Myfooter>

    </main>
    

  )
}

export default blender