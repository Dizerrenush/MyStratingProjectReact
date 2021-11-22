import {w3cwebsocket} from "websocket";
import Timeout = NodeJS.Timeout;


export default function init(address: string): Promise<w3cwebsocket> {

    const reconnectInterval = 500;
    const Attempts = 10;
    let reconnectAttempts = 0;
    let timeoutId: Timeout;

    return new Promise(function (resolve, reject) {
        let wsConnection: w3cwebsocket;
        const connect = function () {
            reconnectAttempts++;
            wsConnection = new w3cwebsocket(address);

            wsConnection.onopen = function () {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                resolve(wsConnection);
            };
            wsConnection.onerror = function () {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                if (reconnectAttempts > Attempts) {
                    reject(wsConnection)
                }

                timeoutId = setTimeout(connect, reconnectInterval);
            };
        };

        connect();

    });
}



