import Footer from "../../sharedComponents/Navbar/Footer";
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
            <div>
                <Banner />
            </div>

            {/* jobs */}
            <div>
                <Jobs />
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>

        </div>
    );
};

export default Home;
