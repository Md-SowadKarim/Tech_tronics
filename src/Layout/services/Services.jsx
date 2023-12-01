import React, { useEffect } from 'react'
import ek from '../../assets/ek.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  
    useEffect(()=>{
      Aos.init({
        duration:2000
      });
    })
  return (
    <div className='my-6'>
       <div  className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
        <div>
          
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight dark:text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          
            <span  data-aos="fade-up" data-aos-anchor-placement="center-bottom"  className="relative text-yellow-300 ">Here</span>
          </span>{' '}
          is our client reviews
         
        
        <p className="text-base dark:text-white md:text-lg">
        Find the perfect product that suits you . 
        </p>
		<hr  data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='bg-blue-500 h-1' />
        </h2>
      </div>

      <div className='px-5 py-8 grid  lg:grid-cols-3 gap-2  bg-cover ' style={{backgroundImage: `url(${ek})`}}>
      <div className="container flex  flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 bg-gray-200 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold text-gray-900 dark:text-white">Leroy Jenkins</h4>
				<span className="text-xs text-gray-900 dark:text-white">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-[#2563EB]">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold text-[#2563EB]">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-900 dark:text-white">
		<p>This electric gadget is incredibly reliable. It works flawlessly every time I use it, and I've never experienced any glitches or malfunctions. It's clear that [Your Company Name] prioritizes quality.  I appreciate how user-friendly this gadget is. The interface is intuitive, making it easy to operate even for those who aren't tech-savvy. The clear instructions provided by [Your Company Name] were a big help too. </p>
	</div>
</div>
<div className="container flex  flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 bg-gray-200 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold text-gray-900 dark:text-white">Leroy Jenkins</h4>
				<span className="text-xs text-gray-900 dark:text-white">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-[#2563EB]">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold text-[#2563EB]">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-900 dark:text-white">
		<p>This electric gadget is incredibly reliable. It works flawlessly every time I use it, and I've never experienced any glitches or malfunctions. It's clear that [Your Company Name] prioritizes quality.  I appreciate how user-friendly this gadget is. The interface is intuitive, making it easy to operate even for those who aren't tech-savvy. The clear instructions provided by [Your Company Name] were a big help too. </p>
	</div>
</div>
<div className="container flex  flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 bg-gray-200 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold text-gray-900 dark:text-white">Leroy Jenkins</h4>
				<span className="text-xs text-gray-900 dark:text-white">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 text-[#2563EB]">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold text-[#2563EB]">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-900 dark:text-white">
		<p>This electric gadget is incredibly reliable. It works flawlessly every time I use it, and I've never experienced any glitches or malfunctions. It's clear that [Your Company Name] prioritizes quality.  I appreciate how user-friendly this gadget is. The interface is intuitive, making it easy to operate even for those who aren't tech-savvy. The clear instructions provided by [Your Company Name] were a big help too. </p>
	</div>
</div>


      </div>
    </div>
  )
}

export default Services
