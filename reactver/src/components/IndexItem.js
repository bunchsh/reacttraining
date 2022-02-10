import React from 'react';

import {Link} from "react-router-dom";

import indexStyle from "../assets/css/index.module.css"



const IndexItem = ({num, link, msg}) => {

    let ClassArray = [indexStyle.contentA, {num}.num]
    console.log(ClassArray);

    return (
            <li className={indexStyle.contentLi}>
                <Link to={link} className={ClassArray.join(' ')}>{msg}</Link>
            </li>
    );
};

export default IndexItem;