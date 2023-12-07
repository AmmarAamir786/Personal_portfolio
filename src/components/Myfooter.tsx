import React from 'react'
import Image from 'next/image'
import copyright from "@/assets/copyright.png"

const Myfooter = () => {
  return (
    <footer className=' flex gap-2 justify-center p-1 pt-5 items-center'>

        <div className='flex'>
          <Image src={copyright} alt="copyright" className=' w-4 h-4'></Image>
        </div>
        <div className=' text-sm'>Ammar Aamir | All Rights Reserved.</div>
        
    </footer>
  )
}

export default Myfooter