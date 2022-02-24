import styled from "styled-components";

export const PageHeaderMenu = styled.div`
    width: 100vw;
    height: auto;

    background-color: white;

    position: fixed;
    left: 0;

    border: 1px solid gold;
    border-top: none;
    border-left: none;

    cursor: pointer;

    transform: translateY(-54px);
    transition: transform 350ms;
    z-index: 1;

    &.collapsed{
        outline: none;

        transform: translateY(52px);
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`;
