import io from 'socket.io-client';
import * as actions from "./../actions/userActions";

var socket = null;

export function socketMiddleware(store){
    return (next) => (action) =>{
        //Message from client to server
        if(socket && action.type == actions.SET_AGE){
            //Send action to server
            socket.emit("message", action);
        }
        return next(action);
    }
}

export default function(store){
    socket = io("localhost:3000");

    //Message from server to client
    socket.on("message", (data) =>{
        store.dispatch(actions.setName(data));
    });
}