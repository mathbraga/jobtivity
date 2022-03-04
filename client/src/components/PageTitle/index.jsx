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
    const { pageTitle, toggleForm, applicationCounter, applicationLimit=0, historyCounter, historyLimit=0 } = props;
    const isApplicationCounterLimit = applicationCounter < applicationLimit;
    const isHistoryCounterLimit = historyCounter < historyLimit;

    const handleFormToggle = isApplicationCounterLimit ?
        (isHistoryCounterLimit ? () => toggleForm() : null)
        :
        null;
    const counterColor = isApplicationCounterLimit ? "var(--color-secondary)" : "red";
    const buttonColor = isApplicationCounterLimit ?
        (isHistoryCounterLimit ? "var(--color-alternative)" : "var(--color-red-tone)")
        :
        "var(--color-red-tone)";
    const buttonText = isApplicationCounterLimit ?
        (isHistoryCounterLimit ? "+" : "History Full")
        :
        "Full";

    return(
        <PageTitleContainer className="autosize">
            <Title title={pageTitle}/>
            <ApplicationCounter count={`(${applicationCounter}/${applicationLimit})`} color={counterColor}/>
            {props.hasAddButton ?
                <NewApplicationButton onClick={handleFormToggle} color={buttonColor} text={buttonText} /> 
                :
                null
            }
        </PageTitleContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(PageTitle);
