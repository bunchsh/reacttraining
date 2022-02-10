import React from 'react';



import InfoStyle from "../assets/css/info1.module.css";



const Info1Th = ({scope, col, msg}) => {


    return (
        <th className={InfoStyle.contentTh} scope={scope} colSpan={col}>{msg}</th>
    );
};

export default Info1Th;