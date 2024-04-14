import React, { useContext } from "react";
import { SocialIcon } from "react-social-icons";
import image from "./images/komal.png";
import SkillsCard from "./Skills/SkillsCard";
import SkillsData from "./Skills/SkillsData";
import {AppContext} from "./Context/AppContext";

const Home = () => {
    const { handleCopyClick} = useContext(AppContext);

    return (
        <div className="w-full bg-[#fbfbfb]">
            <div className="w-[70%] flex lg:flex-row sm:flex-col justify-between mx-auto p-8 sm:mt-96 md:mt-40 lg:h-[60vh] md:gap-16">
                {/* <div className="flex flex-col justify-center gap-2 h-[70%] sm:invisible md:visible lg:visible md:mx-auto lg:w-full lg:my-auto">
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
                </div> */}
                <div>
                    <img src={image} alt="" className=" " />
                </div>
                <div className="w-[40%] sm:w-full h-full flex flex-col justify-center md:mx-auto">
                    <p className="text-2xl md:text-center lg:text-left">Welcome to my Portfolio! <br />
                        I'm <span className="text-3xl font-bold text-[#a7adfe]"> Jella Komal </span>, <br />
                        and I'm excited to share a little bit <br />
                        about myself with you</p>
                    <div className="w-[50%] h-[1px] bg-black my-3 md:mx- lg:ml-0"></div>
                    <p className="md:text-center lg:text-left">I'm a passionate about Software and Web development. I love listening Songs, and I'm always eager to learn new things.</p>
                </div>

            </div>

            <div className="w-[70%] flex flex-col gap-4 items-center mx-auto my-52 pb-36">
                <h1 className="text-2xl tracking-wider ">Skills</h1>
                <div className="flex flex-row justify-center gap-3">{
                    SkillsData.map((data) => (
                        <SkillsCard data={data} />
                    ))
                }
                </div>
            </div>


            <div className="w-[40%] flex flex-col gap-4 items-center mx-auto my-48">
                <h1 className="text-2xl tracking-wider ">Education</h1>
                <div className="flex flex-row justify-between  w-full">
                    <div className="">
                        <h1 className="text-lg font-semibold">Maulana Azad National Institute of Technology Bhopal</h1>
                        <p>Electrical Engineering</p>
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold text-right">8.57/10.00</p>
                        <p className="text-right">2020-2024</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between  w-full">
                    <div className="">
                        <h1 className="text-lg font-semibold">Krishnamurthy Junior College</h1>
                        <p>Board of Intermediate Education</p>
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold">955/1000</p>
                        <p className="text-right">2020</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between  w-full">
                    <div className="">
                        <h1 className="text-lg font-semibold">Krishnaveni Talent School</h1>
                        <p>Board of Seconday Education</p>
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold">10.00/10.00</p>
                        <p className="text-right">2018</p>
                    </div>
                </div>
            </div>


            <div className="w-[50%] h-[1px] bg-[#a7adfe] opacity-30 mx-auto rounded-md ">            </div>

            <div>
                <div className="w-full flex flex-col gap-3 items-center py-10">
                    <h1 className="tracking-wider text-lg font-semibold">Connect with Me!</h1>
                    <p className="cursor-pointer" onClick={handleCopyClick}>komalkumar0412@gmail.com</p>
                   
                    <div className="w-[50%] flex flex-row gap-4 mx-auto justify-center">
                        <a href="https://www.linkedin.com/in/jella-komal-kumar/">
                            <SocialIcon network="linkedin" className="hover:cursor-pointer" /> 
                            </a>
                        <a href="https://github.com/JellaKomal/">
                            <SocialIcon network="github" className="hover:cursor-pointer" /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;