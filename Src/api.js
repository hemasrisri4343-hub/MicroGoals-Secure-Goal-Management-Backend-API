import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getGoals = () => API.get("/goals");
export const createGoal = (goal) => API.post("/goals", goal);
export const deleteGoal = (id) => API.delete(`/goals/${id}`);
