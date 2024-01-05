// TODO consider refactor post/put since both create a formdata object
import { instance } from "./instance";

export default async function postMeasure(measure) {
   const formdata = new FormData();

   formdata.append("amount", measure.amount);
   formdata.append("date", measure.date);
   formdata.append("measuredby", measure.measuredby);
   formdata.append("userId", measure.userId);
   formdata.append("image", "");
   formdata.append("created_at", Date.now() / 1000);
   formdata.append("updated_at", Date.now() / 1000);

   const response = await instance.post("/measurements", formdata);
   return response.data;
}
