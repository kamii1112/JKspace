import { createContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const loginUsername = 'JKSpace';
    const loginPassword = 'JK1112';
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [login, setLogin] = useState(false);

    const submitHandler = () => {
        if (username === loginUsername && password === loginPassword) {
            setLogin(true);
            console.log("toast aana hein");
            toast.success("Login Successfully");
        }
        else {
            toast.error("Invalid Credentials");
        }
    };

    const loginHandler = () => {
        if(login){
            setLogin(false);
            toast.success("Logout Successfully");
        }
    }

    const value = {
        loginUsername,
        loginPassword,
        username, setUsername,
        password, setPassword,
        showPassword, setShowPassword,
        login, setLogin,
        submitHandler, loginHandler,
    }


    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}