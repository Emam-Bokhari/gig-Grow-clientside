import Lottie from "lottie-react";
import Errorpage from "../../../public/error-animation.json"
import {AiOutlineHome} from "react-icons/ai"
import { Link } from "react-router-dom";
import PageTitle from "../../sharedComponents/PageTitle";

const ErrorPage = () => {
    return (
        <div>


            {/* pageTitle */}
            <PageTitle title="Error Page" />

            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >

                <div className="flex justify-center h-[80vh]" >
                    <Lottie animationData={Errorpage} ></Lottie>
                </div>

<div>
   <Link to="/" >
   <button className="bg-[#754ffe] text-white font-medium px-2 md:px-4 py-2 rounded text-base flex items-center gap-2"> <AiOutlineHome className=" text-xl md:text-2xl" /> Go To Home</button>
   </Link>
</div>
            </div>
        </div>
    );
};

export default ErrorPage;