
import setMeasureFormData from "../utils/setMeasureFormData";
import { instance } from "./instance";

export default async function postMeasure(measure) {
   const formdata = setMeasureFormData(measure)
   const response = await instance.post("/measurements", formdata);
   return response.data;
}
