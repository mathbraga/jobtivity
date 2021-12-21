import styled from "styled-components";

const ButtonStyles = styled.button`
    margin-left: auto;

    width: 60px;
    height: 20px;
`;

export const NewApplicationButton = (props) => {
    return(
        <ButtonStyles onClick={() => console.log("clicked")}>{"+"}</ButtonStyles>
    )
}