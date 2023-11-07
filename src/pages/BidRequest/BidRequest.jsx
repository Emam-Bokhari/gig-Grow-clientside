import { useContext, useEffect, useState } from "react";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const BidRequest = () => {
    const {user}=useContext(AuthContext)

    const [bidRequest, setBidRequest] = useState([])

    const url = `http://localhost:3000/api/v1/bid-request?clientEmail=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setBidRequest(res.data)
            })
    }, [url])

    console.log(bidRequest);

    return (
        <div>
            {/* Navbar */}
            <div >
            <Navbar />
            </div>

            <h2>Bid Request</h2>
        </div>
    );
};

export default BidRequest;