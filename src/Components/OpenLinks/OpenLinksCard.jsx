import React from "react";

const OpenLinksCard = ({ data }) => {
    return (
        <div className="w-[70%]  p-10 flex flex-col gap-2 bg-cyan-50 rounded-lg">
            <h1 className="text-xl font-semibold mx-auto">{data.title}</h1>
            <div className="flex flex-col gap-2">
                {
                    data && data.content && data.content.map((website, index) => (
                        <div key={index} className="flex flex-row gap-5">
                            <a href={website.website} className="w-[25%] font-semibold underline  underline-offset-2 hover:text-cyan-500 transition-all duration-300 hover:decoration-black decoration-cyan-500">{website.title}</a>
                            <p className="w-[75%]">{website.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default OpenLinksCard;