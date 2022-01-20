import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";
import NewApplicationForm from "./styledComponents/NewApplicationForm";
import { prettifyDate } from "./styledComponents/helpers";

import styled from "styled-components";
import SearchIcon from "../../assets/Icons/SearchIconWhite.png";
import ClearSearchIcon from "../../assets/Icons/DeleteIconWhite.png";

const activeApplicationsPageTitle = "Active Applications";

const SearchBar = styled.div`
    width: 60%;
    height: 40px;

    background-color: #979797;

    border: 2px solid #979797;
    border-radius: 4px;

    margin-bottom: 12px;

    display: flex;
    justify-content: start;
    align-items: center;

    img{
        padding: 8px;
    }

    input{
        width: 100%;
        height: 100%;
        border: transparent;

        padding: 8px;

        :focus-visible{
            outline: none;
        }
    }

    .search--clear{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        padding: 0 16px;
        
        font-weight: bold;

        background-color: white;

        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        div{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #979797;
            width: 20px;
            height: 20px;

            cursor: pointer;

            img{
                padding: 0;
            }
        }
    }
`

const NoApplications = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ccc;

    border: 1px solid #979797;
    border-radius: 4px;

    width: 60%;
    height: 100px;

    font-weight: bold;
    font-size: 1.2rem;
    color: #575757;
`;

const ActiveApplications = (props) => {
    const { applicationsList, formState } = props;
    const numberOfApplications = applicationsList ? applicationsList.length : 0;
    const applications = applicationsList ? applicationsList : [];
    const searchBarRef = useRef(null);
    const [ inputValue, setInput ] = useState("");

    const handleInputUpdate = () => {setInput(searchBarRef.current.value)}
    const handleSearchClear = () => {
        searchBarRef.current.value = "";
        handleInputUpdate();
    }

    const returnDisplayType = (applicationData) => {
        const searchTermLower = inputValue.toLowerCase();
        const { name, role, website, date, status } = applicationData; 
        const [
            lowerName,
            lowerRole,
            lowerWebsite,
            lowerDate,
            lowerStatus
        ] = [
            name.toLowerCase(),
            role.toLowerCase(),
            website.toLowerCase(),
            prettifyDate(date).toLowerCase(),
            status.toLowerCase()
        ];

        if(
            lowerName.includes(searchTermLower) ||
            lowerRole.includes(searchTermLower) ||
            lowerWebsite.includes(searchTermLower) ||
            lowerDate.includes(searchTermLower) ||
            lowerStatus.includes(searchTermLower)
        )
            return "inline-block"
        else
            return "none"
    }

    return(
        <>
            <PageTitle 
                pageTitle={activeApplicationsPageTitle}
                hasAddButton={true}
                applicationCounter={numberOfApplications}
            />
            <NewApplicationForm isVisible={formState} />
            <SearchBar>
                <img src={SearchIcon} alt="Search Icon"/>
                <input 
                    type="text"
                    placeholder="Search..."
                    ref={searchBarRef}
                    onChange={handleInputUpdate}
                />
                {inputValue.length > 0 ?
                    <div className="search--clear">
                        <div onClick={handleSearchClear}>
                            <img src={ClearSearchIcon} alt="X" />
                        </div>
                    </div>
                    :
                    null
                }
            </SearchBar>
            {numberOfApplications === 0 ? 
                <NoApplications>No active applications.</NoApplications>
                :
                applications.map((item, index) => {
                    const displayType = returnDisplayType(item);
                    return <ApplicationCard {...item} key={index} index={index} displayType={displayType} />
            }
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    applicationsList: state.applicationsReducer.applications,
    formState: state.formsReducer.formVisibility
})

export default connect(mapStateToProps, null)(ActiveApplications);