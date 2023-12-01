import React from 'react'

const Slider = ({data}) => {
  return (
    <div>
           <div className="carousel w-full  ">
      <div id="item1" className="carousel-item w-full">
      <div className="hero relative bg-cover " style={{backgroundImage: `url(${data.slide_img1})`}}>
  <div className="hero-overlay bg-opacity-60">
  <img  src={data.slide_img1} className="w-[40%] rounded-xl max-sm:hidden right-4 absolute bottom-10 " />
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      
      <button className="btn btn-primary  max-sm:bottom-1 max-sm:left-1 sm:bottom-12 bg-blue-800 sm:bg-opacity-90 sm:right-6 absolute">Grab Your Choice</button>
    </div>
  </div>
</div>
</div>
  <div id="item2" className="carousel-item w-full">
  <div className="hero relative bg-cover" style={{backgroundImage: `url(${data.slide_img2})`}}>

  <div className="hero-overlay bg-opacity-60">
  <img  src={data.slide_img2} className="w-[40%] rounded-xl max-sm:hidden right-4 absolute bottom-10 " />
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      
      <button className="btn btn-primary  max-sm:bottom-1 max-sm:left-1 sm:bottom-12 bg-blue-800 sm:bg-opacity-90 sm:right-6 absolute">Grab Your Choice</button>
    </div>
  </div>
</div>
  </div> 
  <div id="item3" className="carousel-item w-full">
  <div className="hero relative bg-cover " style={{backgroundImage: `url(${data.slide_img3})`}}>
  <img  src={data.slide_img3} className="w-full " />
  <div className="hero-overlay bg-opacity-60">
  <img  src={data.slide_img3} className="w-[40%] rounded-xl max-sm:hidden right-4 absolute bottom-10 " />
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      
      <button className="btn btn-primary  max-sm:bottom-1 max-sm:left-1 sm:bottom-12 bg-blue-800 sm:bg-opacity-90 sm:right-6 absolute">Grab Your Choice</button>
    </div>
  </div>
</div>
    
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
 
</div>
    </div>
  )
}

export default Slider
