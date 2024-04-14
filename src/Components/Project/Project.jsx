import React from "react";
import ProjectCard from "./ProjectCard";
import NotesData from "../Notes/NotesData";
import ProjectData from "./ProjectData";

const Project = () => {
    return (
        <div className="w-full pt-28 flex flex-col gap-10">
            <h1 className=" mx-auto text-3xl tracking-wider font-semibold">Explore Project</h1>
            <div className="w-[70%] grid grid-cols-3 gap-8 mx-auto">
                {
                    ProjectData.map((data) => (
                        <ProjectCard data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Project;