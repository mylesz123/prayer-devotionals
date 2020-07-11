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

export const signUpAction = (state) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            state.email,
            state.password
        )
        .then((response) => {
            return firestore.collection('users')
                .doc(response.user.uid)
                .set({
                    firstName: state.firstName,
                    lastName: state.lastName,
                    initials: state.firstName[0] + state.lastName[0],
                });
        })
        .then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
        })
        .catch((error) => {
            dispatch({ type: "SIGNUP_ERROR", error });
        })
    }
}

export const signOutAction = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS" });
        })
        .catch((error) => {
            dispatch({ type: "SIGNOUT_ERROR", error });
        })
    }
}