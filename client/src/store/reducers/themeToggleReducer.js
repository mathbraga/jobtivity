import { convertObjectToString, convertStringToObject } from "../../globalHelperFunctions/dataConversionHelpers";

const defaultState = {
    toggleState: convertStringToObject(localStorage.getItem("toggleState"))
};

export default function reducer(state = defaultState, action){
    if(action.type === "TOGGLE_THEME"){
        state.toggleState = !state.toggleState;
        localStorage.setItem("toggleState", convertObjectToString(state.toggleState));
        return {...state};
    }

    return {...state};
}
