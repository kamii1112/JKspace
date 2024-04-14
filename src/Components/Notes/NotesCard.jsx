import React from "react";
import { NavLink } from "react-router-dom";

const NotesCard = ({ data }) => {
    return (
        <div className="w-full  shadow-md py-10 px-5 flex flex-col gap-2  group hover:bg-[#a7adfe] rounded-md hover:shadow-xl">
            <img src={data.image} alt="" className="h-[50%] w-[50%] mx-auto  group-hover:scale-105 duration-300 transition-all"/>
            <NavLink to={data.link} className="mx-auto font-bold text-2xl tracking-wide group-hover:text-white duration-300 transition-all">{data.title}</NavLink>
            <p className="text-center text-sm group-hover:text-white duration-300 transition-all">{data.description}</p>
        </div>
    )
}

export default NotesCard;