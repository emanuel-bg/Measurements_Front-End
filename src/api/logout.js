
import { instance } from "./instance";

export default async function logout() {
   const response = await instance.post("/users/logout");
   return response.data;
}
