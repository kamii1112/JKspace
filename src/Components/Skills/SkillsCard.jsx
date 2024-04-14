import React from "react";
import image from "../images/komal.png";

const SkillsCard = ({data}) => {
    return (
        <div className="flex flex-col gap-2 items-center shadow-md hover:shadow-xl hover:bg-[#a7adfe] duration-300 transition-all p-3 rounded-md">
            <h1>{data.title}</h1>
            <img src={data.image} alt="" className="w-[100px]" />
        </div>
    )
}

export default SkillsCard;