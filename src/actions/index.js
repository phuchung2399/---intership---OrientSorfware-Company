import * as Types from './../constants/actionType';
import callAPI from './../callAPI';

export const actFetchMenuRequest = () => {
    return dispatch => {
        return callAPI('menu', 'GET', null).then(res => {
            dispatch(actFetchMenu(res.data));
        });
    };
}
export const actFetchMenu = (menu) => {
    return {
        type: Types.FETCH_MENU,
        menu
    }
}
//
export const actFetchBannerRequest = () => {
    return dispatch => {
        return callAPI('banner', 'GET', null).then(res => {
            dispatch(actFetchBanner(res.data));
        });
    };
}
export const actFetchBanner = (banner) => {
    return {
        type: Types.FETCH_BANNER,
        banner
    }
}
//
export const actFetchFeatureRequest = () => {
    return dispatch => {
        return callAPI('features', 'GET', null).then(res => {
            dispatch(actFetchFeature(res.data));
        });
    };
}
export const actFetchFeature = (features) => {
    return {
        type: Types.FETCH_FEATURE,
        features
    }
}
//


