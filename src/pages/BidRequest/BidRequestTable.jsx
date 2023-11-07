
const BidRequestTable = ({data,index}) => {
    const {biddingEmail,deadline,jobTitle,amount}=data||{}
    return (
        <div>


              {/* table */}
              <div >


<div className={`grid grid-cols-6  text-center py-1 rounded overflow-x-scroll md:overflow-hidden gap-24 md:gap-0  `}   >


    <p className={`bg-[#f6f8fa] text-[#2a2a2a]  h-16  py-4 `} >{index}</p>

    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-3 ">{jobTitle}</p>




    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{biddingEmail}</p>

   
    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{amount}</p>

    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{deadline}</p>
   

    <div className="bg-[#f6f8fa] text-[#cad0d6] h-16  py-3">
            <button className="bg-[#19cb98] px-2 md:px-4 py-1 rounded text-base md:text-lg text-white ">Aceapt</button>
    </div> 


   



</div>

</div>


        </div>
    );
};

export default BidRequestTable;