import styled from "styled-components";

const ApplicationCardContentStyles = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 8px;

    div{
        flex-basis: 50%;
    }

    div span{
        font-weight: 800;
    }
`;

export const ApplicationCardContent = () => {
    return(
        <ApplicationCardContentStyles>
            <div><span>Company:</span> Company Name</div>
            <div><span>Date:</span> 23/10/2021</div>
            <div><span>Website:</span> someurl.com</div>
            <div><span>Role:</span> FullStack</div>
        </ApplicationCardContentStyles>
    )
}
