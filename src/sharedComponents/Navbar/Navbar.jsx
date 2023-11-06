import { useContext } from "react";
import toast from "react-hot-toast";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);


    // logout functionality
    const handleLogout = () => {
        logout()
            .then(() => {
                return toast.success('Logout Successful!');
            })
            .catch((error) => {
                return toast.error(error.message);
            });
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32  shadow-lg my-10">
            <div className="navbar">
                <div className="navbar-start">
                    {/* Dropdown menu for small screens */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <div className="text-2xl">
                                <BiMenu />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-48">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/addJob">Add Job</Link></li>
                            <li><Link to="/myPostedJobs">My Posted Jobs</Link></li>
                            <li><Link to="/bidRequest">Bid Request</Link></li>
                            <li><Link to="/myBids">My Bids</Link></li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <div>
                        <img className="w-16 h-16" src="https://i.ibb.co/xzzhBG9/default.png" alt="Logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Navigation links */}
                    <ul className="flex gap-5 text-[14px] md:text-base text-[#5c5776] font-normal">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addJob"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                                }
                            >
                                Add Job
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myPostedJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                                }
                            >
                                My Posted Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/bidRequest"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                                }
                            >
                                Bid Request
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myBids"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#553cfb] underline" : ""
                                }
                            >
                                My Bids
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Conditional rendering of user profile or login button */}
                     {/* button */}
                {user ? (
                    <div className="space-y-2">
                        <div className="flex gap-3 items-center ">
                            {user.photoURL ? (
                                <img
                                    className="w-9 h-9 rounded-full border-2 border-gray-300"
                                    src={user.photoURL}

                                />
                            ) : (
                                <FaCircleUser className="text-3xl" />
                            )}
                            <p>{user.displayName || "User"}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-[#754ffe] px-3 py-1 rounded-sm text-white font-semibold text-lg"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3 items-center">
                        <FaCircleUser className="text-3xl" />
                        <Link to="/login">
                            <button className="bg-[#754ffe] px-2 py-1 rounded-sm text-lg font-semibold text-white tracking-wide">
                                Login
                            </button>
                        </Link>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
