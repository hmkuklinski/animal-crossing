import React from 'react';

export default function Fish(props){
    //takes arguments from Fishes.js to display a fish container with image, fish name, and description
    return (
        <div className="fish-container">
            <img className="fish-pic" src={props.imageUrl} alt={props.name}></img>
            <div className="fish-info">
                <h3>{props.name}</h3>
                <h4>{props.description}</h4>
            </div>
        </div>
    );
}