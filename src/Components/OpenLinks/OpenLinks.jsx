import React from "react";
import OpenLinksData from "./OpenLinksData";
import OpenLinksCard from "./OpenLinksCard";

const OpenLinks = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-5 py-40">
            {
                OpenLinksData.map((data, index) => (
                    <OpenLinksCard key={index} data={data} />
                ))
            }
        </div>
    )
}

export default OpenLinks;