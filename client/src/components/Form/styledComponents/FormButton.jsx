import styled from "styled-components";

export const FormButton = styled.button`
    font-weight: bold;
    padding: 4px 8px;

    background-color: ${props => props.color};
    color: white;

    border: none;
    border-radius: 4px;

    box-shadow: 0px 1px 2px #111;

    cursor: pointer;

    :active{
        box-shadow: none;
    }
`;