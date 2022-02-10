import React from 'react';

import {Route, Link, Routes} from 'react-router-dom';

import Info1 from "./Info1";

import GlobalStyle from "../assets/css/GlobalStyle"
import indexStyle from "../assets/css/index.module.css"

import IndexItem from '../components/IndexItem.js'

const Main = () => {
  return (
    <div>
        <GlobalStyle />
        <div className={indexStyle.content}>
            <h2 className={indexStyle.contentH2}>편안한 보금자리를 약속드립니다. 한강빌리지</h2>
            <ul className={indexStyle.contentUl}>
                <IndexItem num={indexStyle.contentIcon1} link="/info1" msg='분양안내'/>
                <IndexItem num={indexStyle.contentIcon2} link="" msg='프리미엄'/>
                <IndexItem num={indexStyle.contentIcon3} link="" msg='단지안내'/>
                <IndexItem num={indexStyle.contentIcon4} link="" msg='인테리어'/>
            </ul>
        </div>
    </div>
  );
}

export default Main;
