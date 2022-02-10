import React from 'react';
import {Link} from "react-router-dom";

import call from '../assets/img/qlink_call.gif'
import map from '../assets/img/qlink_map.gif'

import footerStyle from '../assets/css/footer.module.css';

const ComponentFooter = () => {
  return (
    <div className={footerStyle.footer}>
        <ul className={footerStyle.footerUl}>
            <li className={footerStyle.footerLi}>
                <Link to="">
                    <img src={call} alt="분양상담전화" /></Link>
            </li>
            <li className={footerStyle.footerLi}>
                <Link to="">
                <img src={map} alt="찾아오시는 길" /></Link>
            </li>
        </ul>
        <address className={footerStyle.footerAddress}>
            Copyright 2014. HANGANG VILLAGE
        </address>
    </div>
  );
}

export default ComponentFooter;
