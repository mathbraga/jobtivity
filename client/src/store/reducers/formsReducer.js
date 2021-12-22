const defaultState = {
    formVisibility: false
}

export default function reducer(state = defaultState, action){
    if(action.type === "TOGGLE_FORM"){
        state.defaultState = !state.defaultState;
        return {...state}
    }
    
    return {...state}
}