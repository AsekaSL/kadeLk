import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import { ToastContainer } from "react-toastify"
import ForgetPassword from "./pages/ForgetPassword"

function App() {
  return(
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
      </Routes>
    </div>
  )
}

export default App
