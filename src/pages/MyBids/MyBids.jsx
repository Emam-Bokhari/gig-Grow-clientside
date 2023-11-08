import { useContext, useEffect, useState } from "react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MyBidsTable from "./MyBidsTable";
import Footer from "../../sharedComponents/Navbar/Footer";
import PageTitle from "../../sharedComponents/PageTitle";

const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [bids, setBids] = useState([])

    const url = `https://gig-grow-serverside.vercel.app/api/v1/my-bids?biddingEmail=${user?.email}`

    useEffect(() => {
        axios.get(url,{withCredentials:true})
            .then(res => {
                // console.log(res.data);
                setBids(res.data)
            })
    }, [url])

    // console.log(bids);

    return (
        <div>

            {/* pageTitle */}
            <PageTitle title="My Bids" />
            {/* Navbar */}
            <div >
                <Navbar />
            </div>


            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >



                {bids.length > 0 ? <div className="grid  grid-cols-5 bg-[#f2f3f3] text-[#7e858b] font-medium rounded text-center items-center overflow-x-scroll md:overflow-hidden gap-20 md:gap-0 " >

                    <div className="py-3 px-6 ">
                        <p >NO</p>
                    </div>
                    <div className="py-3 px-6">
                        <p >Job Title</p>
                    </div>

                    <div >
                        <p >Client Email</p>
                    </div>
                    <p className="py-3 px-6">Deadline</p>
                    <p className="py-3 px-6">Status</p>
                </div> : ""}


                {bids.length > 0 ? <div>
                    {bids?.map((item, index) => <MyBidsTable key={index} data={item} index={index + 1} />)}
                </div> : <div className="flex justify-center my-20 font-medium text-base md:text-lg" >
                    <h2>You have not bid on any job</h2>
                </div>}


            </div>

            <div className="mt-[30vh]" >
                <Footer/>
            </div>

        </div>
    );
};

export default MyBids;