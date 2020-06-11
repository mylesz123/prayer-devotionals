const initState = {
    authError: null,
};
const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("Login Successful");
            return {
                state,
                authError: null
            };

        case "LOGIN_ERROR":
            console.log("Login Failed");
            return { 
                ...state, 
                authError: "Login Failed, could not find username or password"
            };
    
        default:
            return state;
    }
}

export default authenticationReducer;