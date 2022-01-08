export const statusTypeToColor = (type) => {
    const status = {
        "Scheduled": "green",
        "Awaiting": "grey"
    };

    return status[type];
}

export const returnDisplayValue = (isVisible) => isVisible ? "flex" : "none";

export const formattedDate = (currentDate = new Date(Date.now())) => {
    const [year, month, day] = [
        currentDate.getFullYear(),
        currentDate.getMonth()+1,
        currentDate.getDate()
    ].map(item => JSON.stringify(item).padStart(2, "0"));

    const fullDate = `${year}-${month}-${day}`;

    return fullDate;
}
