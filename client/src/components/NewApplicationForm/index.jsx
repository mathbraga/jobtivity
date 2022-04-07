import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import { addApplication } from "../../store/actions/updateApplications";
import { toggleFormVisibility } from "../../store/actions/toggleFormVisibility";
import { formatDate, returnDisplayValue } from "../../globalHelperFunctions/utils";

import { ApplicationFormContainer } from "./styledComponents";
import { 
    FormButton,
    FormInput,
    FormContainer,
    FormSubmit,
    FormSelect,
    FormCheckBox
} from "../Form";

import CompanyIcon from "../../assets/Icons/CompanyIcon";
import RoleIcon from "../../assets/Icons/RoleIcon";
import UrlIcon from "../../assets/Icons/UrlIcon";
import CalendarIcon from "../../assets/Icons/CalendarIcon";
import RemoteIcon from "../../assets/Icons/RemoteIcon";
import LocationIcon from "../../assets/Icons/LocationIcon";

const iconColor = "var(--color-card-elements)";

const NewApplicationForm = (props) => {
    const { addApplication, toggleForm } = props;
    const displayValue = returnDisplayValue(props.isVisible);
    const [locationDisplay, setLocationDisplay] = useState("flex");
    const formInputRefs = {
        companyElement: useRef(null),
        dateElement: useRef(null),
        urlElement: useRef(null),
        roleElement: useRef(null),
        remoteElement: useRef(null),
        locationElement: useRef(null)
    }
    const { 
        companyElement,
        dateElement,
        urlElement,
        roleElement,
        remoteElement,
        locationElement
    } = formInputRefs;
    const roleOptions = ["Front End", "Back End", "Full Stack", "Data Science", "DevOps", "Other"];

    const handleFormCancel = () => {
        companyElement.current.value = "";
        dateElement.current.value = formatDate();
        urlElement.current.value = "";
        roleElement.current.value = roleOptions[0];
        remoteElement.current.checked = false;
        locationElement.current.value = "";
        setLocationDisplay("flex");
        toggleForm();
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newData = {
            name: companyElement.current.value,
            date: dateElement.current.value,
            website: urlElement.current.value,
            role: roleElement.current.value,
            remote: remoteElement.current.checked,
            location: locationElement.current.value,
            status: "Awaiting",
        }
        addApplication(newData);
        handleFormCancel();
    };

    const handleFormClass = () => {
        if(displayValue !== "flex")
            return "form--closed";
        else
            return "";
    }

    const handleCheckBoxChange = () => {
        if(remoteElement.current.checked){
            setLocationDisplay("none");
            locationElement.current.value = "";
        }
        else
            setLocationDisplay("flex");
    }

    const formClassName = handleFormClass();

    return(
            <ApplicationFormContainer 
                name="newApplicationForm"
                {...props}
                onSubmit={(e) => handleFormSubmit(e)}
                className={`${formClassName} autosize`}
            >
                <FormContainer style={{display: displayValue}}>
                    <FormInput 
                        labelName="Company"
                        inputType="text"
                        placeholder="Company name..."
                        elementRef={companyElement}
                        icon={() => <CompanyIcon iconColor={iconColor} />}
                        isRequired
                    />
                    <FormSelect 
                        labelName="Role"
                        elementRef={roleElement}
                        icon={() => <RoleIcon iconColor={iconColor} />}
                        optionsList={roleOptions}
                        isRequired
                    />
                    <FormInput 
                        labelName="Url"
                        inputType="url"
                        placeholder="Application url, company website..."
                        elementRef={urlElement}
                        icon={() => <UrlIcon iconColor={iconColor} />}
                    />
                    <FormInput 
                        labelName="Applied"
                        inputType="date"
                        elementRef={dateElement}
                        icon={() => <CalendarIcon iconColor={iconColor} />}
                        defaultValue={formatDate()}
                        isRequired
                    />
                    <FormCheckBox 
                        labelName="Remote?"
                        elementRef={remoteElement}
                        icon={() => <RemoteIcon iconColor={iconColor} />}
                        onClick={handleCheckBoxChange}
                    />
                    <FormInput 
                        labelName="Location"
                        inputType="text"
                        placeholder="Country, City, State..."
                        elementRef={locationElement}
                        icon={() => <LocationIcon iconColor={iconColor} />}
                        display={locationDisplay}
                    />
                </FormContainer>
                <FormSubmit style={{display: displayValue}}>
                    <FormButton buttonType="submit" color="green" buttonValue="Add" />
                    <FormButton type="button" color="var(--color-red-tone)" onClick={handleFormCancel} buttonValue="Cancel" />
                </FormSubmit>
            </ApplicationFormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addApplication: (newApplication) => dispatch(addApplication(newApplication)),
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(NewApplicationForm);
