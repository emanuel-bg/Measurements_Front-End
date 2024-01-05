import { instance } from "./instance";

export default async function getMeasures() {
   const response = await instance.get("/measurements");
   return response.data;
}
