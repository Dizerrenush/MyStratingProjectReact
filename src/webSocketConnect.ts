
import {w3cwebsocket} from "websocket";

export function webSocketConnect(address: string): Promise<w3cwebsocket>{

    return new Promise(function(resolve, reject) {
        const wsConnection = new w3cwebsocket(address);
        wsConnection.onopen = function() {
            resolve(wsConnection);
        };
        wsConnection.onerror = function(err) {
            reject(err);
        };

    });
}


