
import "regenerator-runtime/runtime.js";
import connectWs from "../src/webSocket/index";

const WS_SERVER = process.env.WEBSOCKET_SERVER || 'ws://localhost:3000';

describe('webSocket', () => {

    it('receiving event', async () => {
        const controller = new AbortController();
        const signal = controller.signal;
        let timeoutId: ReturnType<typeof setTimeout>;
        let eventsReceived = 0;
        const ws = await connectWs(WS_SERVER, signal);

        const eventsPromises = Promise.race([
            new Promise((resolve) => {
                ws.onmessage = (message) => {
                    const data = Buffer.from(message.data).toString();
                    eventsReceived++;
                    resolve(data);
                }
            }),
            new Promise((resolve) => {
                timeoutId = setTimeout(resolve, 500, 'fail');
            }),
        ]);

        ws.send('1');

        await eventsPromises.then((value) => {
            expect(value).not.toEqual('fail');
            expect(value).toEqual('1');
            clearTimeout(timeoutId);
            ws.close();
        });

        expect(eventsReceived).toEqual(1);

    });

    it('disconnected', async () => {
        const controller = new AbortController();
        const signal = controller.signal;
        const webSocket = {
            ws: await connectWs(WS_SERVER, signal),
            send(data: string) {
                this.ws.send(data);
            }
        };
        let errorCount = 0;
        let timeoutId: ReturnType<typeof setTimeout>;
        let eventsReceived = 0;

        controller.abort();

        const sendData = new Promise((resolve) => {
            webSocket.ws.onmessage = () => {
                resolve('fail');
            }
        });
        try {
            webSocket.ws.send('1');
            await sendData.then(value => {
                expect(value).not.toEqual('fail');
            })
        } catch (e) {
            errorCount++;
        }

        webSocket.ws = await connectWs(WS_SERVER, signal);

        const eventsPromises = Promise.race([
            new Promise((resolve) => {
                webSocket.ws.onmessage = (message) => {
                    const data = Buffer.from(message.data).toString();
                    eventsReceived++;
                    resolve(data);
                }
            }),
            new Promise((resolve) => {
                timeoutId = setTimeout(resolve, 500, 'fail');
            }),
        ]);

        webSocket.ws.send('1');

        await eventsPromises.then((value) => {
            expect(value).not.toEqual('fail');
            expect(value).toEqual('1');
            clearTimeout(timeoutId);
            webSocket.ws.close();
        });

        expect(eventsReceived).toEqual(1);
        expect(errorCount).toEqual(1);
    });
});

