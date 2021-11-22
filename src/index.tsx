
import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";

import FeedbackList from "./pages/FeedbackList";
import {FeedbackSend} from "./pages/FeedbackSend";
import store from "./redux/store";
import {Provider} from "react-redux";

const root = document.querySelector("#root");

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="feedback_list" element={<FeedbackList />} />
                <Route path="feedback_send" element={<FeedbackSend />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    root,
);