const initial_state = {
    clicked: 0
};

export default function reducer(state = initial_state, action){
    if(action.type === "SEND_CLICKS"){
        state.clicked = state.clicked + 1;
        return {...state}
    }
    return state;
}