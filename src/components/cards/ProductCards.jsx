import React from 'react'
import ProductCard from '../card/ProductCard'

const ProductCards = ({data}) => {
    console.log(data)
  return (
    <div >
      <ProductCard data={data}/>
    </div>
  )
}

export default ProductCards
