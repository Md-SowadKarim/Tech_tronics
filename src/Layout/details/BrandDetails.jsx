import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import useGetHooks from "../../hook/useGetHooks";
import ProductCards from "../../components/cards/ProductCards";
import ProductCard from "../../components/card/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

const BrandDetails = () => {
  const { cartId } = useParams();
  const datas = useLoaderData();
  const {products,load}=useGetHooks()
  
const product=products.filter((item)=> item.brand === cartId)
// console.log(product)
//   console.log(db)
//   console.log(datas);
  const data = datas.find((data) => data.brand === cartId);
 // console.log(data);
  return (
    <div className="bg-white dark:bg-slate-900">
      <Slider data={data} />
     {
      load ? <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2  my-3">
      {
        product.map((data)=><ProductCard key={data.id} data={data}/>)
      }
      </div> :<Spinner/>
     
    }
        
      
       {/* <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2  my-3">
        {
          product.map((data)=><ProductCard key={data.id} data={data}/>)
        }
        </div>  */}
     
    
    </div>
  );
};

export default BrandDetails;
