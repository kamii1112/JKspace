import React from "react";
import { NavLink } from "react-router-dom";

const NotesCard = ({ data }) => {
    return (
        <div className=" shadow-md py-10 px-5 flex flex-col gap-3 w-full group hover:bg-[#a7adfe] 
        rounded-md hover:shadow-xl">
            <NavLink to={data.link} className="mx-auto font-bold  text-2xl tracking-
             group-hover:text-white duration-300 transition-all">{data.title}</NavLink>
            <img src={data.image} alt="" className=" w-[50%]  mx-auto group-hover:scale-105 
            duration-300 transition-all"/>
            <p className="text-center text-sm group-hover:text-white duration-300 transition-all 
             hidden md:block lg:block">{data.description}</p>
        </div>
    )
}

export default NotesCard;