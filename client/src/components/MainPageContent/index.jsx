import React from "react";
import ActiveApplicationsContainer from "../ActiveApplicationsContainer";

import "./styles.sass";

const MainPageContent = () => {
    return(
        <div className="content--container">
            <ActiveApplicationsContainer />
        </div>
    )
}

export default MainPageContent;