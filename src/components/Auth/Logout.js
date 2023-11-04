import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { initialState } from "../../redux/userSlice";
function Logout() {
   const dispatch = useDispatch();

   const onclick = () => {
      dispatch(addUser(initialState));
   };

   return (
      <div>
         <h2>Cerrar sesión</h2>
         <p>¿Estás seguro de que deseas cerrar sesión?</p>
         <button onClick={onclick}>Cerrar sesión</button>
      </div>
   );
}

export default Logout;
