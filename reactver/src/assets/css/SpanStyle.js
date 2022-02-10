import {createGlobalStyle} from "styled-components";

const SpanStyle = createGlobalStyle `
* {
	-webkit-text-size-adjust: none;
    font-family: "나눔고딕", "맑은고딕", "굴림", "Helvetica";
}

a {
    color: #222;
    text-decoration: none;
}

hr {
    display: none;
}

/** 추가내용: 웹 브라우저 기본 사이즈 정의 */
html, body {
	width: 100%;
	height: 100%;
}

/** 아래 코드는 reset.css의 원본 내용 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/*font: inherit;*/
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

span {
	display: none !important; 
}
`;

export default SpanStyle;