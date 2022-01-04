import styled from "styled-components";

const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    flex-basis: 50%;

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div label{
        font-weight: bold;
        padding-left: 4px;
    }
`;

export const FormInput = (props) => {
    const { labelName, inputType, elementRef, icon } = props;

    return(
        <FormInputContainer>
            <div>
                <img src={icon} alt="" />
                <label htmlFor="refLabel" text-muted>{labelName}</label>
            </div>
            <input 
                id="refLabel"
                type={inputType}
                ref={elementRef}
            />
        </FormInputContainer>
    )
}