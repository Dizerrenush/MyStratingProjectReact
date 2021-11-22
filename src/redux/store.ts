
import { createStore } from 'redux';
import {feedbacks} from './redusers'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store = createStore(feedbacks);

export default store;