
import { useLoaderData } from "react-router-dom";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import Banner from "./Banner";
import Category from "./Category";



const Home = () => {

    const data=useLoaderData()
    console.log(data);

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

            <div className="my-10  border-2 border-red-500" >
                <Category categoryData={data} />
            </div>

            



        </div>
    );
};

export default Home;
