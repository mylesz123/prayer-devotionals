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
 * @param {state} devotional 
 * 
 * @return {function} dispatch (sender), getState (getter from thunk), 
 * { getFirestore & getFirebase } destructured from the withExtraArgument method in index.js 
 * to give access to firebase/firestore api
 */
export const createDevotionalAction = (devotional) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to db
        const userInfo = getState().user.userInfo;
        const uid = getState().firebase.auth.uid;

        const firestore = getFirestore();
        firestore.collection('devotionals').add({
            ...devotional,
            authorFirstName: userInfo.firstName,
            authorLastName: userInfo.lastName,
            authorId: uid,
            time: new Date().toDateString()
        })
        .then(() => {
            //returning a dispatch that sends information (action) to our reducer
            dispatch({ type: 'CREATE_DEVOTIONAL', devotional });
        })
        .catch((error) => {
            dispatch({ type: 'CREATE_DEVOTIONAL_ERROR', error });
        })

       
    }
};

export const editDevotionalAction = (devotional) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to db
        const userInfo = getState().user.userInfo;
        const uid = getState().firebase.auth.uid;

        const firestore = getFirestore();
        firestore.collection('devotionals')
        .doc(devotional.id)
        .set({
            ...devotional,
            authorFirstName: userInfo.firstName,
            authorLastName: userInfo.lastName,
            authorId: uid,
            time: new Date().toDateString()
        })
        .then(() => {
            //returning a dispatch that sends information (action) to our reducer
            dispatch({ type: 'EDIT_DEVOTIONAL', devotional });
        })
        .catch((error) => {
            dispatch({ type: 'EDIT_DEVOTIONAL_ERROR', error });
        })
    }
};
