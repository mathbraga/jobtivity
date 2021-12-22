import { combineReducers } from 'redux';

import applicationsReducer from "./applicationsReducer";
import formsReducer from "./formsReducer";

export default combineReducers({
    applicationsReducer,
    formsReducer,
});