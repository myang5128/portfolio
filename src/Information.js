import React from 'react';
import Info from "./Info";
import "./Information.css";

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
       React, JavaScript, and CSS. Personal projects include creating an online Dungeons and Dragons (D&D) 
       compendium and a text-based choose-your-adventure game."
        />
      </div>
      <div className="info__section">
        <Info
          title="Education"
          information="
          College Education:
          ~ Computer Science Major at Vassar College graduating in May 2024
          High School Education:
          ~ Studied Biotechnology at Mahoning County Career and Technical Center, Class of 2020
          "
        />
      </div>
      <div className="info__section">
        <Info
          title="Work Experience"
          information=""
        />
      </div>
      <div className="info__section">
        <Info
          title="Hobbies and Interests"
          information="
          I am an avid fan of tabletop role-playing games and video games. The fact that a lot of the TTRPG and video games offer a myriad of 
          options that the player can choose from was a major contributing factor in my development passion. I always wanted to create a 
          similar project that allows people to experience the freedom of choices and options. This pushed me to start working on my 
          text-based choose-your-adventure webgame.
          "
        />
      </div>
      <div className="info__section">
        <Info
          title="Skills"
          information="
          During my years as a programming student at Vassar and at home, I was able to learn different languages skills a programmer requires.
          ~ Java - was the main language in several of my Computer Science courses at Vassar and I utilized Java for multiple projects, including a working 
          TicTacToe game up to a board size of 9 sections and a polynomial calculator. I also spent many hours debugging where I learned and 
          understood proper debugging techniques and unit tests
          ~ Assembly - was the language used in Computer Organization and allowed me to write and interpret Assembly code, including debugging 
          and optimizing to achieve quickest runtime
          ~ React - used as the primary method of constructing modular websites by myself. While I had no prior professional education of React, 
          I was able to quickly learn it in a day and started making websites and playing with it immediately
          ~ Git - used for software version control and using Github Pages to host my websites. Git is also used in my Computer Science courses as 
          a way to collaborate with other students
          ~ HTML, CSS, Javascript - used for constructing my websites. These 'languages' were all self-taught from Udemy
          "
        />
      </div>

    </div>
  )
}

export default Information