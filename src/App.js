import React from "react";
import UserLogin from "./components/Auth/UserLogin";
import LoggedUser from "./components/Auth/LoggedUser";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   const user = useSelector((state) => state.user);
   console.log(user);
   return <><div className="bg-dark">
   {!user.name ? <UserLogin /> : <LoggedUser />}
   </div>
   </>;
}

export default App;
