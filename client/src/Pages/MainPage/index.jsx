import React from "react";

import './styles.sass';

import MainPageHeader from "../../components/MainPageHeader";
import MainPageFooter from "../../components/MainPageFooter";

function MainPage(){
    return(
        <div className="mainpage--container">
            <MainPageHeader/>
            <div className="container--content">
                This is the main page.
            </div>
            <MainPageFooter/>
        </div>
    );
}

export default MainPage;