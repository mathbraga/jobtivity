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
    height: 20px;

    border: none;
    border-radius: 4px;
    box-shadow: ${props => props.boxShadow};

    background-color: ${props => props.color};

    cursor: pointer;

    :active{
        box-shadow: none;
    }
`;

export const NewApplicationButton = (props) => {
    const handleFormToggle = props.onClick;
    const { boxShadow = "0px 1px 2px #111" } = props;

    return(
        <ButtonStyles onClick={handleFormToggle} color={props.color} boxShadow={boxShadow}>
            {handleFormToggle ? <img src={addIcon} alt="Add item." /> : "Full"}
        </ButtonStyles>
    )
}