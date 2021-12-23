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
    const { pageTitle, toggleForm } = props;

    const handleFormToggle = () => toggleForm();

    return(
        <PageTitleContainer>
            <Title title={pageTitle}/>
            <ApplicationCounter count={"(1/20)"}/>
            {props.hasAddButton ? <NewApplicationButton onClick={handleFormToggle} /> : null}
        </PageTitleContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(PageTitle);
