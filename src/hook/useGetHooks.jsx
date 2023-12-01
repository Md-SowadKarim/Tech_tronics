import React, { useEffect, useState } from 'react'

const useGetHooks = () => {
 
    const [products,setProducts] = useState([])
    const [load,setLoad]=useState(false)

    useEffect(()=>{

        fetch(`https://ph-as-10-server.vercel.app/brand`)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setProducts(data)
            setLoad(true)
        })

    },[])
    

    return {products,load};
}

export default useGetHooks
