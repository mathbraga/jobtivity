import React from "react";
import styled from "styled-components";

const FormInputContainer = styled.div`
    display: ${props => props.displayType};
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

        color: var(--color-card-elements);
    }

    .form--element{
        box-sizing: border-box;
        background-color: var(--color-form-input);

        border: 1px solid #ccc;
        border-radius: 4px;

        width: 100%;
        height: 1.8rem;

        padding: 4px 12px;

        ::placeholder{
            color: rgba(0, 0, 0, 0.5);
        }
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
        defaultValue,
        display = "flex" } = props;
    const IconComponent = icon;

    return(
        <FormInputContainer displayType={display}>
            <div>
                <IconComponent />
                <label htmlFor={"refLabel"}>{labelName}</label>
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