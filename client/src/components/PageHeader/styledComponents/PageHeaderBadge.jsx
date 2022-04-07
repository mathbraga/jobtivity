import React from "react";
import styled from "styled-components";

import { PageHeaderBadgeContent } from "./PageHeaderBadgeContent";

const PageHeaderBadgeStyles = styled.div`
    margin-left: 0;
    @media only screen and (min-width: 730px){
        margin-left: 80px;
    }
    @media only screen and (min-width: 1370px){
        margin-left: 232px;
    }

    padding: 0 16px;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: black;
    border: 1px solid var(--color-badge-border);
    border-bottom: none;
    border-top: none;
`;

export const PageHeaderBadge = () =>{
    return(
        <PageHeaderBadgeStyles>
            <PageHeaderBadgeContent />
        </PageHeaderBadgeStyles>
    )
}