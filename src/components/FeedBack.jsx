import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";

export default function FeedBack() {
    let { userID } = useContext(UserContext);
    let goTo = useNavigate();
    let params = useParams();
    let feedBackID = params.feedBackID;

    useEffect(() => {

        if (userID === null) {
            alert('Please Log in!');
            goTo('/');
        }
        //console.log(userID);
        const targetUserRef = ref(database, 'users/' + feedBackID + '/feedbacks');
        const newFeedBackRef = push(targetUserRef);
        set(newFeedBackRef, {
            senderID: userID,
            feedbackText: txt,
            timeStamp: new Date().toUTCString(),
        });
    }, [])

    return (
        <div>FeedBack</div>
    )
}
