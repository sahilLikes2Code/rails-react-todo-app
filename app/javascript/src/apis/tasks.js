import axios from "axios";

const create = payload => axios.post("/tasks/", payload);

const list = () => axios.get("/tasks");

const tasksApi = { create, list };

export default tasksApi;
