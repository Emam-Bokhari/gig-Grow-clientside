import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from './../../sharedComponents/Navbar/Navbar';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../../sharedComponents/Navbar/Footer";

const JobDetails = () => {
    const jobDetailsData = useLoaderData()
    const navigate=useNavigate()
    // console.log(jobDetailsData);
    const { jobTitle, deadline, minimumPrice, maximumPrice, description, email } = jobDetailsData || {}
    const { user } = useContext(AuthContext)

    const handlePlaceYourBid=(event)=>{
        event.preventDefault()
        const form=event.target 
        const clientEmail=form.clientEmail.value 
        const biddingEmail=form.biddingEmail.value 
        const amount=form.amount.value 
        const deadline=form.deadline.value 
        const jobTitle=form.jobTitle.value 
        // console.log(clientEmail,biddingEmail,amount,deadline);

        const placeYourBidData={clientEmail,biddingEmail,amount,deadline,jobTitle}
        // console.log(placeYourBidData);
        form.reset()

        axios.post("http://localhost:5000/api/v1/bid-on-the-project",placeYourBidData,{withCredentials:true})
        .then(result=>{
            // console.log(result.data);
            if(result.data.insertedId){
                toast.success('Successfully, Bid the project')
                navigate("/myBids")
            }
        })

    }

    return (
        <div>

            {/* Navbar */}
            <div>
                <Navbar />
            </div>


            <div className=" space-y-3 rounded max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32"> {/* Apply flex-grow class here too */}

                <div>
                    <h2 className="text-2xl md:text-3xl  font-bold text-[2a2a2a]" >{jobTitle}</h2>


                    <p className="text-gray-500 text-lg text-justify"><span className="text-[#2a2a2a] font-bold" >Description: <br /> </span>{description}</p>


                    <p className="text-base font-medium text-[#2a2a2a]" >Min Price: ${minimumPrice}</p>
                    <p className="text-base font-medium text-[#2a2a2a]">Max Price: ${maximumPrice}</p>


                    <p className="font-bold">Deadline: <span className="text-red-600 " >{deadline}</span></p>
                </div>


                {/* Place your bid */}
                <div >
                    <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]" >Place Your <span className="text-[#092eed]" >Bid</span></h2>
                    <div className="bg-[#f4f1ff] p-6  my-10" >

                        <form onSubmit={handlePlaceYourBid} >


                        <div className="flex flex-col md:flex-row my-5 " >
                                {/* job title */}
                                <div className="flex-1" >
                                    <p className="text-[#2a2a2a] text-base font-medium">Job Title:</p>
                                    <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="jobTitle" placeholder="Job Title" defaultValue={jobTitle} readOnly />
                                </div>

                                

                            </div>



                            <div className="flex flex-col md:flex-row gap-5 my-5 " >
                                {/* email */}
                                <div className="flex-1" >
                                    <p className="text-[#2a2a2a] text-base font-medium">Client Email:</p>
                                    <input className="bg-white p-2 rounded-sm w-full outline-none" type="email" name="clientEmail" placeholder="Email" defaultValue={email} readOnly />
                                </div>

                                {/* email */}
                                <div className="flex-1" >
                                    <p className="text-[#2a2a2a] text-base font-medium" >Your Email:</p>
                                    <input className="bg-white p-2 rounded-sm w-full outline-none" type="email" name="biddingEmail" placeholder="Email" readOnly defaultValue={user?.email} />
                                </div>

                            </div>

                            {/* biding amound and deadline */}
                            <div className="flex flex-col md:flex-row  gap-5 my-5" >
                                <div className="flex-1" >
                                    {/* amount */}
                                    <input className="bg-white w-full p-2 rounded-sm outline-none" type="number" name="amount" placeholder="Your biding amount" />
                                </div>

                                {/* deadline */}
                                <div className="flex-1" >
                                    <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="deadline" />
                                </div>
                            </div>


                            {/* add job button */}
                            {user?.email === email ? <div className="my-5" >
                                <button className="bg-gray-300 text-gray-600 w-full rounded-sm p-2 font-semibold text-lg hover:bg-gray-400 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed" disabled >Bid On The Project</button>
                            </div> : <div className="my-5" >
                                <input  className="bg-[#754ffe] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer" type="submit" value="Bid On The Project" />
                            </div>}
                        </form>

                    </div>

                </div>


            </div>

            <div>
                <Footer/>
            </div>

        </div>
    );
};

export default JobDetails;