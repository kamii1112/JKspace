import React, { useContext } from "react";
import { SocialIcon } from "react-social-icons";
import image from "./images/komal.png";
import SkillsCard from "./Skills/SkillsCard";
import SkillsData from "./Skills/SkillsData";
import { AppContext } from "./Context/AppContext";

const Home = () => {
    const { handleCopyClick } = useContext(AppContext);

    return (
        // <div className="w-full bg-[#fbfbfb] flex flex-col gap-52
        <div className="w-full  flex flex-col gap-52 pt-20 md:pt-0        ">
            <div className="w-[70%] flex lg:flex-row flex-col justify-between mx-auto p-2 gap-10 md:mt-40 lg:h-[60vh] md:gap-16">
                <div className="">
                    <img src={image} alt="" className="object-cover h-full" />
                </div>
                <div className="lg:w-[40%] w-full h-full flex flex-col justify-center md:mx-auto">
                    <p className="text-lg md:text-2xl lg:text-2xl md:text-center lg:text-left text-center">Welcome to my Portfolio! <br />
                        I'm  <span className="text-3xl font-bold text-[#a7adfe]"> Jella Komal</span>and I'm excited to share a little bit
                        about myself with you</p>
                    <div className="w-[50%] h-[1px] bg-black my-3 md:mx-auto lg:ml-0 mx-auto"></div>
                    <p className="md:text-center lg:text-left text-center">I'm a passionate about Software and Web development. I love listening Songs, and I'm always eager to learn new things.</p>
                </div>

            </div>

            <div className="flex flex-col gap-32 items-center">


                <div className="w-[70%] flex flex-col gap-4 items-center mx-auto ">
                    <h1 className="text-2xl tracking-wider ">Skills</h1>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-row md:flex-wrap justify-center md:gap-3 md:w-[90%] lg:w-full">{
                        SkillsData.map((data) => (
                            <SkillsCard data={data} />
                        ))
                    }
                    </div>
                </div>


                <div className="md:w-[40%] lg:w-[40%] flex flex-col gap-4 items-center mx-auto w-[80%]">
                    <h1 className="text-2xl tracking-wider ">Education</h1>
                    <div className="flex flex-row justify-between  w-full">
                        <div className="">
                            <h1 className="md:text-lg lg:text-lg text-xs font-semibold">Maulana Azad National Institute of Technology Bhopal</h1>
                            <p className="text-sm">Electrical Engineering</p>
                        </div>
                        <div className="">
                            <p className="md:text-lg lg:text-lg text-sm font-semibold text-right">8.57/10.00</p>
                            <p className="text-right md:text-base text-xs">2020-2024</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between  w-full">
                        <div className="">
                            <h1 className="md:text-lg lg:text-lg font-semibold text-xs">Krishnamurthy Junior College</h1>
                            <p>Board of Intermediate Education</p>
                        </div>
                        <div className="">
                            <p className="md:text-lg lg:text-lg text-xs font-semibold">955/1000</p>
                            <p className="text-right md:text-base text-xs">2020</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between  w-full">
                        <div className="">
                            <h1 className="md:text-lg lg:text-lg text-xs font-semibold">Krishnaveni Talent School</h1>
                            <p>Board of Seconday Education</p>
                        </div>
                        <div className="">
                            <p className="md:text-lg lg:text-lg  font-semibold text-xs">10.00/10.00</p>
                            <p className="text-right md:text-base text-xs">2018</p>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="w-[50vw] h-[1px] bg-[#a7adfe] opacity-30 mx-auto rounded-md"></div>
                    <div className="w-full flex flex-col gap-3 items-center py-10">
                        <h1 className="tracking-wider text-lg font-semibold">Connect with Me!</h1>
                        <p className="cursor-pointer" onClick={handleCopyClick}>komalkumar0412@gmail.com</p>

                        <div className="w-[50%] flex flex-row gap-4 mx-auto justify-center">
                            <a href="https://www.linkedin.com/in/jella-komal-kumar/">
                                <SocialIcon network="linkedin" className="hover:cursor-pointer" />
                            </a>
                            <a href="https://github.com/kamii1112">
                                <SocialIcon network="github" className="hover:cursor-pointer" /> </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;