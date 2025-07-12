import { useContext } from "react";
import HomeSection from "../components/homesection/HomeSection";
import Nav from "../components/nav/Nav";
import Search from "../components/Search/Search";
import { AppCotext } from "../context/AppContext";
import Login from "./Login";
import Footer from "../components/footer/Footer";


function Home() {

    const {isSelectLogin , setIsSelectLogin} = useContext(AppCotext);

    return(
        <div className="flex flex-col m-3">
            <Nav />
            <Search/>
            {isSelectLogin ? <Login/> :  <HomeSection/>}
            <Footer/>
        </div>
    );
}

export default Home;