import {w3cwebsocket} from "websocket";

function create(address: string): Promise<w3cwebsocket> {

    const reconnectInterval = 500;
    const Attempts = 10;
    let reconnectAttempts = 0;
    let timeoutId: NodeJS.Timeout;

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

export default async function connect(address:string, signal: AbortSignal): Promise<w3cwebsocket> {

    const webSocket = await create(address);
    if (signal.aborted) {
        webSocket.close();
    }

    return webSocket;
}



