import React from 'react';
// import {Route, Link, Routes} from "react-router-dom";

import call from '../assets/img/qlink_call.gif'
import map from '../assets/img/qlink_map.gif'

import footerStyle from '../assets/css/footer.module.css';

const ComponentFooter = () => {
  return (
    <div className={footerStyle.footer}>
        <ul className={footerStyle.footerUl}>
            <li className={footerStyle.footerLi}>
                <a href="tel:12345678">
                    <img src={call} alt="분양상담전화" /></a>
            </li>
            <li className={footerStyle.footerLi}>
                <a href="map">
                <img src={map} alt="찾아오시는 길" /></a>
            </li>
        </ul>
        <address className={footerStyle.footerAddress}>
            Copyright 2014. HANGANG VILLAGE
        </address>
    </div>
  );
}

export default ComponentFooter;
