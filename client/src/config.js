const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000" // local backend
    : "https://projectblog-server.vercel.app"; // deployed backend

export default API_BASE_URL;
