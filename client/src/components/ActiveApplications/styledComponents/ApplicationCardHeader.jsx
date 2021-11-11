import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { StatusDropdownButton } from "./StatusDropdownButton";
import { statusTypeToColor } from "./helpers";

import arrowIcon from "../../../assets/Icons/ArrowIconBlack.png";

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

        cursor: pointer;
    }

    .card--status_dropdown-hidden{
        display: none;
        position: relative;
        width: 100%;
    }

    .card--status_dropdown-displayed{
        display: inline-block;
    }

    .arrow_icon{
        transition: 0.3s;
        transform: rotate(0deg);
    }

    .arrow_icon-rotated{
        transition: 0.3s;
        transform: rotate(180deg);
    }
`;

export const ApplicationCardHeader = (props) => {
    const [toggle, setToggle] = useState(false);
    const [badgeClassName, setBadgeClassName] = useState("card--status_dropdown-hidden");
    const [arrowClassName, setArrowClassName] = useState("arrow_icon");

    useEffect(() => {
        if(toggle){
            setBadgeClassName("card--status_dropdown-displayed");
            setArrowClassName("arrow_icon-rotated");
        }
        else{
            setBadgeClassName("card--status_dropdown-hidden");
            setArrowClassName("arrow_icon");
        }
    }, [toggle]);

    return(
        <ApplicationCardHeaderStyles status={props.status}>
            <div className="card--header">
                <div className="card--status_badge">
                    <button className="card--status_button" onClick={() => setToggle(!toggle)}>
                        {props.status}
                    </button>
                    <img className={arrowClassName} src={arrowIcon} alt="Open menu icon" />
                    <div className={badgeClassName}>
                        <StatusDropdownButton status="Contact" />
                        <StatusDropdownButton status="Awaiting" />
                    </div>
                </div>
            </div>
        </ApplicationCardHeaderStyles>
    );
}
