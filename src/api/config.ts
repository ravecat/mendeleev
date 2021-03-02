import { default as baseAxios } from "axios";

const { REACT_APP_API_URL, API_URL, NODE_ENV } = process.env;

export const axios = baseAxios.create({
  baseURL: NODE_ENV === "production" ? API_URL : REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
