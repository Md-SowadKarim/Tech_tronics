import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Statics = () => {
    useEffect(()=>{
        Aos.init({
          duration:2000
        });
      })
  return (
    <div>
    <section className="dark:bg-[#24272b] bg-white body-font rounded-2xl">
  <div className="container px-5 py-24 mx-auto"> 
    <div className="flex flex-col text-center w-full mb-20 ">
      <h1 className="sm:text-3xl   title-font mb-4 dark:text-white text-3xl font-bold">Total Count</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">A big number of imports happend every year in our company .<br></br> So, Stay with us to deal with the best things .</p>
      <hr data-aos="fade-up" className='bg-blue-500 h-1 w-[50%] mx-auto' />
      
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl dark:text-white">77T</h2>
          <p className="leading-relaxed">Total Imports</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl dark:text-white">1.3K</h2>
          <p className="leading-relaxed">Total Users</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl dark:text-white">7.2K</h2>
          <p className="leading-relaxed">Total Products</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full bg-gray-300 dark:bg-[#111827]">
        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl dark:text-whitee">46</h2>
          <p className="leading-relaxed">Total Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Statics
