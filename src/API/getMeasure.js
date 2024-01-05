import { instance } from "./instance";

export default async function getMeasures(measureId) {
   const response = await instance.get("/measurements/" + measureId);
   debugger // TODO remove debugger
   return response.data;
}
