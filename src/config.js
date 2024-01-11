let apiUrl = "";
//DUDA PENDIENTE, COMO HACER QUE EL PROYECTO LEA UN .ENV

if (process.env.NODE_ENV === "production") {
    apiUrl = process.env.REACT_APP_PROD_API_URL; //PROD_API_URL; // TODO read from .env
} else {
    apiUrl =process.env.REACT_APP_DEV_API_URL; //DEV_API_URL; // TODO read from .env
}

console.log(apiUrl)
export const timezone = "America/Costa_Rica"; //process.env.USER_TIMEZONE
export const API_URL = apiUrl;
