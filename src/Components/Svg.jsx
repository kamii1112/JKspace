// import React, { useContext } from "react";

// import { AppContext } from "./Context/AppContext";

// const Svg = () => {

//     const { handleCopyClick, login } = useContext(AppContext);
//     return (
//         <div> {
//             login ? (

//             <div className="flex flex-row flex-wrap items-center justify-center gap-5 pt-28">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.78 85.15" class="w-[100px] h-[100px]"><g data-name="Layer 2"><path d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z" data-name="Layer 1"></path></g></svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.8 350.2" class="w-[100px] h-[100px]"><path d="M134.2 310c8.8 11 20.6 19.4 32.2 27.4 27.3 18.8 64.4 14.4 95.8 3.8 22.3-7.6 44.4-18.4 59.5-36.4 15.8-18.8 22.4-43.3 28.6-66.9 1.9-7.4 3.9-14.9 3.5-22.5-.4-8.8-1.3-25.2-15.5-37.3-35.4-30.3-3.2-88.5-42.7-115.9-20.1-13.9-39.8-18.4-64.4-18.7-42.6-.5-46.8-17.2-61.9-29.5C156 3.2 133.4.6 114.3 0 95.6-.5 37.6 26.7 31.6 79.4c-6.1 53-46 64.8-26 115.4 28.2 64.3 73.7 47.1 128.6 115.2z"></path></svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.9 494.4" class="w-[100px] h-[100px]"><path d="M140.1 19.4c129.5-71.5 315.5 71.5 252 162-43 70-15 122-33 185-19.9 69.7-90.5 129.3-193 128-152-2-202.3-179.5-140-235 100-89-20-166 114-240z"></path></svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2331 175.2" class="w-[100px] h-[100px]"><path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path></svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2331 175.2" class="w-[100px] h-[100px]"><path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path></svg>
//             </div>
//              )
//              :
//              (<br/>)
//      }
//         </div>
//     )
// }

// export default Svg;




import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { Toaster, toast } from "react-hot-toast";

const Svg = () => {
    const { handleCopyClick, login } = useContext(AppContext);

    const copyHandler = (svgString) => {
        navigator.clipboard.writeText(svgString)
            .then(() => {
                console.log('SVG copied to clipboard successfully!');
                toast.success("SVG copied");

            })
            .catch((error) => {
                console.error('Failed to copy SVG to clipboard:', error);
                toast.error("Failed to copy");
            });
    };

    return (
        <div>
            {login ? (
                <div className="flex flex-row flex-wrap items-center justify-center gap-5 pt-28">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.78 85.15" className="w-[100px] h-[100px]" onClick={() => copyHandler('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.78 85.15" class="w-[100px] h-[100px]"><g data-name="Layer 2"><path d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z" data-name="Layer 1"></path></g></svg>')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.78 85.15" class="w-[100px] h-[100px]"><g data-name="Layer 2"><path d="M51.3 84.79c32.53-4.54 41.24-49.65 29.5-69.59s-64.91-23-77.15 7.57C-11.48 60.59 23.54 88.66 51.3 84.79z" data-name="Layer 1"></path></g></svg></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.8 350.2" className="w-[100px] h-[100px]" onClick={() => copyHandler('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.8 350.2" class="w-[100px] h-[100px]"><path d="M134.2 310c8.8 11 20.6 19.4 32.2 27.4 27.3 18.8 64.4 14.4 95.8 3.8 22.3-7.6 44.4-18.4 59.5-36.4 15.8-18.8 22.4-43.3 28.6-66.9 1.9-7.4 3.9-14.9 3.5-22.5-.4-8.8-1.3-25.2-15.5-37.3-35.4-30.3-3.2-88.5-42.7-115.9-20.1-13.9-39.8-18.4-64.4-18.7-42.6-.5-46.8-17.2-61.9-29.5C156 3.2 133.4.6 114.3 0 95.6-.5 37.6 26.7 31.6 79.4c-6.1 53-46 64.8-26 115.4 28.2 64.3 73.7 47.1 128.6 115.2z"></path></svg>')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353.8 350.2" class="w-[100px] h-[100px]"><path d="M134.2 310c8.8 11 20.6 19.4 32.2 27.4 27.3 18.8 64.4 14.4 95.8 3.8 22.3-7.6 44.4-18.4 59.5-36.4 15.8-18.8 22.4-43.3 28.6-66.9 1.9-7.4 3.9-14.9 3.5-22.5-.4-8.8-1.3-25.2-15.5-37.3-35.4-30.3-3.2-88.5-42.7-115.9-20.1-13.9-39.8-18.4-64.4-18.7-42.6-.5-46.8-17.2-61.9-29.5C156 3.2 133.4.6 114.3 0 95.6-.5 37.6 26.7 31.6 79.4c-6.1 53-46 64.8-26 115.4 28.2 64.3 73.7 47.1 128.6 115.2z"></path></svg></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.9 494.4" className="w-[100px] h-[100px]" onClick={() => copyHandler('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.9 494.4" class="w-[100px] h-[100px]"><path d="M140.1 19.4c129.5-71.5 315.5 71.5 252 162-43 70-15 122-33 185-19.9 69.7-90.5 129.3-193 128-152-2-202.3-179.5-140-235 100-89-20-166 114-240z"></path></svg>')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.9 494.4" class="w-[100px] h-[100px]"><path d="M140.1 19.4c129.5-71.5 315.5 71.5 252 162-43 70-15 122-33 185-19.9 69.7-90.5 129.3-193 128-152-2-202.3-179.5-140-235 100-89-20-166 114-240z"></path></svg></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2331 175.2" className="w-[100px] h-[100px]" onClick={() => copyHandler('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2331 175.2" class="w-[100px] h-[100px]"><path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path></svg>')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2331 175.2" class="w-[100px] h-[100px]"><path d="M1302 31.2c-657.5 91.9-1102-173-1302 86l2331 58c-23-134-614-202-1029-144z"></path></svg></svg>
                    <Toaster />
                </div>
            ) : (<br />)}
        </div>
    );
};

export default Svg;
