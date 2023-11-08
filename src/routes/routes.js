import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Error404 from "../pages/Error404";
import { Navigate, Route, Routes } from "react-router-dom";
import NewMeasure from "../pages/NewMeasure";

export default function Content() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/measures" element={<Navigate to="/" />} />
         <Route path="/measure" element={<NewMeasure />}>
            <Route path="new" element={<NewMeasure />} />
         </Route>
         <Route path="*" element={<Error404 />} />
      </Routes>
   );
}
