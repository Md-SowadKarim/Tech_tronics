import React from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { deleteJob } from '../../utility/Local';

const FavCard = ({item}) => {
    console.log(item)
    const handleClick=()=>{
      deleteJob(item._id)
    }
  return (
    <div className='mx-auto border-2 border-white rounded-xl '>
     
<a href="#" className="flex flex-col p-2 items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className='w-[90%] '>
    <img class="object-cover w-full rounded-lg h-full md:h-full lg:w-full md:rounded-none md:rounded-l-lg" src={item.imgUrl} alt=""/>
   
    </div>
    <div className="flex flex-col h-100  justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl grow font-bold tracking-tight text-gray-900 dark:text-white">{item.brand}</h5>
        <div className='flex'>
        <h5 className="mb-2 text-xl grow font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
        <h5 className="mb-2 text-xl grow font-bold tracking-tight text-gray-900 dark:text-white">{item.price}$</h5>
        </div>
        <p className="mb-3 font-normal grow text-gray-700 dark:text-gray-400">{item.description.slice(0,90)+"..."}</p>
        <Link to={`/product/${item._id}`}><button className='btn btn-primary w-[80%] bg-blue-500'> See Details</button></Link>
       <button onClick={handleClick} className='btn btn-primary my-3 mx-auto w-[80%] bg-blue-500'> remove</button>
    </div>
</a>

    </div>
  )
}

export default FavCard
