import React from 'react';

// css파일
import GlobalStyle from "../assets/css/GlobalStyle"
import InfoStyle from "../assets/css/info1.module.css";

//컴포넌트
import Tab from "../sub/Tab"

// Props
import Info1Th from "../components/Info1Th"

// 이미지 파일
import pic_ca1_img01 from '../assets/img/pic_ca1_img01.jpg';
import ico_a from '../assets/img/ico_a.gif';
import ico_o from '../assets/img/ico_o.gif';


/**
 * 외부 CSS 파일을 참조하는 컴포넌트
 */
const Info1 = () => {
    return (
        <div>
            <GlobalStyle />
            <Tab/>
            <hr />
                
            <div className={InfoStyle.content}>
                <h2 className={InfoStyle.contentH2}>1,439세대 대단지. 스케일부터 다릅니다.</h2>
                <div className="img">
                    <img src={pic_ca1_img01} alt="조감도"/>
                </div>
                <h3 className={InfoStyle.contentH3}>주택공급현황</h3>
                <p className={InfoStyle.right}>
                    <img className={InfoStyle.rightImg} src={ico_a} alt="아파트"/>아파트
                    <img className={InfoStyle.rightImg} src={ico_o} alt="오피스텔"/>오피스텔
                </p>
                
                <table>
                    <caption className={InfoStyle.contentCaption}>주택공급현황</caption>
                    <thead>
                    <tr>
                        <Info1Th scope="col" col="" msg="면적"></Info1Th>
                        <Info1Th scope="col" col="" msg="구분"></Info1Th>
                        <Info1Th scope="col" col="" msg="일반분양"></Info1Th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={InfoStyle.contentTd}><img className={InfoStyle.contentImg} src={ico_a} alt="아파트"/>전용면적</td>
                        <td className={InfoStyle.contentTd}>84.469cm</td>
                        <td className={InfoStyle.contentTd}>167</td>
                    </tr>
                    <tr>
                        <td className={InfoStyle.contentTd}><img src={ico_o} className={InfoStyle.contentImg} alt="오피스텔"/>전용면적</td>
                        <td className={InfoStyle.contentTd}>84.469cm</td>
                        <td className={InfoStyle.contentTd}>167</td>
                    </tr>         
                    </tbody>
                    <tfoot>
                    <tr>
                        <Info1Th scope="" col="2" msg="합계"></Info1Th>
                        <Info1Th scope="" col="" msg="1,234세대"></Info1Th>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <hr /> 
        </div>
    );
};

export default Info1;