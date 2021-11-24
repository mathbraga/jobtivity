import React, { useState, useEffect, useContext } from "react";
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
    const [listOfApplications, setListOfApplications] = useState(JSON.parse(localStorage.getItem(storageName)));
    const { setApplications } = useContext(storageContext);

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            <ApplicationCard {...testProps} />
        </>
    );
}

export default ActiveApplications;