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

    const handleFormCancel = (event) => {
        const _ = event ? event.preventDefault() : null;

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
                    <FormSelect 
                        labelName="Role"
                        elementRef={roleElement}
                        icon={roleIcon}
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
                        defaultValue={formatDate()}
                    />
                </FormContainer>
                <FormSubmit>
                    <FormButton color="green" submitValue="Add" />
                    <FormButton color="var(--color-red-tone)" onClick={e => handleFormCancel(e)} submitValue="Cancel" />
                </FormSubmit>
            </ApplicationFormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addApplication: (newApplication) => dispatch(addApplication(newApplication)),
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(NewApplicationForm);
