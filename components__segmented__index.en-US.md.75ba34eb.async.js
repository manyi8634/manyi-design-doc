"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[7648],{875111:function(_,o,t){t.r(o);var u=t(502143),r=t(968521),p=t(659378),c=t(631007),v=t(374912),d=t(828089),g=t(902068),y=t(574399),E=t(863942),h=t(316073),x=t(24628),Z=t(719260),S=t(956140),D=t(833531),i=t(905388),O=t(626643),P=t(606965),f=t(249706),M=t(795127),A=t(116846),C=t(73024),l=t(606641),a=t(667294),e=t(370917);function s(){var m=(0,l.eL)(),n=m.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(a.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value,(0,e.tZ)("code",null,n[1].value),n[2].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[3].value),(0,e.tZ)("li",null,n[4].value)),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-segmented-demo-basic"},previewerProps:{title:"Basic",filename:"components/segmented/demo/basic.tsx",jsx:`import { Segmented } from 'manyid';
export default () => <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-segmented-demo-block"},previewerProps:{title:"Block Segmented",filename:"components/segmented/demo/block.tsx",jsx:`import { Segmented } from 'manyid';
export default () => (
  <Segmented block options={[123, 456, 'longtext-longtext-longtext-longtext']} />
);
`,description:"<p><code>block</code> property will make the <code>Segmented</code> fit to its parent width.</p>"}},{demo:{id:"components-segmented-demo-disabled"},previewerProps:{title:"Basic",filename:"components/segmented/demo/disabled.tsx",jsx:`import { Segmented, Space } from 'manyid';
const App = () => (
  <Space direction="vertical">
    <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
    <Segmented
      options={[
        'Daily',
        {
          label: 'Weekly',
          value: 'Weekly',
          disabled: true,
        },
        'Monthly',
        {
          label: 'Quarterly',
          value: 'Quarterly',
          disabled: true,
        },
        'Yearly',
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>Disabled Segmented.</p>"}},{demo:{id:"components-segmented-demo-controlled"},previewerProps:{title:"Controlled mode",filename:"components/segmented/demo/controlled.tsx",jsx:`import { Segmented } from 'manyid';
import { useState } from 'react';
const Demo = () => {
  const [value, setValue] = useState('Map');
  return <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />;
};
export default Demo;
`,description:"<p>Controlled Segmented.</p>"}},{demo:{id:"components-segmented-demo-custom"},previewerProps:{title:"Custom Render",filename:"components/segmented/demo/custom.tsx",jsx:`import { UserOutlined } from '@ant-design/icons';
import { Avatar, Segmented, Space } from 'manyid';
const App = () => (
  <Space direction="vertical">
    <Segmented
      options={[
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <Avatar src="https://joesch.moe/api/v1/random" />
              <div>User 1</div>
            </div>
          ),
          value: 'user1',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <Avatar
                style={{
                  backgroundColor: '#f56a00',
                }}
              >
                K
              </Avatar>
              <div>User 2</div>
            </div>
          ),
          value: 'user2',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <Avatar
                style={{
                  backgroundColor: '#87d068',
                }}
                icon={<UserOutlined />}
              />
              <div>User 3</div>
            </div>
          ),
          value: 'user3',
        },
      ]}
    />
    <Segmented
      options={[
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Spring</div>
              <div>Jan-Mar</div>
            </div>
          ),
          value: 'spring',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Summer</div>
              <div>Apr-Jun</div>
            </div>
          ),
          value: 'summer',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Autumn</div>
              <div>Jul-Sept</div>
            </div>
          ),
          value: 'autumn',
        },
        {
          label: (
            <div
              style={{
                padding: 4,
              }}
            >
              <div>Winter</div>
              <div>Oct-Dec</div>
            </div>
          ),
          value: 'winter',
        },
      ]}
    />
  </Space>
);
export default App;
`,description:"<p>Custom each Segmented Item by ReactNode.</p>"}},{demo:{id:"components-segmented-demo-dynamic"},previewerProps:{title:"Dynamic",filename:"components/segmented/demo/dynamic.tsx",jsx:`import { Button, Segmented, Space } from 'manyid';
import { useState } from 'react';
const Demo = () => {
  const [options, setOptions] = useState(['Daily', 'Weekly', 'Monthly']);
  const [moreLoaded, setMoreLoaded] = useState(false);
  const handleLoadOptions = () => {
    setOptions((prev) => [...prev, 'Quarterly', 'Yearly']);
    setMoreLoaded(true);
  };
  return (
    <Space direction="vertical">
      <Segmented options={options} />
      <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
        Load more options
      </Button>
    </Space>
  );
};
export default Demo;
`,description:"<p>Load <code>options</code> dynamically.</p>"}},{demo:{id:"components-segmented-demo-size"},previewerProps:{title:"Three sizes of Segmented",filename:"components/segmented/demo/size.tsx",jsx:`import { Segmented, Space } from 'manyid';
const App = () => (
  <Space direction="vertical">
    <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
  </Space>
);
export default App;
`,description:"<p>There are three sizes of an Segmented: <code>large</code> (40px), <code>default</code> (32px) and <code>small</code> (24px).</p>"}},{demo:{id:"components-segmented-demo-with-icon"},previewerProps:{title:"With Icon",filename:"components/segmented/demo/with-icon.tsx",jsx:`import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'manyid';
export default () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);
`,description:"<p>Set <code>icon</code> for Segmented Item.</p>"}},{demo:{id:"components-segmented-demo-icon-only"},previewerProps:{title:"With Icon only",filename:"components/segmented/demo/icon-only.tsx",jsx:`import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'manyid';
export default () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);
`,description:"<p>Set <code>icon</code> without <code>label</code> for Segmented Item.</p>"}},{demo:{id:"components-segmented-demo-controlled-two"},previewerProps:{debug:!0,title:"Controlled Synced mode",filename:"components/segmented/demo/controlled-two.tsx",jsx:`import { Segmented } from 'manyid';
import { useState } from 'react';
const Demo = () => {
  const [foo, setFoo] = useState('AND');
  return (
    <>
      <Segmented value={foo} options={['AND', 'OR', 'NOT']} onChange={setFoo} />
      &nbsp;&nbsp;
      <Segmented value={foo} options={['AND', 'OR', 'NOT']} onChange={setFoo} />
    </>
  );
};
export default Demo;
`,description:"<p>Tests two Segmented synchronized states in controlled mode.</p>"}},{demo:{id:"components-segmented-demo-size-consistent"},previewerProps:{debug:!0,title:"Consistent height",filename:"components/segmented/demo/size-consistent.tsx",jsx:`import { Button, Input, Segmented, Select, Space } from 'manyid';
const App = () => (
  <Space direction="vertical">
    <div>
      <Segmented
        style={{
          marginRight: 6,
        }}
        size="large"
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Button type="primary" size="large">
        Button
      </Button>
    </div>
    <div>
      <Segmented
        style={{
          marginRight: 6,
        }}
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Input
        placeholder="default size"
        style={{
          width: 150,
        }}
      />
    </div>
    <div>
      <Segmented
        style={{
          marginRight: 6,
        }}
        size="small"
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Select
        size="small"
        defaultValue="lucy"
        style={{
          width: 150,
        }}
      >
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
    </div>
  </Space>
);
export default App;
`,description:"<p>Keep consistent height with other components.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[5].value,(0,e.tZ)("code",null,n[6].value))),(0,e.tZ)(d.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[7].value),(0,e.tZ)("th",null,n[8].value),(0,e.tZ)("th",null,n[9].value),(0,e.tZ)("th",null,n[10].value),(0,e.tZ)("th",null,n[11].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[12].value),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[16].value),(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,n[21].value),(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[26].value),(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null,n[29].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[30].value),(0,e.tZ)("td",null,n[31].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[32].value),n[33].value,(0,e.tZ)("code",null,n[34].value),n[35].value,(0,e.tZ)("code",null,n[36].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[37].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null),(0,e.tZ)("td",null)))))))}o.default=s}}]);
