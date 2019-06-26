import * as Types from './../constants/actionType';

var initialState = [];

var menu = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MENU:
            state = action.menu
            return [...state];
        default: return state
    }
}

export default menu;