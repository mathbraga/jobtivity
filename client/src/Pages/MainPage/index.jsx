import React from "react";

import MainPageHeader from "../../components/HeaderContainer";
import MainPageFooter from "../../components/FooterContainer";
import MainPageContentContainer from "../../components/MainPageContentContainer";

import './styles.sass';

const MainPage = () => {
    return(
        <div className="mainpage--container">
            <MainPageHeader />
            <MainPageContentContainer />
            <MainPageFooter />
        </div>
    );
}

export default MainPage;