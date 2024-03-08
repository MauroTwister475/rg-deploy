import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const localApi = axios.create({
  baseURL: "http://localhost:3000",
});