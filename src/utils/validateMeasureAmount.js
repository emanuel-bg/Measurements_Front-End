import validateJustNumbers from "./validateJustNumbers";
import NoSpacesAndNull from "./noSpacesAndNull";
export default function validateMeasureAmount(amount) {
    return validateJustNumbers(amount) && NoSpacesAndNull(amount);
}
