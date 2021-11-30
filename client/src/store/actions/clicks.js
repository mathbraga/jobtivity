export function sendClicks(count){
    return{
        type: "SEND_CLICKS",
        clicked: count
    };
}