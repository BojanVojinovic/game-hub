import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "ab886111d0d246a283fc9ceb46437268"
    }
})