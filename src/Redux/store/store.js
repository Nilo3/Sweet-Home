import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "../reducer/product/productReducer";

export const store = createStore(productReducer, composeWithDevTools(applyMiddleware(thunk)));

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import productReducer from '../reducer/product/productReducer';

// const rootReducer = combineReducers({
//   products: productReducer,
  //? Agrega otros reducers aquí
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
