import authReducer from './auth.reducer';
import products from './product.reducer'
import orderReducer from './order.reducer'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    auth: authReducer,
    products,
    orders: orderReducer,
});
export default reducers;