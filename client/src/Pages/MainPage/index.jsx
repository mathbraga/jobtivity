import React from "react";

import './styles.sass';

import MainPageHeader from "../../components/HeaderContainer";
import MainPageFooter from "../../components/FooterContainer";
import MainPageContentContainer from "../../components/MainPageContentContainer";

function MainPage(){
    return(
        <div className="mainpage--container">
            <MainPageHeader />
            <MainPageContentContainer />
            <MainPageFooter />
        </div>
    );
}

export default MainPage;