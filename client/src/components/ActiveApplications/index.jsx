import React from "react";
import { connect } from "react-redux";

import PageTitle from "../PageTitle";
import { ApplicationCard, NewApplicationForm } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const ActiveApplications = (props) => {
    const { applicationsList, formState } = props;
    const numberOfApplications = applicationsList.length;

    return(
        <>
            <PageTitle 
                pageTitle={activeApplicationsPageTitle}
                hasAddButton={true}
                applicationCounter={numberOfApplications}
            />
            <NewApplicationForm isVisible={formState} />
            {applicationsList.map((item, index) =>
                <ApplicationCard {...item} key={index} index={index} />
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    applicationsList: state.applicationsReducer.applications,
    formState: state.formsReducer.formVisibility
})

export default connect(mapStateToProps, null)(ActiveApplications);