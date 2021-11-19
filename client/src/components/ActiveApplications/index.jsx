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

const statusProps = {
    "name": "Jobtivity",
    "date": "01/11/2021",
    "website": "someurl.com",
    "role": "FullStack",
    "status": "Contact"
}

const StatusContext = React.createContext(statusProps);

const ActiveApplications = () => {
    return(
        <StatusContext.Provider>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...testProps} />
        </StatusContext.Provider>
    );
}

export default ActiveApplications;