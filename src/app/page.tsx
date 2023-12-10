import Image from 'next/image'
import Link from 'next/link'
import Mybutton from '../components/Mybutton'
import Myfooter from '../components/Myfooter'
import Mynavbar from '@/components/Mynavbar'
import fb from "@/assets/fb.png"
import insta from "@/assets/insta.png"
import linkdin from "@/assets/linkdin.png"
import yt from "@/assets/youtube.png"
import me from "@/assets/me.png"
import blender from "@/assets/blender.png"
import figma from "@/assets/figma.png"
import illustrator from "@/assets/Illustrator.png"
import lrc from "@/assets/lrc.png"
import pheonix from "@/assets/illustrations/Pheonix.png"
import walk from "@/assets/3d/walk.gif"
import logo1 from "@/assets/logo1.png"
import logo2 from "@/assets/logo2.png"
import github from "@/assets/github.png"
import invoker from "@/assets/Voxel/invoker.gif"
 
export default function Home() {
  return (
    <main className='bg-myblack text-mywhite'>
      
      <header>

        <Mynavbar 
          homeclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-amber-400 "
          aboutclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
          servicesclass="hover:bg-gray-600 transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md text-mywhite hover:text-amber-400"
        ></Mynavbar>

      </header>

      <section className="margin flex lg:mt-8 mt-0 lg:flex-row flex-col items-center justify-center gap-5 lg:text-left text-center">

        <div className=' lg:w-1/2 flex flex-col gap-10 pt-12'>
          
          <div className='flex flex-col gap-10 text-xl'>
            <p>WELCOME!</p>
            <h1 className=' lg:text-6xl text-4xl'>Hi, I am <span className=' text-amber-400'>Ammar Aamir</span> a professional Digital Artisan</h1>
            <p>An artisan of the digital realm, skilled in crafting immersive digital experiences through website development, design, 3D art, voxel art, and illustrations, with a keen eye for aesthetics.</p>
          </div>

          <div className='flex flex-col gap-3'>
            <p className=' text-xl'>Find Me At:</p>

            <div className='flex gap-5 pb-5 lg:justify-start justify-center items-center'>

              <Link href={"https://github.com/AmmarAamir786"}>
                <div>
                  <Image src={github} alt='github' width={40} className=' rounded-full'></Image>
                </div>
              </Link>
              <Link href={"https://www.facebook.com/ammar.aamir.94?mibextid=kFxxJD"}>
                <div>
                  <Image src={fb} alt='fb' width={40} className=' rounded-md'></Image>
                </div>
              </Link>
              <Link href={"https://www.instagram.com/ammar.aamir.786/"}>
                <div>
                  <Image src={insta} alt='insta' width={40} className=' rounded-md'></Image>
                </div>
              </Link>
              <Link href={"/"}>
                <div>
                  <Image src={linkdin} alt='linkdin' width={40} className=' rounded-md'></Image>
                </div>
              </Link>
              <Link href={"https://www.youtube.com/channel/UCM-mGaA91IamCGKiEahbb1g"}>
                <div>
                  <Image src={yt} alt='youtube' width={40} className=' rounded-full'></Image>
                </div>
              </Link>

            </div>

          </div>

        </div>


        <div className='w-full lg:w-1/2 flex lg:justify-end items-center justify-center md:self-end'>
          <Image src={me} alt="Ammar Hero Pic" width={480}></Image>
        </div>

      </section>

      <section className='bg-black'>

        <div className='flex flex-col text-center pt-10 gap-12 margin'>

          <h1 className=' lg:text-6xl text-amber-400 text-4xl'>Proficient At:</h1>
          
          <div className='flex justify-evenly pb-10 lg:flex'>
            <div>
              <Image src={blender} alt='blender' className=' lg:h-24 md:h-14 w-full h-10'></Image>
            </div>
            <div>
              <Image src={figma} alt='figma' className=' lg:h-24 md:h-14 w-full h-10'></Image>
            </div>
            <div>
              <Image src={illustrator} alt='illustrator' className=' lg:h-24 md:h-14 w-full h-10'></Image>
            </div>
            <div>
              <Image src={lrc} alt='lrc' className=' lg:h-24 md:h-14 w-full h-10'></Image>
            </div>
          </div>
          
        </div>

      </section>

      <section className='lg:h-screen flex items-center py-10 text-center lg:text-left'>

        <div className='margin flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0'>

          <div className='w-full lg:w-1/2 flex lg:justify-start items-center justify-center'>
            <Image src={pheonix} alt="pheonix" height={500} width={500}></Image>
          </div>

          <div className=' lg:w-1/2 flex flex-col justify-center  gap-10'>
            <h1 className=' lg:text-6xl text-4xl text-amber-400'>Illustrations</h1>
            <p className='text-xl'>As an illustration expert, I breathe life into ideas through strokes of creativity. Whether it&apos;s vibrant digital illustrations or intricate hand-drawn sketches, my work captures narratives and emotions with precision. With a keen eye for detail and a passion for storytelling, I transform concepts into visually compelling illustrations that resonate with depth and imagination.</p>

            <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"illustrations"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
            </div>

          </div>

        </div>
        
      </section>

      <section className='lg:h-screen flex items-center py-10 text-center lg:text-left bg-black'>

        <div className='margin flex flex-col items-center justify-center gap-10 lg:gap-0 lg:flex-row-reverse'>

          <div className='w-full lg:w-1/2 flex lg:justify-end items-center justify-center'>
            <Image src={walk} alt="walk" height={500} width={500}></Image>
          </div>

          <div className=' lg:w-1/2 flex flex-col justify-center  gap-10'>
            <h1 className='lg:text-6xl text-4xl text-amber-400'>3-D Art</h1>
            <p className=' text-xl'>As a seasoned 3D artist and Blender expert I love creating lifelike models and animations. From architectural renderings to dynamic visuals, my work showcases Blender&apos;s versatility and my mastery of 3D design.</p>

            <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"/3d"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
            </div>

          </div>

        </div>
        
      </section>

      <section className='lg:h-screen flex items-center py-10 text-center lg:text-left'>

        <div className='margin flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0'>

          <div className='w-full lg:w-1/2 flex lg:justify-start items-center justify-center'>
            <Image src={invoker} alt="invoker" height={500} width={500}></Image>
          </div>

          <div className=' lg:w-1/2 flex flex-col justify-center  gap-10'>
            <h1 className=' lg:text-6xl text-4xl text-amber-400'>Voxel Art</h1>
            <p className=' text-xl'>I specialize in voxel artistry, transforming pixels into vibrant 3D wonders. With an adept touch, I craft captivating voxel models and scenes. From charming game environments to pixelated masterpieces, my work reflects a mastery of voxel art techniques, bringing creativity to life in every block.</p>

            <div className='flex items-center text-xl lg:justify-start justify-center'>
              <Link href={"voxelart"}>
                <Mybutton title='View Gallery'></Mybutton>
              </Link>
            </div>

          </div>

        </div>
        
      </section>

      <section className='lg:h-screen flex items-center py-10 text-center lg:text-left bg-black justify-center'>

        <div className='margin flex flex-col items-center justify-center gap-12'>

          <div className=' lg:text-6xl text-4xl text-amber-400'>LOGOS</div>

          <div className='flex justify-center gap-10 flex-col lg:flex-row'>
              <Image src={logo1} alt="panaverse logo 1" width={580}></Image>
              <Image src={logo2} alt="panaverse logo 2" width={580}></Image>
          </div>

        </div>

        

      </section>

      <Myfooter></Myfooter>

    </main>
  )
}
