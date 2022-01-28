import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import PageTitle from "../PageTitle";
import { 
    ApplicationCard,
    SearchBarContainer,
    NoApplicationsCard
} from "./styledComponents";
import NewApplicationForm from "./styledComponents/NewApplicationForm";
import { prettifyDate } from "./styledComponents/helpers";

import SearchIcon from "../../assets/Icons/SearchIconWhite.png";
import ClearSearchIcon from "../../assets/Icons/DeleteIconWhite.png";

const activeApplicationsPageTitle = "Active Applications";

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
        const { name, role, date, status } = applicationData; 
        const [
            lowerName,
            lowerRole,
            lowerDate,
            lowerStatus
        ] = [
            name.toLowerCase(),
            role.toLowerCase(),
            prettifyDate(date).toLowerCase(),
            status.toLowerCase()
        ];

        if(
            lowerName.includes(searchTermLower) ||
            lowerRole.includes(searchTermLower) ||
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
            <SearchBarContainer>
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
            </SearchBarContainer>
            {numberOfApplications === 0 ? 
                <NoApplicationsCard>No active applications.</NoApplicationsCard>
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