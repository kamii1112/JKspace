import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
    return (
        <div className="shadow-md py-5 px-5 flex flex-col items-center gap-2 group hover:shadow-xl">
            <img src={data.image} alt="" className=" w-[50%] " />
            <h1 className="font-semibold group-hover:text-[#a7adfe]">{data.title}</h1>
            <p className="text-center">{data.description}</p>
            <div className="group relative">
                <NavLink to={data.link} className=" text-[#a7adfe] tracking-wider font-bold">Visit Project</NavLink>
                <div className="left-[25%] absolute w-[50%] h-[1px] bg-[#a7adfe] group-hover:visible invisible duration-200 transition-all "></div>
            </div>
        </div>
    )
}

export default ProjectCard;