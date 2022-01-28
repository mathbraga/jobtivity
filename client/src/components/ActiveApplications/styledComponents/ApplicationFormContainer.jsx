import styled from "styled-components";

import { returnDisplayValue } from "./helpers";

export const ApplicationFormContainer = styled.form`
    --opacity-value: ${props => {
        if(returnDisplayValue(props.isVisible) === "flex")
            return 1;
        else
            return 0;
    }};
    --visibility-value: ${props => {
        if(returnDisplayValue(props.isVisible) === "flex")
            return "visible";
        else
            return "hidden";
    }};
    --size-value: ${props => {
        if(returnDisplayValue(props.isVisible) === "flex")
            return "12px";
        else
            return 0;
    }};
    --border-value: ${props => {
        if(returnDisplayValue(props.isVisible) === "flex")
            return "1px";
        else
            return 0;
    }};

    display: flex;
    flex-direction: column;

    opacity: var(--opacity-value);
    visibility: var(--visibility-value);
    transition: visibility 0.2s, opacity 0.2s linear;

    padding: var(--size-value);
    margin-bottom: var(--size-value);

    border: var(--border-value) solid var(--color-alternative);
    border-radius: 4px;

    width: 60%;
    height: auto;
`;
