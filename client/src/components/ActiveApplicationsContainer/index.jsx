import React from "react";

import ActiveApplicationsHeader from "./ActiveApplicationsHeader";
import ApplicationCard from "./ApplicationCard/ApplicationCard";

import "./styles.sass";

const ActiveApplicationsContainer = () => {
    return(
        <>
            <ActiveApplicationsHeader />
            <ApplicationCard />
        </>
    )
}

export default ActiveApplicationsContainer;