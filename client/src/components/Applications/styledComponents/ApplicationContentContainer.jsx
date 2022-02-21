import styled from "styled-components";

import companyIcon from "../../../assets/Icons/CompanyIcon.png";
import roleIcon from "../../../assets/Icons/RoleIcon.png";
import urlIcon from "../../../assets/Icons/UrlIcon.png";
import calendarIcon from "../../../assets/Icons/CalendarIcon.png";
import locationIcon from "../../../assets/Icons/LocationIcon.png";
import remoteIcon from "../../../assets/Icons/RemoteIcon.png";

import { prettifyDate } from "../../../globalHelperFunctions/utils";
import { useWindowWidth } from "../../../globalHelperFunctions/hooks";

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

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    div > span{
        font-weight: 800;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    span > span{
        padding-left: 4px;
    }

    a{
        text-decoration: none;
        color: #0000EE;

        :focus, :hover, :visited, :link, :active {
            text-decoration: none;
            color: #0000EE;
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
                            <img src={companyIcon} alt="" />
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
                            <img src={roleIcon} alt="" />
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
                        <img src={urlIcon} alt="" />
                        {url ? <span>{url}</span> : null}
                    </span>
                        {props.website ? 
                            <a href={`${props.website}`} rel="noreferrer" target="_blank">Link</a> : "None"}
                    </div>
                }
                {prettyDate ?
                    <div>
                        <span>
                            <img src={calendarIcon} alt="" />
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
                            <img src={remoteIcon} alt="" />
                            {remote ? <span>{remote}</span> : null}
                        </span> 
                        {props.remote === true ? "Yes" : "No"}
                    </div>
                }
                {props.location ?
                    <div>
                        <span>
                            <img src={locationIcon} alt="" />
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
