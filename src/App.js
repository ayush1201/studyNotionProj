import "./App.css";
import Navbar from "./components/Navbar"
import React, { useState } from "react";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute"

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (

    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={

        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        }/>

      </Routes>
    </div>
  )
}

export default App;
