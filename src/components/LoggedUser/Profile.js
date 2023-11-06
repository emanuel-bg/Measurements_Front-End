import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Profile() {


   const user=useSelector((state)=>(state.user))
   return (
      <>
         <div className="bg-dark h-100">
            <div className="row h-100 flex justify-content-center p-5">
               <div className="col-3">
                  <div className="card p-2">
                     <img
                        src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                        className="align-self-center"
                        alt="Imagen de perfil"
                        width={100}
                        height={100}
                     />
                     <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">
                           {user.email}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
