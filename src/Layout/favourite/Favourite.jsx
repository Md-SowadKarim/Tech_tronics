import React, { useState } from 'react'
import { getStoredJob } from '../../utility/Local'
import FavCard from './FavCard'
import useGetHooks from '../../hook/useGetHooks'

const Favourite = () => {
    const storedItem=getStoredJob()
    console.log(storedItem)
let data=[]
    const {products}=useGetHooks()
const product=storedItem.map(st=>{
 const t= products.find((item)=> item._id === st.id)
 if(t){
  data.push(t)
 }

})

console.log(data)
  return (
    <div className='bg-white dark:bg-gray-900'>
         <div data-aos="fade-right" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-5xl font-semibold tracking-wider dark:text-white uppercase rounded-full ">
           Favourite
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span className="relative">We</span>
          </span>{' '}
           do respect to your choice
        </h2>
        <p className="text-base dark:text-white md:text-lg">
        Sony Group Corp (Sony) is a manufacturer of electronic equipment, semiconductors, medical-related equipment, instruments, and devices. The company's products include televisions, mobile phones, cameras, music systems, game consoles and software, batteries, and other electronic components.
        </p>
      </div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4  mx-auto'>
      {
        data.map(item=><FavCard item={item} key={item._id}/>)
      }
    </div>
    </div>
  
  )
}

export default Favourite
