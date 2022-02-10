import React from 'react';
import {Link} from "react-router-dom";

// 이미지 파일
import logo from '../assets/img/logo.png'
import home from '../assets/img/home.jpg'

// css모듈
import HeaderStyle from '../assets/css/header.module.css';

const ComponentHeader = () => {
    return (
        <div className={HeaderStyle.header}>
            <h1 className={HeaderStyle.headerH1}>
                <Link to="">
                    <img src={logo} alt="한강빌리지"/>
                </Link>
            </h1>
            <span className={HeaderStyle.headerSpan}>
                <Link to="">
                    <img src={home} alt="Home"/>
                </Link>
            </span>
        </div>
    );
};

export default ComponentHeader