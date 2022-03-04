import styled from "styled-components";

import addIcon from "../../../assets/Icons/AddIconBlack.png";

const ButtonStyles = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    color: white;

    margin-left: auto;

    width: 60px;
    min-height: 20px;

    border: none;
    border-radius: 4px;
    box-shadow: ${props => props.boxShadow};

    background-color: ${props => props.color};

    cursor: ${props => props.cursor};

    :active{
        box-shadow: none;
    }
`;

export const NewApplicationButton = (props) => {
    const handleFormToggle = props.onClick;
    const { 
        cursor = "pointer",
        boxShadow = "var(--color-page-button-shadow)",
        text = ""
    } = props;

    return(
        <ButtonStyles 
        onClick={handleFormToggle}
        color={props.color}
        boxShadow={boxShadow}
        cursor={cursor}
        >
            {handleFormToggle ? <img src={addIcon} alt="Add item." /> : text}
        </ButtonStyles>
    )
}