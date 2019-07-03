import * as Types from './../constants/ActionTypes';

var findIndex = (products, id) => {
    var result = null;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}
/*
 const initState = {
    stateData: [],
    submit
 }

 case Types.ADD_PRODUCT:
             state.push(action.product);
             return [...state];
            return Object.assign([], state, {
                stateData: action.product,
            })
*/

const products = (state = [], action) => {
    var index;
    var { id, product } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            // state = action.products;
            // return [...state];
            return Object.assign([], action.products)
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            // return [...state];
            return Object.assign([], state)
        case Types.ADD_PRODUCT:
            // state.push(action.product);
            // return [...state];
            return Object.assign([], state)
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            // return [...state];
            return Object.assign([], state)
        default: return [...state];
    }
};

export default products;