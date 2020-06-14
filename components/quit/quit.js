"use strict";
import "./quit.sass";
import React from "react";
import { Link } from "react-router-dom";
import QuitImgSrc from "./../../assets/i_quit.jpg";


export default class QuitPage extends React.Component {
    render() {
        let goMain = (<div></div>);
        goMain = (<Link id="view-link" to="/">jk, me poor :( </Link>);

        return (
            <div id="view-quit">
                <h1>I Quit!</h1>
                <img src={QuitImgSrc} /> <br></br>
                <br></br>
                {goMain}
            </div>

            
        );
    }
}
