import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const NotFound = () => {

    const { login } = useContext = { AppContext };

    return (<div>{
        !login &&

        <div className="w-full p-52 flex flex-col items-center ">
            <div className="w-[50%] flex flex-col gap-10 items-center ">
                <h1 className="text-6xl">Error: 404</h1>
                <p>Page has been moved, deleted or not existed</p>
            </div>
        </div>
    }
    </div>
    );
}

export default NotFound;