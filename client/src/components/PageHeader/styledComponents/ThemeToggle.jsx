import styled from "styled-components";

export const ThemeToggle = styled.div`
    height: 20px;
    width: 36px;

    background-color: #ccc;

    border: 2px solid black;
    border-radius: 12px;

    margin-right: 5%;
    @media only screen and (min-width: 730px){
        margin-right: 120px;
    }
    @media only screen and (min-width: 1370px){
        margin-right: 240px;
    }

    cursor: pointer;
`;
