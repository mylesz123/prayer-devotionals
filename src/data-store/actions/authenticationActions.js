const initState = {};

export const loginAction = (state = initState) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            state.email,
            state.password
        )
        .then(() => {
            dispatch({ type: "LOGIN_SUCCESS" });
        })
        .catch((error) => {
            dispatch({ type: "LOGIN_ERROR", error });
        })
    }
}