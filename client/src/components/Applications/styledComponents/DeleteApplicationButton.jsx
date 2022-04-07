import React from "react";
import styled from "styled-components";

import deleteIcon from "../../../assets/Icons/DeleteIconWhite.png";

export const ButtonStyles = styled.button`
    background-color: var(--color-red-tone);
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;

    border-radius: 2px;
    border: none;
    box-shadow: var(--button-shadow);

    cursor: pointer;

    :active{
        box-shadow: var(--button-shadow-active);
    }
`;

export const DeleteApplicationButton = (props) => {
    return(
        <ButtonStyles onClick={props.onClick}>
            <img src={deleteIcon} alt="X" />
        </ButtonStyles>
    );
}
