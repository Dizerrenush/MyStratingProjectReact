
import React from "react";
import { Link } from "react-router-dom";
import {connect, useDispatch} from 'react-redux'
import store from './redux/store'
import "./assets/sass/style";
import {webSocketConnect} from "./webSocketConnect";
import {createEventAction} from "./redux/actions";
import {IMessageEvent} from "websocket";

const WSSERVER = process.env.WEBSOCKET_SERVER || 'ws://localhost:3000';
const dispatch = useDispatch();

const App: React.FC = () => {
//const [data, setData] = useState<Array<IFeedbacks.IListItem>>([]);

    const url = 'http://localhost:8082/api/v1/feedback/get';

        fetch(url)
            .then(res => res.json())
            .then(data=>dispatch(data))

    webSocketConnect(WSSERVER).then(
        (wsConnect)=>{
            wsConnect.onmessage = (message) => {
                const data = message.data

                if (data instanceof Blob){
                    const reader = new FileReader();

                    reader.onload = () => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        const result = JSON.parse(reader.result);
                        handleEvent(result);
                    };

                    reader.readAsText(data);
                }
                else {

                    //handleEvent(data)
                }
                
            };
        }
    );

    return (
        <div>
            <div className="main-nav">
                <Link to="/feedback_list">FeedbackList</Link> |{" "}
                <Link to="/feedback_send">FeedbackSend</Link>
            </div>
        </div>
    );
};

const handleEvent = (event: IMessageEvent) => {
    store.dispatch(createEventAction(event))
}

export default connect()(App);