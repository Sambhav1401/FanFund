"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'
const Navbar = () => {

 
  const { data: session } = useSession()
 

  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center p-4'>
      <Link href="/">
      
      
<div className="logo gap-2 font-bold text-2xl flex justify-center items-center ">FanFund
  <img className="mb-1.5" width={44} src="/1-2-1704954155-unscreen.gif" alt="" />

</div>
</Link>
<div className='flex gap-4'>

  {session && (

    <div className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 text-sm ">
     Welcome @{session.user?.name || session.user?.email}
    </div>

)}






{session && <button onClick={() => signOut()} className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>}




{!session && <Link href={"/login"}>
  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  " >
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      Login
    </span>
  </button>
</Link>}</div>
    </nav>
  )
}

export default Navbar
