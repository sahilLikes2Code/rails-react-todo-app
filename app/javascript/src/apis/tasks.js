import axios from "axios";

const create = payload => axios.post("/tasks/", payload);

const list = () => axios.get("/tasks");

const show = slug => axios.get(`/tasks/${slug}`);

const tasksApi = { create, list, show };

export default tasksApi;
