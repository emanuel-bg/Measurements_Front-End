import { instance } from "./instance";

export async function Login(user) {
   const response = await instance.post("/users/login", user);
   return response.data;
}
export async function getMeasures() {
   const response = await instance.get("/measurements");
   return response.data;
}

export async function postMeasure(measure) {
   const response = await instance.post("/measurements", measure);
   return response.data;
}

export async function putMeasure(measure) {
   const response = await instance.put("/measurements", measure);
   return response.data;
}
export async function deleteMeasure(measureId) {
   const response = await instance.delete("/measurements/" + measureId);
   return response.data;
}
