import React, { useEffect } from 'react'
import BrandCard from '../card/BrandCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

const BrandCards = ({datas}) => {
    useEffect(()=>{
        Aos.init({
          duration:2000
        });
      })
  return (
    <div>
        <div className="flex flex-col text-center w-full my-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 Dark:text-white">All Brands</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The World is here.  Start Your Journey Now .</p>
      <hr data-aos="fade-up" className='bg-blue-500 h-1 w-[40%] mx-auto' />
      
    </div>
    <div  className='grid gap-3 lg:grid-cols-3 md:grid-cols-2  my-3'>
      {
        datas.map((data)=><BrandCard key={data.id} data={data}></BrandCard>)
      }
    </div>
    </div>
  )
}

export default BrandCards
