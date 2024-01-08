import validateMeasureAmount from "./validateMeasureAmount";
export default function validateMeasurement(measureData) {
    let errors = {};
    if (!validateMeasureAmount(measureData.amount.toString())) {
        errors.amount = "Invalid measure amount";
        //Only numbers available
    }
    if (!measureData.calendarDate) {
        errors.date = "Invalid date";
        //Only numbers available
    }
    return errors;
}
