import React from "react";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import MainPageContent from "../../components/MainPageContent";

import './styles.sass';

const MainPage = () => {
    return(
        <div className="mainpage--container">
            <PageHeader />
            <MainPageContent />
            <Footer />
        </div>
    );
}

export default MainPage;