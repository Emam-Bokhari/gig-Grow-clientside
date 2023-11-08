import { useQuery } from "@tanstack/react-query";
// import JobCard from "./JobCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCategory from "./JobCategory";

const Jobs = () => {
    const data = useQuery({
        queryKey: ['job'],
        queryFn: async () => {
            const jobsData = await fetch("http://localhost:5000/api/v1/job-category")
            return await jobsData.json()
        }
    })

    const jobData = (data.data);
    // console.log(jobData);

    const digitalMarketingJobs = jobData?.filter(job => job.category === 'Digital Marketing');
    const graphicDesignJobs = jobData?.filter(job => job.category === 'Graphic Design');
    const webDevelopmentJobs = jobData?.filter(job => job.category === 'Web Development');


    return (
       <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >
         {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
            {jobData?.map((item, index) => <JobCard key={index} data={item} />)}
        </div> */}

<Tabs>
    <TabList>
      <Tab>Digital Marketing</Tab>
      <Tab>Graphic Design</Tab>
      <Tab>Web Development</Tab>
    </TabList>

    <TabPanel>
      <JobCategory data={digitalMarketingJobs} />
    </TabPanel>
    <TabPanel>
    <JobCategory data={graphicDesignJobs} />
    </TabPanel>
    <TabPanel>
    <JobCategory data={webDevelopmentJobs} />
    </TabPanel>
  </Tabs>


       </div>
    );
};

export default Jobs;