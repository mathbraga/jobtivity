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

    const handleFormCancel = () => {
        companyElement.current.value = "";
        dateElement.current.value = "";
        urlElement.current.value = "";
        roleElement.current.value = "";
        toggleForm();
    }

    const handleFormSubmit = () => {
        const newData = {
            name: companyElement.current.value,
            date:dateElement.current.value,
            website: urlElement.current.value,
            role: roleElement.current.value,
            status: "Awaiting"
        }
        addApplication(newData);
        handleFormCancel();
    };

    return(
        <ApplicationFormContainer {...props} onSubmit={(e) => e.preventDefault()}>
            <FormContainer>
                <FormInput labelName="Company" inputType="text" elementRef={companyElement} />
                <FormInput labelName="Date" inputType="text" elementRef={dateElement} />
                <FormInput labelName="Url" inputType="text" elementRef={urlElement} />
                <FormInput labelName="Role" inputType="text" elementRef={roleElement} />
            </FormContainer>
            <FormSubmit>
                <FormButton color="green" onClick={handleFormSubmit}>Add</FormButton>
                <FormButton color="var(--color-red-tone)" onClick={handleFormCancel}>Cancel</FormButton>
            </FormSubmit>
        </ApplicationFormContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addApplication: (newApplication) => dispatch(addApplication(newApplication)),
    toggleForm: () => dispatch(toggleFormVisibility())
});

export default connect(null, mapDispatchToProps)(NewApplicationForm);
