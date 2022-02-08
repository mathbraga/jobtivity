import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import PageTitle from "../../components/PageTitle";
import { ApplicationsPageContainer } from "../globalStyledComponents";
import { NoApplicationsCard } from "../../components/Applications";
import { ApplicationContentContainer } from "../../components/Applications/styledComponents/ApplicationContentContainer";
import { ApplicationCardStyles } from "../../components/Applications/styledComponents/ApplicationCard";
import { DeleteApplicationButton } from "../../components/Applications";

const applicationsHistoryPageTitle = "History";
const applicationHistoryLimit = 100;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding-bottom: 4px;
    margin-bottom: 8px;

    box-shadow: var(--color-title-underline) 0 1px 0;
`;

const ApplicationsHistory = (props) => {
    const historyList = props.historyList ? props.historyList : [];
    const numberOfApplications = historyList.length;

    return(
        <ApplicationsPageContainer>
            <PageTitle
                pageTitle={applicationsHistoryPageTitle}
                applicationCounter={numberOfApplications}
                applicationLimit={applicationHistoryLimit}
            />
            {numberOfApplications === 0 ?
                <NoApplicationsCard>No applications in history.</NoApplicationsCard>
                :
                historyList.map((item, index) =>
                    <ApplicationCardStyles borderColor="var(--color-history-border)" key={index}>
                        <HeaderContainer>
                            <DeleteApplicationButton />
                        </HeaderContainer>
                        <ApplicationContentContainer {...item} />
                    </ApplicationCardStyles>
            )}
        </ApplicationsPageContainer>
    )
}

const mapStateToProps = (state) => ({
    historyList: state.applicationsReducer.history,
})

export default connect(mapStateToProps, null)(ApplicationsHistory);
