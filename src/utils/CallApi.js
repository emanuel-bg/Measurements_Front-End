// const api = axios.create({
//    baseURL: '',
//    timeout: 1000,
//    headers: {'X-Custom-Header': 'foobar'}
//  });
import { useSelector } from "react-redux/es/hooks/useSelector";
const user = {
   name: "Emanuel Barrientos Guerrero",
   username: "Emanuel",
   email: "ema@gmail.com",
};
const data = [
   { id: "1", amount: "1", date: "23", measuredby: "Ema123", userId: "123" },
   { id: "2", amount: "1", date: "23", measuredby: "Ema123", userId: "123" },
   { id: "3", amount: "1", date: "23", measuredby: "Ema123", userId: "123" },
   { id: "4", amount: "1", date: "23", measuredby: "Ema123", userId: "123" },
   { id: "5", amount: "1", date: "23", measuredby: "Ema123", userId: "123" },
];
export function simulateLogin(email, password) {
   return new Promise((resolve, reject) => {
      if (email === user.email && password === "Ema123!") {
         resolve(user);
      } else {
         reject(new Error("Credenciales incorrectas"));
      }
   });
}
export async function getMeasures() {
   return new Promise((resolve, reject) => {
      try {
         const response = data
         resolve(response);
      } catch (error) {}
   });
}
export async function postMeasure(measure) {
   return new Promise((resolve, reject) => {
      try {
         const response = measure
         console.log(measure)
         resolve(measure);
      } catch (error) {
         throw error;
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
