import styled from "styled-components";

const FormButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px 8px;

    background-color: ${props => props.color};

    border: none;
    border-radius: 4px;

    box-shadow: 0px 1px 2px black;

    cursor: pointer;

    :active{
        box-shadow: none;
    }

    .form--button{
        background-color: inherit;
        border: inherit;

        font-weight: bold;
        color: white;

        cursor: inherit;
    }
`;

export const FormButton = (props) => {
    const { buttonValue, buttonType, ...otherProps } = props;

    return(
        <FormButtonContainer {...otherProps}>
            {buttonType === "submit" ? 
                <input className="form--button" type={buttonType} value={buttonValue} />
                :
                <div className="form--button">{buttonValue}</div>
            }
        </FormButtonContainer>
    )
}
