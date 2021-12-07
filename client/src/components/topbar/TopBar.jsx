import React from 'react';
import './topbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function TopBar() {
    const user = true;

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && <Link to="/about" className="link">LOGOUT</Link>}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/s960x960/262368216_4535353393244407_4856346780634143050_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=uFOubfqsoD8AX92SrIp&tn=CJw7VtEFOhLFO9An&_nc_ht=scontent.fhan2-4.fna&oh=36a35face8814fb44a31dd0f142155dc&oe=61ABAF2D"
                            alt=""
                            className="topImg"
                        />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login" className="link">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register" className="link">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
