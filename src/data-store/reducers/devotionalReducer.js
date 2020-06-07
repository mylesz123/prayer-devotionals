const initState = {
    devotionals: [
        {id: 1, title: "honey", content: "sickle popsicle nickel", time: "May 03, 2020", author: "Me"},
        {id: 2, title: "boo", content: "wazoo", time: "May 03, 2020", author: "Lisa"},
        {id: 3, title: "Jesus is King", content: "I have been saved by faith!", time: "May 03, 2020", author: "Me"},
    ],
};

/**
 * the whole point of a reducer is to do something with the the action that was sent.
 *  
 */
const devotionalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DEVOTIONAL':
            console.log('created a new devotional!', action.devotional);
            return state;

        case 'CREATE_DEVOTIONAL_ERROR':
            console.log('an error occurred when trying to make a new devotional', action.error);
            return state;
    
        default:
            console.log('nothing to do here');
            return state;
    }
}

export default devotionalReducer;