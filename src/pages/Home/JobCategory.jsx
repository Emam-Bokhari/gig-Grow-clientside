import JobCard from "./JobCard";

const JobCategory = ({data}) => {
    console.log(data);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                data?.map(item => <JobCard key={item._id} items={item}></JobCard>)
            }
        </div>

        </div>
    );
};

export default JobCategory;