import styled from "styled-components";

const ThemeToggleContainer = styled.div`
    height: 24px;
    width: 44px;

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

const ToggleCircle = styled.div`
    width: 20px;
    height: 20px;

    position: relative;
    left: 0;
    transition: 250ms left;

    border-radius: 50%;

    background-color: white;

    &.toggle--on{
        left:50%
    }
`;

export const ThemeToggle = (props) => {
    const { onClick, toggleState } = props;

    return(
        <ThemeToggleContainer onClick={onClick}>
            <ToggleCircle className={toggleState ? "toggle--on" : ""} />
        </ThemeToggleContainer>
    )
}
