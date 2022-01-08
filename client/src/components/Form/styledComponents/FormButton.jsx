import styled from "styled-components";

const FormButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px 8px;

    background-color: ${props => props.color};

    border: none;
    border-radius: 4px;

    box-shadow: 0px 1px 2px #111;

    cursor: pointer;

    :active{
        box-shadow: none;
    }

    input{
        background-color: inherit;
        border: inherit;

        font-weight: bold;
        color: white;

        cursor: inherit;
    }
`;

export const FormButton = (props) => {
    const { submitValue, ...otherProps } = props;

    return(
        <FormButtonContainer {...otherProps}>
            <input type="submit" value={submitValue} />
        </FormButtonContainer>
    )
}
