import { instance } from "./instance";

export default async function putMeasure(measure) {
    const formdata = new FormData();
    formdata.append("amount", measure.amount);
    formdata.append("date", measure.date);
    formdata.append("measuredby", measure.measuredby);
    formdata.append("userId", measure.userId);
    formdata.append("imageName", "");
    const response = await instance.put(`/measurements/${measure.id}`, formdata);
    return response.data;
 }