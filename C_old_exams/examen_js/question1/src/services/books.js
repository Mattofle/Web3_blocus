import axios from "axios";

const baseUrl = "http://localhost:3000/books";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const update = (id, newObject) => {
    const request = axios.patch(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
};


export default { getAll, update };