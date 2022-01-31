import styled from "styled-components";

export const ApplicationFormContainer = styled.form`
    display: flex;
    flex-direction: column;

    width: 60%;
    height: auto;

    border: 1px solid gold;
    border-radius: 4px;

    opacity: 1;
    visibility: visible;
    transition: visibility 250ms, opacity 250ms linear;

    padding: 12px;
    margin-bottom: 12px;

    &.form--closed{
        opacity: 0;
        visibility: hidden;
        transition: none;

        padding: 0;
        margin-bottom: 0;

        border: none;
    }
`;
