import React from 'react';

// css파일
import InfoSub2Style from "../assets/css/Info2.module.css"

// 컴포넌트
import Tab from "../sub/Tab"

// Props
import Info2Item from '../components/Info2Item'

// 이미지 파일
import img2 from '../assets/img/pic_ca1_img02.jpg'
import img3 from '../assets/img/pic_ca1_img03.jpg'
import img4 from '../assets/img/pic_ca1_img04.jpg'
import img5 from '../assets/img/pic_ca1_img05.jpg'
import img6 from '../assets/img/pic_ca1_img06.jpg'
import img7 from '../assets/img/pic_ca1_img07.jpg'




const Info2 = () => {
  return (
    <div>
      <Tab/>
      <div className={InfoSub2Style.content}>
            <h2 className={InfoSub2Style.contentH2}>친환경 주거단지, 사람도 자연도 행복합니다.</h2>
            <ul className={InfoSub2Style.contentUl}>
                <Info2Item img={img2} alt="조감도1"></Info2Item>
                <Info2Item img={img3} alt="조감도2"></Info2Item>
                <Info2Item img={img4} alt="조감도3"></Info2Item>
                <Info2Item img={img5} alt="조감도4"></Info2Item>
                <Info2Item img={img6} alt="조감도5"></Info2Item>
                <Info2Item img={img7} alt="조감도6"></Info2Item>
            </ul>
        </div>
    </div>
  );
}

export default Info2;
