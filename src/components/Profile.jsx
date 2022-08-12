import React from 'react'

import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import './Profile.css'
//import Avatar from './avatar/Avatar'
import { useNavigate } from 'react-router-dom';
import { ref, onValue, set, push } from "firebase/database";
import { database, auth } from "../firebase-config";

export default function Profile() {
    let { userID } = useContext(UserContext);
    let [userData, setUserData] = useState({});
    let [loaded, setLoaded] = useState(false);

    let goTo = useNavigate();

    useEffect(() => {

        if (userID === null) {
            alert('Please Log in!');
            goTo('/');
        }
        //console.log(userID);
        const userRef = ref(database, 'users/' + userID);
        onValue(userRef, (snapshot) => {
            let data = snapshot.val();
            //console.log(data);
            data = data === undefined ? {} : data;
            //console.log(data.feedbacks);
            setUserData(data);
            setLoaded(true);
        });
    }, [])

    return (
        <div className="profile-cont">
            <p className="profile-name">{userData.userName}</p>
            <img src="./images/avatar1.png" alt="" />
            {/* <Avatar /> */}
            <div className="share">
                <a href={`http://localhost:3000/${userData.userName}`}>Ask for Feedback</a>
            </div>
            <section className="feedback-cont">
                <p className='title-f'>FeedBacks:</p>
                {loaded ?
                    Object.keys(userData.feedbacks).map((elem, indx) => {
                        return <div className="f-card" key={indx}>
                            <p className='f-text'>{userData.feedbacks[elem].feedbackText}</p>
                            <button className="f-del">✖</button>
                        </div>
                    })
                    : null}
            </section>
        </div>
    )
}

/*
userEmail: "ahindra2@mail.com"
userId: "ahindra2@mail_dot_com"
userName: "ahin2"

feedbacks:{
    0: {
        feedbackText: "feed backs exmp",
        senderId: "john",
        timeStamp: "11/11/11",
        },
}

*/
