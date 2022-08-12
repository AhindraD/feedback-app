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

    let [text, setText] = useState('lol');

    useEffect(() => {

        if (userID === null) {
            alert('Please Log in first!');
            goTo('/');
        }
        //console.log(userID);
        //console.log('users/' + feedBackID + '/feedbacks');
        const targetUserRef = ref(database, 'users/' + feedBackID + '/feedbacks');
        const newFeedBackRef = push(targetUserRef);
        set(newFeedBackRef, {
            senderID: userID,
            feedbackText: text,
            timeStamp: new Date().toUTCString(),
        });
    }, [])

    return (
        <div className='send-cont'>
            <textarea name="" id="" placeholder='please be civil!' onChange={(e) => {
                setText(() => e.target.value);
            }}>

            </textarea>
            <button className='f-send'>Send🚀</button>
        </div>
    )
}
