import * as Types from './../constants/ActionTypes';

const itemEditing = (state = {}, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return Object.assign({}, action.product)
        default:
            return state;
    }
}
export default itemEditing;
