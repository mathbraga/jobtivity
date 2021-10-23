import React from "react";

import { MainPageContentContainer } from "./styledComponents";
import ActiveApplications from "../ActiveApplications";

const MainPageContent = () => {
    return(
        <MainPageContentContainer>
            <ActiveApplications />
        </MainPageContentContainer>
    )
}

export default MainPageContent;