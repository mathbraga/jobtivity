import React, { useContext } from "react";
import storageContext from "../../context/storageContext";

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
    const { applicationsList } = useContext(storageContext);
    console.log(applicationsList);

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...testProps} />
        </>
    );
}

export default ActiveApplications;