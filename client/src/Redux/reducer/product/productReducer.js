//? REDUCER WORK IN PROGRESS
// 
import { GET_PRODUCTS, GET_PRODUCT_DETAIL, MOST_VALUED_FILTER, FILTER_BY_CATEGORY, FILTER_BY_NAME, FILTER_BY_PRICE, GET_CATEGORY, ADD_TO_CART, DELETE_FROM_CART,  SEARCH_PRODUCTS, DELETE_ONE_FROM_CART } from "../../action-types/action-types";
import { productAVG } from "./logic-ratings";


const initialState = {
	products: [], // Estado que se ejecuta, inicialmente en Shop Now
	getAllProducts: [], // Copia de estado principal
	details: [],
	loading: false,
	error: null,
	reviews: [],
	category: [],
	shoppingCart:[],

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
			console.log('Search term:', action.payload); 
			const sortedProducts = [...state.products];
			const sortOrder = action.payload === 'asc' ? 1 : -1;
			sortedProducts.sort((productsA, productsB) => {
				console.log(productsA.name, productsB.name);
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

		case ADD_TO_CART:
			return {
				...state,
				shoppingCart:[...state.shoppingCart, action.payload]
			}
		
		case DELETE_FROM_CART:
        return {
            ...state,
            shoppingCart: state.shoppingCart.filter((product) => product.id !== action.payload),
				
        };		
	

		case SEARCH_PRODUCTS:
		const searchTerm = action.payload.toLowerCase();
		const filteredProducts = state.getAllProducts.filter(product => product.name.toLowerCase().includes(searchTerm))

		return{
			...state,
			products: filteredProducts
		}

		case DELETE_ONE_FROM_CART:
			const filterCart = state.shoppingCart.filter((product) => product.id !== action.payload) 
			
			const toBeDeleted = state.shoppingCart.filter((product) => product.id === action.payload) 
			
			const filterDeleted = [...toBeDeleted.slice(0, toBeDeleted.length - 1)];

			
			return {
				...state,
				shoppingCart : [...filterCart, ...filterDeleted]
			}
		default: return state;
	}
};

export default productReducer;
