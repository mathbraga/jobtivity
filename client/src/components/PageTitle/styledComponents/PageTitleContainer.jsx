import styled from "styled-components";

export const PageTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 12px;

    width: 80%;
    @media only screen and (min-width: 640px){
        width: 600px;
    }
    @media only screen and (min-width: 1000px){
        width: 700px;
    }

    box-shadow: var(--color-title-underline) 0 1px 0;
`;