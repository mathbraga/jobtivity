import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import PageTitle from "../PageTitle";
import { ApplicationCard } from "./styledComponents";
import NewApplicationForm from "./styledComponents/NewApplicationForm";

import styled from "styled-components";
import SearchIcon from "../../assets/Icons/SearchIconWhite.png";

const activeApplicationsPageTitle = "Active Applications";

const SearchBar = styled.div`
    width: 60%;
    height: 40px;

    background-color: #979797;

    border: 1px solid #979797;
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
        border: 1px solid #979797;

        padding: 8px;
    }
`

const ActiveApplications = (props) => {
    const { applicationsList, formState } = props;
    const numberOfApplications = applicationsList ? applicationsList.length : 0;
    const applications = applicationsList ? applicationsList : [];
    const searchBarRef = useRef(null);
    const [filteredApplications, setApplicationList] = useState(applications);

    const searchList = (applicationData) => {
        const searchTermLower = searchBarRef.current.value.toLowerCase();
        const searchResult = applicationData.filter(item => {
            const { name, role, website, date, status } = item; 
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
                date.toLowerCase(),
                status.toLowerCase()
            ];

            return(
                lowerName.includes(searchTermLower) ||
                lowerRole.includes(searchTermLower) ||
                lowerWebsite.includes(searchTermLower) ||
                lowerDate.includes(searchTermLower) ||
                lowerStatus.includes(searchTermLower)
            )
        });
        setApplicationList(searchResult);
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
                <input type="text" placeholder="Search..." ref={searchBarRef} onChange={() => searchList(applications)} />
            </SearchBar>
            {/* TODO: Fix bug with removing filtered application, related to index value in localStorage inconsistency. */}
            {filteredApplications.map((item, index) =>
                <ApplicationCard {...item} key={index} index={index} />
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    applicationsList: state.applicationsReducer.applications,
    formState: state.formsReducer.formVisibility
})

export default connect(mapStateToProps, null)(ActiveApplications);