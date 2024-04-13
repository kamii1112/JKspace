import React from "react";
import NotesCard from "./NotesCard";
import NotesData from "./NotesData";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
// import NotesData from "./NotesData";

const Notes = () => {

    const { login } = useContext(AppContext);

    return <div>

        {
            login ? (
                <div>{
                    NotesData.map((data) => (
                        <NotesCard data={data} />
                    ))
                }
                </div>
            ) :
                (
                    <div className="w-[100vw] h-[100vh] justify-center items-center border flex"><p>Not found</p></div>
                )
        }
    </div>



}

export default Notes;