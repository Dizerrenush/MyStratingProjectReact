
import type {IFeedbacks} from "../../pages/types/types";
import {ACTION_ID, WS_EVENT_ID} from "./const";

export interface IState {
    feedbackList: Array<IFeedbacks.IListItem>;
}

export namespace IActions {

    export type TAction = EventCreateFeedback | SetFeedback;

    export interface EventCreateFeedback {
        type: ACTION_ID.HANDLE_EVENT;
        data: EventCreateFeedbackData;
    }

    export interface SetFeedback {
        type: ACTION_ID.SET_FEEDBACKS;
        data: Array<IFeedbacks.IListItem>;
    }

    export interface EventCreateFeedbackData {
        eventId: WS_EVENT_ID;
        payload: IFeedbacks.IListItem;
    }


}