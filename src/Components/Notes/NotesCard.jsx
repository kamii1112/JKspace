import React from "react";
import { NavLink } from "react-router-dom";

const NotesCard = ({ data }) => {
    return (
        <div className="w-[20vw] bg-slate-300 flex flex-col justify-center">
            <img src={data.image} alt="" />
            <NavLink to={data.link}>{data.title}</NavLink>
            <p>{data.description}</p>
        </div>
    )
}

export default NotesCard;