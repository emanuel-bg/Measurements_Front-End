import React, { useState } from "react";
import UserLogin from "./components/Auth/UserLogin";
import LoggedUser from "./components/Auth/LoggedUser";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   const user = useSelector((state) => state.user);
   console.log(user);
   return <>{!user.name ? <UserLogin /> : <LoggedUser />}</>;
}

export default App;
