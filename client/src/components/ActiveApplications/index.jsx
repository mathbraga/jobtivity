import React from "react";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const data = {
    name: "Jobtivity",
    date: "30/11/2021",
    website: "someurl.com",
    role: "FullStack",
    status: "Contact"
}

const ActiveApplications = () => {
    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...data} />
        </>
    );
}

export default ActiveApplications;