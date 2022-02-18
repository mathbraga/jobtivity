import styled from "styled-components";

import { PageHeaderBadgeContent } from "./PageHeaderBadgeContent";

const PageHeaderBadgeStyles = styled.div`
    @media only screen and (max-width: 2000px){
        margin-left: 232px;
    }
    @media only screen and (max-width: 1300px){
        margin-left: 80px;
    }
    @media only screen and (max-width: 720px){
        margin-left: 0;
    }

    padding: 0 16px;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: var(--color-secondary);
`;

export const PageHeaderBadge = () =>{
    return(
        <PageHeaderBadgeStyles>
            <PageHeaderBadgeContent />
        </PageHeaderBadgeStyles>
    )
}