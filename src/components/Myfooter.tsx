import React from 'react'
import Image from 'next/image'
import copyright from "@/assets/copyright.png"

const Myfooter = ({style} : {style? : string} ) => {
  return (
    <footer className={`flex gap-1 justify-center pb-2 pt-2 md:pb-1 md:pt-1 items-center text-mywhite ${style}`}>

        <div className='flex'>
          <div>&#xa9;</div>
        </div>
        <div className=' text-sm'>Ammar Aamir | All Rights Reserved.</div>
        
    </footer>
  )
}

export default Myfooter