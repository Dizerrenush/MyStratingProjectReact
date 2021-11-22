
import {WS_EVENT_ID} from "./types/const";

interface IEvent {
    type: WS_EVENT_ID;
    data: any;
}

export function createEventAction(event: IEvent) {

    const {
        type,
        data,
    }=event
    return {
        type:type,
        payload:data,
    }
}