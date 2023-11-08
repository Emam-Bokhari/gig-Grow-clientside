import { Link } from "react-router-dom";

const JobCard = ({ items }) => {
    // console.log(data);
    const {_id, jobTitle, deadline, minimumPrice, maximumPrice, description } = items || {}

    
    return (
        <div className="flex flex-grow"> {/* Add the flex-grow class here */}

            <div className="p-4 border-[1px] border-[#aabbd0] space-y-3 rounded flex-grow"> {/* Apply flex-grow class here too */}
                <h2 className="text-2xl  font-bold text-[2a2a2a] h-[70px] " >{jobTitle}</h2>

                <div className="flex justify-between  h-14" >
                    <p className="text-base font-medium text-[#2a2a2a]" >Min Price: ${minimumPrice}</p>
                    <p className="text-base font-medium text-[#2a2a2a]">Max Price: ${maximumPrice}</p>
                </div>

                <p className="font-bold  ">Deadline: <span className="text-red-600 " >{deadline}</span></p>

                {/* description */}
                <p className="text-gray-500  h-24">
                    {description?.length > 100
                        ? `${description.slice(0, 100)}...`
                        : description
                    }
                </p>

                {/* button */}
                <div >
                   <Link to={`/jobDetails/${_id}`} >
                   <button className="bg-[#092eed] text-white font-medium px-4 text-base py-2 rounded" >Bid Now</button>
                   </Link>
                </div>

            </div>

        </div>
    );
};

export default JobCard;
