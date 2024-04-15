import React from "react";
import NotesCard from "./NotesCard";
import NotesData from "./NotesData";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
// import NotesData from "./NotesData";

const Notes = () => {

    const { login } = useContext(AppContext);

    return <div className="w-full md:pt-28 lg:pt-28 pt-5">

        {
            login ? (
                <div className="flex flex-col gap-10 mt-10">
                    <h1 className="mx-auto text-5xl font-semibold tracking-wider text-slate-300 hover:text-[#a7adfe] cursor-pointer">Notes</h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 w-[70%] mx-auto">{
                        NotesData.map((data) => (
                            <NotesCard data={data} />
                        ))
                    }
                    </div>
                </div>
            ) :
                (
                    <div className="w-[100vw] h-[100vh] justify-center items-center border flex"><p>Not found</p></div>
                )
        }
    </div>



}

export default Notes;