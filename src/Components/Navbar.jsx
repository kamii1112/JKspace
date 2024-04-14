import React from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "./images/jkwhite.jpg";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const Navbar = () => {

    const { login, setLogin, loginHandler } = useContext(AppContext);


    return (

        <div className="w-[100vw] lg:h-[80px] lg:px-20 sm:px-20 md:p-4 flex lg:flex-row sm:flex-col justify-between border border-slate  bg-white opacity-90 fixed top-0">
            <div className="block">
                <img src={logo} alt="" className="w-[50px] h-[50px] my-auto sm:mx-auto" />
            </div>
            <div className="p-2 flex lg:flex-row md:flex-row sm:flex-col sm:mx-auto  lg:gap-8 md:gap-2 sm:gap-2 my-auto ">
                <NavLink to="/" className="hover:text-[#a7adfe] sm:mx-auto">Home</NavLink>
                {
                    login && <div className="group">
                        <div className="flex flex-row sm:justify-center">
                            <NavLink to="/notes" className="cursor-pointer  duration-300 ease-in-out transition-all px-3 group-hover:text-[#a7adfe]">Notes</NavLink>
                            {/* <RiArrowDownSLine className="my-auto group-hover:fill-[#a7adfe] sm:hidden md:hidden lg:block" /> */}
                        </div>
                        {/* <div className="group-hover:opacity-100 md:invisible sm:invisible lg:visible opacity-0 absolute shadow-lg  duration-400 transition-all  translate-y-7 px-7 py-2 bg-white rounded-md p-5">
                            <p className="py-1">
                                <NavLink to="/notes/html" className="hover:text-[#a7adfe] px-2 py-1 cursor-pointer transition-all ease duration-300">
                                    HTML</NavLink>
                            </p> 
                            <p className="py-1">
                                <NavLink to="/notes/html" className="hover:text-[#a7adfe] px-2 py-1 cursor-pointer transition-all duration-300">
                                    CSS</NavLink>
                            </p>
                            <p className="py-1">
                                <NavLink to="/notes/html" className="hover:text-[#a7adfe] px-2 py-1 cursor-pointer transition-all duration-300">
                                    React</NavLink>
                            </p>
                        </div> */}
                    </div>

                }
                <NavLink to='/important-links' className="hover:text-[#a7adfe] sm:mx-auto">Important Links</NavLink>
                <NavLink to='/project' className="hover:text-[#a7adfe] sm:mx-auto">Project</NavLink>
                <NavLink to="/github" className="hover:text-[#a7adfe] sm:mx-auto">Github</NavLink>
                {
                    login ?
                        <div className="flex lg:flex-row lg:gap-8 sm:gap-2 md:gap-2 md:flex-row sm:flex-col">
                            <NavLink to="/creator" className="hover:text-[#a7adfe] sm:mx-auto">Dashboard</NavLink>
                            <NavLink to="/" className="hover:text-[#a7adfe] sm:mx-auto" onClick={loginHandler}>Logout</NavLink>
                        </div>
                        :
                        <div className="group">
                            <NavLink to="/creator" className="duration-200 transition-all sm:mx-auto  hover:text-[#a7adfe]">Creator Login</NavLink>
                            <div className="w-[70%] h-[2px] rounded-md opacity-0 group-hover:opacity-95 bg-[#a7adfe] mx-auto mt-1 ">
                            </div>
                        </div>
                }


            </div>
        </div>
    )
};

export default Navbar;