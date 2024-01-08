import { instance } from "./instance";

export default async function deleteMeasure(measureId) {
    const response = await instance.delete(`/measurements/${measureId}`);
    return response.data;
}
