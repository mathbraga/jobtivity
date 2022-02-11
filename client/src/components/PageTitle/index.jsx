import React from "react";
import { connect } from "react-redux";

import { toggleFormVisibility } from "../../store/actions/toggleFormVisibility";

import { 
    ApplicationCounter, 
    NewApplicationButton, 
    PageTitleContainer, 
    Title 
} from "./styledComponents";

const PageTitle = (props) => {
    const { pageTitle, toggleForm, applicationCounter, applicationLimit=0 } = props;

    const handleFormToggle = applicationCounter < applicationLimit ? () => toggleForm() : null;
    const counterColor = applicationCounter < applicationLimit ? "inherit" : "red";
    const buttonColor = applicationCounter < applicationLimit ? "var(--color-alternative)" : "var(--color-red-tone)";

    return(
        <PageTitleContainer>
            <Title title={pageTitle}/>
            <ApplicationCounter count={`(${applicationCounter}/${applicationLimit})`} color={counterColor}/>
            {props.hasAddButton ? <NewApplicationButton onClick={handleFormToggle} color={buttonColor} /> : null}
        </PageTitleContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(PageTitle);
