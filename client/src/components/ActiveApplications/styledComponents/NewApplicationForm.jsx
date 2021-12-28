import styled from "styled-components";
import { useState } from "react";
import { connect } from "react-redux";

import { returnDisplayValue } from "./helpers";
import { addApplication } from "../../../store/actions/updateStatus";
import { useEffect } from "react";

const ApplicationFormContainer = styled.form`
    display: ${props => returnDisplayValue(props.isVisible)};
    flex-direction: column;

    padding: 12px;
    margin-bottom: 12px;

    border: 1px solid var(--color-alternative);
    border-radius: 4px;

    width: 60%;
    height: auto;

    .form--inputs{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        row-gap: 8px;

        label{
            font-weight: bold;
            padding-right: 4px;
        }

        div{
            display: flex;
            justify-content: flex-start;
            align-items: center;

            flex-basis: 50%;
        }
    }

    .form--submit{
        display: flex;
        justify-content: space-between;

        padding-top: 4px;
        margin-top: 12px;

        box-shadow: var(--color-title-underline) 0 -1px 0;
    }
`;

const FormButton = styled.button`
    font-weight: bold;
    padding: 4px 8px;

    background-color: ${props => props.color};
    color: white;

    border: none;
    border-radius: 4px;

    box-shadow: 0px 1px 2px #111;

    cursor: pointer;

    :active{
        box-shadow: none;
    }
`;

const NewApplicationForm = (props) => {
    const [companyName, setCompanyName] = useState("");
    const [appliedDate, setAppliedDate] = useState("");
    const [companyUrl, setCompanyUrl] = useState("");
    const [applicationRole, setApplicationRole] = useState("");
    const [applicationData, setApplicationData] = useState({});
    const { addApplication } = props;

    const handleInputChange = (event, stateToUpdate) => stateToUpdate(event.target.value);

    const handleFormSubmit = () => {
        addApplication(applicationData)
    }

    useEffect(() => {
        let updatedData = {
            name: companyName,
            date: appliedDate,
            website: companyUrl,
            role: applicationRole,
            status: "Awaiting"
        }
        setApplicationData(updatedData);
    }, [companyName, appliedDate, companyUrl, applicationRole]);

    return(
        <ApplicationFormContainer {...props} onSubmit={(e) => e.preventDefault()}>
            <div className="form--inputs">
                <div>
                    <label htmlFor="company-name">Company:</label>
                    <input 
                        id="company-name" 
                        type="text" 
                        onInput={(event, stateToUpdate = setCompanyName) => handleInputChange(event, stateToUpdate)}
                    />
                </div>
                <div>
                    <label htmlFor="application-date">Date:</label>
                    <input 
                        id="application-date" 
                        type="text"
                        onChange={(event, stateToUpdate = setAppliedDate) => handleInputChange(event, stateToUpdate)}
                    />
                </div>
                <div>
                    <label htmlFor="company-url">Website:</label>
                    <input 
                        id="company-url" 
                        type="text"
                        onChange={(event, stateToUpdate = setCompanyUrl) => handleInputChange(event, stateToUpdate)}
                    />
                </div>
                <div>
                    <label htmlFor="application-role">Role:</label>
                    <input 
                        id="application-role" 
                        type="text"
                        onChange={(event, stateToUpdate = setApplicationRole) => handleInputChange(event, stateToUpdate)}
                    />
                </div>                                  
            </div>
            <div className="form--submit">
                <FormButton color="green" onClick={handleFormSubmit}>Add</FormButton>
                <FormButton color="var(--color-red-tone)">Cancel</FormButton>
            </div>
        </ApplicationFormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addApplication: (newApplication) => dispatch(addApplication(newApplication))
});

export default connect(null, mapDispatchToProps)(NewApplicationForm);
