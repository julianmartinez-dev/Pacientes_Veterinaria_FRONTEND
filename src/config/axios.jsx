import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.vite_backend_url}/api`
})

export default clienteAxios;