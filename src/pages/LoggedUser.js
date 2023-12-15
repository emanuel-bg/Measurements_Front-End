import React from "react";
import NavBar from "../components/NavBar";
import Content from "../routes/routes";
import { useDispatch } from "react-redux";
import { verifySession } from "../redux/userSlice";
import { useEffect } from "react";



export default function LoggedUser(props) {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(verifySession())
   }, []);
   
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
