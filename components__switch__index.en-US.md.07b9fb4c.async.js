"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[9675],{396707:function(s,l,n){n.r(l);var c=n(502143),m=n(968521),p=n(659378),r=n(631007),h=n(374912),_=n(828089),v=n(902068),Z=n(574399),E=n(863942),P=n(316073),x=n(24628),C=n(719260),D=n(956140),M=n(833531),i=n(905388),O=n(626643),g=n(606965),f=n(249706),A=n(795127),T=n(116846),I=n(73024),d=n(606641),o=n(667294),e=n(370917);function a(){var u=(0,d.eL)(),t=u.texts;return(0,e.tZ)(d.dY,null,(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t[1].value),(0,e.tZ)("li",null,t[2].value,(0,e.tZ)("code",null,t[3].value),t[4].value,(0,e.tZ)("code",null,t[5].value),t[6].value,(0,e.tZ)("code",null,t[7].value),t[8].value,(0,e.tZ)("code",null,t[9].value),t[10].value)),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"Basic",filename:"components/switch/demo/basic.tsx",jsx:`import { Switch } from 'manyid';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/switch/demo/disabled.tsx",jsx:`import { Button, Space, Switch } from 'manyid';
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
`,description:"<p>Disabled state of <code>Switch</code>.</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"Text & icon",filename:"components/switch/demo/text.tsx",jsx:`import { CheckOutlined } from '@ant-design/icons';
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
`,description:"<p>With text and icon.</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"Two sizes",filename:"components/switch/demo/size.tsx",jsx:`import { Switch } from 'manyid';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> represents a small sized switch.</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"Loading",filename:"components/switch/demo/loading.tsx",jsx:`import { Switch } from 'manyid';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>Mark a pending state of switch.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(_.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[11].value),(0,e.tZ)("th",null,t[12].value),(0,e.tZ)("th",null,t[13].value),(0,e.tZ)("th",null,t[14].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null,t[24].value),(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[27].value),(0,e.tZ)("td",null,t[28].value),(0,e.tZ)("td",null,t[29].value),(0,e.tZ)("td",null,t[30].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[31].value),(0,e.tZ)("td",null,t[32].value),(0,e.tZ)("td",null,t[33].value),(0,e.tZ)("td",null,t[34].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null,t[40].value),(0,e.tZ)("td",null,t[41].value),(0,e.tZ)("td",null,t[42].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[43].value),(0,e.tZ)("td",null,t[44].value,(0,e.tZ)("code",null,t[45].value),t[46].value,(0,e.tZ)("code",null,t[47].value)),(0,e.tZ)("td",null,t[48].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[49].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value),(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null,t[53].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[54].value),(0,e.tZ)("td",null,t[55].value),(0,e.tZ)("td",null,t[56].value),(0,e.tZ)("td",null,t[57].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[58].value),(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null,t[60].value),(0,e.tZ)("td",null,t[61].value)))),(0,e.tZ)("h2",{id:"methods"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,e.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,e.tZ)(_.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[62].value),(0,e.tZ)("th",null,t[63].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null,t[65].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null,t[67].value)))))))}l.default=a}}]);
