import React from "react";
import styled from "styled-components";
import NightModeIcon from "../../../assets/Icons/NightModeIcon";
import LightModeIcon from "../../../assets/Icons/LightModeIcon";

const ThemeToggleContainer = styled.div`
    height: 24px;
    width: 44px;

    background-color: #e7e7e7;

    border: 2px solid gold;
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
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    position: relative;
    left: 0;
    transition: 250ms left;

    border-radius: 50%;

    background-color: #979797;

    &.toggle--on{
        left:50%
    }

    .icon--visible{
        opacity: 1;
    }

    svg{
        position: absolute;
        fill: gold;

        opacity: 0;
        transition: opacity 250ms;
    }
`;

export const ThemeToggle = (props) => {
    const { onClick, toggleState } = props;

    return(
        <ThemeToggleContainer onClick={onClick}>
            <ToggleCircle className={toggleState ? "toggle--on" : ""}>
                <LightModeIcon className={toggleState ? "" : "icon--visible"} />
                <NightModeIcon className={toggleState ? "icon--visible" : ""} />
            </ToggleCircle>
        </ThemeToggleContainer>
    )
}
