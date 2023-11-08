import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/userSlice";
import { validateEmail, validatePassword } from "../../utils/Validations";

// import axios from "axios";
function validate(userData) {
   let errors = {};
   if (!validateEmail(userData.email)) {
      errors.emailText = "Invalid email format";
   }
   if (!validatePassword(userData.password)) {
      errors.passwordText =
         "The password does not meet the password policy requirements";
   }

   return errors;
}

function UserLogin() {
   const userDataInitialState = {
      email: "",
      password: "",
   };
   const [userData, setuserData] = useState(userDataInitialState);
   const [formError, setFormError] = useState({});
   const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      setuserData((prevalue) => {
         return { ...prevalue, [name]: value };
      });
   };

   const dispatch = useDispatch();

   const handleLogin = async (e) => {
      e.preventDefault();
      setFormError({});
      const errors = validate(userData);

      setFormError(errors);
      const formOk = Object.keys(errors).length;
      if (!formOk) {
         dispatch(userLogin(userData));
      }
   };

   return (
      <div className="container text-light">
         <div className="row d-flex justify-content-center vh-100 align-items-center">
            <div className="col-md-4">
            <h1 className="text-center">Login</h1>
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
                     {
                        <span className="text-danger">
                           {formError.emailText}
                        </span>
                     }
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
                     {
                        <span className="text-danger">
                           {formError.passwordText}
                        </span>
                     }
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
