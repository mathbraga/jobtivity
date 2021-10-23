import React from "react";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents/ApplicationCard";

const activeApplicationsPageTitle = "Active Application";

const ActiveApplications = () => {
    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard>
                <span>Some jog...</span>
            </ApplicationCard>
        </>
    )
}

export default ActiveApplications;