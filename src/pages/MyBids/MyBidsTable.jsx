const MyBidsTable = ({ data, index }) => {
    const { clientEmail, deadline, jobTitle, status } = data || {};
    console.log(status);

    return (
        <div>
            {/* table */}
            <div>
                <div className={`grid grid-cols-6 text-center py-1 rounded overflow-x-scroll md:overflow-hidden gap-24 md:gap-0`}>

                    <p className={`bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4`}>{index}</p>

                    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-3 overflow-y-hidden">{jobTitle}</p>

                    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{clientEmail}</p>

                    <p className="bg-[#f6f8fa] text-[#2a2a2a] h-16 py-4">{deadline}</p>

                    <div className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-3">
                        {status === 'aceapt' ? (
                            <button className=" px-2 md:px-4 py-1 rounded text-base md:text-lg text-green-500">
                                In Progress
                            </button>
                        ) : status === 'reject' ? (
                            <button className=" px-2 md:px-4 py-1 rounded text-base md:text-lg text-red-500">
                                Canceled
                            </button>
                        ) : (
                            <button className="bg-[#19cb98] px-2 md:px-4 py-1 rounded text-base md:text-lg text-white">
                                Pending
                            </button>
                        )}



                    </div>

                    <div className="bg-[#f6f8fa] text-[#cad0d6] h-16 py-3">
                        
                    {status === 'aceapt' && (
                            <button className="bg-[#19cb98] px-2 md:px-4 py-1 rounded text-base md:text-lg text-white">
                                Complete
                            </button>
                        )}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default MyBidsTable;
