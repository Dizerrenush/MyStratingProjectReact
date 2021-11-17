
import {w3cwebsocket} from "websocket";

const WSSERVER = process.env.WEBSOCKET_SERVER || 'ws://localhost:3000';

export const wsConnection = new w3cwebsocket(WSSERVER);

//TODO init return promise<wsConnection>

wsConnection.onopen = function () {
    wsConnection.onmessage = (message) => {
        //Emit eventEmitter
        //TODO redux dispatch
        console.log(message)
    }
};

wsConnection.onclose = function (event) {
    if (event.wasClean) {
        console.log('Connection closed');
    } else {
        console.log('Connection refused');
    }
    console.log('Code: ' + event.code + ' reason: ' + event.reason);
};

wsConnection.onerror = function (error) {
    console.log("Error " + error.message);
};

