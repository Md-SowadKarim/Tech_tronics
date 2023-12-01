import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
    console.log(data)
  return (
    <div className='border-gray-700 border-2 shadow-xl rounded-lg m-2'>
      
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='relative text-center items-center flex flex-col'  >
        <img className="p-8 rounded-t-lg w-full h-[350px]" src={data.imgUrl} alt="product image" />
        <div className='bg-black opacity-75 h-20 max-sm:w-[75%] w-[83%] absolute bottom-8 mx-auto '>
            <h1 className='text-4xl mt-2 font-bold '>{data.brand}</h1>
        </div>
    </div>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl my-2 font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
        </a>
        <div className="flex justify-between  dark:text-[#65e2dc] ">
            <div className='flex items-center space-x-2'>
            <h1 className='dark:text-white text-black text-md  mx-2'>{data.type}</h1>
			<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold text-[#63c3d4]">{data.rating}</span>
            </div>
           
            <span className="text-xl font-bold text-gray-900 dark:text-white">${data.price}</span>
		</div>
        <div className="flex mt-8 mb-4 items-center justify-between">
           <Link to={`/product/${data._id}`}>
           <a href="#" className="text-white bg-blue-700   hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
           </Link>
           <Link to={`/update/${data._id}`}>
            <a href="#" className="text-white bg-blue-700   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</a>
            </Link>
        </div>
    </div>
</div>

    </div>
  )
}

export default ProductCard
