import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobTable = ({ data, index}) => {
    // console.log(data);
    const { _id, jobTitle, minimumPrice, maximumPrice } = data || {}

    //    console.log(_id);

    const handleDelete=(_id)=>{
        // console.log(_id,'done');

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                axios.delete(`http://localhost:3000/api/v1/${_id}/delete-posted-job`)
                .then(result=>{
                    console.log(result.data);

                    if (result.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your job has been deleted.',
                            'success'

                        )
                        
                    }


                })


            }
        })
    }

    return (
        <div>


            {/* table */}
            <div >


                <div className={`grid grid-cols-6  text-center py-1 rounded overflow-x-scroll md:overflow-hidden gap-24 md:gap-0  `}   >


                    <p className={`bg-[#f6f8fa] text-[#2a2a2a]  h-16  py-4 `} >{index}</p>

                    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-3 ">{jobTitle}</p>

                    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{minimumPrice}</p>

                    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{maximumPrice}</p>

                    <div className="bg-[#f6f8fa] text-[#cad0d6] h-16  py-3">

                        <Link to={`/update/${_id}`} >
                            <button className="bg-[#19cb98] px-2 md:px-4 py-1 rounded text-base md:text-lg text-white ">Update</button>
                        </Link>
                    </div>


                    <div onClick={()=>handleDelete(_id)} className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-3">
                        <button className="bg-red-600 px-2 py-1 rounded text-lg text-white">Delete</button>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default MyPostedJobTable;