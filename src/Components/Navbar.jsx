import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/jkwhite.jpg";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    const consoleHandler = () => {
        console.log(location.pathname);
    }


    const { login, loginHandler } = useContext(AppContext);


    return (

        <div className="w-[100vw] lg:h-[80px] lg:px-20 p-4
        bg-orange-200 sm:bg-slate-200 md:bg-red-200 lg:bg-blue-200
         border-slate flex lg:flex-row flex-col md:flex-row
        opacity-90 md:fixed md:top-0 lg:fixed lg:top-0 items-center">
            <div className="">
                <NavLink to="/">
                    <img src={logo} alt="" className="w-[50px] h-[50px] my-auto sm:mx-auto" />
                </NavLink>
            </div>
            <div className="p-2 flex lg:flex-row md:flex-row flex-col mx-auto lg:gap-8 md:gap-8 gap-2 items-center ">
                <NavLink to="/" className="hover:text-[#a7adfe]">Home</NavLink>
                {
                    login && <div className="group">
                        <div className="flex md:flex-row lg:flex-row flex-col md:gap-8 lg:gap-8 gap-1 items-center">
                            <NavLink to="/notes" className="cursor-pointer  duration-300 ease-in-out transition-all 
                            px-3 group-hover:text-[#a7adfe]">Notes</NavLink>
                            <NavLink to='/important-links' className="hover:text-[#a7adfe] sm:mx-auto">Important Links</NavLink>
                            <NavLink to="/github" className="hover:text-[#a7adfe] sm:mx-auto">Github</NavLink>
                            <NavLink to="/open-links" className="hover:text-[#a7adfe] sm:mx-auto">OpenLinks</NavLink>
                        </div>
                    </div>

                }
                <NavLink to='/project' className="hover:text-[#a7adfe] ">Project</NavLink>



            </div>
            <div className="my-auto">
                {
                    login ?
                        <div className="flex lg:flex-row lg:gap-8 items-center gap-2 md:gap-2 md:flex-row flex-col">
                            <NavLink to="/creator" className="hover:text-[#a7adfe] sm:mx-auto">Dashboard</NavLink>
                            <NavLink to="/" className="hover:text-[#a7adfe] sm:mx-auto" onClick={loginHandler}>Logout</NavLink>
                        </div>
                        :
                        <div className="group ">
                            <NavLink to="/creator" className="duration-200  transition-all sm:mx-auto  hover:text-[#a7adfe]">
CLogin
                            </NavLink>
                            <div className="w-[70%] h-[2px] rounded-md opacity-0 group-hover:opacity-95 bg-[#a7adfe] mx-auto mt-1 ">
                            </div>
                        </div>
                }
            </div>
        </div>
    )
};

export default Navbar;