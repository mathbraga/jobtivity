import styled from "styled-components";

import companyIcon from "../../../assets/Icons/CompanyIcon.png";
import roleIcon from "../../../assets/Icons/RoleIcon.png";
import urlIcon from "../../../assets/Icons/UrlIcon.png";
import calendarIcon from "../../../assets/Icons/CalendarIcon.png";

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
`;

export const ApplicationContentContainer = (props) => {
    return(
        <ApplicationContentContainerStyles>
            <div className="card--content">
                <div>
                    <span>
                        <img src={companyIcon} alt="" />
                        <span>Company</span>
                    </span> 
                    {props.name}
                </div>
                <div>
                    <span>
                        <img src={roleIcon} alt="" />
                        <span>Role</span>
                    </span> 
                    {props.role}
                </div>
                <div>
                    <span>
                        <img src={urlIcon} alt="" />
                        <span>Url</span>
                    </span> 
                    <a href="/" rel="noreferrer" target="_blank">{props.website}</a>
                </div>
                <div>
                    <span>
                        <img src={calendarIcon} alt="" />
                        <span>Applied</span>
                    </span> 
                    {props.date}
                </div>
            </div>
        </ApplicationContentContainerStyles>
    );
}
