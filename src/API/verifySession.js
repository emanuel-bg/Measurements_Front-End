import { instance } from "./instance";

export default async function verifySession() {
   const response = await instance.post("/users/me");
   debugger // TODO remove debugger
   return response.data;
}
