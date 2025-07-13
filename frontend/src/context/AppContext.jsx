import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppCotext = createContext();

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true;

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [userData, setUserData] = useState(false);
    const [isSelectLogin, setIsSelectLogin] = useState(false);

    const getUserData = async () => {

        axios.defaults.withCredentials = true;
        
            try {
                const {data} = await axios.get(backendUrl + '/api/customer/data');
                if (data.success) {
                    setUserData(data.userData);
                    setIsLoggedin(true);
                } 

            } catch (error) {
                toast.error(error.message);
            }
    }

    const getSellerData = async () => {
        axios.defaults.withCredentials = true;
        try {
                const {data} = await axios.get(backendUrl + '/api/vendor/get');
                if (data.success) { 
                    setUserData(data.userData);
                    setIsLoggedin(true);
                    setIsSeller(true);
                }

            } catch (error) {
                toast.error(error.message);
        }
    }

    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        isSelectLogin, setIsSelectLogin,
        getUserData, getSellerData,
        isSeller, setIsSeller
    }

    return(
        <AppCotext.Provider value={value}>
            {props.children}
        </AppCotext.Provider>
    );

};