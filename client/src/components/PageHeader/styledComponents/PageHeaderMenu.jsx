import styled from "styled-components";

export const PageHeaderMenu = styled.div`
    width: auto;
    height: auto;

    background-color: white;

    padding: 12px 0;

    position: fixed;
    left: 0;

    border: 1px solid gold;
    border-bottom-right-radius: 12px;
    border-left: none;
    border-top: none;

    cursor: pointer;

    transform: translateY(-68px);
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
