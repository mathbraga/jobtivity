const initial_state = {
    applications: JSON.parse(localStorage.getItem("applicationsList"))
};

export default function reducer(state = initial_state, action){
    if(action.type === "CHANGE_STATUS"){
        let updatedData = "";
        state.applications[action.index].status = action.newStatus;
        updatedData = JSON.stringify(state.applications);
        localStorage.setItem("applicationsList", updatedData);
        return {...state}
    }
    return {...state};
}