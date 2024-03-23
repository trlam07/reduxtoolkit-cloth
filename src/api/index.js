import Axios from "axios";
import { PRODUCT_URL } from "../constants";

const fakeApi = () => {
    return Axios.create({
        baseURL: PRODUCT_URL
    })
}

export default fakeApi;