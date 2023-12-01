import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({data}) => {
   // console.log(data)
  return (
    <div>
        <Link to={`/brand/${data.brand}`}>
    <div className='p-3 rounded-xl border-4 dark:bg-[#111827] border-blue-500 shadow-lg'>
      <div className="p-2 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
    <div className="w-full h-64 bg-gray-300 bg-center bg-cover  rounded-lg shadow-2xl border-3" style={{backgroundImage: `url(${data.brand_img})`}}></div>

    <div className="w-full  mt-2 overflow-hidden bg-blue-400 hover:bg-slate-500  hover:text-blue-500 rounded-lg shadow-lg  ">
        <h3 className="py-2 font-bold hover:text-blue-400 tracking-wide text-center uppercase text-white">{data.brand}</h3>

       
    </div>
</div>
    </div>
    </Link>
    </div>
  )
}

export default BrandCard
