import io from 'socket.io-client';
import * as actions from "./../actions/userActions";

export const socket = io("localhost:3000");

export default function (dispatch, getState){
    socket.on("message", data => {
        dispatch(actions.setName(data));
    });
}