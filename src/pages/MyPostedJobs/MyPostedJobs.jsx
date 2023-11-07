import { useContext, useEffect, useState } from "react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MyPostedJobTable from "./MyPostedJobTable";


const MyPostedJobs = () => {
    const {user}=useContext(AuthContext)
    const [myPostedJobs,setMyPostedJobs]=useState([])

    const url=`http://localhost:3000/api/v1/my-posted-jobs?email=${user?.email}`

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            // console.log(res.data);
            setMyPostedJobs(res.data)
        })
    },[url])
    // console.log(myPostedJobs);

    
    
    

    return (
        <div>
            {/* Navbar */}
            <div  >
            <Navbar />
            </div>

              {/* table */}
           
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >


        <div className="grid  grid-cols-6 bg-[#f2f3f3] text-[#7e858b] font-medium rounded text-center items-center overflow-x-scroll md:overflow-hidden gap-20 md:gap-0 " >
           
           <div className="py-3 px-6 ">
           <p >NO</p>
           </div>
           <div className="py-3 px-6">
           <p >Job Title</p>
           </div>
           <div >
           <p >Minimum Price</p>
           </div>
           <p className="py-3 px-6">Maximum Price</p>
           <p className="py-3 px-6">Update</p>
           <p className="py-3 px-6">Delete</p>
          </div>

{myPostedJobs.length>0?<div>
{myPostedJobs?.map((item,index)=><MyPostedJobTable key={index} data={item} index={index+1}  />)}
</div>:<div className="flex justify-center my-20 font-medium text-base md:text-lg" >
<h2>You have not posted any jobs</h2>
</div>}

        </div>


        </div>
    );
};

export default MyPostedJobs;