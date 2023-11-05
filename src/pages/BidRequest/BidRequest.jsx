import Navbar from "../../sharedComponents/Navbar/Navbar";

const BidRequest = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 border-2 border-red-500" >
            <Navbar />
            </div>

            <h2>Bid Request</h2>
        </div>
    );
};

export default BidRequest;