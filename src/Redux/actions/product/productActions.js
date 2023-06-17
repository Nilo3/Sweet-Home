import axios from "axios";
import { GET_PRODUCTS, PRODUCTS_PAGINATION } from "../../action-types/action-types";


const HOST = "http://localhost:3001"

export function getProducts() {
    return async function (dispatch) {
        let response = await axios.get(`${HOST}/api/product`); // exactly where back end and front end connect
        return dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        });
    };
}

export function getPagination(id) {
    return async function (dispatch) {
        let response = await axios.get(`${HOST}/api/product?page=${id}`); // exactly where back end and front end connect
        return dispatch({
            type: PRODUCTS_PAGINATION,
            payload: response.data
        });
    };
}