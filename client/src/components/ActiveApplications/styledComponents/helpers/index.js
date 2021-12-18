export const statusTypeToColor = (type) => {
    const status = {
        "Contact": "green",
        "Awaiting": "grey"
    };

    return status[type];
}

export const checkVisibility = (isVisible) => isVisible ? "flex" : "none";