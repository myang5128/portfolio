import React from 'react';
import "./Sidebar.css";
import Section from "./Section";

function Sidebar() {
    return (
        <div>
            <div class="sidebar_section">
                <Section
                    title='About Me'
                    relink='#About_Me' />
            </div>
            <div class="sidebar_section">
                <Section
                    title='Work Experience'
                    relink='#work_experience' />
            </div>
        </div>
    )
}

export default Sidebar