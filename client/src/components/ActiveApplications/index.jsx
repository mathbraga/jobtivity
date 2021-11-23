import React, { useState, useEffect } from "react";

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

const storageName = "applicationsList";

const ActiveApplications = () => {
    const [listOfApplications, setApplications] = useState(JSON.parse(localStorage.getItem(storageName)));

    useEffect(() => {
        if(listOfApplications === null){
            localStorage.setItem(storageName, "[]");
            setApplications(JSON.parse(localStorage.getItem(storageName)));
        }
    }, [listOfApplications]);

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...testProps} />
        </>
    );
}

export default ActiveApplications;