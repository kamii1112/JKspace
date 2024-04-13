import React from "react";
import { NavLink } from "react-router-dom";
// import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "./images/jkwhite.jpg";

const Navbar = () => {
    return (
        
        <div className="w-[100vw] h-[12vh] px-20 flex justify-between border border-slate bg-white opacity-90 fixed top-0">
            <div className="flex ">
                <img src={logo} alt="" className="w-[50px] h-[50px] my-auto "/>
            </div>
            <div className="p-2 flex flex-row gap-8 my-auto ">
                <NavLink to="/" className="hover:text-[#a7adfe]">Home</NavLink>
                <div className="group">
                    <div className="flex flex-row">
                        <NavLink to="/notes" className="cursor-pointer  duration-300 ease-in-out transition-all px-3 group-hover:text-[#a7adfe]">Notes</NavLink>
                        <RiArrowDownSLine className="my-auto group-hover:fill-[#a7adfe]" />
                    </div>
                    <div className="group-hover:opacity-100 opacity-0 absolute shadow-lg  duration-400 transition-all  translate-y-7 px-7 py-2 bg-white rounded-md p-5">
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
                    </div>
                </div>

                <NavLink to='/important-links'  className="hover:text-[#a7adfe]">Important Links</NavLink>
                <NavLink to='/project'  className="hover:text-[#a7adfe]">Projects</NavLink>
                <NavLink to="/github"  className="hover:text-[#a7adfe]">Github</NavLink>

                
            </div>
        </div>
    )
};

export default Navbar;