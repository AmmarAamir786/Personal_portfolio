import React from 'react'
import Link from 'next/link'
import Mybutton from './Mybutton'
import Mylogo from './Mylogo'



const Mynavbar = ({homeclass, aboutclass, servicesclass }: {homeclass: string, aboutclass: string, servicesclass: string}) => {
  return (
    <nav className="margin flex flex-col lg:flex-row justify-between items-center py-5 gap-2">

          <Link href={"/"}>
            <Mylogo></Mylogo>
          </Link>
          

          <div className='flex items-center text-xl gap-5'>

            <Link href={"/"}>
              <div className={homeclass}>Home</div>
            </Link>

            <Link href={"about"}>
              <div className={aboutclass}>About</div>
            </Link>

            <Link href={"services"}>
              <div className={servicesclass}>Services</div>
            </Link>

          </div>

          <button className='flex items-center text-xl w-[244px] lg:justify-end justify-center'>
            <Link href={"/"}>
                <Mybutton title='Hire Me'></Mybutton>
            </Link>  
          </button> 
 
        </nav>
  )
}

export default Mynavbar