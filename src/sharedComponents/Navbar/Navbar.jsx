import { BiMenu } from "react-icons/bi"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            {/* <nav className="flex justify-between items-center" > */}




            {/* navlink */}
            {/* <div>
                    <ul className="flex gap-5 text-[14px] md:text-base text-[#5c5776] font-normal" >
                        <li><Link to="/" >Home</Link></li>

                        <li><Link to="/addJob" >Add Job</Link></li>

                        <li><Link to="myPostedJobs" >My Posted Jobs</Link></li>

                        <li><Link to="bidRequest" >Bid Request</Link></li>

                        <li><Link to="myBids" >My Bids</Link></li>
                    </ul>
                </div> */}


            {/* login and register button (conditionally) */}
            {/* <div>
                    <button className="bg-green-500 px-3 py-1 rounded" >Login</button>
                </div>


            </nav> */}


            {/* daisyui */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <div className="text-2xl" >
                                <BiMenu />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-48">
                            <li><Link to="/" >Home</Link></li>

                            <li><Link to="/addJob" >Add Job</Link></li>

                            <li><Link to="/myPostedJobs" >My Posted Jobs</Link></li>

                            <li><Link to="/bidRequest" >Bid Request</Link></li>

                            <li><Link to="/myBids" >My Bids</Link></li>
                        </ul>
                    </div>
                    {/* logo */}
                    <div>
                        <img className="w-16 h-16" src="https://i.ibb.co/xzzhBG9/default.png" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 text-[14px] md:text-base text-[#5c5776] font-normal" >
                        <li><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                            }
                        >
                            Home
                        </NavLink></li>

                        <li><NavLink
                            to="/addJob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                            }
                        >
                            Add Job
                        </NavLink></li>

                        <li><NavLink
                            to="/myPostedJobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                            }
                        >
                            My Posted Jobs
                        </NavLink></li>

                        <li><NavLink
                            to="/bidRequest"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                            }
                        >
                            Bid Request
                        </NavLink></li>

                        <li><NavLink
                            to="/myBids"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                            }
                        >
                            My Bids
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* login and register button (conditionally) */}
                    <div className="flex flex-row-reverse gap-2" >
                        <Link to="/login" >
                        <button className="bg-green-500 px-3 py-1 rounded" >Login</button>
                        </Link>

                        <div className="border-2 border-red-500 w-8 h-8 rounded-full" >
                            <p>.</p>
                        </div>

                    </div>

                </div>
            </div>




        </div>


    );
};

export default Navbar;