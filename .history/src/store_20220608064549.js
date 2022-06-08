import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer, myOrdersReducer,orderDetailsReducer,allOrdersReducer,orderReducer } from './reducers/orderReducers';


const reducer = combineReducers({
   
    cart: cartReducer,
    
    orderDetails: orderDetailsReducer,
    order: orderReducer,
    newReview: newReviewReducer
})
  

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
            shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
}
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store; 