import styled from "styled-components";

const ApplicationCounterStyles = styled.div`
    font-family: "PT Sans";
    font-size: 1.4rem;
    font-weight: 400;
`;

export const ApplicationCounter = (props) => {
    return(
        <ApplicationCounterStyles>
            {props.count}
        </ApplicationCounterStyles>
    )
}