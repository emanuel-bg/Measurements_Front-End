const user = {
   name: "Emanuel Barrientos Guerrero",
   username: "Emanuel",
   email: "ema@gmail.com",
};

export function simulateLogin(email, password) {
   return new Promise((resolve, reject) => {
      if (email === user.email && password === "Ema123!") {
         resolve(user);
      } else {
         reject(new Error("Credenciales incorrectas"));
      }
   });
}

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/ruta_de_autenticacion', {
//         email: email,
//         password: password,
//       });
// setUser(response.data)
//     } catch (error) {
//       console.error('Error de autenticación', error);
//     }
//   }
