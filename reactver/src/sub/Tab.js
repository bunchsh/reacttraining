import React from 'react';
import {NavLink} from "react-router-dom";

import GlobalStyle from "../assets/css/GlobalStyle"


import TabStyle from "../assets/css/tab.module.css"

const Tab = () => {
  return (
    <div>
        <div>
            <GlobalStyle />
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
