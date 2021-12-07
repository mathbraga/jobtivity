import React from "react";
import { connect } from "react-redux";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const ActiveApplications = (props) => {
    const { applicationsList } = props;

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            {applicationsList.map((item, index) =>
                <ApplicationCard {...item} key={index} index={index} />
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    applicationsList: state.applicationsReducer.applications
})

export default connect(mapStateToProps, null)(ActiveApplications);