const initState = {
    authError: null,
};
const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("Login Successful");
            return {
                ...state,
                authError: null
            };

        case "LOGIN_ERROR":
            console.log("Login Failed");
            return { 
                ...state, 
                authError: "Login Failed, could not find username or password: " + action.error.message
            };

        case "SIGNUP_SUCCESS":
            console.log("Signup Successful");
            return {
                ...state,
                authError: null
            };

        case "SIGNUP_ERROR":
            console.log("Signup Failed");
            return { 
                ...state, 
                authError: "Signup Failed, could not create a user: " + action.error.message
            };

        case "SIGNOUT_SUCCESS":
            console.log("Sign out Successful");
            return state;

        case "SIGNOUT_ERROR":
            console.log("Sign out Failed: " + action.error.message);
            return state;
    
        default:
            return state;
    }
}

export default authenticationReducer;