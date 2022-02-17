import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer,productDetailsReducer } from './reducers/productReducers'
import { authReducer } from './reducers/userReducers'

const reducer = combineReducers({
    products:productsReducer,
    productDetails: productDetailsReducer,
    // newProduct: newProductReducer,
    // product: productReducer,
    // productReviews: productReviewsReducer,
    // review: reviewReducer,
    auth: authReducer,
    // user: userReducer,
    // allUsers: allUsersReducer,
    // userDetails: userDetailsReducer,
    // forgotPassword: forgotPasswordReducer,
    // cart: cartReducer,
    // newOrder: newOrderReducer,
    // myOrders: myOrdersReducer,
    // allOrders: allOrdersReducer,
    // orderDetails: orderDetailsReducer,
    // order: orderReducer,
    // newReview: newReviewReducer
})
  

let initialState = {
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store; 