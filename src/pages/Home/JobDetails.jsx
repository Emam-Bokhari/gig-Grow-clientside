import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const jobDetailsData=useLoaderData()
    console.log(jobDetailsData);
    return (
        <div>
            
        </div>
    );
};

export default JobDetails;