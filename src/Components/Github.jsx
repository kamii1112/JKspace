import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Github = () => {
    const handleCopyClick = (event) => {
        const command = event.target.textContent.trim();
        navigator.clipboard.writeText(command);
        toast.success("text copied");
        console.log("copied");
    };

    return (
        <div className="w-full">
            <div className="w-[80%] mx-auto p-40 flex flex-col gap-1 lg:h-[100vh] sm:w-full sm:p-10 sm:mt-52 md:mt- lg:mt-20">


                <h1 className="text-xl font-semibold sm:text-center">This starter pack includes a basic setup for using Tailwind CSS with React. <br /> To start building your own components and styles, follow these steps:</h1>
                <br />
                <p>1. Clone the repository to your local machine.</p>
                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    git clone https://github.com/kamii1112/starter-pack.git
                </code>
                <br />
                <p>2. Install the required Packages</p>
                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-red-600">
                    cd starter-pack
                </code>
                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    npm install
                </code>
                <br />
                <p>3. Start the development server</p>
                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md text-red-600">
                    npm start
                </code>
                <br />
                <p>Open the project in your browser to view your project</p>
                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5  text-red-600">https://localhost:3000</code>
            </div>
            <div className="xl:hidden lg:hidden md:block sm:block w-[40%] h-[1px] bg-slate-300 mx-auto">

            </div>
            <div className=" px-20 pt-40 w-[80%] mx-auto flex flex-col gap-1 lg:h-[90vh] sm:w-full sm:p-10 ">
                <h1 className="text-xl font-semibold sm:text-center">Basic Commands of Github</h1>
                <br />
                <p>1. Initialize a new Git repository locally</p>
                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    git init
                </code>
                <br />
                <p>2. Add all files to repository</p>

                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    git add .
                </code>

                <br />
                <p>3. Commit the changes</p>

                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    git commit -m "Initial commit"
                </code>
                <br />
                <p>4. Link the local repository to a remote repository on Github</p>

                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    git remote add origin 'repository_URL'
                </code>
                <br />
                <p>5. Push the changes to Github</p>

                <code onClick={handleCopyClick} className="bg-slate-100 p-1 cursor-pointer pl-5 rounded-md  text-red-600">
                    git push -u origin master
                </code>
            </div>
            <Toaster />
        </div>
    );
};

export default Github;
