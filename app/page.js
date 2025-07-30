'use client'
import Link from 'next/link'
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Home() {
   const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user;
  return (
    <>
  <div className="text-white flex flex-col items-center justify-center mt-4">
    <div className="text-4xl font-bold  p-4 mb-4 ">Welcome to FanFund
     
    </div>
    <h2 className="text-lg">Fans your own platform to fund amazing projects.</h2>
<h2 className="mt-2">Creators unleash the power of your fans and get your projects funded</h2>  
  </div>
  <div>
    <Image
      src="/images-removebg-preview.png"
      alt="FanFund Logo"
      width={200}
      height={200}
      className="mx-auto mt-8"
    />
  </div>  <div className="container mx-auto flex justify-center gap-40 p-4 mt-10">
    <Link href={isLoggedIn ? "/Sambhav" : "/wrong"}>
 <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Start Here
</span>
</button>
</Link>

<Link href="/learnmore">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Learn More
        </span>
      </button>
    </Link>

  </div>
<div className="bg-gray-900 h-1 mt-4"></div>

<div className="text-white flex justify-center flex-col items-center ml-3 mt-6">
  <h1 className="text-2xl font-bold mb-6">Connect With Owner</h1>

  <div className="flex flex-wrap mb-5 gap-4">
<a href="https://github.com/Sambhav1401" target="_blank" rel="noopener noreferrer">
  <button type="button" className="transition-all duration-200 hover:scale-105 text-white bg-[#24292F] hover:bg-[#1f2428] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md me-2 mb-2">
    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 
      0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 
      2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 
      1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 
      3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 
      2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 
      2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 
      3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 
      4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 
      2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 
      0 0 0 10 .333Z" clipRule="evenodd"/>
    </svg>
    Github
  </button>
</a>


    <a href="https://www.instagram.com/sam_.1401?igsh=NnowOW1mdGE2cmNs" target="_blank" rel="noopener noreferrer">
      <button type="button" className="transition-all duration-200 hover:scale-105 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center shadow-md">
        <img src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080_640.png" alt="Instagram logo" className="w-5 h-5 me-2 rounded-full bg-white p-0.5" />
        Instagram
      </button>
    </a>

    <a href="https://x.com/saxenasambhav17?t=oPSgSum24isq9KKGN--jBA&s=08" target="_blank" rel="noopener noreferrer">
      <button type="button" className="transition-all duration-200 hover:scale-105 text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center shadow-md">
        <img src="https://img.freepik.com/free-vector/new-twitter-logo-x-icon-black-background_1017-45427.jpg?semt=ais_hybrid&w=740&q=80" alt="Twitter X logo" className="w-5 h-5 me-2 rounded-full" />
        Twitter
      </button>
    </a>

    <a href="https://www.linkedin.com/in/sambhav-saxena-011371256" target="_blank" rel="noopener noreferrer">
      <button type="button" className="transition-all duration-200 hover:scale-105 text-white bg-[#0077B5] hover:bg-[#005f8d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 inline-flex items-center shadow-md">
        <img src="https://cdn-icons-png.flaticon.com/512/2496/2496097.png" alt="LinkedIn logo" className="w-5 h-5 me-2 rounded-full invert bg-white p-0.5" />
        LinkedIn
      </button>
    </a>
  </div>
</div>

  </>
  );
}         
               