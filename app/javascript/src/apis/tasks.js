import axios from "axios";

const create = payload => axios.post("/tasks/", payload);

const list = () => axios.get("/tasks");

const show = slug => axios.get(`/tasks/${slug}`);

const update = ({ slug, payload }) => axios.put(`/tasks/${slug}`, payload);

const tasksApi = { create, list, show, update };

export default tasksApi;
