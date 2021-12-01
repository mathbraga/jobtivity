import { ApplicationCardHeader } from "./ApplicationCardHeader";
import { ApplicationContentContainer } from "./ApplicationContentContainer";

export const ApplicationCardContent = (props) => {
    const { status, ...otherprops } = props;

    return(
        <>
            <ApplicationCardHeader status={status} />
            <ApplicationContentContainer {...otherprops} />
        </>
    );
}
