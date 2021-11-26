import React, { useContext } from "react";
import storageContext from "../../context/storageContext";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const ActiveApplications = () => {
    const { applicationsList } = useContext(storageContext);
    console.log(applicationsList);

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            {applicationsList.map((data, index) => <ApplicationCard key={index} {...data} />)}
        </>
    );
}

export default ActiveApplications;