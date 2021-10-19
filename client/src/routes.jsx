import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const Routes = () => {
    return(
        <Router>
            <Route path="/" exact component={MainPage}/>
        </Router>
    );
}

export default Routes;