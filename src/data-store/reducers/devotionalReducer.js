const initState = {
    devotionals: [
        {id: 1, title: "honey", content: "sickle popsicle nickel", time: "Today", who: "Me"},
        {id: 2, title: "boo", content: "wazoo", time: "Today", who: "Me"},
        {id: 3, title: "Jesus is King", content: "I have been saved by faith!", time: "Today", who: "Me"},
    ],
};
const devotionalReducer = (state = initState, action) => {
    return state;
}

export default devotionalReducer;