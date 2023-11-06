import React, { useState } from "react";
import { simulateLogin } from "../../utils/CallApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { validateEmail, validatePassword } from "../../utils/Validations";
// import axios from "axios";

function UserLogin(props) {
   const userData_InitialState = {
      email: "",
      password: "",
   };

   const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      setuserData((prevalue) => {
         return { ...prevalue, [name]: value };
      });
   };

   const dispatch = useDispatch();
   const [userData, setuserData] = useState(userData_InitialState);
   const [formError, setFormError] = useState({});

   const handleLogin = async (e) => {
      e.preventDefault();

      setFormError({});
      let errors = {};
      let formOk = true;

      if (!validateEmail(userData.email)) {
         errors.email = true;
         errors.emailText = "Invalid email format";
         formOk = false;
      }
      if (!validatePassword(userData.password)) {
         errors.password = true;
         errors.passwordText =
            "The password does not meet the password policy requirements";
         formOk = false;
      }
      setFormError(errors);
      if (formOk) {
         simulateLogin(userData.email, userData.password)
            .then((user) => {
               dispatch(addUser(user));
               console.log("Inicio de sesión exitoso:", user);
            })
            .catch((error) => {
               // Maneja errores de autenticación
               console.error("Error de inicio de sesión:", error.message);
            });
      }
   };

   return (
      <div className="container ">
         <div className="row d-flex justify-content-center vh-100 align-items-center">
            <div className="col-md-4">
               <form id="loginform" onSubmit={handleLogin}>
                  <div className="form-group">
                     <label>Email address</label>
                     <input
                        type="email"
                        className="form-control"
                        id="EmailInput"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChange}
                     />
                     {formError.email && (
                        <span className="text-danger">
                           {formError.emailText}
                        </span>
                     )}
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                     />
                     {formError.password && (
                        <span className="text-danger">
                           {formError.passwordText}
                        </span>
                     )}
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                     Sign in
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default UserLogin;
