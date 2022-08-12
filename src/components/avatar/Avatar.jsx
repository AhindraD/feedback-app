import { useState } from "react";
import OptionsCard from "./OptionsCard";
import './Avatar.css'

export default function Main() {
    let [currAv, setCurrAv] = useState(1);
    let [clickedAv, setClickedAv] = useState(1);
    let [opt, setOpt] = useState(0);
    let [loadDiv, setLoadDiv] = useState('');

    let avatarArr = [
        { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 },
        { "src": "images/avatar2.png", "label": "Avatar 2", "id": 2 },
        { "src": "images/avatar3.png", "label": "Avatar 3", "id": 3 },
        { "src": "images/avatar4.png", "label": "Avatar 4", "id": 4 },
        { "src": "images/avatar5.png", "label": "Avatar 5", "id": 5 },
        { "src": "images/avatar6.png", "label": "Avatar 6", "id": 6 }
    ];

    function handleClick(id) {
        setClickedAv(id);
        setLoadDiv('loading');
        setTimeout(() => {
            setCurrAv(id);
            setLoadDiv('');
            setOpt(0);
        }, 1500)
    }
    function displayList() {
        if (opt === 0) {
            setOpt(1);
        } else {
            setOpt(0);
        }
    }

    return (
        <div className="wrapper" onClick={() => { }} >
            <img src={avatarArr[currAv - 1].src} alt="" className="curr-avatar" onClick={() => { displayList() }} />
            <OptionsCard handleClick={handleClick} opt={opt} loadDiv={loadDiv} avatarArr={avatarArr} clickedAv={clickedAv} />
        </div>
    )
}