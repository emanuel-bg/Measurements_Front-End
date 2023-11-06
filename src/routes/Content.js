import React from "react";
import Home from "../components/LoggedUser/Home";
import About from "../components/LoggedUser/About";
import Profile from "../components/LoggedUser/Profile";
import Error404 from "../components/LoggedUser/Error404";
import { Route, Routes } from "react-router-dom";

export default function Content() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="*" element={<Error404 />} />
      </Routes>
   );
}
