import React from 'react';
import {Link} from "react-router-dom";

import GlobalStyle from "../assets/css/GlobalStyle"
import InfoSub2Style from "../assets/css/Info2.module.css"

import img2 from '../assets/img/pic_ca1_img02.jpg'
import img3 from '../assets/img/pic_ca1_img03.jpg'
import img4 from '../assets/img/pic_ca1_img04.jpg'
import img5 from '../assets/img/pic_ca1_img05.jpg'
import img6 from '../assets/img/pic_ca1_img06.jpg'
import img7 from '../assets/img/pic_ca1_img07.jpg'


const InfoSub2 = () => {
    return (
        <div className={InfoSub2Style.content}>
            <GlobalStyle />
            <h2 className={InfoSub2Style.contentH2}>친환경 주거단지, 사람도 자연도 행복합니다.</h2>
            <ul className={InfoSub2Style.contentUl}>
                <li className={InfoSub2Style.contentLi}>
                    <Link className={InfoSub2Style.contentLink} to=""><img className={InfoSub2Style.contentImg} src={img2} alt="조감도1" /></Link>
                </li>
                <li className={InfoSub2Style.contentLi}>
                    <Link className={InfoSub2Style.contentLink} to=""><img className={InfoSub2Style.contentImg} src={img3}  alt="조감도2" /></Link>
                </li>
                <li className={InfoSub2Style.contentLi}>
                    <Link className={InfoSub2Style.contentLink} to=""><img className={InfoSub2Style.contentImg} src={img4} alt="조감도3" /></Link>
                </li>
                <li className={InfoSub2Style.contentLi}>
                    <Link className={InfoSub2Style.contentLink} to=""><img className={InfoSub2Style.contentImg} src={img5} alt="조감도4" /></Link>
                </li>
                <li className={InfoSub2Style.contentLi}>
                    <Link className={InfoSub2Style.contentLink} to=""><img className={InfoSub2Style.contentImg} src={img6} alt="조감도5" /></Link>
                </li>
                <li className={InfoSub2Style.contentLi}>
                    <Link className={InfoSub2Style.contentLink} to=""><img className={InfoSub2Style.contentImg} src={img7} alt="조감도6" /></Link>
                </li>
            </ul>
        </div>
    );
}

export default InfoSub2;
