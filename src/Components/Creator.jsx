import React from "react";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const Creator = () => {
    const { showPassword, submitHandler, setShowPassword, username,
        setUsername, password, setPassword, login } = useContext(AppContext);

    return (
        <div className="">
            {
                login ?
                    (<div className="p-30 flex justify-center items-center w-[100vw] h-[100vh]">
                        <div>
                            <h1 className="text-3xl font-bold">what features do you want to include</h1>
                            <p>1. Should add project one by one</p>
                            <p>2. Should add notes also</p>
                            <p>3. Also add your portfolio completely</p>
                            <p>4. Update Home section which is about you and you contact details also</p>
                            <p>5. Try to fix the bug that when we access through URL it is signing off automatically and why is that</p>
                        </div>

                    </div>)
                    :
                    <div className="w-full h-[100vh] md:p-28 p-5 flex flex-col md:flex-row justify-center">
                        <div className="flex flex-col justify-center md:w-[45%] lg:w-[70%] w-[100%] mt-52 lg:my-auto">
                            <h1 className="text-xl font-semibold text-center md:text-left lg:text-left">Welcome to Creator Login!</h1>
                            <p className="md:text-xl lg:text-xl text-sm lg:my-2 md:my-2 my-1  text-center md:text-left lg:text-left">Features</p>
                            <p className="md:text-xl lg:text-xl text-sm text-center md:text-left lg:text-left">
                                <span className="font-bold mb-1">Access to Premium Content:</span> Get access to premium notes and resoures.</p>
                            <p className="md:text-xl lg:text-xl text-sm text-center md:text-left lg:text-left">
                                <span className="font-bold mb-1">Personalized Dashboard:</span> Customize your current working projects</p>
                            <p className="md:text-xl lg:text-xl text-sm text-center md:text-left lg:text-left">

                                <span className="font-bold mb-1">Stay Updated:</span> Receive regular updates on new features</p>
                            <h1 className="text-3xl mt-4 font-bold text-[#a7adfe] text-center md:text-left lg:text-left">Ready to Get Started?</h1>
                            <h1 className="md:text-xl lg:text-xl text-base lg:mt-5 md:mt-5 mt-2 text-center md:text-left lg:text-left">Login now and start exploring all the possiblities as creator!</h1>
                        </div >
                        <div className="xl:hidden lg:hidden md:hidden sm:block w-[40%] h-[1px] bg-slate-300 mx-auto">
                        </div>
                        <div className="flex flex-col gap-4 items-center lg:my-auto lg:px-1 lg:py-20 shadow-xl hover:shadow-2xl
                        rounded-xl mt-20 py-16 md:w-[50%] mx-auto w-[70%] lg:w-[40%] ">
                            <h1 className="text-lg font-semibold tracking-wider">Login Now!</h1>
                            <div className="">
                                <label htmlFor="username" className="my-auto">Username<super className="text-red-500">*</super></label>
                                <input type="text" placeholder="username" value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-[#a7adfe] block rounded-md focus:ring-1" />
                                <br />
                                <label htmlFor="password" className="my-auto">Password<super className="text-red-500">*</super></label>
                                <div className="relative ">
                                    <input type={
                                        showPassword ?
                                            "password" : "text"
                                    }
                                        placeholder="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-[#a7adfe] block rounded-md focus:ring-1" />
                                    {
                                        showPassword ?
                                            <PiEyeSlashFill className="w-[25px] h-[25px] my-auto absolute right-2 top-2" onClick={() => setShowPassword(false)} />
                                            :
                                            <PiEyeFill className="w-[25px] h-[25px] my-auto absolute right-2 top-2" onClick={() => setShowPassword(true)} />


                                    }
                                </div>
                                <br />
                            </div>

                            <button onClick={submitHandler}
                                className="border py-2 px-10 rounded-md hover:bg-[#a7adfe] sm:bg-[#a7adfe] hover:text-white transition-all duration-300"
                            >Submit</button>
                        </div>
                    </div >
            }
        </div >

    )
}

export default Creator;