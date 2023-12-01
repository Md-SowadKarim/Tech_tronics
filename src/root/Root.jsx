import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './../Layout/mainlayout/MainLayout';
import Error from './../Layout/error/Error';
import Home from '../Layout/home/Home';
import About from './../Layout/about/About';
//import Feature from './../Layout/feature/Feature';
import Login from '../Layout/login/Login';
import Register from './../Layout/login/Register';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Blogs from './../Layout/blogs/Blogs';
import BrandDetails from '../Layout/details/BrandDetails';
import AddProduct from '../Layout/addProduct/AddProduct';
import ProductDetails from '../Layout/details/ProductDetails';
import Update from './../Layout/update/Update';
import Favourite from './../Layout/favourite/Favourite';

const Root = createBrowserRouter([
 {
  path:"/",
  element:<MainLayout></MainLayout>,
  errorElement:<Error></Error>,
  children:[
    {
      path:"/",
      element:<Home/>,
     loader:()=>fetch("/data.json"),
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/cart",
      element:<PrivateRoute><Favourite/></PrivateRoute>
    },
    {
      path:"/contact",
      element:<PrivateRoute><Blogs/></PrivateRoute>
    },
    {
      path:"/products",
      element:<PrivateRoute><AddProduct/></PrivateRoute>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signUp",
      element:<Register/>
    },
    {
      path: "/brand/:cartId",
      element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
      loader:()=>fetch("/data.json")

    },
    {
      path: "/product/:cartId",
      element:<PrivateRoute><ProductDetails/></PrivateRoute>,
      loader: ({ params }) => {
        console.log(params);
        return fetch(`https://ph-as-10-server.vercel.app/product/${params.cartId}`);
      },

    },
    {
      path: "/update/:cartId",
      element:<PrivateRoute><Update/></PrivateRoute>,
      loader: ({ params }) => {
        console.log(params);
        return fetch(`https://ph-as-10-server.vercel.app/product/${params.cartId}`);
      },

    },
  ]

  
 }

])

export default Root
