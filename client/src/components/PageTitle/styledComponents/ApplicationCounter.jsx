import React from "react";
import styled from "styled-components";

const ApplicationCounterStyles = styled.div`
    color: ${props => props.color};

    font-family: "PT Sans";
    font-size: 1.4rem;
    font-weight: 400;
`;

export const ApplicationCounter = (props) => {
    return(
        <ApplicationCounterStyles color={props.color}>
            {props.count}
        </ApplicationCounterStyles>
    )
}