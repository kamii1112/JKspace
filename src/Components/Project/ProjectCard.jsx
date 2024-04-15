import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
    return (
        <div className="shadow-md py-5 px-5 flex md:flex-col rounded-sm lg:flex-col flex-row items-center md:gap-2 lg:gap-2 gap-4 group hover:shadow-xl ">
            <img src={data.image} alt="" className="object-cover md:w-[200px] lg:w-[200px] md:h-[120px] lg:h-[120px] h-full w-[40%]" />
            <div className="flex flex-col items-center">
                <h1 className="font-semibold group-hover:text-[#a7adfe] ">{data.title}</h1>
                <p className="text-justify text-xs md:text-base lg:text-base ">{data.description}</p>
                <div className="group relative">
                    <NavLink to={data.link} className=" text-[#a7adfe] tracking-wider font-bold">Visit Project</NavLink>
                    <div className="left-[25%] absolute w-[50%] h-[1px] bg-[#a7adfe] group-hover:visible invisible duration-200 transition-all "></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;