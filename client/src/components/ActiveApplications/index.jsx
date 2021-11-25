import React, { useContext, useEffect } from "react";
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

const storageName = "applicationsList";

const ActiveApplications = () => {
    const { setApplications } = useContext(storageContext);

    useEffect(() => {
        if(localStorage.getItem(storageName) === null)
            localStorage.setItem(storageName, "[]");

        setApplications(JSON.parse(localStorage.getItem(storageName)));
    });

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...testProps} />
        </>
    );
}

export default ActiveApplications;