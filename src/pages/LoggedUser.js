import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import Content from "../routes/routes";

export default function LoggedUser(props) {
   return (
      <>
         {" "}
         <div>
            <BrowserRouter>
               <div className="text-light">
                  <NavBar />
                  <Content />
               </div>
            </BrowserRouter>
         </div>
      </>
   );
}
