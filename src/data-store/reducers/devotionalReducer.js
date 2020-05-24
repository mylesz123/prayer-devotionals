const initState = {
    devotionals: [
        {id: 1, title: "honey", content: "sickle popsicle nickel", time: "May 03, 2020", author: "Me"},
        {id: 2, title: "boo", content: "wazoo", time: "May 03, 2020", author: "Lisa"},
        {id: 3, title: "Jesus is King", content: "I have been saved by faith!", time: "May 03, 2020", author: "Me"},
    ],
};
const devotionalReducer = (state = initState, action) => {
    return state;
}

export default devotionalReducer;