import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import { Navigate, Route, Routes } from "react-router-dom";
import NewMeasure from "./pages/NewMeasure";
import EditMeasure from "./pages/EditMeasure";
import ViewMeasure from "./pages/ViewMeasure";

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/measures" element={<Navigate to="/" />} />
            <Route path="/measure">
                <Route path="" element={<NewMeasure />} />
                <Route path="new" element={<NewMeasure />} />
                <Route path="view/:id" element={<ViewMeasure />} />
            </Route>
            <Route path="/measure/:id" element={<EditMeasure />} />
            <Route path="/measures/:id" element={<EditMeasure />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
