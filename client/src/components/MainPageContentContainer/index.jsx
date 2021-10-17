import React from "react";

import JobContainer from "./JobContainer";

import "./styles.sass";

function MainPageContentContainer(){
    return(
        <div className="content--container">
            <JobContainer />
        </div>
    )
}

export default MainPageContentContainer;