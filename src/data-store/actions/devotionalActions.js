/**
 * this is a method that creating a sender (dispatcher) with an action (information) to be handled by our reducer.
 * a dispatch literally means to send off to a destination
 * we are dispatching an action to our reducer.
 * Think of actions as information inside an object. 
 * our reducer just does something with that info.
 * 
 * This is the action using middle ware that intercepts the incoming dispatch from CreateDevotional, 
 * updates state with data from db,
 * then resumes dispatch to go to reducer
 * 
 * @param {state} devotional 
 */
export const createDevotionalAction = (devotional) => {
    return (dispatch, getState) => {
        // make async call to db

        //returning a dispatch that sends information (action) to our reducer
        dispatch({ type: 'CREATE_DEVOTIONAL', devotional });
        console.log("createDevotionalAction", { state: getState })
    }
};
