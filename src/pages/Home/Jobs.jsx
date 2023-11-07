import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";

const Jobs = () => {
    const data = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const jobsData = await fetch("http://localhost:3000/api/v1/job-category")
            return await jobsData.json()
        }
    })

    const jobData = (data.data);
    // console.log(jobData);
    return (
       <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
            {jobData?.map((item, index) => <JobCard key={index} data={item} />)}
        </div>
       </div>
    );
};

export default Jobs;