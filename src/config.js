let apiUrl = "";
//DUDA PENDIENTE, COMO HACER QUE EL PROYECTO LEA UN .ENV

if (process.env.NODE_ENV === "production") {
   apiUrl = "http://localhost:8000"//PROD_API_URL; // TODO read from .env
} else {
   apiUrl = "http://localhost:3001"//DEV_API_URL; // TODO read from .env
}

export const timezone="America/Costa_Rica"//process.env.USER_TIMEZONE
export const API_URL = apiUrl;
