export function updateStatus(newStatus, index){
    return{
        type: "CHANGE_STATUS",
        newStatus: newStatus,
        index: index
    };
}

export function addApplication(newApplication){
    return{
        type: "ADD_APPLICATION",
        newApplication: newApplication
    }
}

export function deleteApplication(index){
    return{
        type: "DELETE_APPLICATION",
        index: index
    }
}
