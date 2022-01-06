import { useRef } from "react";
import { connect } from "react-redux";

import { addApplication } from "../../../store/actions/updateStatus";
import { toggleFormVisibility } from "../../../store/actions/toggleFormVisibility";

import { ApplicationFormContainer } from "./ApplicationFormContainer";
import { 
    FormButton,
    FormInput,
    FormContainer,
    FormSubmit
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
        dateElement.current.value = "";
        urlElement.current.value = "";
        roleElement.current.value = roleOptions[0];
        toggleForm();
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // const currentDate = new Date(Date.now());
        // const formatDate = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`

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
            <ApplicationFormContainer {...props} onSubmit={(e) => handleFormSubmit(e)}>
                <FormContainer>
                    <FormInput 
                        labelName="Company"
                        inputType="text"
                        placeholder="Company name..."
                        elementRef={companyElement}
                        icon={companyIcon}
                        isRequired
                    />
                    <FormInput 
                        labelName="Role"
                        inputType="text"
                        elementRef={roleElement}
                        icon={roleIcon}
                        isRequired
                        isSelect
                        optionsList={roleOptions}
                    />
                    <FormInput 
                        labelName="Url"
                        inputType="text"
                        placeholder="Company website, application url..."
                        elementRef={urlElement}
                        icon={urlIcon}
                    />
                    <FormInput 
                        labelName="Applied"
                        inputType="date"
                        elementRef={dateElement}
                        icon={calendarIcon}
                    />
                </FormContainer>
                <FormSubmit>
                    <FormButton color="green" submitValue="Add" />
                    <FormButton color="var(--color-red-tone)" onClick={handleFormCancel} submitValue="Cancel" />
                </FormSubmit>
            </ApplicationFormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addApplication: (newApplication) => dispatch(addApplication(newApplication)),
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(NewApplicationForm);
