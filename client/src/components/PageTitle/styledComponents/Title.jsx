import styled from "styled-components";

const TitleStyles = styled.div`
    font-family: "PT Sans";
    font-size: 1.4rem;
    font-weight: 400;

    padding-right: 8px;
    color: var(--color-secondary);
`;

export const Title = (props) => {
    return(
        <TitleStyles>
            {props.title}
        </TitleStyles>
    )
}