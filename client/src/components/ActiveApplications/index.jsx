import React, { useContext } from "react";
import storageContext from "../../context/storageContext";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const ActiveApplications = () => {
    const { applicationsList } = useContext(storageContext);

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            {applicationsList.map((data, index) => {
                return <ApplicationCard key={index} index={index} {...data} />
            })}
        </>
    );
}

export default ActiveApplications;