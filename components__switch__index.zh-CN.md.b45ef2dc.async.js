"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[1564],{289042:function(s,l,n){n.r(l);var c=n(502143),m=n(968521),p=n(659378),r=n(631007),Z=n(374912),_=n(828089),v=n(902068),h=n(574399),E=n(863942),C=n(316073),P=n(24628),x=n(719260),D=n(956140),O=n(833531),i=n(905388),M=n(626643),A=n(606965),g=n(249706),f=n(795127),T=n(116846),I=n(73024),d=n(606641),u=n(667294),t=n(370917);function o(){var a=(0,d.eL)(),e=a.texts;return(0,t.tZ)(d.dY,null,(0,t.tZ)(u.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value,(0,t.tZ)("code",null,e[3].value),e[4].value,(0,t.tZ)("code",null,e[5].value),e[6].value,(0,t.tZ)("code",null,e[7].value),e[8].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/switch/demo/basic.tsx",jsx:`import { Switch } from 'manyid';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"\u4E0D\u53EF\u7528",filename:"components/switch/demo/disabled.tsx",jsx:`import { Button, Space, Switch } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <Space direction="vertical">
      <Switch disabled={disabled} defaultChecked />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Switch \u5931\u6548\u72B6\u6001\u3002</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"\u6587\u5B57\u548C\u56FE\u6807",filename:"components/switch/demo/text.tsx",jsx:`import { CheckOutlined } from '@ant-design/icons';
import { Space, Switch } from 'manyid';
const App = () => (
  <Space direction="vertical">
    <Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);
export default App;
`,description:"<p>\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"\u4E24\u79CD\u5927\u5C0F",filename:"components/switch/demo/size.tsx",jsx:`import { Switch } from 'manyid';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"\u52A0\u8F7D\u4E2D",filename:"components/switch/demo/loading.tsx",jsx:`import { Switch } from 'manyid';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(_.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[9].value),(0,t.tZ)("th",null,e[10].value),(0,t.tZ)("th",null,e[11].value),(0,t.tZ)("th",null,e[12].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value),(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value,(0,t.tZ)("code",null,e[43].value),e[44].value,(0,t.tZ)("code",null,e[45].value)),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[47].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value),(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value),(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,e[59].value)))),(0,t.tZ)("h2",{id:"\u65B9\u6CD5"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,t.tZ)(_.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[60].value),(0,t.tZ)("th",null,e[61].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[62].value),(0,t.tZ)("td",null,e[63].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value)))))))}l.default=o}}]);
