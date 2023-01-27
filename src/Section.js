import React from 'react'

function Section({ title, relink }) {
    return (
        <div>
            <p to="relink">{title}</p>
        </div>
    )
}

export default Section