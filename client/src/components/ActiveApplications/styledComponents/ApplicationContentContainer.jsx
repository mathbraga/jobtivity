import styled from "styled-components";

const ApplicationContentContainerStyles = styled.div`
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

export const ApplicationContentContainer = (props) => {
    return(
        <ApplicationContentContainerStyles>
            <div className="card--content">
                <div><span>Company:</span> {props.name}</div>
                <div><span>Date:</span> {props.date}</div>
                <div><span>Website:</span> {props.website}</div>
                <div><span>Role:</span> {props.role}</div>
            </div>
        </ApplicationContentContainerStyles>
    );
}
