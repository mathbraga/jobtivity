import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateStatus, deleteApplication } from "../../../store/actions/updateStatus";

import styled from "styled-components";

import { StatusDropdownButton } from "./StatusDropdownButton";
import { DeleteApplicationButton } from "./DeleteApplicationButton";
import { statusTypeToColor } from "../../../globalHelperFunctions/utils";

import arrowIcon from "../../../assets/Icons/ArrowIconBlack.png";

const ApplicationCardHeaderStyles = styled.div`
    .card--header{
        display: flex;
        justify-content: space-between;
        align-items: center;

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
        box-shadow: var(--button-shadow);

        cursor: pointer;

        :active{
            box-shadow: var(--button-shadow-active);
        }
    }

    .card--status_dropdown-hidden{
        display: inline-block;
        visibility: hidden;
        opacity: 0;

        transition: visibility 0.2s, opacity 0.2s linear;
    }

    .card--status_dropdown-displayed{
        display: inline-block;
        visibility: visible;
        opacity: 1;

        transition: visibility 0.2s, opacity 0.2s linear;
    }

    .card--delete_button{
        background-color: var(--color-red-tone);
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0;

        border-radius: 2px;
        border: none;
        box-shadow: var(--button-shadow);

        cursor: pointer;

        :active{
            box-shadow: var(--button-shadow-active);
        }
    }

    .arrow_icon{
        transition: 0.2s linear;
        transform: rotate(0deg);
    }

    .arrow_icon-rotated{
        transition: 0.2s linear;
        transform: rotate(180deg);
    }
`;

const ApplicationCardHeader = (props) => {
    const [toggle, setToggle] = useState(false);
    const [badgeClassName, setBadgeClassName] = useState("card--status_dropdown-hidden");
    const [arrowClassName, setArrowClassName] = useState("arrow_icon");
    const { updateJobStatus, deleteApplication, applicationStatus, index } = props;

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

    const handleStatusChange = (status, index) => updateJobStatus(status, index);
    const handleDeleteClick = (index) => deleteApplication(index);

    return(
        <ApplicationCardHeaderStyles status={applicationStatus}>
            <div className="card--header">
                <div className="card--status_badge">
                    <button 
                        className="card--status_button" 
                        onClick={() => setToggle(!toggle)} 
                        onBlur={() => setToggle(false)}
                    >
                        {applicationStatus}
                    </button>
                    <img className={arrowClassName} src={arrowIcon} alt="Open menu icon" />
                    <div className={badgeClassName}>
                        <StatusDropdownButton status="Scheduled" onClick={() => handleStatusChange("Scheduled", index)} />
                        <StatusDropdownButton status="Awaiting" onClick={() => handleStatusChange("Awaiting", index)} />
                    </div>
                </div>
                <DeleteApplicationButton onClick={() => handleDeleteClick(index)} />
            </div>
        </ApplicationCardHeaderStyles>
    );
}

const mapDispatchToProps = dispatch => ({
    updateJobStatus: (newStatus, index) => dispatch(updateStatus(newStatus, index)),
    deleteApplication: (index) => dispatch(deleteApplication(index))
})

const mapStateToProps = (state, ownProps) => {
    const { applications } = state.applicationsReducer;
    const { index } = ownProps;

    return ({
        applicationStatus: applications[index].status
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationCardHeader);