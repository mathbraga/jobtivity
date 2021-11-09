import styled from "styled-components";

import { StatusDropdownButton } from "./StatusDropdownButton";
import { statusTypeToColor } from "./helpers";

import arrowIcon from "../../../assets/Icons/ArrowIcon.png";

const ApplicationCardHeaderStyles = styled.div`
    .card--header{
        width: 100%;
        box-shadow: var(--color-title-underline) 0 1px 0;
        margin-bottom: 8px;
        padding-bottom: 4px;
    }

    .card--status_badge{
        display: flex;
        position: relative;
        justify-content: flex-start;
        align-items: center;
    }

    .card--status_button{
        width: max-content;
        height: auto;
        padding: 4px 8px;

        color: white;
        background-color: ${props => statusTypeToColor(props.status)};
        
        border-radius: 4px;
        border: none;
    }

    .card--status_dropdown{
        display: none;
        position: relative;
        width: 100%;
    }

    .card--status_badge:hover .card--status_dropdown{
        display: inline-block;
    }

    .card--status_badge img{
        transition: 0.3s;
        transform: rotate(0deg);
    }

    .card--status_badge:hover img{
        transform: rotate(180deg);
    }
`;

export const ApplicationCardHeader = (props) => {
    return(
        <ApplicationCardHeaderStyles status={props.status}>
            <div className="card--header">
                <div className="card--status_badge">
                    <div className="card--status_button">{props.status}</div>
                    <img src={arrowIcon} alt="Open menu icon" />
                    <div className="card--status_dropdown">
                        <StatusDropdownButton status="Contact" />
                        <StatusDropdownButton status="Awaiting" />
                    </div>
                </div>
            </div>
        </ApplicationCardHeaderStyles>
    );
}
