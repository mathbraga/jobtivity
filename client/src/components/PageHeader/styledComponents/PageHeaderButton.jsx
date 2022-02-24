import styled from "styled-components";

export const PageHeaderButton = styled.div`
    height: 100%;
    width: 100%;
    padding: 12px;

    font-size: 1.2rem;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;

    box-sizing: border-box;
    border-bottom: 0px solid var(--color-alternative);
    transition: 200ms border;

    ${props => {
        if(!props.smallScreen)
            return(
                ":hover{border-bottom: 3px solid var(--color-alternative);}"
            )
        else{
            return(
                ":hover{background-color: var(--color-alternative);}"
            )
        }
    }}

    img{
        padding-right: 12px;
    }
`;
