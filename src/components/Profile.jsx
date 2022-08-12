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
    let [usersData, setUsersData] = useState({});
    let [loaded, setLoaded] = useState(false);

    let goTo = useNavigate();

    useEffect(() => {

        if (userID === null) {
            alert('Please Log in!');
            goTo('/');
        }
        console.log(userID);
        const roomsRef = ref(database, 'users/'+userID);
        onValue(roomsRef, (snapshot) => {
            let data = snapshot.val();
            //console.log(data);
            data = data === undefined ? {} : data;
            console.log(data);
            setUsersData(data);
            setLoaded(true);
        });
    }, [])

    return (
        <div className="profile-cont">
            <p className="profile-name">{ }</p>
            <img src="./images/avatar1.png" alt="" />
            {/* <Avatar /> */}
            <section className="feedback-cont">
                <p className='title-f'>FeedBacks:</p>
            </section>
        </div>
    )
}
