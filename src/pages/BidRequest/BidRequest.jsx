import { useContext, useEffect, useState } from "react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BidRequestTable from "./BidRequestTable";
import Footer from "../../sharedComponents/Navbar/Footer";
import PageTitle from "../../sharedComponents/PageTitle";

const BidRequest = () => {
    const { user } = useContext(AuthContext)

    const [bidRequest, setBidRequest] = useState([])

    const url = `https://gig-grow-serverside.vercel.app/api/v1/bid-request?clientEmail=${user?.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setBidRequest(res.data)
            })
    }, [url])

    console.log(bidRequest);

    return (
        <div>

{/* pageTitle */}
<PageTitle title="Bid Request" />


            {/* Navbar */}
            <div >
                <Navbar />
            </div>


            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >



                {bidRequest.length > 0 ? <div className="grid  grid-cols-6 bg-[#f2f3f3] text-[#7e858b] font-medium rounded text-center items-center overflow-x-scroll md:overflow-hidden gap-20 md:gap-0 " >

                    <div className="py-3 px-6 ">
                        <p >NO</p>
                    </div>
                    <div className="py-3 px-6">
                        <p >Job Title</p>
                    </div>

                    <div >
                        <p >Applicants Email</p>
                    </div>
                    <p className="py-3 px-6">Price</p>
                    <p className="py-3 px-6">Deadline</p>
                    <p className="py-3 px-6">Status</p>
                </div> : ""}


                {bidRequest.length > 0 ? <div>
                    {bidRequest?.map((item, index) => <BidRequestTable key={index} data={item} index={index + 1} />)}
                </div> : <div className="flex justify-center my-20 font-medium text-base md:text-lg" >
                    <h2>You have not bid request</h2>
                </div>}


            </div>

            <div className="mt-[30vh]" >
                <Footer />
            </div>


        </div>
    );
};

export default BidRequest;