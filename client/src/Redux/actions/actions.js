import axios from "axios";
import { GET_CATEGORY, GET_PRODUCTS, GET_PRODUCT_DETAIL, MOST_VALUED_FILTER, FILTER_BY_NAME, FILTER_BY_PRICE, FILTER_BY_CATEGORY, SEARCH_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART } from "../action-types/action-types";

const HOST = "http://localhost:3001"

export function getProducts() {
    return async function (dispatch) {
        let response = await axios.get(`${HOST}/api/product`)
        return dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        })
    }
}

export function getProductDetail(id) {
    return async function (dispatch) {
        try {
            let response = await axios.get(`${HOST}/api/product/${id}`)
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getReviews() {
    return async function (dispatch) {
        let response = await axios.get(`${HOST}/api/review`)
        return dispatch({
            type: MOST_VALUED_FILTER,
            payload: response.data
        })
    }
}

export const filterByName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload
    }
}

export const filterByPrice = (payload) => {
    return {
        type: FILTER_BY_PRICE,
        payload
    }
}

export const getCategory = () => {
    return async function (dispatch) {
        try {
            let response = await axios(`${HOST}/api/category`)

            return dispatch({
                type: GET_CATEGORY,
                payload: response.data
            })

        } catch (error) {
            return {
                error: "No category found",
                originalError: error,
            }

        }
    }
}

export const filterByCategory = (payload) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload
    }
}


export const searchProducts = (searchTerm) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: searchTerm
    }
}

export const addtoCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removefromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}

export function postUser(payload) {
    return async function () {
        const response = await axios.post(`${HOST}api/users`, payload)
        return response

    }
}

export function getAllUsers() {
    return async function () {
        try {
            const response = await axios.get(`${HOST}api/users`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}
