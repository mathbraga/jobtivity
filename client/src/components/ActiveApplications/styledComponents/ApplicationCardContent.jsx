import styled from "styled-components";

const ApplicationCardContentStyles = styled.div`
    .card--content{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        row-gap: 8px;   
    }

    .card--content div{
        padding-right: 4px;
        flex-basis: 50%;
    }

    .card--header{
        width: 100%;
        box-shadow: var(--color-title-underline) 0 1px 0;
        margin-bottom: 8px;
        padding-bottom: 4px;
    }

    .card--status_badge{
        display: flex;
        justify-content: center;
        align-items: center;

        width: max-content;
        height: auto;
        padding: 4px 8px;

        color: white;
        background-color: green;
        
        border-radius: 4px;
    }

    div > span{
        font-weight: 800;
    }
`;

export const ApplicationCardContent = () => {
    return(
        <ApplicationCardContentStyles>
            <div className="card--header">
                <div className="card--status_badge">
                    Status
                </div>
            </div>
            <div className="card--content">
                <div><span>Company:</span> Company Name</div>
                <div><span>Date:</span> 23/10/2021</div>
                <div><span>Website:</span> someurl.com</div>
                <div><span>Role:</span> FullStack</div>
            </div>
        </ApplicationCardContentStyles>
    )
}
