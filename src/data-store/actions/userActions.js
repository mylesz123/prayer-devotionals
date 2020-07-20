/**
 * This method returns a new function, 
 * creating a sender (dispatcher) with an action (information) to be handled by our reducer.
 * A dispatch literally means to send off to a destination. We are dispatching an action to our reducer.
 * Think of actions as information inside an object. 
 * Our reducer just does something with that info.
 * 
 * This is the action using middle ware that intercepts the incoming dispatch from CreateDevotional, 
 * updates state with data from db,
 * then resumes dispatch to go to reducer
 * 
 * @param {state} user 
 * 
 * @return {function} dispatch (sender), getState (getter from thunk), 
 * { getFirestore & getFirebase } destructured from the withExtraArgument method in index.js 
 * to give access to firebase/firestore api
 */
export const getUserAction = (uid) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore.collection('users')
            .doc(uid)
            .get()
            .then(document => {
                if (document.exists) {
                    const userInfo = document.data();
                    dispatch({ type: 'GET_USER', userInfo });
                } else {
                    console.error("could not retrieve user data")
                }
            })
            .catch((error) => {
                dispatch({ type: 'GET_USER_ERROR', error });
            })
    }
};
