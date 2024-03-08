import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.BACK_END_URL}`,
});

export const localApi = axios.create({
  baseURL: "http://localhost:3000",
});