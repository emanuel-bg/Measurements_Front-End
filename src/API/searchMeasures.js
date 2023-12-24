import  {instance}  from "./instance";
export default async function searchMeasures(search) {
    const response = await instance.post("/measurements/search",search);
    return response.data;
 }