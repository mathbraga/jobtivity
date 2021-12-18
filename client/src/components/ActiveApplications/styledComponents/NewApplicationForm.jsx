import styled from "styled-components";

import { checkVisibility } from "./helpers";

const ApplicationFormContainer = styled.form`
    display: ${props => checkVisibility(props.isVisible)};
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 8px;

    padding: 12px;
    margin-bottom: 12px;

    border: 1px solid var(--color-alternative);
    border-radius: 4px;

    width: 60%;
    height: auto;

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
`;

export const NewApplicationForm = (props) => {
    return(
        <ApplicationFormContainer {...props}>
            <div>
                <label htmlFor="company-name">Company:</label>
                <input id="company-name" type="text" size="10" />
            </div>
            <div>
                <label htmlFor="application-date">Date:</label>
                <input id="application-date" type="text" size="10" />
            </div>
            <div>
                <label htmlFor="company-url">Website:</label>
                <input id="company-url" type="text"  size="10" />
            </div>
            <div>
                <label htmlFor="applicatio-role">Role:</label>
                <input id="applicatio-role" type="text" size="10" />
            </div>
        </ApplicationFormContainer>
    );
}
