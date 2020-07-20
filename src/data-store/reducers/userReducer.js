const initState = {
    userInfo: null,
};
/**
 * the whole point of a reducer is to do something with the the action that was sent.
 */
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state, 
                userInfo: action.userInfo
            };

        case 'GET_USER_ERROR':
            console.error('an error occurred when trying to fetch user info', action.error);
            return state;
    
        default:
            return state;
    }
}

export default userReducer;