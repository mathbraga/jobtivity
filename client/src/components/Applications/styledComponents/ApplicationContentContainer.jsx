import React from "react";
import styled from "styled-components";

import CompanyIcon from "../../../assets/Icons/CompanyIcon";
import RoleIcon from "../../../assets/Icons/RoleIcon";
import UrlIcon from "../../../assets/Icons/UrlIcon";
import CalendarIcon from "../../../assets/Icons/CalendarIcon";
import LocationIcon from "../../../assets/Icons/LocationIcon";
import RemoteIcon from "../../../assets/Icons/RemoteIcon";

import { prettifyDate } from "../../../globalHelperFunctions/utils";
import { useWindowWidth } from "../../../globalHelperFunctions/hooks";

const iconColor = "var(--color-card-elements)";

const ApplicationContentContainerStyles = styled.div`
    .card--content{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        row-gap: 8px;   
    }

    .card--content > div{
        padding-right: 4px;
        flex-basis: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        color: var(--color-secondary);
    }

    div > span{
        font-weight: 800;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    span > span{
        padding-left: 4px;

        color: var(--color-card-elements);
    }

    a{
        text-decoration: none;
        color: var(--color-url);

        :focus, :hover, :visited, :link, :active {
            text-decoration: none;
            color: var(--color-url);
        }

        :hover{
            text-decoration: underline;
        }
    }
`;

export const ApplicationContentContainer = (props) => {
    const { date } = props;
    const prettyDate = date ? prettifyDate(date) : null;
    const width = useWindowWidth();
    const [
        company,
        role,
        url,
        applied,
        remote,
        location
    ] = width > 640 ? 
        ["Company",
        "Role",
        "Url",
        "Applied",
        "Remote",
        "Location"] : [null, null, null, null, null, null];

    return(
        <ApplicationContentContainerStyles>
            <div className="card--content">
                {props.name ?
                    <div>
                        <span>
                            <CompanyIcon iconColor={iconColor}/>
                            {company ? <span>{company}</span> : null}
                        </span> 
                        {props.name}
                    </div>
                    :
                    null
                }
                {props.role ? 
                    <div>
                        <span>
                            <RoleIcon iconColor={iconColor}/>
                            {role ? <span>{role}</span> : null}
                        </span> 
                        {props.role}
                    </div>
                    :
                    null
                }
                {props.website === undefined ?
                    null
                    :
                    <div>
                    <span>
                        <UrlIcon iconColor={iconColor}/>
                        {url ? <span>{url}</span> : null}
                    </span>
                        {props.website ? 
                            <a href={`${props.website}`} rel="noreferrer" target="_blank">Link</a> : "None"}
                    </div>
                }
                {prettyDate ?
                    <div>
                        <span>
                            <CalendarIcon iconColor={iconColor}/>
                            {applied ? <span>{applied}</span> : null}
                        </span> 
                        {prettyDate}
                    </div>
                    :
                    null
                }
                {props.remote === undefined ?
                    null
                    :
                    <div>
                        <span>
                            <RemoteIcon iconColor={iconColor}/>
                            {remote ? <span>{remote}</span> : null}
                        </span> 
                        {props.remote === true ? "Yes" : "No"}
                    </div>
                }
                {props.location ?
                    <div>
                        <span>
                            <LocationIcon iconColor={iconColor}/>
                            {location ? <span>{location}</span> : null}
                        </span> 
                        {props.location}
                    </div>
                    :
                    null
                }
            </div>
        </ApplicationContentContainerStyles>
    );
}
