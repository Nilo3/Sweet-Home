import { GET_PRODUCTS } from "../../action-types/action-types";

const initialState = {
	products: [],
	loading: false,
	error: null,
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
				loading: false,
			};
		case 'GET_PRODUCTS_LOADING':
			return {
				...state,
				loading: true,
			};
		case 'GET_PRODUCTS_ERROR':
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default productReducer;
