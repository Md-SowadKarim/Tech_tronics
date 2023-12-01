import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    // const [name,setName]=useState(null)
    // const [imgUrl,setImgUrl]=useState(null)
    // const [brand,setBrand]=useState(null)
    // const [price,setPrice]=useState(null)
    // const [type,setType]=useState(null)
    // const [description,setDescription]=useState(null)
    const [rating,setRating]=useState(null)
    const [brand,setBrand]=useState(null)
    const handleChange=(e)=>{
        setRating(e.target.value)
        console.log(e.target.value)
    }
    const handleBrandChange=(e)=>{
      
        setBrand(e.target.value.toLowerCase())
      console.log(e.target.value.toLowerCase())
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
fetch("https://ph-as-10-server.vercel.app/products",{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newProduct)
   }).then(res=>toast.success("product add succesfully"))
form.reset()
    }
  
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form onSubmit={handleAddSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input type="text" name="nam" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="true"/>
              </div>
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                  <input type="text" name="imgUrl" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Image Url" required="true"/>
              </div>
              <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <select onChange={handleBrandChange} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Brand</option>
                      <option defaultValue="oppo">Oppo</option>
                      <option defaultValue="samsung">Samsung</option>
                      <option defaultValue="google">Google</option>
                      <option defaultValue="intel">Intel</option>
                      <option defaultValue="sony">Sony</option>
                      <option defaultValue="apple">Apple</option>
                  </select>
              </div>
              <div className="w-full">
                  <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$$" required="true"/>
              </div>
              <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                  <select onChange={handleChange} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Rating</option>
                      <option defaultValue="1">1</option>
                      <option defaultValue="2">2</option>
                      <option defaultValue="3">3</option>
                      <option defaultValue="4">4</option>
                      <option defaultValue="5">5</option>
                  </select>
              </div>
              <div>
                  <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Types</label>
                  <input type='text' name="type" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product Type" required="true"/>
              </div> 
              <div className="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" name='description' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product description here" required="true"></textarea>
              </div>
          </div>
          <button type="submit" className="bg-blue-400 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Add product
          </button>
      </form>
  </div>
</section>
    </div>
  )
}

export default AddProduct
