import { useContext } from "react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../../sharedComponents/Navbar/Footer";

const AddJob = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddJob = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const jobTitle = form.jobTitle.value
        const category = form.category.value
        const deadline = form.deadline.value
        const minimumPrice = form.minimumPrice.value
        const maximumPrice = form.maximumPrice.value
        const description = form.description.value

        const addJob = { email, jobTitle, category, deadline, minimumPrice, maximumPrice, description }

        // reset form
        form.reset()

        // console.log(addJob);

        axios.post("http://localhost:3000/api/v1/add-job", addJob, { withCredentials: true })
            .then(result => {
                // console.log(result.data);
                if (result.data.insertedId) {
                    toast.success('Job has been added successfully')
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




                <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]" >Add <span className="text-[#092eed]" >Job</span></h2>



                <div className="bg-[#f4f1ff] p-6  my-5" >

                    <form onSubmit={handleAddJob} >
                        {/* email and job title */}
                        <div className="flex flex-col md:flex-row gap-5 my-5 " >
                            {/* email */}
                            <div className="flex-1" >
                                <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="email" placeholder="Email" defaultValue={user?.email} readOnly />
                            </div>

                            {/* job title */}
                            <div className="flex-1" >
                                <input className="bg-white p-2 rounded-sm w-full outline-none" type="text" name="jobTitle" placeholder="Job Title" />

                            </div>
                        </div>

                        {/* category and deadline */}
                        <div className="flex flex-col md:flex-row  gap-5 my-5" >
                            <div className="flex-1" >
                                {/* category */}
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="text" name="category" placeholder="Category" />
                            </div>

                            {/* deadline */}
                            <div className="flex-1" >
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="deadline" />
                            </div>
                        </div>

                        {/* minimum price and maximum price */}
                        <div className="flex flex-col md:flex-row  gap-5 my-5" >
                            {/* minimum price */}
                            <div className="flex-1" >
                                <input className="bg-white p-2 rounded-sm w-full outline-none" type="number" name="minimumPrice" placeholder="Minimum Price" />
                            </div>
                            {/* maximum price */}
                            <div className="flex-1" >
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="number" name="maximumPrice" placeholder="Maximum Price" />
                            </div>
                        </div>


                        {/*  description */}
                        <div className="my-5" >
                            <textarea className="w-full rounded-sm resize-none p-2 outline-none" name="description" rows="10" placeholder="Description"></textarea>
                        </div>

                        {/* add job button */}
                        <div className="my-5" >
                            <input className="bg-[#754ffe] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer" type="submit" value="Add Job" />
                        </div>
                    </form>

                </div>


            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AddJob;