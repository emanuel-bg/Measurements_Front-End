import React from "react";
import NavBar from "../components/NavBar";
import Content from "../routes/routes";

export default function LoggedUser(props) {
   return (
      <>
         {" "}
         <div>
         
               <div className="text-light">
                  <NavBar />
                  <Content />
               </div>
            
         </div>
      </>
   );
}
