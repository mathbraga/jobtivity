import styled from "styled-components";

import { PageHeaderBadgeContent } from "./PageHeaderBadgeContent";

const PageHeaderBadgeStyles = styled.div`
    padding: 0 1.6vw;

    position: relative;
    left: 12vw;

    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: black;
`;

export const PageHeaderBadge = () =>{
    return(
        <PageHeaderBadgeStyles>
            <PageHeaderBadgeContent />
        </PageHeaderBadgeStyles>
    )
}