export const statusTypeToColor = (type) => {
    const status = {
        "Scheduled": "green",
        "Awaiting": "grey"
    };

    return status[type];
}

export const returnDisplayValue = (isVisible) => isVisible ? "flex" : "none";

export const formatDate = (currentDate = new Date(Date.now())) => {
    const [year, month, day] = [
        currentDate.getFullYear(),
        currentDate.getMonth()+1,
        currentDate.getDate()
    ].map(item => JSON.stringify(item).padStart(2, "0"));

    const fullDate = `${year}-${month}-${day}`;

    return fullDate;
}

export const prettifyDate = (date) => {
    const monthsByName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [year, month, day] =  date.split("-");
    const monthNumber = parseInt(month) - 1;
    const prettyDate = `${day} ${monthsByName[monthNumber]} ${year}`

    return prettyDate
}
