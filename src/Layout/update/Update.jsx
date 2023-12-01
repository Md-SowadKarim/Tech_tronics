import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import Spinner from '../../components/Spinner/Spinner';

const Update = () => {
    const navigate=useNavigate()
    const data=useLoaderData()
    console.log(data)
    const [rating,setRating]=useState(data.rating)
    const [brand,setBrand]=useState(data.brand)
    const [load,setLoad]=useState(false)
    const handleBrandChange=(e)=>{
        setBrand(e.target.value.toLowerCase())
      console.log(e.target.value.toLowerCase())
    }
    const handleChange=(e)=>{
        setRating(e.target.value)
      console.log(e.target.value)
    }
    const handleAddSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        // setName(form.name.value)
        // setBrand(form.brand.value)
        // setPrice(form.price.value)
        // setType(form.type.value)
        // setDescription(form.description.value)
        // setImgUrl(form.imgUrl.value)
    const name=form.nam.value
    const imgUrl=form.imgUrl.value
    const price=form.price.value
    const type=form.type.value
    const description=form.description.value
//           const newProduct={
//     name,price,imgUrl,brand,type,description
//   }
 // console.log(newProduct)
 const newProduct={
    name,price,imgUrl,brand,type,rating,description
  }
console.log(newProduct)
fetch(`https://ph-as-10-server.vercel.app/update/${data._id}`,{
    method:"PUT",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newProduct)
   }).then(res=>{
    console.log(res)
    setLoad(true)
    toast.success("product updated successfully")
    
   })

   if(load)
    return 
 <Spinner/>

   
   navigate(-1)
      
    
    
      
   
  
    }
  
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
      <form onSubmit={handleAddSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input defaultValue={data?.name} type="text" name="nam" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              </div>
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                  <input defaultValue={data?.imgUrl} type="text" name="imgUrl" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image Url" required=""/>
              </div>
              <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <select defaultValue={data.brand} onChange={handleBrandChange} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Brand</option>
                      <option value="oppo">Oppo</option>
                      <option value="samsung">Samsung</option>
                      <option value="google">Google</option>
                      <option value="intel">Intel</option>
                      <option value="sony">Sony</option>
                      <option value="apple">Apple</option>
                  </select>
              </div>
              <div className="w-full">
                  <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input defaultValue={data?.price} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$$" required=""/>
              </div>
              <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                  <select defaultValue={data.rating}  onChange={handleChange} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Rating</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
              </div>
              <div>
                  <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Types</label>
                  <input defaultValue={data?.type} type='text' name="type" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Type" required=""/>
              </div> 
              <div className="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea defaultValue={data?.description} id="description" name='description' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product description here"></textarea>
              </div>
          </div>
          <button type="submit" className="bg-blue-400 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Update product
          </button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Update
