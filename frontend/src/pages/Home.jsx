import { useContext, useEffect } from "react";
import HomeSection from "../components/homesection/HomeSection";
import Nav from "../components/nav/Nav";
import Search from "../components/Search/Search";
import { AppCotext } from "../context/AppContext";
import Footer from "../components/footer/Footer";


function Home() {

    const {isSeller, isLoggedin, getUserData, getSellerData} = useContext(AppCotext);

    useEffect(() => {
        getSellerData();
        getUserData();
    },[]);

    return(
        <div className="flex flex-col m-3">
            <Nav />
            <Search/>
            <HomeSection/>
            <Footer/>
        </div>
    );
}

export default Home;