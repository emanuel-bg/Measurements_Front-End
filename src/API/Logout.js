// TODO rename to logout.js (lower case )
import { instance } from "./instance";

export default async function Logout() {
   const response = await instance.post("/users/logout");
   return response.data;
}
