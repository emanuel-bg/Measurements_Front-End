import React from "react";
import UserLogin from "./components/Auth/UserLogin";
import LoggedUser from "./pages/LoggedUser";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import "./css/bg.css"

function App() {
   const user = useSelector((state) => state.user);
   return <><div className="bg-dark W-100">
   {!user.name ? <UserLogin /> : <LoggedUser />}
   </div>
   </>;
}

export default App;
