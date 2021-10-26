import React from "react";

import PageTitle from "../PageTitle";
import { ApplicationCard, ApplicationCardContent } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const ActiveApplications = () => {
    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard>
                <ApplicationCardContent />
            </ApplicationCard>
        </>
    )
}

export default ActiveApplications;