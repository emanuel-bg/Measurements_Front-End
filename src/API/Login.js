import { instance } from "./instance";

export default async function Login(user) {
   const response = await instance.post("/users/login", user);
   return response.data;
}
