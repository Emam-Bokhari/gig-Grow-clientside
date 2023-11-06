
const MyPostedJobTable = ({data,index,}) => {
    console.log(data);
    const {jobTitle,minimumPrice,maximumPrice}=data||{}

   

    return (
        <div>
            

            {/* table */}
<div >


<div className={`grid grid-cols-6  text-center py-1 rounded overflow-x-scroll md:overflow-hidden gap-24 md:gap-0  `}   >
               
                
               <p className={`bg-[#f6f8fa] text-[#cad0d6]  h-16  py-4 `} >{index}</p>
               
               <p className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-3 ">{jobTitle}</p>
               
               <p className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-4">{minimumPrice}</p>

               <p className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-4">{maximumPrice}</p>

               <div className="bg-[#f6f8fa] text-[#cad0d6] h-16  py-3">

               <button  className="bg-[#19cb98] px-2 md:px-4 py-1 rounded text-base md:text-lg text-white ">Update</button>
               </div>


               <div className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-3">
               <button  className="bg-red-600 px-2 py-1 rounded text-lg text-white">Delete</button>
               </div>



           </div>

</div>

        </div>
    );
};

export default MyPostedJobTable;