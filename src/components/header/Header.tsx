import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'

async function Header() {

const ref = await client.fetch(`*[_type=='header']{'logoPic':logoPic.asset->url,
  name,linkone,linktwo,linkthree,linkfour,btn}
`)



  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <Image
  src={ref[0].logoPic}
  alt="logo"
  width={50}
  height={50}
  className="w-20 h-20 text-white p-2  rounded-full"
/>
      <span className="ml-3 text-xl">{ref[0].name}</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">{ref[0].linkone}</a>
      <a className="mr-5 hover:text-gray-900">{ref[0].linktwo}</a>
      <a className="mr-5 hover:text-gray-900">{ref[0].linkthree}</a>
      <a className="mr-5 hover:text-gray-900">{ref[0].linkfour}</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{ref[0].btn}
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
  </header>
    </>
  )
}

export default Header