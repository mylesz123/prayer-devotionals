/**
 * action that intercepts dispatch, updates state with data from db,
 * then resumes dispatch to go to reducer
 * @param {state} devotional 
 */
export const createDevotional = (devotional) => {
    return (dispatch, getState) => {
        // make async call to db

        // dispatching an action with key value pairs to be read by reducer
        dispatch({type: 'CREATE_DEVOTIONAL', devotional});
    }
};
