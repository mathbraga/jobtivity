import styled from "styled-components";

export const PageHeaderButton = styled.div`
    height: 100%;
    width: max-content;
    padding: 0 12px;

    font-size: 1.2rem;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    box-sizing: border-box;
    border-bottom: 0px solid var(--color-alternative);
    transition: 0.2s border;

    :hover{
        border-bottom: 3px solid var(--color-alternative);
    }
`;
