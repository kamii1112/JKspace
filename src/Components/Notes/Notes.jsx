import React from "react";
import NotesCard from "./NotesCard";
import NotesData from "./NotesData";
// import NotesData from "./NotesData";

const Notes = () => {
    return (
        <div>{
            NotesData.map((data) => (
                <NotesCard data={data}/>
            ))
            }
        </div>
    )
}

export default Notes;