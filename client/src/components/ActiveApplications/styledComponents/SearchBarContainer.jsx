import styled from "styled-components";

export const SearchBarContainer = styled.div`
    width: 60%;
    height: 40px;

    background-color: #979797;

    border: 2px solid #979797;
    border-radius: 4px;

    margin-bottom: 12px;

    display: flex;
    justify-content: start;
    align-items: center;

    img{
        padding: 8px;
    }

    input{
        width: 100%;
        height: 100%;
        border: transparent;

        padding: 8px;

        :focus-visible{
            outline: none;
        }
    }

    .search--clear{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        padding: 0 16px;
        
        font-weight: bold;

        background-color: white;

        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        div{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #979797;
            width: 20px;
            height: 20px;

            cursor: pointer;

            img{
                padding: 0;
            }
        }
    }
`