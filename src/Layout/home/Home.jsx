import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import { useLoaderData } from 'react-router-dom'
import BrandCards from '../../components/cards/BrandCards'
import Statics from './../statics/Statics';
import Services from './../services/Services'


const Home = () => {

  const datas=useLoaderData()
  console.log(datas)
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Banner/>
      
      <BrandCards datas={datas} />
      
     <Statics/>
     <Services/>
      
    </div>
  )
}

export default Home
