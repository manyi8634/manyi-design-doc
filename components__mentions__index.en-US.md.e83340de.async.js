"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[878],{552546:function(_,a,t){t.r(a);var c=t(502143),p=t(968521),Z=t(659378),v=t(631007),u=t(374912),l=t(828089),i=t(902068),h=t(574399),f=t(863942),E=t(316073),y=t(24628),g=t(719260),b=t(956140),M=t(833531),s=t(905388),x=t(626643),P=t(606965),C=t(249706),D=t(795127),O=t(116846),A=t(73024),o=t(606641),d=t(667294),n=t(370917);function r(){var m=(0,o.eL)(),e=m.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("h3",{id:"usage-upgrade-after-510"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage-upgrade-after-510"},(0,n.tZ)("span",{className:"icon icon-link"})),"Usage upgrade after 5.1.0")),(0,n.tZ)(i.Z,{message:"After version 5.1.0, we provide a simpler usage <Mentions options={[...]} />  with better performance and potential of writing simpler code style in your applications. Meanwhile, we deprecated the old usage in browser console, we will remove it in manyid 6.0."}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)(u.Z,{lang:"jsx"},e[2].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(s.Z,{items:[{demo:{id:"components-mentions-demo-basic"},previewerProps:{title:"Basic",filename:"components/mentions/demo/basic.tsx",jsx:`import { Mentions } from 'manyid';
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
`,description:"<p>Basic usage.</p>"}},{demo:{id:"components-mentions-demo-async"},previewerProps:{title:"Asynchronous loading",filename:"components/mentions/demo/async.tsx",jsx:`import debounce from 'lodash/debounce';
import { Mentions } from 'manyid';
import { useCallback, useRef, useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const loadGithubUsers = (key) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(\`https://api.github.com/search/users?q=\${key}\`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);
  const onSearch = (search) => {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      loading={loading}
      onSearch={onSearch}
      options={users.map(({ login, avatar_url: avatar }) => ({
        key: login,
        value: login,
        className: 'manyid-demo-dynamic-option',
        label: (
          <>
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </>
        ),
      }))}
    />
  );
};
export default App;
`,description:"<p>async.</p>",style:`.manyid-demo-dynamic-option img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}`}},{demo:{id:"components-mentions-demo-form"},previewerProps:{title:"With Form",filename:"components/mentions/demo/form.tsx",jsx:`import { Button, Form, Mentions, Space } from 'manyid';
const { getMentions } = Mentions;
const App = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };
  const checkMention = async (_, value) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };
  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            validator: checkMention,
          },
        ]}
      >
        <Mentions
          rows={1}
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Mentions
          rows={3}
          placeholder="You can use @ to ref user here"
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 14,
          offset: 6,
        }}
      >
        <Space wrap>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>Controlled mode, for example, to work with <code>Form</code>.</p>"}},{demo:{id:"components-mentions-demo-prefix"},previewerProps:{title:"Customize Trigger Token",filename:"components/mentions/demo/prefix.tsx",jsx:`import { Mentions } from 'manyid';
import { useState } from 'react';
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
const App = () => {
  const [prefix, setPrefix] = useState('@');
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
      options={(MOCK_DATA[prefix] || []).map((value) => ({
        key: value,
        value,
        label: value,
      }))}
    />
  );
};
export default App;
`,description:"<p>Customize Trigger Token by <code>prefix</code> props. Default to <code>@</code>, <code>Array&#x3C;string></code> also supported.</p>"}},{demo:{id:"components-mentions-demo-readonly"},previewerProps:{title:"disabled or readOnly",filename:"components/mentions/demo/readonly.tsx",jsx:`import { Mentions } from 'manyid';
const options = ['afc163', 'zombiej', 'yesmeck'].map((value) => ({
  value,
  key: value,
  label: value,
}));
const App = () => (
  <>
    <div
      style={{
        marginBottom: 10,
      }}
    >
      <Mentions
        style={{
          width: '100%',
        }}
        placeholder="this is disabled Mentions"
        disabled
        options={options}
      />
    </div>
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="this is readOnly Mentions"
      readOnly
      options={options}
    />
  </>
);
export default App;
`,description:"<p>Configure <code>disabled</code> and <code>readOnly</code>.</p>"}},{demo:{id:"components-mentions-demo-placement"},previewerProps:{title:"Placement",filename:"components/mentions/demo/placement.tsx",jsx:`import { Mentions } from 'manyid';
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    placement="top"
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
`,description:"<p>Change the suggestions placement.</p>"}},{demo:{id:"components-mentions-demo-autosize"},previewerProps:{title:"autoSize",filename:"components/mentions/demo/autoSize.tsx",jsx:`import { Mentions } from 'manyid';
const App = () => (
  <Mentions
    autoSize
    style={{
      width: '100%',
    }}
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
`,description:"<p>Height autoSize.</p>"}},{demo:{id:"components-mentions-demo-status"},previewerProps:{title:"Status",filename:"components/mentions/demo/status.tsx",jsx:`import { Mentions, Space } from 'manyid';
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => {
  const options = [
    {
      value: 'afc163',
      label: 'afc163',
    },
    {
      value: 'zombieJ',
      label: 'zombieJ',
    },
    {
      value: 'yesmeck',
      label: 'yesmeck',
    },
  ];
  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="error"
        options={options}
      />
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="warning"
        options={options}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Add status to Mentions with <code>status</code>, which could be <code>error</code> or <code>warning</code>\u3002</p>"}},{demo:{id:"components-mentions-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/mentions/demo/render-panel.tsx",jsx:`import { Mentions } from 'manyid';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;
const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];
const App = () => (
  <InternalMentions
    style={{
      width: '100%',
    }}
    value="@"
    options={options}
  />
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"mention"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mention"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mention"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[31].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[34].value),e[35].value,(0,n.tZ)("code",null,e[36].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[37].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[41].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[45].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null,e[64].value),(0,n.tZ)("td",null,e[65].value),(0,n.tZ)("td",null,e[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[67].value),(0,n.tZ)("td",null,e[68].value),(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,e[73].value),(0,n.tZ)("td",null,e[74].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"#option"},e[85].value)),(0,n.tZ)("td",null,e[86].value),(0,n.tZ)("td",null,e[87].value)))),(0,n.tZ)("h3",{id:"mention-methods"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mention-methods"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mention methods"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[88].value),(0,n.tZ)("th",null,e[89].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[90].value),(0,n.tZ)("td",null,e[91].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[92].value),(0,n.tZ)("td",null,e[93].value)))),(0,n.tZ)("h3",{id:"option"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#option"},(0,n.tZ)("span",{className:"icon icon-link"})),"Option"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[94].value),(0,n.tZ)("th",null,e[95].value),(0,n.tZ)("th",null,e[96].value),(0,n.tZ)("th",null,e[97].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[98].value),(0,n.tZ)("td",null,e[99].value),(0,n.tZ)("td",null,e[100].value),(0,n.tZ)("td",null,e[101].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[102].value),(0,n.tZ)("td",null,e[103].value),(0,n.tZ)("td",null,e[104].value),(0,n.tZ)("td",null,e[105].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[106].value),(0,n.tZ)("td",null,e[107].value),(0,n.tZ)("td",null,e[108].value),(0,n.tZ)("td",null,e[109].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[110].value),(0,n.tZ)("td",null,e[111].value),(0,n.tZ)("td",null,e[112].value),(0,n.tZ)("td",null,e[113].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[114].value),(0,n.tZ)("td",null,e[115].value),(0,n.tZ)("td",null,e[116].value),(0,n.tZ)("td",null,e[117].value)))))))}a.default=r}}]);
