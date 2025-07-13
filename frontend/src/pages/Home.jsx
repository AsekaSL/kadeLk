import { useContext, useEffect } from "react";
import HomeSection from "../components/homesection/HomeSection";
import Nav from "../components/nav/Nav";
import Search from "../components/Search/Search";
import { AppCotext } from "../context/AppContext";
import Login from "./Login";
import Footer from "../components/footer/Footer";
import ShopListing from "./ShopListing";
import ProductCard from "./ProductCard";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import OrderConfirmation from "./OrderConfirmation";
import SellerDashboard from "./SellerDahboard";
import AddProduct from "./AddProducts";
import SellerProfile from "./SellerProfile";
import UserProfile from "./UserProfile";
import ProductProfile from "./ProductProfile";


function Home() {

    const {isSelectLogin, isLoggedin, getUserData} = useContext(AppCotext);

    useEffect(() => {
        getUserData();
    },[]);

    return(
        <div className="flex flex-col m-3">
            <Nav />
            <Search/>
                {
                    isLoggedin ? <ShopListing/> : (isSelectLogin)  ? <Login/> :  <HomeSection/>
                }

            <Footer/>
        </div>
    );
}

export default Home;