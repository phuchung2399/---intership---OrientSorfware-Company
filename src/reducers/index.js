import menu from './menus';
import banner from './banner'
import features from './features'
import { combineReducers } from 'redux'
const myReducer = combineReducers({
    menu,
    banner,
    features
});

export default myReducer;