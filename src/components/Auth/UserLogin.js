import React, { useState } from "react";
import { simulateLogin } from "../../utils/CallApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
// import axios from "axios";

function UserLogin(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default UserLogin;
