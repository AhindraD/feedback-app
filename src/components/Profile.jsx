import React from 'react'

import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import './Profile.css'
//import Avatar from './avatar/Avatar'
import { useNavigate } from 'react-router-dom';
import { ref, onValue, set, push } from "firebase/database";
import { database, auth } from "../firebase-config";

export default function Profile() {
    let { user, userID } = useContext(UserContext);
    let [userData, setUserData] = useState({});
    let [loaded, setLoaded] = useState(false);

    let goTo = useNavigate();

    useEffect(() => {

        if (userID === null) {
            alert('Please Log in!');
            goTo('/');
        }
        //console.log(userID);
        const roomsRef = ref(database, 'users/' + userID);
        onValue(roomsRef, (snapshot) => {
            let data = snapshot.val();
            //console.log(data);
            data = data === undefined ? {} : data;
            //console.log(data);
            setUserData(data);
            setLoaded(true);
        });
    }, [])

    return (
        <div className="profile-cont">
            <p className="profile-name">{userData.userName}</p>
            <img src="./images/avatar1.png" alt="" />
            {/* <Avatar /> */}
            <section className="feedback-cont">
                <p className='title-f'>FeedBacks:</p>
                {loaded ?
                    userData.feedbacks.map((elem, indx) => {
                        return <div className="f-card" key={indx}>
                            <p className='f-text'>{elem}</p>
                            <button className="f-del">✖</button>
                        </div>
                    })
                    : null}
            </section>
        </div>
    )
}

/*
feedbacks: ['test-feedback']
userEmail: "ahindra2@mail.com"
userId: "ahindra2@mail_dot_com"
userName: "ahin2"
*/
