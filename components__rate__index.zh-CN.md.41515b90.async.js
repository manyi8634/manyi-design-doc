"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[4448],{424244:function(s,n,l){l.r(n);var r=l(502143),m=l(968521),Z=l(659378),p=l(631007),v=l(374912),a=l(828089),c=l(902068),E=l(574399),x=l(863942),P=l(316073),h=l(24628),O=l(719260),f=l(956140),D=l(833531),d=l(905388),M=l(626643),R=l(606965),A=l(249706),C=l(795127),I=l(116846),j=l(73024),u=l(606641),_=l(667294),t=l(370917);function o(){var i=(0,u.eL)(),e=i.texts;return(0,t.tZ)(u.dY,null,(0,t.tZ)(_.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-rate-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/rate/demo/basic.tsx",jsx:`import { Rate } from 'manyid';
const App = () => <Rate />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-rate-demo-half"},previewerProps:{title:"\u534A\u661F",filename:"components/rate/demo/half.tsx",jsx:`import { Rate } from 'manyid';
const App = () => <Rate allowHalf defaultValue={2.5} />;
export default App;
`,description:"<p>\u652F\u6301\u9009\u4E2D\u534A\u661F\u3002</p>"}},{demo:{id:"components-rate-demo-text"},previewerProps:{title:"\u6587\u6848\u5C55\u73B0",filename:"components/rate/demo/text.tsx",jsx:`import { Rate } from 'manyid';
import { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App = () => {
  const [value, setValue] = useState(3);
  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};
export default App;
`,description:"<p>\u7ED9\u8BC4\u5206\u7EC4\u4EF6\u52A0\u4E0A\u6587\u6848\u5C55\u793A\u3002</p>"}},{demo:{id:"components-rate-demo-disabled"},previewerProps:{title:"\u53EA\u8BFB",filename:"components/rate/demo/disabled.tsx",jsx:`import { Rate } from 'manyid';
const App = () => <Rate disabled defaultValue={2} />;
export default App;
`,description:"<p>\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u9F20\u6807\u4EA4\u4E92\u3002</p>"}},{demo:{id:"components-rate-demo-clear"},previewerProps:{title:"\u6E05\u9664",filename:"components/rate/demo/clear.tsx",jsx:`import { Rate } from 'manyid';
const App = () => (
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </>
);
export default App;
`,description:"<p>\u652F\u6301\u5141\u8BB8\u6216\u8005\u7981\u7528\u6E05\u9664\u3002</p>"}},{demo:{id:"components-rate-demo-character"},previewerProps:{title:"\u5176\u4ED6\u5B57\u7B26",filename:"components/rate/demo/character.tsx",jsx:`import { HeartOutlined } from '@ant-design/icons';
import { Rate } from 'manyid';
const App = () => (
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate
      character="A"
      allowHalf
      style={{
        fontSize: 36,
      }}
    />
    <br />
    <Rate character="\u597D" allowHalf />
  </>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\u3002</p>"}},{demo:{id:"components-rate-demo-character-function"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5B57\u7B26",filename:"components/rate/demo/character-function.tsx",jsx:`import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'manyid';
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const App = () => (
  <>
    <Rate defaultValue={2} character={({ index }) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  </>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u4F7F\u7528 <code>(RateProps) => ReactNode</code> \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6BCF\u4E00\u4E2A\u5B57\u7B26\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[3].value),(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[8].value),(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value),(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null,e[47].value),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[53].value),(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value),(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[57].value),(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,e[59].value),(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[61].value),(0,t.tZ)("td",null,e[62].value),(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,e[67].value),(0,t.tZ)("td",null,e[68].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[69].value),(0,t.tZ)("td",null,e[70].value),(0,t.tZ)("td",null,e[71].value),(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"\u65B9\u6CD5"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[73].value),(0,t.tZ)("th",null,e[74].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[75].value),(0,t.tZ)("td",null,e[76].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null,e[78].value)))))))}n.default=o}}]);
