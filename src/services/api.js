import axios from "axios";

const userApi = axios.create({
  baseURL: "https://64ac076b9edb4181202f00e9.mockapi.io",
});

export const fetchAllUsers = async () => {
  const { data } = await userApi.get("/users");
  return data;
};
