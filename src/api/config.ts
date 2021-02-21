import { default as baseAxios } from "axios";

export const axios = baseAxios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
