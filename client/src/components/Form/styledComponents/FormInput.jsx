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

    input{
        box-sizing: border-box;

        border: 1px solid #ccc;
        border-radius: 4px;

        width: 100%;
        height: 28px;

        padding: 4px;
    }
`;

export const FormInput = (props) => {
    const { labelName, inputType, elementRef, icon } = props;

    return(
        <FormInputContainer className="blablabla">
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