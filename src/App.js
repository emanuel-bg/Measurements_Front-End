import React from "react";
import UserLogin from "./components/Auth/UserLogin";
import LoggedUser from "./pages/LoggedUser";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const user = useSelector((state) => state.user);

    return (
        <>
            <BrowserRouter>
                <div className="bg-dark W-100">
                    {!user.token ? <UserLogin /> : <LoggedUser />}
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
