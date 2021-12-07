export function updateStatus(newStatus, index){
    return{
        type: "CHANGE_STATUS",
        newStatus: newStatus,
        index: index
    };
}