import React from "react";

import { MainPageContentContainer } from "./styledComponents";
import ActiveApplicationsContainer from "../ActiveApplicationsContainer";

const MainPageContent = () => {
    return(
        <MainPageContentContainer>
            <ActiveApplicationsContainer />
        </MainPageContentContainer>
    )
}

export default MainPageContent;