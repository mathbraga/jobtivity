import React from "react";

import PageTitle from "../../components/PageTitle";
import { ApplicationsPageContainer } from "../globalStyledComponents";
import { NoApplicationsCard } from "../../components/Applications";

const applicationsHistoryPageTitle = "History";
const applicationHistoryLimit = 100;

const ApplicationsHistory = (props) => {
    const { historyList = [] } = props;
    const numberOfApplications = historyList ? historyList.length : 0;

    return(
        <ApplicationsPageContainer>
            <PageTitle
                pageTitle={applicationsHistoryPageTitle}
                applicationCounter={numberOfApplications}
                applicationLimit={applicationHistoryLimit}
            />
            <NoApplicationsCard>No applications in history.</NoApplicationsCard>
        </ApplicationsPageContainer>
    )
}

export default ApplicationsHistory;
