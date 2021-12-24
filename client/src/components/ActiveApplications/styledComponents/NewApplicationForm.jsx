import styled from "styled-components";

import { returnDisplayValue } from "./helpers";

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

export const NewApplicationForm = (props) => {
    return(
        <ApplicationFormContainer {...props} onSubmit={(e) => e.preventDefault()}>
            <div className="form--inputs">
                <div>
                    <label htmlFor="company-name">Company:</label>
                    <input id="company-name" type="text"/>
                </div>
                <div>
                    <label htmlFor="application-date">Date:</label>
                    <input id="application-date" type="text"/>
                </div>
                <div>
                    <label htmlFor="company-url">Website:</label>
                    <input id="company-url" type="text"/>
                </div>
                <div>
                    <label htmlFor="applicatio-role">Role:</label>
                    <input id="applicatio-role" type="text"/>
                </div>                                  
            </div>
            <div className="form--submit">
                <FormButton color="green">Add</FormButton>
                <FormButton color="var(--color-red-tone)">Cancel</FormButton>
            </div>
        </ApplicationFormContainer>
    );
}
