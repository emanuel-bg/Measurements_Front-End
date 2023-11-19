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
   if (measure.image.constructor === Object) {
      const formdata = new FormData();
      formdata.append("id", measure.id);
      formdata.append("amount", measure.amount);
      formdata.append("date", measure.date);
      formdata.append("measuredby", measure.measuredby);
      formdata.append("userId", measure.userId);
      formdata.append("imageName", "");

      const response = await instance.post("/measurements", formdata);
      return response.data;
   } else {
      debugger
      const formdata = new FormData();
      formdata.append("id", measure.id);
      formdata.append("amount", measure.amount);
      formdata.append("date", measure.date);
      formdata.append("measuredby", measure.measuredby);
      formdata.append("userId", measure.userId);
      formdata.append("imageName", measure.image.name);
      formdata.append("image", measure.image);
      const response = await instance.post(
         "/measurements/postwithImage",
         formdata
      );
      return response.data;
   }
}

export async function putMeasure(measure) {
   const formdata = new FormData();
   debugger
      formdata.append("amount", measure.amount);
      formdata.append("date", measure.date);
      formdata.append("measuredby", measure.measuredby);
      formdata.append("userId", measure.userId);
      formdata.append("imageName", "");
   const response = await instance.put(`/measurements/${measure.id}`, formdata);
   return response.data;
}
export async function deleteMeasure(measureId) {
   const response = await instance.delete(`/measurements/${measureId}`);
   return response.data;
}
