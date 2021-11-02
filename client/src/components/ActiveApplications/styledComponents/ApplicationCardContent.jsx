import styled from "styled-components";

import { ApplicationCardHeader } from "./ApplicationCardHeader";

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

    div > span{
        font-weight: 800;
    }
`;

export const ApplicationCardContent = () => {
    return(
        <ApplicationCardContentStyles>
            <ApplicationCardHeader status={"Contact"} />
            <div className="card--content">
                <div><span>Company:</span> Company Name</div>
                <div><span>Date:</span> 23/10/2021</div>
                <div><span>Website:</span> someurl.com</div>
                <div><span>Role:</span> FullStack</div>
            </div>
        </ApplicationCardContentStyles>
    )
}
