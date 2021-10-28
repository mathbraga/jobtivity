import styled from "styled-components";

const ApplicationCardContentStyles = styled.div`
    .content{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        row-gap: 8px;   
    }

    .content div{
        flex-basis: 50%;
    }

    .block--title{
        width: 80%;
        box-shadow: var(--color-title-underline) 0 1px 0;
        margin-bottom: 8px;
    }

    div > span{
        font-weight: 800;
    }
`;

export const ApplicationCardContent = () => {
    return(
        <ApplicationCardContentStyles>
            <div className="block--title">
                Status
            </div>
            <div className="content">
                <div><span>Company:</span> Company Name</div>
                <div><span>Date:</span> 23/10/2021</div>
                <div><span>Website:</span> someurl.com</div>
                <div><span>Role:</span> FullStack</div>
            </div>
        </ApplicationCardContentStyles>
    )
}
