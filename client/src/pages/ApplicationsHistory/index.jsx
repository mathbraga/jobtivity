import React from "react";

import PageTitle from "../../components/PageTitle";
import { ApplicationsPageContainer } from "../globalStyledComponents";
import { NoApplicationsCard } from "../../components/Applications";
import { ApplicationContentContainer } from "../../components/Applications/styledComponents/ApplicationContentContainer";
import { ApplicationCardStyles } from "../../components/Applications/styledComponents/ApplicationCard";

const applicationsHistoryPageTitle = "History";
const applicationHistoryLimit = 100;

const testData = {
    name: "Test",
    website: "https://google.com"
}

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
            {/* <NoApplicationsCard>No applications in history.</NoApplicationsCard> */}
            <ApplicationCardStyles>
                <div>X</div>
                <ApplicationContentContainer {...testData} />
            </ApplicationCardStyles>
        </ApplicationsPageContainer>
    )
}

export default ApplicationsHistory;
