import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import { ToastContainer } from "react-toastify"
import ForgetPassword from "./pages/ForgetPassword";
import ShopListing from "./pages/ShopListing";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/UserProfile";
import SellerDashboard from "./pages/SellerDahboard.jsx";

function App() {
  return(
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/products" element={<ShopListing/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/sellerDashboard" element={<SellerDashboard/> } />
      </Routes>
    </div>
  )
}

export default App
