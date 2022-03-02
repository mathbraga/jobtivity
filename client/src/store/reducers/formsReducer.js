const defaultState = {
    formVisibility: false
};

export default function reducer(state = defaultState, action){
    if(action.type === "TOGGLE_FORM"){
        state.formVisibility = !state.formVisibility;
        return {...state};
    }

    return {...state};
}
