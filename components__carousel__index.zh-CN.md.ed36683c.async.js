"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[4121],{405531:function(s,l,e){e.r(l);var c=e(502143),m=e(968521),r=e(659378),v=e(631007),p=e(374912),o=e(828089),h=e(902068),Z=e(574399),E=e(863942),y=e(316073),P=e(24628),x=e(719260),C=e(956140),D=e(833531),u=e(905388),g=e(626643),f=e(606965),A=e(249706),M=e(795127),O=e(116846),B=e(73024),_=e(606641),d=e(667294),n=e(370917);function i(){var a=(0,_.eL)(),t=a.texts;return(0,n.tZ)(_.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[1].value),(0,n.tZ)("li",null,t[2].value),(0,n.tZ)("li",null,t[3].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-carousel-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/carousel/demo/basic.tsx",jsx:`import { Carousel } from 'manyid';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-carousel-demo-position"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/carousel/demo/position.tsx",jsx:`import { Carousel, Radio } from 'manyid';
import { useState } from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
  const [dotPosition, setDotPosition] = useState('top');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
};
export default App;
`,description:"<p>\u4F4D\u7F6E\u6709 4 \u4E2A\u65B9\u5411\u3002</p>"}},{demo:{id:"components-carousel-demo-autoplay"},previewerProps:{title:"\u81EA\u52A8\u5207\u6362",filename:"components/carousel/demo/autoplay.tsx",jsx:`import { Carousel } from 'manyid';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;
`,description:"<p>\u5B9A\u65F6\u5207\u6362\u4E0B\u4E00\u5F20\u3002</p>"}},{demo:{id:"components-carousel-demo-fade"},previewerProps:{title:"\u6E10\u663E",filename:"components/carousel/demo/fade.tsx",jsx:`import { Carousel } from 'manyid';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;
`,description:"<p>\u5207\u6362\u6548\u679C\u4E3A\u6E10\u663E\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value,(0,n.tZ)("code",null,t[15].value),t[16].value,(0,n.tZ)("code",null,t[17].value),t[18].value,(0,n.tZ)("code",null,t[19].value),t[20].value,(0,n.tZ)("code",null,t[21].value)),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[23].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value,(0,n.tZ)("code",null,t[26].value),t[27].value,(0,n.tZ)("code",null,t[28].value),t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[35].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[38].value),t[39].value,(0,n.tZ)("code",null,t[40].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[41].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[50].value),(0,n.tZ)("th",null,t[51].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value)))),(0,n.tZ)("p",null,t[58].value,(0,n.tZ)("a",{href:"https://react-slick.neostack.com/docs/api"},t[59].value)),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"\u5982\u4F55\u81EA\u5B9A\u4E49\u7BAD\u5934"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u81EA\u5B9A\u4E49\u7BAD\u5934"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u81EA\u5B9A\u4E49\u7BAD\u5934\uFF1F"),(0,n.tZ)("p",null,t[60].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/12479"},t[61].value),t[62].value))))}l.default=i}}]);
