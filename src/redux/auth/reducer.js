import * as t from '../actionsTypes';

const initState = {
    counter: 0,
    isLoggedIn: false,
    isLoaded: false,
    userProfile:null,
    signInProfile:null
}

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                counter: state.counter++
            }
        case t.SET_LOGIN_STATE:
            return {
                ...state,
                isLoggedIn: action.payload, // we set this as true on login
            };
        case t.SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload, // we set this as true on loading
            };
            case t.SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload, // we set this on login
            };
            case t.SET_SIGNIN_PROFILE:
                return {
                    ...state,
                    signInProfile: action.payload, // we set this on sigin
                };

        default:
            return state
    }
} 