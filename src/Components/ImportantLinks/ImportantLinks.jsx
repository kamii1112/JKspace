import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import NotFound from "../NotFound";

const ImportantLinks = () => {

    const { handleCopyClick, login } = useContext(AppContext);

    return (
        <div>{
            login ? (
                <div className="flex flex-col gap-10 md:pt-24 lg:pt-24 pt-5 items-center">

                    <div className=" flex flex-col  gap-1  md:w-[70%] lg:w-[70%] w-[90%] items-center">
                        <h1 className="text-xl font-semibold tracking-wider">TAILWIND</h1>
                        <div className="w-full h-[2px] bg-slate-300 rounded-md my-2"></div>
                        <a href="https://tailwindcss.com/docs/border-width" target="_blank" className="text-[#a7adfe] underline">Tailwind Documentation</a>
                        <div className="flex md:flex-row lg:flex-row flex-col gap-2 items-center ">
                            <p>Tailwind  script for head tag</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 md:text-base lg:text-base text-xs cursor-pointer pl-5 rounded-md  text-red-600">
                                <p>&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</p>
                            </code>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-1 mx-auto md:w-[70%] lg:w-[70%] w-[90%] items-center ">
                        <h1 className="text-xl font-semibold tracking-wider">REACT</h1>
                        <div className="w-full h-[2px] bg-slate-300 rounded-md my-2"></div>
                        <div className="flex md:flex-row lg:flex-row flex-col gap-2 items-center ">
                            <p>React Social Media Icons</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer md:text-base lg:text-base text-xs pl-5 rounded-md  text-red-600">
                                npm i react-social-icons
                            </code>
                        </div>
                        <div className="flex md:flex-row lg:flex-row flex-col gap-2 items-center ">
                            <p>React Icons</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md md:text-base lg:text-base text-xs text-red-600">
                                npm i react-icons
                            </code>
                        </div>
                        <div className="flex md:flex-row lg:flex-row flex-col gap-2 items-center ">
                            <p>React Router Dom</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md md:text-base lg:text-base text-xs text-red-600">
                                npm i react-router-dom
                            </code>
                        </div>
                        <div className="flex md:flex-row lg:flex-row flex-col  gap-2 items-center ">
                            <p>React Toastify</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md md:text-base lg:text-base text-xs text-red-600">
                                npm i react-toastify
                            </code>
                        </div>
                        <div className="flex md:flex-row lg:flex-row flex-col gap-2 items-center ">
                            <p>React Hot Toast</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md md:text-base lg:text-base text-xs text-red-600">
                                npm i react-hot-toast
                            </code>
                        </div>

                    </div>
                    
                </div>)
                :
                (<NotFound />)
        }</div>
    )
}

export default ImportantLinks;