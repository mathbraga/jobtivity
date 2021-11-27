import { ApplicationCardHeader } from "./ApplicationCardHeader";
import { ApplicationContentContainer } from "./ApplicationContentContainer";

export const ApplicationCardContent = (props) => {
    const { status, index, ...otherprops } = props;

    return(
        <>
            <ApplicationCardHeader status={status} index={index} />
            <ApplicationContentContainer {...otherprops} />
        </>
    );
}
