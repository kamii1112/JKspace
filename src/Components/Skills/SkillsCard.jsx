import React from "react";
import image from "../images/komal.png";

const SkillsCard = ({data}) => {
    return (
        <div className="flex flex-col gap-2 items-center shadow-md hover:shadow-xl hover:bg-[#a7adfe] duration-300 transition-all p-3 rounded-md sm:gap-1">
            <h1 className="font-semibold">{data.title}</h1>
            <img src={data.image} alt="" className="w-[50px]" />
        </div>
    )
}

export default SkillsCard;