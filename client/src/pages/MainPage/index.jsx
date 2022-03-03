import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import ActiveApplications from "../ActiveApplications";
import ApplicationsHistory from "../ApplicationsHistory";
import { MainPageContainer } from "./styledComponents";

const MainPage = (props) => {
    const { themeState } = props.themeState === null ? false : props;
    const theme = themeState ? "theme--dark" : "";

    return(
        <MainPageContainer className={theme}>
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

const mapStateToProps = (state) => ({
    themeState: state.themeToggleReducer.toggleState
});

export default connect(mapStateToProps, null)(MainPage);
