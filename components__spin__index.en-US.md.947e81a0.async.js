"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[5406],{134844:function(p,i,t){t.r(i);var m=t(502143),u=t(968521),c=t(659378),r=t(631007),E=t(374912),d=t(828089),g=t(902068),v=t(574399),x=t(863942),h=t(316073),Z=t(24628),P=t(719260),A=t(956140),f=t(833531),l=t(905388),D=t(626643),S=t(606965),M=t(249706),O=t(795127),y=t(116846),C=t(73024),o=t(606641),_=t(667294),n=t(370917);function a(){var s=(0,o.eL)(),e=s.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(_.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(l.Z,{items:[{demo:{id:"components-spin-demo-basic"},previewerProps:{title:"basic Usage",filename:"components/spin/demo/basic.tsx",jsx:`import { Spin } from 'manyid';
const App = () => <Spin />;
export default App;
`,description:"<p>A simple loading status.</p>"}},{demo:{id:"components-spin-demo-size"},previewerProps:{title:"Size",filename:"components/spin/demo/size.tsx",jsx:`import { Space, Spin } from 'manyid';
const App = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);
export default App;
`,description:"<p>A small <code>Spin</code> is used for loading text, default sized <code>Spin</code> for loading a card-level block, and large <code>Spin</code> used for loading a <strong>page</strong>.</p>"}},{demo:{id:"components-spin-demo-inside"},previewerProps:{title:"Inside a container",filename:"components/spin/demo/inside.tsx",jsx:`import { Spin } from 'manyid';
const App = () => (
  <div className="example">
    <Spin />
  </div>
);
export default App;
`,description:"<p>Spin in a container.</p>",style:`.example {
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}`}},{demo:{id:"components-spin-demo-nested"},previewerProps:{title:"Embedded mode",filename:"components/spin/demo/nested.tsx",jsx:`import { Alert, Spin, Switch } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const toggle = (checked) => {
    setLoading(checked);
  };
  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div
        style={{
          marginTop: 16,
        }}
      >
        Loading state\uFF1A
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Embedding content into <code>Spin</code> will set it into loading state.</p>"}},{demo:{id:"components-spin-demo-tip"},previewerProps:{title:"Customized description",filename:"components/spin/demo/tip.tsx",jsx:`import { Alert, Space, Spin } from 'manyid';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Space>
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
      <Spin tip="Loading">
        <div className="content" />
      </Spin>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>

    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  </Space>
);
export default App;
`,description:"",style:`.content {
  padding: 50px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}`}},{demo:{id:"components-spin-demo-delayanddebounce"},previewerProps:{title:"delay",filename:"components/spin/demo/delayAndDebounce.tsx",jsx:`import { Alert, Spin, Switch } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const toggle = (checked) => {
    setLoading(checked);
  };
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  );
  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {container}
      </Spin>
      <div
        style={{
          marginTop: 16,
        }}
      >
        Loading state\uFF1A
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Specifies a delay for loading state. If <code>spinning</code> ends during delay, loading status won't appear.</p>"}},{demo:{id:"components-spin-demo-custom-indicator"},previewerProps:{title:"Custom spinning indicator",filename:"components/spin/demo/custom-indicator.tsx",jsx:`import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'manyid';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const App = () => <Spin indicator={antIcon} />;
export default App;
`,description:"<p>Use custom loading indicator.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(d.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[2].value),(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[6].value),(0,n.tZ)("td",null,e[7].value),(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value,(0,n.tZ)("code",null,e[16].value),e[17].value,(0,n.tZ)("code",null,e[18].value),e[19].value,(0,n.tZ)("code",null,e[20].value)),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[22].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value)))),(0,n.tZ)("h3",{id:"static-method"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#static-method"},(0,n.tZ)("span",{className:"icon icon-link"})),"Static Method"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)("p",null,(0,n.tZ)("code",null,e[35].value)),(0,n.tZ)("p",null,e[36].value))))))}i.default=a}}]);
