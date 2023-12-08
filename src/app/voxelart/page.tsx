import React from 'react'
import Mynavbar from '@/components/Mynavbar'
import Myfooter from '@/components/Myfooter'
import Mycard from '@/components/Mycard'
import Mycard2 from '@/components/Mycard2'
import invoker from "@/assets/Voxel/Invoker.gif"
import jay from "@/assets/Voxel/Jay.png"

const voxelart = () => {
  return (
    <main className='bg-myblack text-mywhite min-h-screen'>

        <header>
            <Mynavbar
            homeclass='hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400'
            aboutclass='hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400'
            servicesclass='hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400'
            ></Mynavbar>
        </header>

        <section className='flex justify-center items-start margin mt-5 bg-gray-600 px-10 py-6 rounded-3xl'>
            <h1 className='lg:text-6xl text-4xl font-bold text-amber-400'>Voxel Magic</h1>
        </section>

        <section className='flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 margin'>
            <Mycard pic={jay} width={400} title='Jay'></Mycard>
            <Mycard pic={invoker} width={500} title='Invoker'></Mycard>
        </section>

        <Myfooter></Myfooter>

    </main>
    
  )
}

export default voxelart