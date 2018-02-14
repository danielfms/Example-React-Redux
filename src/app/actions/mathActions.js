import { socket } from "./../socket/socketListeners";

export function addNumber(number) {
    return {
        type: "ADD",
        payload: number
    }
};

export function subtractNumber(number) {
    return (dispatch) => {
        socket.emit("message", {
            type: "NO_EMIT",
            payload: number
        });
    }
}