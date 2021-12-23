import styled from "styled-components";

import addIcon from "../../../assets/Icons/AddIconBlack.png";

const ButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;

    width: 60px;
    height: 20px;

    border: none;
    border-radius: 4px;
    box-shadow: 0px 1px 2px #111;

    background-color: var(--color-alternative);

    cursor: pointer;

    :active{
        box-shadow: none;
    }
`;

export const NewApplicationButton = (props) => {
    const handleFormToggle = props.onClick;

    return(
        <ButtonStyles onClick={handleFormToggle}>
            <img src={addIcon} alt="Add item." />
        </ButtonStyles>
    )
}