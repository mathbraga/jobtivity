import styled from "styled-components";

export const PageHeaderContainer = styled.div`
    position: sticky;

    top: 0;
    padding: 0;

    width: 100%;
    height: 52px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-primary);

    z-index: 2;

    a{
        text-decoration: none;
        color: inherit;
    }
`;
