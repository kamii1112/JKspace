import React from "react";
import { SocialIcon } from "react-social-icons";

const Home = () => {
    return (
        <div className="w-full">
            <div className="w-[70%] flex lg:flex-row sm:flex-col justify-between mx-auto p-8 sm:mt-96 md:mt-40 lg:h-[60vh] md:gap-16">
                <div className="flex flex-col justify-center gap-2 h-[70%] sm:invisible md:visible lg:visible md:mx-auto lg:w-full lg:my-auto">
                    <div className="flex flex-row gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                            <path d="M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z"></path>
                        </svg>
                        <p>Explore various sections</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                            <path d="M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z"></path>
                        </svg>
                        <p>Check out on my projects</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                            <path d="M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z"></path>
                        </svg>
                        <p>Connect with me me social media</p>
                    </div>
                </div>
                <div className="w-[40%] sm:w-full h-full flex flex-col justify-center md:mx-auto">
                    <p className="text-2xl md:text-center lg:text-left">Welcome to my personal website! <br />
                        I'm <span className="text-3xl font-bold text-[#a7adfe]"> Jella Komal </span>, <br />
                        and I'm excited to share a little bit <br />
                        about myself with you</p>
                    <div className="w-[50%] h-[1px] bg-black my-3 md:mx- lg:ml-0"></div>
                    <p className="md:text-center lg:text-left">I'm a passionate Software development and Web development. I love listening Songs, and I'm always eager to learn new things.</p>
                </div>

            </div>
            <div className="w-[50%] h-[1px] bg-[#a7adfe] opacity-30 mx-auto rounded-md ">

            </div>
            <div className="w-full flex flex-col gap-3 items-center py-10">
            <h1 className="tracking-wider text-lg font-semibold">Connect with Me!</h1>
                <div className="w-[50%] flex flex-row gap-4 mx-auto justify-center">
                    <SocialIcon network="linkedin" className="hover:cursor-pointer" />
                    <SocialIcon network="google" />
                    <SocialIcon network="github" />
                </div>
            </div>
        </div>
    )
}

export default Home;