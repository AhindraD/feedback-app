import React from 'react'
import './Login.css';
import { useContext } from "react";

import { useNavigate } from 'react-router-dom';
import UserContext from "../Contexts/UserContext";

export default function SignUp() {
    let { email, setEmail, password, setPassword, username, setUsername, userID, setUserID, signUpEmail } = useContext(UserContext);
    let goTo = useNavigate();

    return (
        <div>SignUp</div>
    )
}
