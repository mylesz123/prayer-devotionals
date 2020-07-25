const initState = {
    devotionals: [],
    errorMessage: null
};

/**
 * the whole point of a reducer is to do something with the the action that was sent.
 *  
 */
const devotionalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DEVOTIONAL':
            console.log('created a new devotional!');
            return {
                ...state,
                errorMessage: null
            }

        case 'CREATE_DEVOTIONAL_ERROR':
            console.log('an error occurred when trying to make a new devotional', action.error);
            return {
                ...state,
                errorMessage: 'an error occurred when trying to make a new devotional'
            }

        case 'EDIT_DEVOTIONAL':
            console.log('successfully edited new devotional!');
            return {
                ...state,
                errorMessage: null
            }

        case 'EDIT_DEVOTIONAL_ERROR':
            console.log('an error occurred when trying to edit a devotional', action.error);
            return {
                ...state,
                errorMessage: 'An error occurred, no changes were made to your devotional'
            }
    
        default:
            return state;
    }
}

export default devotionalReducer;