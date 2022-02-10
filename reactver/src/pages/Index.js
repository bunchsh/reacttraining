import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import Info1 from "./Info1";

import GlobalStyle from "../assets/css/GlobalStyle"
import indexStyle from "../assets/css/index.module.css"


const Main = () => {
  return (
    <div>
        <GlobalStyle />
        <div className={indexStyle.content}>
            <h2 className={indexStyle.contentH2}>편안한 보금자리를 약속드립니다. 한강빌리지</h2>
            <ul className={indexStyle.contentUl}>
                <li className={indexStyle.contentLi}>
                    <a href="/info1" className={`${indexStyle.contentA} ${indexStyle.contentIcon1}`}>분양안내</a>
                </li>
                <li className={indexStyle.contentLi}>
                    <Link to="" className={`${indexStyle.contentA} ${indexStyle.contentIcon2}`}>프리미엄</Link>
                </li>
                <li className={indexStyle.contentLi}>
                    <Link to="" className={`${indexStyle.contentA} ${indexStyle.contentIcon3}`}>단지안내</Link>
                </li>
                <li className={indexStyle.contentLi}>
                    <Link to="" className={`${indexStyle.contentA} ${indexStyle.contentIcon4}`}>인테리어</Link>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Main;
