const hostname = window.location.hostname;
const isLocalhost =
  hostname === "localhost" ||
  hostname === "127.0.0.1" ||
  hostname.startsWith("192.168.");

const API_BASE_URL = isLocalhost
  ? "http://localhost:3000" 
  : "https://my-backend.onrender.com";

window.Backend_URL = API_BASE_URL;
