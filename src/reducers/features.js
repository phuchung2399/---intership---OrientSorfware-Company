import * as Types from './../constants/actionType';
var initialState = [];
var features = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_FEATURE:
            state = action.features
            return [...state];
        default: return state
    }
}
export default features;
