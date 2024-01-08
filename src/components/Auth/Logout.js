import React from "react";
import { useDispatch } from "react-redux";
import { Logout as LogoutAction } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UserLogout = () => {
        dispatch(LogoutAction());
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
