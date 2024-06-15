import React from "react";

export default function Bug(props){
    return (
        <div class="bug-container">
            <div class="bug-img">
                <img src={props.imgSrc} alt = {props.name} ></img>
            </div>
            <div class="bug-info">
                <h3>{props.name}</h3>
            </div>
        </div>
    );
}