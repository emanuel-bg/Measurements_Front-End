let apiUrl = "";
if (process.env.NODE_ENV == "production") {
   apiUrl = "http://localhost:8000";
} else {
   apiUrl = "http://localhost:3001";
}

export const API_URL = apiUrl;
