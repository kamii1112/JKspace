import React from "react";
import ProjectCard from "./ProjectCard";
import NotesData from "../Notes/NotesData";
import ProjectData from "./ProjectData";

const Project = () => {
    return (
        <div className="w-full pt-5 flex flex-col gap-10 md:pt-44">
            <h1 className=" mx-auto text-3xl tracking-wider font-semibold">Explore Project</h1>
            <div className="md:w-[70%] lg:w-[70%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[80%] mx-auto">
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