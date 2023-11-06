import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { initialState } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const UserLogout = () => {
      dispatch(addUser(initialState));
      navigate("/");
   };

   return (
      <>
         Signed in as:
         <button title="Cerrar Sesion" className="btn" onClick={UserLogout}>
            {user.username}
         </button>
      </>
   );
}

export default Logout;
