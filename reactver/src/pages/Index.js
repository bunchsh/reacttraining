import React from 'react';
import {Route, Link, Routes} from "react-router-dom";

import ComponentHeader from '../fixed/ComponentHeader';
import ComponentFooter from '../fixed/ComponentFooter';
import IndexStyle from '../assets/css/index.module.css';

const Index = () => {
  return (
   <div>
       <div><ComponentHeader /></div>
       <div className={IndexStyle.content}>
        <h2 className={IndexStyle.contentH2}>편안한 보금자리를 약속드립니다.</h2>
            <ul className={IndexStyle.contentUl}>
                <li className={IndexStyle.contentLi}><Link to="/info1" className={[IndexStyle.contentLink, IndexStyle.contentLink1].join(' ')}>분양안내</Link></li>
                <li className={IndexStyle.contentLi}><Link to="" className={[IndexStyle.contentLink, IndexStyle.contentLink2].join(' ')}>프리미엄</Link></li>
                <li className={IndexStyle.contentLi}><Link to="" className={[IndexStyle.contentLink, IndexStyle.contentLink3].join(' ')}>단지안내</Link></li>
                <li className={IndexStyle.contentLi}><Link to="" className={[IndexStyle.contentLink, IndexStyle.contentLink4].join(' ')}>인테리어</Link></li>
            </ul>
       </div>
       <div><ComponentFooter /></div>
   </div>
  );
}

export default Index;
