import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/p843x403/260973167_3015605095404115_8875968851658783108_n.png?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=qpyhKqG8_BcAX84dqjP&tn=CJw7VtEFOhLFO9An&_nc_ht=scontent.fhan2-1.fna&oh=5687a41e47a94c7d485094992cee4cbc&oe=61AB89F6"
                alt=""
            />
        </div>
    )
}
