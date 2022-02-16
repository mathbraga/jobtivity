import React from "react";
import { Route, Redirect } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import ActiveApplications from "../ActiveApplications";
import ApplicationsHistory from "../ApplicationsHistory";
import { MainPageContainer } from "./styledComponents";

const MainPage = () => {
    return(
        <MainPageContainer>
            <PageHeader />
            <Route path="/" exact>
                <Redirect to="/applications"/>
            </Route>
            <Route path="/applications" exact component={ActiveApplications}/>
            <Route path="/history" exact component={ApplicationsHistory}/>
            <Footer />
        </MainPageContainer>
    );
}

export default MainPage;
