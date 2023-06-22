import { SET_USER, EMPTY_CART } from "../../action-types/action-types";

const initialState = {
  user: null,
  shoppingCart:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

     case EMPTY_CART:
        return {
            ...state,
            shoppingCart: action.shoppingCart,
        } 
    default:
      return state;
  }
};

export default userReducer;
