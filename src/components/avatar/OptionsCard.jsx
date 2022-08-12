import React from 'react'

export default function OptionsCard(props) {
    return (
        <div className={`card ${props.opt === 1 ? 'animated' : ''}`} style={{ opacity: props.opt }}>
            <div id="arrow"></div>
            <p className="title">Choose Your Avatar</p>
            <div className="avatar-cont">
                {props.avatarArr.map((elem) => {
                    return (<div className={`avatar-ind ${props.clickedAv === elem.id ? props.loadDiv : ''}`} onClick={() => { props.handleClick(elem.id) }} >
                        <img src={elem.src} key={elem.id} label={elem.label} alt="" className="avatar-list" />
                        <div className="border"></div>
                    </div>)

                })}
            </div>
        </div>
    )
}
