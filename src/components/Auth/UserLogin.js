import React, { useState } from "react";
import { simulateLogin } from "../../utils/CallApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
// import axios from "axios";

function UserLogin(props) {
   const dispatch = useDispatch();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordError, setpasswordError] = useState("");
   const [emailError, setemailError] = useState("");
 
   const handleLogin = async (e) => {
      e.preventDefault();
      simulateLogin(email, password)
         .then((user) => {
            dispatch(addUser(user));
            console.log("Inicio de sesión exitoso:", user);
         })
         .catch((error) => {
            // Maneja errores de autenticación
            console.error("Error de inicio de sesión:", error.message);
         });
   };

   return (
      <div className="container">
        <div className="row d-flex justify-content-center vh-100 align-items-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
   );
}

export default UserLogin;
