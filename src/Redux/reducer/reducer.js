
import { GET_PRODUCTS } from "../actions/action-types";


const initialState = {
    products: [],	
};



function reducer(state = initialState, action) { //current state and input(action to be taken to modify the state)
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state, // a copy of the current state
                products:action.payload, //updating the corresponding variables. 
				
               
			};
}
}
export default reducer;
