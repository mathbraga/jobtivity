import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";

const Routes = () => {
    return(
        <Router>
            <MainPage />
        </Router>
    );
}

export default Routes;