import styled from "styled-components";

const FormSelectContainer = styled.select`
    box-sizing: border-box;
    background-color: rgba(204,204,204,0.2);

    border: 1px solid #ccc;
    border-radius: 4px;

    width: 100%;
    height: 28px;

    padding: 4px 12px;
`;

export const FormSelect = (props) => {
    const { elementRef, optionsList, icon, labelName } = props;

    return(
        <>
            <div>
                <img src={icon} alt="" />
                <label htmlFor="refLabel">{labelName}</label>
            </div>
            <FormSelectContainer 
                id="refLabel"
                ref={elementRef}
                defaultValue={optionsList[0]}
            >
                {optionsList.map(
                    (option, index) => {
                        return(
                            <option 
                                value={option}
                                key={index}
                            >
                                {option}
                            </option>
                        )
                    }
                    )
                }
            </FormSelectContainer>
        </>
    )
};