import styled from "styled-components";

const FormInputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-basis: 50%;

    label{
        font-weight: bold;
        padding-right: 4px;
    }
`;

export const FormInput = (props) => {
    const { labelName, inputType, elementRef } = props;

    return(
        <FormInputContainer>
            <label htmlFor="refLabel">{labelName}:</label>
            <input 
                id="refLabel"
                type={inputType}
                ref={elementRef}
            />
        </FormInputContainer>
    )
}