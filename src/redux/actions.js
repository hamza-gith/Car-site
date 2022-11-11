import * as t from './actionsTypes';

export const setLoginState = (payload) => dispatch => {
    dispatch({
        type: t.SET_LOGIN_STATE, payload
    });
};

export const setIsLoaded = (payload) => dispatch => {
    dispatch({
        type: t.SET_LOADED, payload
    });
};  
export const setUserProfile = (payload) => dispatch => {
    dispatch({
        type: t.SET_USER_PROFILE, payload
    });
}; 
export const setSignInProfile = (payload) => dispatch => {
    dispatch({
        type: t.SET_SIGNIN_PROFILE, payload
    });
}; 