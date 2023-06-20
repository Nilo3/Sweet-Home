//? REDUCER WORK IN PROGRESS
// 
import { GET_PRODUCTS, PRODUCTS_PAGINATION, GET_PRODUCT_DETAIL, MOST_VALUED_FILTER, FILTER_BY_CATEGORY, FILTER_BY_NAME, FILTER_BY_PRICE, GET_CATEGORY } from "../../action-types/action-types";
import { productAVG } from "./logic-ratings";

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

// import { GET_PRODUCTS, GET_PRODUCT_DETAIL } from "../../action-types/action-types";

const initialState = {
	products: [], // Estado que se ejecuta, inicialmente en Shop Now
	getAllProducts: [], // Copia de estado principal
	details: [],
	loading: false,
	error: null,
	reviews: [],
	category: []

};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			if (state.products.length > 0) {
				return {
					products: state.products,
					getAllProducts: state.getAllProducts
				}
			}
			return {
				...state,
				products: action.payload,
				getAllProducts: action.payload,
				loading: false,
			};
		case GET_PRODUCT_DETAIL:
			return {
				...state,
				details: action.payload
			}

		case MOST_VALUED_FILTER:
			return {
				...state,
				reviews: productAVG(action.payload)

			};

		case FILTER_BY_NAME:
			const sortedProducts = [...state.products];
			const sortOrder = action.payload === 'asc' ? 1 : -1;
			sortedProducts.sort((productsA, productsB) => {
				if (productsA.name > productsB.name) {
					return 1 * sortOrder;
				}
				if (productsB.name > productsA.name) {
					return -1 * sortOrder;
				}
				return 0;
			});
			return {
				...state,
				products: sortedProducts,
				getAllProducts: sortedProducts
			};

		case FILTER_BY_PRICE:
			const filterProducts = [...state.products];
			const filterOrder = action.payload === 'high' ? 1 : -1;
			filterProducts.sort((productsA, productsB) => {
				if (productsA.price > productsB.price) {
					return 1 * filterOrder;
				}
				if (productsB.price > productsA.price) {
					return -1 * filterOrder;
				}
				return 0;
			});
			return {
				...state,
				products: filterProducts,
				getAllProducts: filterProducts,
			}

		case FILTER_BY_CATEGORY:
			const getAllProducts = state.getAllProducts;
		
			const filteredCategory = getAllProducts.filter((element) => {
				
				return element.category[0].name.includes(action.payload)
			});
		
			return {
				...state,
				getAllProducts: state.getAllProducts,
				products: filteredCategory
			}

		case GET_CATEGORY:
			return {
				...state,
				category: action.payload
			}

		
		default: return state;
	}
};

export default productReducer;