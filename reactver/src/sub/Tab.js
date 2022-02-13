import React from 'react';
import {NavLink} from "react-router-dom";

import TabStyle from "../assets/css/tab.module.css"

import "../assets/css/active.css"

const Tab = () => {
  return (
    <div>
        <div>
            <ul className={TabStyle.tabUl}>
                <li className={TabStyle.tabLi}>
                    <NavLink className={`${TabStyle.tabLi}, ${TabStyle.tabLink}`} to="/info1">분양안내</NavLink>
                </li>
                <li className={TabStyle.tabLi}>
                    <NavLink className={`${TabStyle.tabLi}, ${TabStyle.tabLink}`}  to="/info2">단지안내</NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Tab;
