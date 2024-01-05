let apiUrl = "";

if (process.env.NODE_ENV == "production") {
   apiUrl = "http://localhost:8000"; // TODO read from .env
} else {
   apiUrl = "http://localhost:3001"; // TODO read from .env
}

export const API_URL = apiUrl;
