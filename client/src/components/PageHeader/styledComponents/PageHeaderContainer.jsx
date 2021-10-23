import styled from "styled-components";

export const PageHeaderContainer = styled.div`
    position: sticky;

    top: 0;
    padding: 0;

    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-color: var(--color-primary);

    box-shadow: 0 5px 10px 0 var(--color-header-shadow);
`;
