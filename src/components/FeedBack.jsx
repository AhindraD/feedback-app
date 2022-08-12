import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";

import './FeedBack.css'
import { ref, onValue, set, push } from "firebase/database";
import { database, auth } from "../firebase-config";

export default function FeedBack() {
    let { userID } = useContext(UserContext);
    let goTo = useNavigate();
    let params = useParams();
    let feedBackID = params.feedBackID;

    let [text, setText] = useState('');
    let [receiverID, setReceiverID] = useState('');

    useEffect(() => {
        // if (userID === null) {
        //     alert('Please Log in first!');
        //     goTo('/');
        // }
        //GETTING ID from the UserName
        const allUsersRef = ref(database, 'users/');
        onValue(allUsersRef, (snapshot) => {
            let data = snapshot.val();
            //console.log(data);
            data = data === undefined ? {} : data;
            //console.log(data.feedbacks);
            for (const key in data) {
                if (data[key].userName === feedBackID) {
                    feedBackID = data[key].userId;
                    setReceiverID(() => feedBackID);
                    //console.log(feedBackID);
                    break;
                }
            }
        });

    }, [])

    function sendFeedback(txt) {
        //console.log(receiverID);
        const targetUserRef = ref(database, 'users/' + receiverID + '/feedbacks');
        const newFeedBackRef = push(targetUserRef);
        set(newFeedBackRef, {
            senderID: userID,
            feedbackText: txt,
            timeStamp: new Date().toUTCString(),
        });

        alert('FeedBack sent successfully!');
        setText(() => '')
    }

    return (
        <div className='send-cont'>
            <textarea name="" id="" placeholder='please be civil!' value={text} onChange={(e) => {
                setText(() => e.target.value);
            }}>

            </textarea>
            <button className='f-send' onClick={() => sendFeedback(text)}>Send🚀</button>
        </div>
    )
}
