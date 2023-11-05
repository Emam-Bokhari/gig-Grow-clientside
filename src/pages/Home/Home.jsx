import Navbar from "../../sharedComponents/Navbar/Navbar";

const Home = () => {
    return (
        <div>

            {/* Navbar */}
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 border-2 border-red-500" >
            <Navbar />
            </div>

            <div className="bg-green-200 my-10" >
                <h2>Banner</h2>
            </div>

        </div>
    );
};

export default Home;