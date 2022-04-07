import React from "react";
import styled from "styled-components";

const MenuButtonContainer = styled.div`
    height: 100%;
    width: auto;

    padding: 16px;

    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        border-bottom: 1px solid var(--color-secondary);

        width: 20px;
        margin: 2px 0;

        pointer-events: none;

        transition: transform 200ms, border 200ms, width 200ms;
    }

    .collapsed--upper, .collapsed--lower{
        width: 10px;
    }

    .collapsed--upper{
        transform: rotate(45deg) translateX(5px);
    }
    .collapsed--middle{
        border-color: transparent;
    }
    .collapsed--lower{
        transform: rotate(-45deg) translateY(-7px) translateX(2px);
    }
`;

export const MenuButton = (props) => {
    const { menuState, ...otherProps } = props;
    const [
        lineUpper,
        lineMiddle,
        lineLower
    ] = menuState ? 
        ["collapsed--upper",
        "collapsed--middle",
        "collapsed--lower"] : ["", "", ""];

    return(
        <MenuButtonContainer {...otherProps}>
            <div className={lineUpper}></div>
            <div className={lineMiddle}></div>
            <div className={lineLower}></div>
        </MenuButtonContainer>
    );
}
