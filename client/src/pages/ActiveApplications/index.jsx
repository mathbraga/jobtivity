import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import PageTitle from "../../components/PageTitle";
import { 
    ApplicationCard,
    SearchBarContainer,
    NoApplicationsCard
} from "../../components/Applications/styledComponents";
import NewApplicationForm from "../../components/NewApplicationForm";
import { NewApplicationButton } from "../../components/PageTitle/styledComponents";
import { StructuredTextContainer } from "./styledComponents";
import { prettifyDate } from "../../globalHelperFunctions/utils";

import SearchIcon from "../../assets/Icons/SearchIconWhite.png";
import ClearSearchIcon from "../../assets/Icons/DeleteIconWhite.png";
import { ApplicationsPageContainer } from "../globalStyledComponents";

const activeApplicationsPageTitle = "Active Applications";
const activeApplicationsLimit = 30;
const historyApplicationsLimit = 100;

const buttonColor = "var(--color-alternative)";

const ActiveApplications = (props) => {
    const { applicationsList, historyList, formState } = props;
    const numberOfApplications = applicationsList ? applicationsList.length : 0;
    const numberOfHistory = historyList ? historyList.length : 0;
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
        const {
            name,
            role,
            date,
            status,
            remote,
            location
        } = applicationData;
        
        const [
            lowerName,
            lowerRole,
            lowerDate,
            lowerStatus,
            lowerRemote,
            lowerLocation
        ] = [
            name.toLowerCase(),
            role.toLowerCase(),
            prettifyDate(date).toLowerCase(),
            (remote === true ? "yes" : "no").toLowerCase(),
            location.toLowerCase(),
            status.toLowerCase()
        ];

        if(
            lowerName.includes(searchTermLower) ||
            lowerRole.includes(searchTermLower) ||
            lowerDate.includes(searchTermLower) ||
            lowerRemote.includes(searchTermLower) ||
            lowerLocation.includes(searchTermLower) ||
            lowerStatus.includes(searchTermLower) 
        )
            return "inline-block"
        else
            return "none"
    }

    return(
        <ApplicationsPageContainer>
            <PageTitle 
                pageTitle={activeApplicationsPageTitle}
                hasAddButton={true}
                applicationCounter={numberOfApplications}
                applicationLimit={activeApplicationsLimit}
                historyCounter={numberOfHistory}
                historyLimit={historyApplicationsLimit}
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
                <NoApplicationsCard>
                    <span>No active applications.</span>
                    <StructuredTextContainer>
                        <span style={{paddingRight: "4px"}}>Click the</span>
                        <NewApplicationButton 
                            onClick={() => {}}
                            boxShadow="none"
                            color={buttonColor}
                            cursor= "default"
                        >
                            +
                        </NewApplicationButton>
                        <span style={{paddingLeft: "4px"}}>above.</span>
                    </StructuredTextContainer>
                </NoApplicationsCard>
                :
                applications.map((item, index) => {
                    const displayType = returnDisplayType(item);
                    return <ApplicationCard 
                                {...item} 
                                key={index} 
                                index={index} 
                                displayType={displayType}
                            />
                })
            }
        </ApplicationsPageContainer>
    );
}

const mapStateToProps = (state) => ({
    applicationsList: state.applicationsReducer.applications,
    historyList: state.applicationsReducer.history,
    formState: state.formsReducer.formVisibility
})

export default connect(mapStateToProps, null)(ActiveApplications);
