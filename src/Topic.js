import React from 'react';
import "./Topic.css";

function Topic({ title, relink }) {
    if (title === "Github" || "Instagram" || "LinkedIn" || "Handshake") {
        return (
            <a href={relink} target="_blank" rel="noopener noreferrer">
                <h4>{title}</h4>
            </a>
        )
    }
    else {
        return (
            <a href={relink}>
                <h4>{title}</h4>
            </a>
        )
    }
}


export default Topic