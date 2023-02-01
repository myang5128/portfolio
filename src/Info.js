import React from 'react';
import "./Info.css";

function Info({ information, title }) {
  {/* list
*/}
  return (
    <ul>
      <h2>{title}</h2>
      <li>{information}</li>
    </ul>
  )

  {/* regular info
  return (
    <div>
      <h2>{title}</h2>
      <p>{information}</p>
    </div>
  )
  */}
}

export default Info