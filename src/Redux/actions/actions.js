import axios from "axios";
import {GET_PRODUCTS} from "./action-types";
const productEndpoint ="http://localhost:3001/api/product"
import util from "util"

export function getProducts(){
    return async function(dispatch){  
        let response = await axios.get(productEndpoint); // exactly where back end and front end connect
        console.log(util.inspect(response, { showHidden: false, depth: null }));
        return dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        });
    };
}