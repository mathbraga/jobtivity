import React from "react";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const data = JSON.parse(localStorage.getItem("applicationsList"));

const ActiveApplications = () => {
    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            {data.map((item, index) =>
                <ApplicationCard {...item} key={index} index={index} />
            )}
        </>
    );
}

export default ActiveApplications;