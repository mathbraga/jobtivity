import styled from "styled-components";

const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-bottom: 4px;

    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    div label{
        font-weight: bold;
        padding-left: 4px;
    }

    .form--element{
        box-sizing: border-box;
        background-color: rgba(204,204,204,0.2);

        border: 1px solid #ccc;
        border-radius: 4px;

        width: 100%;
        height: 28px;

        padding: 4px 12px;
    }
`;

export const FormInput = (props) => {
    const { 
        labelName,
        inputType,
        placeholder,
        elementRef, 
        icon, 
        isRequired,
        defaultValue } = props;

    return(
        <FormInputContainer>
            <div>
                <img src={icon} alt="" />
                <label htmlFor="refLabel">{labelName}</label>
            </div>
            <input
                id="refLabel"
                className="form--element"
                placeholder={placeholder}
                type={inputType}
                ref={elementRef}
                required={isRequired}
                defaultValue={defaultValue}
            />
        </FormInputContainer>
    )
}