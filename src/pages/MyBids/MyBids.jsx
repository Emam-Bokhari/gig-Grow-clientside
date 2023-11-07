import { useContext, useEffect, useState } from "react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MyBidsTable from "./MyBidsTable";

const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [bids, setBids] = useState([])

    const url = `http://localhost:3000/api/v1/my-bids?biddingEmail=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setBids(res.data)
            })
    }, [url])

    console.log(bids);

    return (
        <div>
            {/* Navbar */}
            <div >
            <Navbar />
            </div>

            <h2>My Bids</h2>

            {bids.length > 0 ? <div>
                    {bids?.map((item, index) => <MyBidsTable key={index} data={item} index={index + 1} />)}
                </div> : <div className="flex justify-center my-20 font-medium text-base md:text-lg" >
                    <h2>You have not bid on any job</h2>
                </div>}


        </div>
    );
};

export default MyBids;