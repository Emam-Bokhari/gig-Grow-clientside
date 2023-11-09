import { useState } from "react";

const BidRequestTable = ({data,index,handleUpdateStatus}) => {

    const {_id,biddingEmail,deadline,jobTitle,amount,status}=data||{}
    const [acceptDisabled,setAcceptDisabled]=useState(false)
const [rejectDisabled,setRejectDisabled]=useState(false)


    return (
        <div>


              {/* table */}
              <div >


<div className={`grid grid-cols-7  text-center py-1 rounded overflow-x-scroll md:overflow-hidden gap-24 md:gap-0  `}   >


    <p className={`bg-[#f6f8fa] text-[#2a2a2a]  h-16  py-4 `} >{index}</p>

    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-3 overflow-y-hidden ">{jobTitle}</p>


    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{biddingEmail}</p>

   
    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{amount}</p>

    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{deadline}</p>
   

    <div className="bg-[#f6f8fa] text-[#cad0d6] h-16  py-3">
            {
                status==='aceapt'? <span>Inprogress</span>:
                <button onClick={()=>{
                    setAcceptDisabled(true)
                    handleUpdateStatus(_id,'aceapt')}} 
                    className={`bg-gray-300 px-2 md:px-4 py-1 rounded text-base md:text-lg text-white ${acceptDisabled || status === 'reject' ? 'disabled' : 'bg-green-600'}`}
                    disabled={acceptDisabled || status ==='reject'} >Accept</button>}
    </div> 

    <div className="bg-[#f6f8fa] text-[#cad0d6] h-16  py-3">
            {
                status==='reject'? <span>Rejected</span>:
                <button onClick={()=>{
                    setRejectDisabled(true)
                    handleUpdateStatus(_id,'reject')}}  
                    className={`bg-gray-300 px-2 md:px-4 py-1 rounded text-base md:text-lg text-white ${rejectDisabled || status === 'accept' ? 'disabled' : 'bg-red-500'}`} 
                    disabled={rejectDisabled||status==='aceapt'}>Reject</button>}
    </div> 


   



</div>

</div>


        </div>
    );
};

export default BidRequestTable;