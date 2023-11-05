import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../LoggedUser/NavBar";
import Routes from "../../routes/Content";

export default function LoggedUser(props) {
   return (
      <>
         {" "}
         <div>
            <BrowserRouter>
               <div className="vh-100">
                  <NavBar />
                  <Routes />
               </div>
            </BrowserRouter>
         </div>
      </>
   );
}
