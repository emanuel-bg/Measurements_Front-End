import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../LoggedUser/NavBar";
import Content from "../../routes/Content";

export default function LoggedUser(props) {
   return (
      <>
         {" "}
         <div>
            <BrowserRouter>
               <div className="text-light vh-100">
                  <NavBar />
                  <Content />
               </div>
            </BrowserRouter>
         </div>
      </>
   );
}
