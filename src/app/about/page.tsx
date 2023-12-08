import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Myfooter from '../../components/Myfooter'
import Mybutton from '../../components/Mybutton'
import Mynavbar from '@/components/Mynavbar'
import Mylogo from '../../components/Mylogo'
import ammar from "@/assets/ammar.png"

const about = () => {
  return (

    <main className='bg-myblack text-mywhite'>

      <header>

        <Mynavbar 
            homeclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
            aboutclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-amber-400"
            servicesclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
        ></Mynavbar>

      </header>

      <section className='margin'>

        <div className='flex justify-center border-b-2 border-amber-400'>
          <Image src={ammar} alt='ammar'></Image>
        </div>

        <div className='flex justify-center text-center sm:text-6xl md:text-7xl lg:text-8xl text-5xl text-amber-400 mt-3 pb-3 border-b-2 border-amber-400'>AMMAR AAMIR</div>

        <div className=' flex flex-col justify-center items-center text-center mt-10 p-10 gap-5 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl'>
          <h1 className=' lg:text-6xl text-4xl'>Welcome to the <span className=' text-amber-400'>Ammar</span>&apos;s Digital Realm!</h1>
          <p className=' text-xl'>Greetings, I&apos;m Ammar Aamir, your Digital Artisan navigating the vast canvas of the digital realm. With a passion for crafting immersive experiences, my journey in the world of digital creation spans a rich tapestry of skills and expertise.</p>
          <h1 className=' lg:text-5xl text-3xl text-amber-400'>Why &quot;Digital Artisan&quot;?</h1>
          <p className=' text-xl'>To me, being a Digital Artisan means more than just mastering a set of tools—it&apos;s a commitment to the artistry of the digital craft. It&apos;s about creating experiences that resonate, that go beyond functionality to evoke emotions and leave a lasting impression. I&apos;m not just a developer or a designer; I&apos;m a storyteller in the digital age, and each project is an opportunity to weave a new narrative.</p>
        </div>

        

        <div className=' flex flex-col justify-center items-center text-center mt-10 p-10 gap-5 rounded-2xl bg-gray-600'>
          <h1 className=' lg:text-6xl text-4xl text-amber-400'>Web Weaver</h1>
          <p className=' text-xl'>At the heart of my craft is the intricate dance of website development. From the elegant choreography of code to the seamless flow of user interfaces, I weave together digital landscapes that not only function seamlessly but also captivate and engage.</p>
          <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"illustrations"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
          </div>
        </div>

        <div className=' flex flex-col justify-center items-center text-center mt-10 p-10 gap-5 rounded-2xl bg-gray-600'>
          <h1 className=' lg:text-6xl text-4xl text-amber-400'>Design Alchemist</h1>
          <p className=' text-xl'>As a design alchemist, I believe that aesthetics are the soul of digital experiences. My palette includes not only the vibrant hues of illustrations but also the nuanced shades of user-centric design. Each project is a canvas where I blend functionality with visual allure, creating digital spaces that leave a lasting impression.</p>
          <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"illustrations"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
          </div>
        </div>

        <div className=' flex flex-col justify-center items-center text-center mt-10 p-10 gap-5 rounded-2xl bg-gray-600'>
          <h1 className=' lg:text-6xl text-4xl text-amber-400'>3D Sorcerer</h1>
          <p className=' text-xl'>Venturing into the third dimension, I harness the power of 3D art to breathe life into ideas. Whether it&apos;s sculpting intricate models or orchestrating animated symphonies, I strive to transport audiences into immersive worlds where pixels transcend into palpable realities.</p>
          <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"3d"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
          </div>
        </div>

        <div className=' flex flex-col justify-center items-center text-center mt-10 mb-5 p-10 gap-5 rounded-2xl bg-gray-600'>
          <h1 className=' lg:text-6xl text-4xl text-amber-400'>Voxel Magician</h1>
          <p className=' text-xl'>In the realm of voxels, I don the hat of a magician. Pixel by pixel, I conjure charming voxel art that adds a touch of whimsy to the digital tapestry. From quaint game environments to pixelated wonders, my voxel creations tell stories in every block.</p>
          <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"voxelart"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
          </div>
        </div>

      </section>

      <Myfooter></Myfooter>

    </main>

  )
}

export default about
