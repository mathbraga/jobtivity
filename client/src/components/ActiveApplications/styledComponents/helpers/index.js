export const statusTypeToColor = (type) => {
    const status = {
        "Scheduled": "green",
        "Awaiting": "grey"
    };

    return status[type];
}

export const returnDisplayValue = (isVisible) => isVisible ? "flex" : "none";