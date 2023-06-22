import axios from "axios";
import { GET_USER } from "../../action-types/action-types";


const HOST = "http://localhost:3001"

export function getUser() {
    return async function (dispatch) {
        let response = await axios.get(`${HOST}/api/user`);
        return dispatch({
            type: GET_USER,
            payload: response.data
        });
    };
}