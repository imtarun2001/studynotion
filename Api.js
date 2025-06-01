import axios from "axios";

const serverUrl = "https://studynotion-backend-production.up.railway.app";

export const API = axios.create({baseURL: serverUrl,headers:{"Content-Type": "application/json"}});