import styled from "styled-components";

const FormSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-bottom: 4px;

    select{
        box-sizing: border-box;
        background-color: rgba(204,204,204,0.2);

        border: 1px solid #ccc;
        border-radius: 4px;

        width: 100%;
        height: 28px;

        padding: 4px 12px;
    }

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

export const FormSelect = (props) => {
    const { elementRef, optionsList, icon, labelName } = props;

    return(
        <FormSelectContainer>
            <div>
                <img src={icon} alt="" />
                <label htmlFor="refLabel">{labelName}</label>
            </div>
            <select 
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
            </select>
        </FormSelectContainer>
    )
};