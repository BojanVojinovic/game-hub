import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "bb879f4b5532428190bf32fe7c2d2862"
    }
})