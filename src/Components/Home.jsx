import React from "react";

const Home = () => {
    return (
        <div className="w-full">

            <div className="w-[70%] flex flex-row justify-between mx-auto p-8 h-[100vh] ">
                <div className="flex flex-col justify-center gap-2 h-[70%] ">
                    <div className="flex flex-row gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
                            <path d="M21 8h-8l4-6h-6L3 14h7l-6 9L21 8Z"></path>
                        </svg>
                        <p>Explore my notes section see notes of various topics</p>
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
                <div className="w-[40%] h-full flex flex-col justify-center">
                    <p className="text-2xl">Welcome to my personal website! <br />
                        I'm <span className="text-3xl font-bold text-[#a7adfe]"> Jella Komal </span>, <br />
                        and I'm excited to share a little bit <br />
                        about myself with you</p>
                    <div className="w-[50%] h-[1px] bg-black  my-3"></div>
                    <p>I'm a passionate Software development and Web development. I love listening Songs, and I'm always eager to learn new things.</p>
                </div>

            </div>
        </div>
    )
}

export default Home;