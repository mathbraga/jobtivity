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
        border-bottom: 1px solid black;
        width: 20px;

        margin: 2px 0;

        pointer-events: none;
    }
`;

export const MenuButton = (props) => {
    return(
        <MenuButtonContainer {...props}>
            <div></div>
            <div></div>
            <div></div>
        </MenuButtonContainer>
    );
}
