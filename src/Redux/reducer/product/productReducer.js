//? REDUCER WORK IN PROGRESS

// import { GET_PRODUCTS, PRODUCTS_PAGINATION,GET_PRODUCT_DETAIL } from "../../action-types/action-types";

// const initialState = {
// 	products: [],
// 	loading: false,
// 	error: null,
// 	pageIndex: 1,
// 	pages: {
// 		next: null,
// 		prev: null,
// 		current: 1,
// 		limit: null,
// 	},
// 	activeProductDetail: null,
// 	detail:{}
// };

// const productReducer = (state = initialState, { type, payload }) => {
// 	switch (type) {
// 		case GET_PRODUCTS:
// 			return {
// 				...state,
// 				products: payload,
// 				loading: false,
// 			};
// 		case 'GET_PRODUCTS_LOADING':
// 			return {
// 				...state,
// 				loading: true,
// 			};
// 		case 'GET_PRODUCTS_ERROR':
// 			return {
// 				...state,
// 				error: payload,
// 				loading: false,
// 			};
// 		case PRODUCTS_PAGINATION:
// 			return {
// 				...state,
// 				products: payload,
// 			};

// 			case GET_PRODUCT_DETAIL:
//             return{
//                 ...state,
//                 detail: payload
//             }


// 		default:
// 			return state;
// 	}
// };

// export default productReducer;


//? REDUCER PARA MOSTRAR PRODUCTS

import { GET_PRODUCTS, GET_PRODUCT_DETAIL } from "../../action-types/action-types";

const initialState = {
	products: [],
	details: [],
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
		case GET_PRODUCT_DETAIL:
			return {
				...state,
				details: action.payload
			}
		default: return state;
	}
};

export default productReducer;