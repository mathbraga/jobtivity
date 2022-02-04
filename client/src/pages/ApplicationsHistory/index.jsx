import React from "react";
import styled from "styled-components";

import PageTitle from "../../components/PageTitle";
import { ApplicationsPageContainer } from "../globalStyledComponents";
import { NoApplicationsCard } from "../../components/Applications";
import { ApplicationContentContainer } from "../../components/Applications/styledComponents/ApplicationContentContainer";
import { ApplicationCardStyles } from "../../components/Applications/styledComponents/ApplicationCard";
import { DeleteApplicationButton } from "../../components/Applications";

const applicationsHistoryPageTitle = "History";
const applicationHistoryLimit = 100;

const testData = {
    name: "Test",
    website: "https://google.com"
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding-bottom: 4px;
    margin-bottom: 8px;

    box-shadow: var(--color-title-underline) 0 1px 0;
`;

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
            <ApplicationCardStyles borderColor="var(--color-history-border)">
                <HeaderContainer>
                    <DeleteApplicationButton />
                </HeaderContainer>
                <ApplicationContentContainer {...testData} />
            </ApplicationCardStyles>
        </ApplicationsPageContainer>
    )
}

export default ApplicationsHistory;
