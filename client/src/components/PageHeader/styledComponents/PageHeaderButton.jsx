import React from "react";
import styled from "styled-components";

export const PageHeaderButton = styled.div`
    height: 100%;
    width: 100%;
    padding: 0.8rem;

    color: var(--color-secondary);
    background-color: var(--color-primary-alternative);
    
    font-size: 1.2rem;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;

    box-sizing: border-box;
    border-bottom: 0px solid var(--color-alternative);
    transition: 200ms border;

    &.button--highlighted{
        background-color: var(--color-alternative);
    }

    ${props => {
        if(!props.smallScreen)
            return(
                ":hover{border-bottom: 3px solid var(--color-alternative);}"
            )
        else{
            return(
                ":hover{background-color: var(--color-alternative);}"
            )
        }
    }}

    img{
        padding-right: 12px;
    }
`;
