import React from "react";
import ApplicationCardHeader from "./ApplicationCardHeader";
import { ApplicationContentContainer } from "./ApplicationContentContainer";

export const ApplicationCardContent = (props) => {
    const {index, ...otherProps} = props

    return(
        <>
            <ApplicationCardHeader index={index} />
            <ApplicationContentContainer {...otherProps} />
        </>
    );
}
