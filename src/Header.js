import React from 'react';
import "./Header.css";
import Topic from "./Topic";

function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <div className="header__tab header__tab--active">
                    <Topic
                        title="About Me"
                        relink="#"
                    />
                </div>
                <div className="header__tab">
                    <Topic
                        title="Messages"
                        relink="#"
                    />
                </div>
            </div>

            <div className="header__mid">
                <h1>MICHAEL YANG</h1>
            </div>

            <div className="header__right">
                <div className="header__tab">
                    <Topic
                        title="Contact"
                        relink="#"
                    />
                </div>
                <div className="header__tab">
                    <Topic
                        title="Github"
                        relink="https://github.com/myang5128"
                    />
                </div>
            </div>

        </div>
    )
}

export default Header