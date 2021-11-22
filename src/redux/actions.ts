
import {ACTION_ID} from "./types/const";
import {IActions} from "./types/types";
import {IFeedbacks} from "../pages/types/types";

export function createEventAction(event: IActions.EventCreateFeedbackData): IActions.EventCreateFeedback {
    return {
        type: ACTION_ID.HANDLE_EVENT,
        data: event,
    };
}

export function setFeedbackList(event: Array<IFeedbacks.IListItem>): IActions.SetFeedback {
    return {
        type: ACTION_ID.SET_FEEDBACKS,
        data: event,
    };
}