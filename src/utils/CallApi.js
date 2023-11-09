// const api = axios.create({
//    baseURL: '',
//    timeout: 1000,
//    headers: {'X-Custom-Header': 'foobar'}
//  });
const user = {
   name: "Emanuel Barrientos Guerrero",
   username: "Emanuel",
   email: "ema@gmail.com",
};
const data = [
   {
      id: "1",
      amount: "200",
      date: "2023-11-26",
      measuredby: "Emmanuel Barrientos",
      userId: "1",
   },
   {
      id: "2",
      amount: "1000",
      date: "2023-11-26",
      measuredby: "Emmanuel Barrientos",
      userId: "1",
   },
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
      const response = data;
      resolve(response);
   });
}
export async function postMeasure(measure) {
   return new Promise((resolve, reject) => {
      try {
         const response = measure;
         console.log(response);
         resolve(measure);
      } catch (error) {
         throw error;
      }
   });
}
export async function putMeasure(measure) {
   return new Promise((resolve, reject) => {
      try {
         const response = measure;
         resolve(response);
      } catch (error) {
         throw error;
      }
   });
}
export async function deleteMeasure(measureId) {
   return new Promise((resolve, reject) => {
      try {
         const response = measureId;
         resolve(response);
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
