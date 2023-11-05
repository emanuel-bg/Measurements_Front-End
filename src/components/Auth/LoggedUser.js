import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../LoggedUser/NavBar";
import Home from "../LoggedUser/Home";
import About from "../LoggedUser/About";
import Profile from "../LoggedUser/Profile";
export default function LoggedUser(props) {
   const user = useSelector((state) => state.user);
   return (
      <>
         {" "}
         <div>
            <BrowserRouter>
               <div className="vh-100">
                  <NavBar />
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/about" element={<About />} />
                     <Route path="/profile" element={<Profile />} />
                  </Routes>
               </div>
            </BrowserRouter>
         </div>
      </>
   );
}
