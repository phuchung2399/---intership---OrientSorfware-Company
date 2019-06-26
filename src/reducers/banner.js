import * as Types from './../constants/actionType';
var initialState = [];

var banner = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_BANNER:
            state = action.banner
            return [...state];
        default: return state
    };
}
export default banner;


