import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../../sharedComponents/Navbar/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
    const updatePostedJobData = useLoaderData()
    // console.log(updatePostedJobData);
const navigate=useNavigate()
    const {_id,email,jobTitle,category,deadline,minimumPrice,maximumPrice,description}=updatePostedJobData||{}


    const handleUpdatePostedJob=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const jobTitle = form.jobTitle.value
        const category = form.category.value
        const deadline = form.deadline.value
        const minimumPrice = form.minimumPrice.value
        const maximumPrice = form.maximumPrice.value
        const description = form.description.value

        const updatePostedJob = { email, jobTitle, category, deadline, minimumPrice, maximumPrice, description }

      

        axios.patch(`https://gig-grow-serverside.vercel.app/api/v1/${_id}/update-posted-job`,updatePostedJob)
        .then(result=>{
            console.log(result.data);
            if(result.data.modifiedCount>0){
                toast.success('Updated Successfully!')
                navigate("/myPostedJobs")
            }
        })

    }

    return (
        <div>


            {/* Navbar */}
            <div  >
                <Navbar />
            </div>

            <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >




                <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]" >Update Posted   <span className="text-[#092eed]" >Job</span></h2>



                <div className="bg-[#f4f1ff] p-6  my-5" >

                    <form onSubmit={handleUpdatePostedJob} >
                        {/* email and job title */}
                        <div className="flex flex-col md:flex-row gap-5 my-5 " >
                            {/* email */}
                            <div className="flex-1" >
                                <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="email" placeholder="Email" defaultValue={email} readOnly />
                            </div>

                            {/* job title */}
                            <div className="flex-1" >
                                <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="jobTitle" placeholder="Job Title" defaultValue={jobTitle} />

                            </div>
                        </div>

                        {/* category and deadline */}
                        <div className="flex flex-col md:flex-row  gap-5 my-5" >
                            <div className="flex-1" >
                                {/* category */}
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="text" name="category" placeholder="Category" defaultValue={category}/>
                            </div>

                            {/* deadline */}
                            <div className="flex-1" >
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="deadline" defaultValue={deadline} />
                            </div>
                        </div>

                        {/* minimum price and maximum price */}
                        <div className="flex flex-col md:flex-row  gap-5 my-5" >
                            {/* minimum price */}
                            <div className="flex-1" >
                                <input className="bg-white p-2 rounded-sm w-full outline-none" type="number" name="minimumPrice" placeholder="Minimum Price" defaultValue={minimumPrice}/>
                            </div>
                            {/* maximum price */}
                            <div className="flex-1" >
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="number" name="maximumPrice" placeholder="Maximum Price" defaultValue={maximumPrice} />
                            </div>
                        </div>


                        {/*  description */}
                        <div className="my-5" >
                            <textarea className="w-full rounded-sm resize-none p-2 outline-none" name="description" rows="10" placeholder="Description" defaultValue={description}></textarea>
                        </div>

                        {/* add job button */}
                        <div className="my-5" >
                            <input className="bg-[#754ffe] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer" type="submit" value="Update Job" />
                        </div>
                    </form>

                </div>


            </div>


        </div>
    );
};

export default Update;