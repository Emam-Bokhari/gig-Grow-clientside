import Navbar from "../../sharedComponents/Navbar/Navbar";
import Banner from "./Banner";
import Jobs from "./Jobs";

const Home = () => {

    return (
        <div>
            {/* Navbar */}
            <div >
                <Navbar />
            </div>

            {/* Banner */}
            <div className="border-2 border-red-500" >
                <Banner />
            </div>

            {/* jobs */}
            <div>
                <Jobs />
            </div>

        </div>
    );
};

export default Home;
