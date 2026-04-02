"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-blue-950 text-white flex justify-between px-4 md:h-16 items-center flex-col md:flex-row'>

        <Link className="logo font-bold text-lg flex justify-center items-center gap-2" href='/'>
        <img className='invert' src="/tea mug.gif" width={44} alt="" />
        <span className='text-xl md:text-base my-5 md:my-0'>Get Me A Chai!</span>
        </Link>
      
      <div className='flex flex-row gap-2 relative'>

        {session && <>
          <button onClick={() => { setShowdropdown(!showdropdown) }} onBlur={()=> {setTimeout(() => {
            setShowdropdown(false)
          }, 200); }} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center" type="button">
            Welcome {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[15px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">
            <li>
              <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
            </li>
            <li>
              <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
            </li>
            <li>
              <Link onClick={()=> signOut({ callbackUrl: "/login" })} href="" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
            </li>
          </ul>
          </div></>
        }

        {/* {session && <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5" onClick={() => { signOut() }}>Logout</button>} */}
        {!session && <Link href={"/login"}>
          <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Login</button></Link>}
      </div>

    </nav>
  )
}

export default Navbar
