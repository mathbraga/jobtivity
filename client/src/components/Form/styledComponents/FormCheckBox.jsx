import styled from "styled-components";

const CheckBoxStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding-bottom: 4px;

    label{
        font-weight: bold;
        padding-left: 4px;
    }
    input{
        margin-left: 4px;
    }
`;

export const FormCheckBox = (props) => {
    const { labelName, elementRef, icon, onClick } = props;

    return(
        <CheckBoxStyles>
            <img src={icon} alt="" />
            <label className="check--remote" >{labelName}</label>
            <input type="checkbox" ref={elementRef} onClick={onClick} />
        </CheckBoxStyles>
    )
}
