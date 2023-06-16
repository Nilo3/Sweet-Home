import axios from "axios";
import { GET_PRODUCTS } from "./action-types";
const productEndpoint = "http://localhost:3001/api/product"

export function getProducts() {
    return async function (dispatch) {
        let response = await axios.get(productEndpoint); // exactly where back end and front end connect
        return dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        });
    };
}