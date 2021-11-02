import { ApplicationCardHeader } from "./ApplicationCardHeader";
import { ApplicationContentContainer } from "./ApplicationContentContainer";

const testProps = {
    "name": "Jobtivity",
    "date": "01/11/2021",
    "website": "someurl.com",
    "role": "FullStack"
}

export const ApplicationCardContent = () => {
    return(
        <>
            <ApplicationCardHeader status={"Contact"} />
            <ApplicationContentContainer {...testProps} />
        </>
    );
}
