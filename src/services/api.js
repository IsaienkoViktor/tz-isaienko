import axios from "axios";

const userApi = axios.create({
  baseURL: "https://64ac076b9edb4181202f00e9.mockapi.io",
});

export const fetchAllUsers = async () => {
  const { data } = await userApi.get("/users");
  return data;
};

export const editUser = async (id, user) => {
  const { data } = await userApi.put(`/users/${id}`, user);
  return data;
};

export const fetch = async () => {
  const response = await axios.get(
    "https://64ac30839edb4181202f410a.mockapi.io/users"
  );
  console.log(response);
  return response.data;
};
