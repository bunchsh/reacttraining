import React from 'react';

import {Link} from "react-router-dom";

import indexStyle from "../assets/css/index.module.css"



const IndexItem = ({num, link, msg}) => {
    
    return (
            <li className={indexStyle.contentLi}>
                <Link to={link} className={[indexStyle.contentA, {num}.num].join(' ')}>{msg}</Link>
            </li>
    );
};

export default IndexItem;