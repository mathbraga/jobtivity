import { 
    convertStringToObject, 
    convertObjectToString 
} from "../../globalHelperFunctions/dataConversionHelpers";

const initial_state = {
    applications: convertStringToObject(localStorage.getItem("applicationsList")),
    history: convertStringToObject(localStorage.getItem("applicationsHistory"))
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
        let updatedHistory = "";
        let currentApplications = state.applications ? state.applications : [];
        let currentHistory = state.history ? state.history : [];

        state.applications = [action.newApplication, ...currentApplications];
        state.history = [action.newApplication, ...currentHistory];
        updatedData = convertObjectToString(state.applications);
        updatedHistory = convertObjectToString(state.history);
        localStorage.setItem("applicationsList", updatedData);
        localStorage.setItem("applicationsHistory", updatedHistory);

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

    else if(action.type === "REMOVE_APP_HISTORY"){
        let updatedData = "";
        let currentHistory = state.history;

        currentHistory.splice(action.index, 1);
        state.history = [...currentHistory];
        updatedData = convertObjectToString(state.history);
        localStorage.setItem("applicationsHistory", updatedData);

        return {...state};
    }

    return {...state};
}