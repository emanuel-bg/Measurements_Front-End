import { instance } from "./instance";

export async function Login(user) {
   const response = await instance.post("/users/login", user);
   return response.data;
}
export async function getMeasures() {
   const response = await instance.get("/measurements");
   return response.data;
}
export async function searchMeasures(search) {
   debugger
   const response = await instance.post("/measurements/search",search);
   return response.data;
}

export async function postMeasure(measure) {
   const formdata = new FormData();
   formdata.append("amount", measure.amount);
   formdata.append("date", measure.date);
   formdata.append("measuredby", measure.measuredby);
   formdata.append("userId", measure.userId);
   formdata.append("image", "");
   formdata.append("created_at",Date.now()/1000);
   formdata.append("updated_at",Date.now()/1000);
   const response = await instance.post("/measurements", formdata);
   return response.data;
}

export async function putMeasure(measure) {
   const formdata = new FormData();
   formdata.append("amount", measure.amount);
   formdata.append("date", measure.date);
   formdata.append("measuredby", measure.measuredby);
   formdata.append("userId", measure.userId);
   formdata.append("imageName", "");
   formdata.append("updated_at",Date.now()/1000);
   const response = await instance.put(`/measurements/${measure.id}`, formdata);
   return response.data;
}
export async function deleteMeasure(measureId) {
   const response = await instance.delete(`/measurements/${measureId}`);
   return response.data;
}
