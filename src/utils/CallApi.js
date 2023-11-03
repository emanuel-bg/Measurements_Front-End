
export function simulateLogin(email,password) {
    return new Promise((resolve, reject) => {
      if (email =="ema@gmail.com" && password == "123") {
        const user = {name:"EMANUEL",username:"ema", email: "ema@gmail.com" };
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
  
  