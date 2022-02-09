import React, { useRef, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { removeApplicationFromHistory } from "../../store/actions/updateApplications";

import PageTitle from "../../components/PageTitle";
import { ApplicationsPageContainer } from "../globalStyledComponents";
import { NoApplicationsCard, SearchBarContainer } from "../../components/Applications";
import { ApplicationContentContainer } from "../../components/Applications/styledComponents/ApplicationContentContainer";
import { ApplicationCardStyles } from "../../components/Applications/styledComponents/ApplicationCard";
import { DeleteApplicationButton } from "../../components/Applications";

import SearchIcon from "../../assets/Icons/SearchIconWhite.png";
import ClearSearchIcon from "../../assets/Icons/DeleteIconWhite.png";

const applicationsHistoryPageTitle = "History";
const applicationHistoryLimit = 100;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding-bottom: 4px;
    margin-bottom: 8px;

    box-shadow: var(--color-title-underline) 0 1px 0;
`;

const ApplicationsHistory = (props) => {
    const historyList = props.historyList ? props.historyList : [];
    const numberOfApplications = historyList.length;
    const { removeApplication } = props;
    const searchBarRef = useRef(null);
    const [ inputValue, setInput ] = useState("");

    const handleRemoveApplication = (index) => removeApplication(index);

    const handleInputUpdate = () => {setInput(searchBarRef.current.value)}
    const handleSearchClear = () => {
        searchBarRef.current.value = "";
        handleInputUpdate();
    }

    return(
        <ApplicationsPageContainer>
            <PageTitle
                pageTitle={applicationsHistoryPageTitle}
                applicationCounter={numberOfApplications}
                applicationLimit={applicationHistoryLimit}
            />
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
                <NoApplicationsCard>No applications in history.</NoApplicationsCard>
                :
                historyList.map((item, index) =>
                    <ApplicationCardStyles borderColor="var(--color-history-border)" key={index}>
                        <HeaderContainer>
                            <DeleteApplicationButton onClick={(index) => handleRemoveApplication(index)} />
                        </HeaderContainer>
                        <ApplicationContentContainer {...item} />
                    </ApplicationCardStyles>
            )}
        </ApplicationsPageContainer>
    )
}

const mapStateToProps = (state) => ({
    historyList: state.applicationsReducer.history
})

const mapDispatchToProps = (dispatch) => ({
    removeApplication: (index) => dispatch(removeApplicationFromHistory(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsHistory);
