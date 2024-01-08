import format from "date-fns/format";
import { utcToZonedTime } from "date-fns-tz";
import { timezone } from "../config";
export default function formattedDate(date) {
    const formattedDate = date
        ? format(
              utcToZonedTime(+date * 1000, timezone),
              "dd/MM/yyyy hh:mm a"
          ).toString()
        : "";
    return formattedDate;
}
