import { combineReducers } from 'redux';

import applicationsReducer from "./applicationsReducer";
import formsReducer from "./formsReducer";
import themeToggleReducer from "./themeToggleReducer";

export default combineReducers({
    applicationsReducer,
    formsReducer,
    themeToggleReducer
});
