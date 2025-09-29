import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
export const UsersAPI = {
  list: () => api.get("/items"),
  create: (data) => api.post("/items", data),
  update: (id, data) => api.put(`/items/${id}`, data),
  remove: (id) => {
    console.log(" Sending delete request to:", `/items/${id}`);
    return api.delete(`/items/${id}`);
  },
};

