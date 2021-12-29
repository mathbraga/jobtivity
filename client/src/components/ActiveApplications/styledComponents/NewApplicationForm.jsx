import styled from "styled-components";
import { useRef } from "react";
import { connect } from "react-redux";

import { returnDisplayValue } from "./helpers";
import { addApplication } from "../../../store/actions/updateStatus";
import { toggleFormVisibility } from "../../../store/actions/toggleFormVisibility";

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
    const { addApplication, toggleForm } = props;
    const formInputRefs = {
        companyElement: useRef(null),
        dateElement: useRef(null),
        urlElement: useRef(null),
        roleElement: useRef(null)
    }
    const { 
        companyElement,
        dateElement,
        urlElement,
        roleElement
    } = formInputRefs;

    const handleFormCancel = () => {
        companyElement.current.value = "";
        dateElement.current.value = "";
        urlElement.current.value = "";
        roleElement.current.value = "";
        toggleForm();
    }

    const handleFormSubmit = () => {
        const newData = {
            name: companyElement.current.value,
            date:dateElement.current.value,
            website: urlElement.current.value,
            role: roleElement.current.value,
            status: "Awaiting"
        }
        addApplication(newData);
        handleFormCancel();
    };

    return(
        <ApplicationFormContainer {...props} onSubmit={(e) => e.preventDefault()}>
            <div className="form--inputs">
                <div>
                    <label htmlFor="companyName">Company:</label>
                    <input 
                        id="companyName"
                        type="text"
                        ref={companyElement}
                    />
                </div>
                <div>
                    <label htmlFor="application-date">Date:</label>
                    <input 
                        id="application-date" 
                        type="text"
                        ref={dateElement}
                    />
                </div>
                <div>
                    <label htmlFor="company-url">Website:</label>
                    <input 
                        id="company-url" 
                        type="text"
                        ref={urlElement}
                    />
                </div>
                <div>
                    <label htmlFor="application-role">Role:</label>
                    <input 
                        id="application-role" 
                        type="text"
                        ref={roleElement}
                    />
                </div>                                  
            </div>
            <div className="form--submit">
                <FormButton color="green" onClick={handleFormSubmit}>Add</FormButton>
                <FormButton color="var(--color-red-tone)" onClick={handleFormCancel}>Cancel</FormButton>
            </div>
        </ApplicationFormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addApplication: (newApplication) => dispatch(addApplication(newApplication)),
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(NewApplicationForm);
