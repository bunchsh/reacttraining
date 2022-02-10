import React from 'react';
import {Link} from "react-router-dom";

import GlobalStyle from "../assets/css/GlobalStyle"
import InfoSub2 from '../sub/InfoSub2';

import Info2Style from "../assets/css/Info2.module.css"
import InfoTab from "../assets/css/tab.module.css"

const Info2 = () => {
  return (
    <div>
      <GlobalStyle />
      <ul className={InfoTab.tabUl}>
          <li className={InfoTab.tabLi}>
              <Link className={InfoTab.tabLink} to="/info1/infosub1">분양안내</Link>
          </li>
          <li className={InfoTab.tabLi}>
              <Link className={InfoTab.tabLink} to="/info2/infosub2">단지안내</Link>
          </li>
      </ul>
      <InfoSub2/>
    </div>
  );
}

export default Info2;
