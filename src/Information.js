import React from 'react';
import Info from "./Info";

function Information() {
  return (
    <div>
      <div className="info__section">
        <Info
          title="Synopsis"
          information="Aspiring programmer and developer with previous experience on personal web projects and assisting as an 
      intern with semiconductor research. Determined to enhance my skills by teaching myself web development through 
      Udemy to expand my programming knowledge. Vice President of the Vassar Chemical Society with the goal of actively 
      engaging students in chemistry and achieving full student association status. Web projects include tinkering with
       Bootstrap, JavaScript, and CSS. Personal projects include creating an online Dungeons and Dragons (D&D) 
       compendium and a text-based choose-your-adventure game."
        />
      </div>
      <div className="info__section">
        <Info
          title="Education"
          information="
          "
        />
      </div>
      <div className="info__section">
        <Info
          title="Work Experience"
          information="
          "
        />
      </div>
      <div className="info__section">
        <Info
          title="Hobbies"
          information="
          "
        />
      </div>
      <div className="info__section">
        <Info
          title="Skills"
          information="
          "
        />
      </div>

    </div>
  )
}

export default Information