import React from 'react'
import ss from "../../assets/ss.png"
const Blogs = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      
      <div  className="max-w-xl mb-10 md:mx-auto sm:text-center  lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-5xl font-semibold tracking-wider dark:text-white uppercase rounded-full ">
           Ring Ring
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span className="relative">Feel</span>
          </span>{' '}
          free to contact 24/7
        </h2>
        <p className="text-base dark:text-white md:text-lg">
        Find the perfect attire that reflects your love story with our His and Hers wedding attire set. This collection includes stylish outfits for both of you, allowing you to celebrate your special day in coordinated elegance. 
        </p>
      </div>


      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
		<div className="flex flex-col justify-between">
			<div className="space-y-2">
				<h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
				<div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
			</div>
			<img src={ss} alt="Contact our customer support" className="p-6 h-52 md:h-64" />
		</div>
		<form novalidate="" className="space-y-6">
			<div>
				<label for="name" className="text-sm">Full name</label>
				<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
			</div>
			<div>
				<label for="email" className="text-sm">Email</label>
				<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
			</div>
			<div>
				<label for="message" className="text-sm">Message</label>
				<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
			</div>
			<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-blue-500 dark:text-white">Send Message</button>
		</form>
	</div>
</div>
  )
}

export default Blogs
