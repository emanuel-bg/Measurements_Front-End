import { instance } from "./instance";
import setMeasureFormData from "../utils/setMeasureFormData";

export default async function putMeasure(measure) {
    const formdata = setMeasureFormData(measure);
    const response = await instance.put(
        `/measurements/${measure.id}`,
        formdata
    );
    return response.data;
}
