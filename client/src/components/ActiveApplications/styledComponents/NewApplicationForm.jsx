import { useRef } from "react";
import { connect } from "react-redux";

import { addApplication } from "../../../store/actions/updateStatus";
import { toggleFormVisibility } from "../../../store/actions/toggleFormVisibility";
import { formatDate } from "./helpers";

import { ApplicationFormContainer } from "./ApplicationFormContainer";
import { 
    FormButton,
    FormInput,
    FormContainer,
    FormSubmit,
    FormSelect
} from "../../Form";

import companyIcon from "../../../assets/Icons/CompanyIcon.png";
import roleIcon from "../../../assets/Icons/RoleIcon.png";
import urlIcon from "../../../assets/Icons/UrlIcon.png";
import calendarIcon from "../../../assets/Icons/CalendarIcon.png";

const NewApplicationForm = (props) => {
    const { addApplication, toggleForm } = props;
    const formInputRefs = {
        companyElement: useRef(null),
        dateElement: useRef(null),
        urlElement: useRef(null),
        roleElement: useRef(null)
    }
    const { 
        companyElement,
        dateElement,
        urlElement,
        roleElement
    } = formInputRefs;
    const roleOptions = ["FrontEnd", "BackEnd", "FullStack"];

    const handleFormCancel = () => {
        companyElement.current.value = "";
        dateElement.current.value = formatDate();
        urlElement.current.value = "";
        roleElement.current.value = roleOptions[0];
        toggleForm();
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newData = {
            name: companyElement.current.value,
            date: dateElement.current.value,
            website: urlElement.current.value,
            role: roleElement.current.value,
            status: "Awaiting"
        }
        addApplication(newData);
        handleFormCancel();
    };

    return(
            <ApplicationFormContainer name="newApplicationForm" {...props} onSubmit={(e) => handleFormSubmit(e)}>
                <FormContainer>
                    <FormInput 
                        labelName="Company"
                        inputType="text"
                        placeholder="Company name..."
                        elementRef={companyElement}
                        icon={companyIcon}
                        isRequired
                    />
                    <FormSelect 
                        labelName="Role"
                        elementRef={roleElement}
                        icon={roleIcon}
                        optionsList={roleOptions}
                        isRequired
                    />
                    <FormInput 
                        labelName="Url"
                        inputType="url"
                        placeholder="Company website, application url..."
                        elementRef={urlElement}
                        icon={urlIcon}
                    />
                    <FormInput 
                        labelName="Applied"
                        inputType="date"
                        elementRef={dateElement}
                        icon={calendarIcon}
                        defaultValue={formatDate()}
                        isRequired
                    />
                </FormContainer>
                <FormSubmit>
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
