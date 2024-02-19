import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({children, href} : {children: React.ReactNode, href: string}) => {

    const pathName = usePathname()

  return (
    <Link href={href} className={`hover:bg-gray-600 bg-myblack transition duration-300 ease-in-out h-fit flex px-3 py-2 rounded-md  ${pathName == href ? "text-amber-400" : "text-mywhite hover:text-amber-400"}`}>{children}</Link>
  )
}

export default Navlink