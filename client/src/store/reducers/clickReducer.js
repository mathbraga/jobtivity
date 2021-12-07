const initial_state = {
    applications: JSON.parse(localStorage.getItem("applicationsList"))
};

export default function reducer(state = initial_state, action){
    if(action.type === "CHANGE_STATUS"){
        state.applications[action.index].status = action.newStatus;
        return {...state}
    }
    return {...state};
}