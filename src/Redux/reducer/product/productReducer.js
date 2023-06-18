import { GET_PRODUCTS, PRODUCTS_PAGINATION,GET_PRODUCT_DETAIL,MOST_VALUED_FILTER } from "../../action-types/action-types";
import { productAVG } from "./logic-ratings";

const initialState = {
	products: [],
	loading: false,
	error: null,
	pageIndex: 1,
	pages: {
		next: null,
		prev: null,
		current: 1,
		limit: null,
	},
	activeProductDetail: null,
	detail:{},
	reviews:[]
};

const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
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
				error: payload,
				loading: false,
			};
		case PRODUCTS_PAGINATION:
			return {
				...state,
				products: payload,
			};

			case GET_PRODUCT_DETAIL:
            return{
                ...state,
                detail: payload
            }
			
	
		case MOST_VALUED_FILTER:
			return {
				...state,
				reviews:  productAVG(state.reviews)
			}

		default:
			return state;
	}
};

export default productReducer;
