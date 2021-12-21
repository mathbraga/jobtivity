import React, { useState } from "react";
import { connect } from "react-redux";

import PageTitle from "../PageTitle";
import { ApplicationCard, NewApplicationForm } from "./styledComponents";

const activeApplicationsPageTitle = "Active Applications";

const ActiveApplications = (props) => {
    const [toggleModal, setModalToggle] = useState(false);
    const { applicationsList } = props;

    const handleFormToggle = () => setModalToggle(!toggleModal);

    return(
        <>
            <PageTitle pageTitle={activeApplicationsPageTitle} />
            {/* <button onClick={handleFormToggle}>+</button> */}
            <NewApplicationForm isVisible={toggleModal} />
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