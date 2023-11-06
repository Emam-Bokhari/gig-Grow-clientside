
const Banner = () => {
    return (
        <div>

            <div className="bg-white" >

                <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32" >



                    <div className="flex items-center flex-col-reverse md:flex-row" >

                        {/* text and button */}
                        <div className="flex-1 space-y-3">

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#092eed]" >Welcome to GigGrow</h2>

                            <p className="text-lg text-[#baa7fe] font-medium text-justify" >Find the best service along with exceptional beauty and significance.</p>

                            <p className="text-lg text-[#baa7fe] font-medium text-justify">Crafting a digital haven for job seekers and employers, we are dedicated to reshaping the future of online job marketplaces.</p>

                            {/* button */}
                            <div className="flex gap-3" >
                                <button className="px-6 py-3 rounded bg-[#19cb98] text-white text-[14px] font-semibold" >Browse Jobs</button>

                                <button className="px-6 py-3 rounded bg-white text-black text-[14px] font-semibold border-[1px] border-[#aabbd0]">About Us</button>
                            </div>
                        </div>


                        {/* photo */}
                        <div className=" flex-1" >
                            <img className="w-full h-[400px]" src="https://i.ibb.co/nbGk80v/9430578-4153553.jpg" />
                        </div>


                    </div>

                </div>




            </div>




        </div>
    );
};

export default Banner;