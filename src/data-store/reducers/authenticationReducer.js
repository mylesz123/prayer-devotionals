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

        case "SIGNOUT_SUCCESS":
            console.log("Sign out Successful");
            return state;

        case "SIGNOUT_ERROR":
            console.log("Sign out Failed");
            return state;
    
        default:
            return state;
    }
}

export default authenticationReducer;