import React from 'react';
import "./Info.css";

function Info({ information, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{information}</p>
    </div>
  )
}

export default Info