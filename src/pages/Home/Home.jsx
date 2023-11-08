import Footer from "../../sharedComponents/Navbar/Footer";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import PageTitle from "../../sharedComponents/PageTitle";
import Banner from "./Banner";
import FindGreatWork from "./FindGreatWork";
import Jobs from "./Jobs";
import NeedSomethingDone from "./NeedSomethingDone";

const Home = () => {

    return (
        <div>

            {/* pageTitle */}
            <PageTitle title="Home" />
            {/* Navbar */}
            <div >
                
                <Navbar />
            </div>

            {/* Banner */}
            <div>
                <Banner />
            </div>

            {/* NeedSomething */}
            <div>
                <NeedSomethingDone />
            </div>

            {/* jobs */}
            <div>
                <Jobs />
            </div>

            {/* find great work */}
            <div>
                <FindGreatWork />
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>

        </div>
    );
};

export default Home;
