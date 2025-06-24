import redaxios from "redaxios";
const baseURL = "https://youtube-v31.p.rapidapi.com";

const api = redaxios.create({
  baseURL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});

export default api;
