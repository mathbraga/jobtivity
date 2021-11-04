import { ApplicationCardHeader } from "./ApplicationCardHeader";
import { ApplicationContentContainer } from "./ApplicationContentContainer";

export const ApplicationCardContent = (props) => {
    return(
        <>
            <ApplicationCardHeader status={props.status} />
            <ApplicationContentContainer {...props} />
        </>
    );
}
