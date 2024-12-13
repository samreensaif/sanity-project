import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'

async function Hero() {

const res = await client.fetch(`*[_type=='hero']{'heroPic': heroPic.asset->url,
  heading1,heading2,desc,btnone,btntwo}`)



  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={res[0].heroPic} height={500} width={500}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{res[0].heading1}</h1><br/>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{res[0].heading2}</h1>
      <p className="mb-8 leading-relaxed">{res[0].desc}</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg">{res[0].btnone}</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{res[0].btntwo}</button>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Hero