import { 
    convertStringToObject, 
    convertObjectToString 
} from "../../globalHelperFunctions/dataConversionHelpers";

const initial_state = {
    applications: convertStringToObject(localStorage.getItem("applicationsList"))
};

export default function reducer(state = initial_state, action){
    if(action.type === "CHANGE_STATUS"){
        let updatedData = "";

        state.applications[action.index].status = action.newStatus;
        updatedData = convertObjectToString(state.applications);
        localStorage.setItem("applicationsList", updatedData);

        return {...state}
    }

    else if(action.type === "ADD_APPLICATION"){
        let updatedData = "";
        let currentApplications = state.applications ? state.applications : [];

        state.applications = [action.newApplication, ...currentApplications];
        updatedData = convertObjectToString(state.applications);
        localStorage.setItem("applicationsList", updatedData);

        return {...state};
    }

    else if(action.type === "DELETE_APPLICATION"){
        let updatedData = "";
        let currentApplications = state.applications;

        currentApplications.splice(action.index, 1);
        state.applications = [...currentApplications];
        updatedData = convertObjectToString(state.applications);
        localStorage.setItem("applicationsList", updatedData);

        return {...state};
    }

    return {...state};
}