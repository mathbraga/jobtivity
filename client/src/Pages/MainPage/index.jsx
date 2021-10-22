import React from "react";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import MainPageContent from "../../components/MainPageContent";
import { MainPageContainer } from "./styledComponents";

const MainPage = () => {
    return(
        <MainPageContainer>
            <PageHeader />
            <MainPageContent />
            <Footer />
        </MainPageContainer>
    );
}

export default MainPage;