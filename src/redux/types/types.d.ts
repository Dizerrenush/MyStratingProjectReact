
import type {IFeedbacks} from "../../pages/types/types";
import {ACTION_ID, WS_EVENT_ID} from "./const";

export interface IState {
    feedbackList: Array<IFeedbacks.IListItem>;
}

export namespace IActions {

    export type TAction = EventFeedback | SetFeedback;

    export interface EventFeedback {
        type: ACTION_ID.HANDLE_EVENT;
        data: EventFeedbackData;
    }

    export interface SetFeedback {
        type: ACTION_ID.SET_FEEDBACKS;
        data: Array<IFeedbacks.IListItem>;
    }

    export interface EventFeedbackData {
        eventId: WS_EVENT_ID;
        payload: IFeedbacks.IListItem;
    }


}