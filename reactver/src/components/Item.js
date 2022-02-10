import React from 'react';

// 컴포넌트 props의 필수 여부를 지정하거나 props의 DataType을 지정할 때 사용
// -> https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';

import {NavLink, Link} from "react-router-dom";

import InfoSub2Style from "../assets/css/Info2.module.css"



//const MyPropTypesSub = (props) => {
    // 비구조 문법을 통해 변수 속성값을 변수로 선언
    //const {name, age, hobby} = props;
const Item = ({img, alt}) => {
    return (
        <div>
            <li className={InfoSub2Style.contentLi}>
                <Link className={InfoSub2Style.contentLink} to="">
                    <img className={InfoSub2Style.contentImg} src={img} alt={alt} />
                </Link>
            </li>
        </div>
    );
};



export default Item;