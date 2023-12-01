
import { toast } from 'react-hot-toast';


const getStoredJob=()=>{
    const job=localStorage.getItem("cart")
    if(job){
        return JSON.parse(job)
    }else{
        return []
    }
}

const savedJob=(id)=>{
    const jobs=getStoredJob()
    const exist=jobs.find(jobId=> jobId.id === id.id)
    if(!exist){
        jobs.push(id)
        localStorage.setItem('cart', JSON.stringify(jobs))
        toast.success(' Add to favourite');
     
    }else{
        toast.error('Already Added');
       
        
    }
    
}

const deleteJob=(id)=>{
    console.log(id)
 //  let data=[]
    const jobs=getStoredJob()
    // jobs.map(job=>{
    //     console.log(job.id)
    //     console.log(id.id)
    //     if(job.id === id.id){
    //       //  data.push(job)
    //       console.log("match found")
    //     }else{
    //         console.log("not matched")
    //     }
    // })
   // console.log("data ",data)
    const job=jobs.filter(jobId=> id !== jobId.id)
    console.log("last id ",job)
    if(job){
        localStorage.setItem('cart', JSON.stringify(job))
        toast.success(' Removed from Favourite');
        window.location.reload()
    }
}

export{getStoredJob,savedJob,deleteJob}