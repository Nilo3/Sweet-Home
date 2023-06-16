import axios from "axios";
import { GET_PRODUCTS, PRODUCTS_PAGINATION, GET_PRODUCT_DETAIL } from "../../action-types/action-types";

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

export function getProductDetail(id){
    return async function (dispatch){
        try{

            let response = await axios.get(`${HOST}/api/product/` + id)
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: response.data
            })

        } catch(error) {
            console.log(error)
        }
    }
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

