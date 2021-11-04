import React from "react";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const testProps = {
    "name": "Jobtivity",
    "date": "01/11/2021",
    "website": "someurl.com",
    "role": "FullStack",
    "status": "Contact"
}

const ActiveApplications = () => {
    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...testProps} />
        </>
    );
}

export default ActiveApplications;