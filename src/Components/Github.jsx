import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "./Context/AppContext";
import NotFound from "./NotFound";

const Github = () => {

    const { handleCopyClick, login } = useContext(AppContext);

    return (
        <div>
            {
                login ? (
                    <div className="w-full flex flex-col items-center">
                        <div className="lg:w-[80%] md:w-[90%] w-full p-10 md:p-40 lg:p-50 flex flex-col gap-1">
                            <h1 className="text-xl font-semibold text-center ">This starter pack includes a basic setup for using Tailwind CSS with React. <br /> To start building your own components and styles, follow these steps:</h1>
                            <br />
                            <p className="text-center md:text-left lg:text-left">1. Clone the repository to your local machine.</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 text-xs md:text-base lg:text-base rounded-md  text-red-600">
                                git clone https://github.com/kamii1112/starter-pack.git
                            </code>
                            <br />
                            <p className="text-center md:text-left lg:text-left">2. Install the required Packages</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                cd starter-pack
                            </code>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                npm install
                            </code>
                            <br />
                            <p className="text-center md:text-left lg:text-left">3. Start the development server</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                npm start
                            </code>
                            <br />
                            <p className="text-center md:text-left lg:text-left">Open the project in your browser to view your project</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 text-xs md:text-base lg:text-base text-red-600">https://localhost:3000</code>

                        </div>

                        <div className="lg:w-[80%] md:w-[90%] w-full p-10 md:p-40 lg:p-50 flex flex-col gap-1">
                            <h1 className="text-xl font-semibold sm:text-center">Basic Commands of Github</h1>
                            <br />
                            <p className="text-center md:text-left lg:text-left">1. Initialize a new Git repository locally</p>
                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                git init
                            </code>
                            <br />
                            <p className="text-center md:text-left lg:text-left">2. Add all files to repository</p>

                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                git add .
                            </code>

                            <br />
                            <p className="text-center md:text-left lg:text-left">3. Commit the changes</p>

                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                git commit -m "Initial commit"
                            </code>
                            <br />
                            <p className="text-center md:text-left lg:text-left">4. Link the local repository to a remote repository on Github</p>

                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                git remote add origin 'repository_URL'
                            </code>
                            <br />
                            <p className="text-center md:text-left lg:text-left">5. Push the changes to Github</p>

                            <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-xs md:text-base lg:text-base text-red-600">
                                git push -u origin master
                            </code>
                        </div>
                        <Toaster />

                    </div>

                )
                    :
                    (<NotFound />)
            }</div>
    );
};

export default Github;
