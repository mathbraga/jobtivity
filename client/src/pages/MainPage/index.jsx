import React from "react";
import { Route, Redirect } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import MainPageContent from "../../components/MainPageContent";
import { MainPageContainer } from "./styledComponents";

const MainPage = () => {
    return(
        <MainPageContainer>
            <PageHeader />
            <Route path="/" exact>
                <Redirect to="/applications"/>
            </Route>
            <Route path="/applications" exact component={MainPageContent}/>
            <Route path="/history" exact render={() => <div>To do...</div>}/>
            <Footer />
        </MainPageContainer>
    );
}

export default MainPage;