import React from 'react';

import {Link} from "react-router-dom";

import InfoSub2Style from "../assets/css/Info2.module.css"



const Info2Item = ({img, alt}) => {
    return (
        <li className={InfoSub2Style.contentLi}>
            <Link className={InfoSub2Style.contentLink} to="">
                <img className={InfoSub2Style.contentImg} src={img} alt={alt} />
            </Link>
        </li>
    );
};

export default Info2Item;