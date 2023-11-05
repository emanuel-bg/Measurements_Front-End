import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { initialState } from "../../redux/userSlice";
import { useSelector } from "react-redux";
function Logout() {
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();

   const UserLogout = () => {
      dispatch(addUser(initialState));
   };

   return (
      <>
         Signed in as:{" "}
         <a title="Cerrar Sesion" href="" onClick={UserLogout}>
            {user.username}
         </a>
      </>
   );
}

export default Logout;
