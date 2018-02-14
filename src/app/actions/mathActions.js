import { socket } from "./../socket/socketListeners";

export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    }
};

export function subtractNumber(number) {
    return (dispatch) => new Promise(function(resolve, reject){
        let msg = {
            type: "NO_EMIT",
            payload: number
        };
        socket.emit("message_callback", msg , (confirm) => {
            console.log("message_callback", confirm);
            return resolve(confirm);
         });
    })
}