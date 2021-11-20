
import React, {useState, useEffect} from "react";
import {IFeedbacks} from "./types/types";
import {Link} from "react-router-dom";
import {webSocketConnect} from "../webSocketConnect";

const WSSERVER = process.env.WEBSOCKET_SERVER || 'ws://localhost:3000';

export function FeedbackList() {

    const [data, setData] = useState<Array<IFeedbacks.IListItem>>([]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const url = 'http://localhost:8082/api/v1/feedback/get?limit=0'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData)
    }, []);
    useEffect(() => {
        webSocketConnect(WSSERVER).then(
            (wsConnect)=>{
                wsConnect.onmessage = (message) => {
                    if (message.data instanceof Blob){
                        const reader = new FileReader();

                        reader.onload = () => {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            const result = JSON.parse(reader.result)
                            data.push(result.payload);
                            console.log(data)
                        };

                        reader.readAsText(message.data);
                    }else {
                        console.log("Result: " + message.data);
                    }
                };
            }
        );
    });
    return (
        <div>
            <div className="main-nav">
                <Link to="/feedback_list">FeedbackList</Link> |{" "}
                <Link to="/feedback_send">FeedbackSend</Link>
            </div>

            <ul className="list bg-light-gray no-dot">
                {data.map(item => (
                    <li key={item.id} className="list-item d-flex flex-column bg-white p-10">
                        <div className="title text-dark fw-bold">
                            Client: {item.creator.fullname}
                        </div>
                        <div className="body">
                            Feedback: {item.description}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

