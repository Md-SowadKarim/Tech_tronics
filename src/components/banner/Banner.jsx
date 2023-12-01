import React from 'react'
import banner from '../../assets/banner2.jpg'

const Banner = () => {
  return (
    <section className="text-gray-400 bg-white dark:bg-gray-900 rounded-2xl body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
    <img className="lg:w-5/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded  " alt="hero" src={banner}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  dark:text-white">Elevating Your Digital Lifestyle</h1>
      <p className="leading-relaxed mb-8">Join us on this exploration, where you're not just a consumer but a participant in the unfolding narrative of the future. Discover the latest trends, immerse yourself in the world of smart living, and find the tech and electronics that resonate with your desires. The future is here, and it's waiting for you to explore.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-black dark:text-white bg-blue-500 border-0 py-2 px-3 sm:px-8 focus:outline-none dark:hover:text-black hover:text-white  rounded text-lg">Technology</button>
        <button className="ml-4 inline-flex text-black dark:text-white bg-blue-500 border-0 py-2 px-3 sm:px-8 focus:outline-none dark:hover:text-black  hover:text-white rounded text-lg">Electronics</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner
