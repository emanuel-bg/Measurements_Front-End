export default function setMeasureFormData(measure) {
    const formdata = new FormData();
    formdata.append("amount", measure.amount);
    formdata.append("date", measure.date);
    formdata.append("measuredby", measure.measuredby);
    formdata.append("userId", measure.userId);
    formdata.append("image", "");
    return formdata;
}
