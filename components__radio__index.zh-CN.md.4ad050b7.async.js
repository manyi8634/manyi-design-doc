"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[9876],{957051:function(s,a,t){t.r(a);var _=t(502143),p=t(968521),v=t(659378),m=t(631007),R=t(374912),o=t(828089),c=t(902068),Z=t(574399),g=t(863942),h=t(316073),B=t(24628),E=t(719260),C=t(956140),b=t(833531),d=t(905388),P=t(626643),x=t(606965),f=t(249706),A=t(795127),D=t(116846),O=t(73024),l=t(606641),u=t(667294),n=t(370917);function i(){var r=(0,l.eL)(),e=r.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value),(0,n.tZ)("li",null,e[2].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-radio-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/radio/demo/basic.tsx",jsx:`import { Radio } from 'manyid';
const App = () => <Radio>Radio</Radio>;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-radio-demo-disabled"},previewerProps:{title:"\u4E0D\u53EF\u7528",filename:"components/radio/demo/disabled.tsx",jsx:`import { Button, Radio } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button
        type="primary"
        onClick={toggleDisabled}
        style={{
          marginTop: 16,
        }}
      >
        Toggle disabled
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Radio \u4E0D\u53EF\u7528\u3002</p>"}},{demo:{id:"components-radio-demo-radiogroup"},previewerProps:{title:"\u5355\u9009\u7EC4\u5408",filename:"components/radio/demo/radiogroup.tsx",jsx:`import { Radio } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};
export default App;
`,description:"<p>\u4E00\u7EC4\u4E92\u65A5\u7684 Radio \u914D\u5408\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-radio-demo-radiogroup-more"},previewerProps:{title:"Radio.Group \u5782\u76F4",filename:"components/radio/demo/radiogroup-more.tsx",jsx:`import { Input, Radio, Space } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>
          More...
          {value === 4 ? (
            <Input
              style={{
                width: 100,
                marginLeft: 10,
              }}
            />
          ) : null}
        </Radio>
      </Space>
    </Radio.Group>
  );
};
export default App;
`,description:"<p>\u5782\u76F4\u7684 Radio.Group\uFF0C\u914D\u5408\u66F4\u591A\u8F93\u5165\u6846\u9009\u9879\u3002</p>"}},{demo:{id:"components-radio-demo-radiogroup-options"},previewerProps:{title:"Radio.Group \u7EC4\u5408 - \u914D\u7F6E\u65B9\u5F0F",filename:"components/radio/demo/radiogroup-options.tsx",jsx:`import { Radio } from 'manyid';
import { useState } from 'react';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
const optionsWithDisabled = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: true,
  },
];
const App = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');
  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };
  const onChange2 = ({ target: { value } }) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };
  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };
  const onChange4 = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };
  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u914D\u7F6E <code>options</code> \u53C2\u6570\u6765\u6E32\u67D3\u5355\u9009\u6846\u3002\u4E5F\u53EF\u901A\u8FC7 <code>optionType</code> \u53C2\u6570\u6765\u8BBE\u7F6E Radio \u7C7B\u578B\u3002</p>"}},{demo:{id:"components-radio-demo-radiobutton"},previewerProps:{title:"\u6309\u94AE\u6837\u5F0F",filename:"components/radio/demo/radiobutton.tsx",jsx:`import { Radio } from 'manyid';
const onChange = (e) => {
  console.log(\`radio checked:\${e.target.value}\`);
};
const App = () => (
  <>
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      onChange={onChange}
      defaultValue="a"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      disabled
      onChange={onChange}
      defaultValue="a"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);
export default App;
`,description:"<p>\u6309\u94AE\u6837\u5F0F\u7684\u5355\u9009\u7EC4\u5408\u3002</p>"}},{demo:{id:"components-radio-demo-radiogroup-with-name"},previewerProps:{title:"\u5355\u9009\u7EC4\u5408 - \u914D\u5408 name \u4F7F\u7528",filename:"components/radio/demo/radiogroup-with-name.tsx",jsx:`import { Radio } from 'manyid';
const App = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u4E3A Radio.Group \u914D\u7F6E <code>name</code> \u53C2\u6570\uFF0C\u4E3A\u7EC4\u5408\u5185\u7684 input \u5143\u7D20\u8D4B\u4E88\u76F8\u540C\u7684 <code>name</code> \u5C5E\u6027\uFF0C\u4F7F\u6D4F\u89C8\u5668\u628A Radio.Group \u4E0B\u7684 Radio \u771F\u6B63\u770B\u4F5C\u662F\u4E00\u7EC4\uFF08\u4F8B\u5982\u53EF\u4EE5\u901A\u8FC7\u65B9\u5411\u952E\u59CB\u7EC8<strong>\u5728\u540C\u4E00\u7EC4\u5185</strong>\u66F4\u6539\u9009\u9879\uFF09\u3002</p>"}},{demo:{id:"components-radio-demo-size"},previewerProps:{title:"\u5927\u5C0F",filename:"components/radio/demo/size.tsx",jsx:`import { Radio } from 'manyid';
const App = () => (
  <>
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="a"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="a"
      size="small"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);
export default App;
`,description:"<p>\u5927\u4E2D\u5C0F\u4E09\u79CD\u7EC4\u5408\uFF0C\u53EF\u4EE5\u548C\u8868\u5355\u8F93\u5165\u6846\u8FDB\u884C\u5BF9\u5E94\u914D\u5408\u3002</p>"}},{demo:{id:"components-radio-demo-radiobutton-solid"},previewerProps:{title:"\u586B\u5E95\u7684\u6309\u94AE\u6837\u5F0F",filename:"components/radio/demo/radiobutton-solid.tsx",jsx:`import { Radio } from 'manyid';
const App = () => (
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="c"
      buttonStyle="solid"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);
export default App;
`,description:"<p>\u5B9E\u8272\u586B\u5E95\u7684\u5355\u9009\u6309\u94AE\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-radio-demo-badge"},previewerProps:{debug:!0,title:"\u6D4B\u8BD5 Badge \u7684\u6837\u5F0F",filename:"components/radio/demo/badge.tsx",jsx:`import { Badge, Radio } from 'manyid';
const App = () => (
  <Radio.Group buttonStyle="solid">
    <Badge count={1}>
      <Radio.Button value={1}>Click Me</Radio.Button>
    </Badge>
    <Badge count={2}>
      <Radio.Button value={2}>Not Me</Radio.Button>
    </Badge>
  </Radio.Group>
);
export default App;
`,description:"<p>\u6D4B\u8BD5 Badge \u7684\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-radio-demo-wireframe"},previewerProps:{debug:!0,title:"\u7EBF\u6846\u98CE\u683C",filename:"components/radio/demo/wireframe.tsx",jsx:`import { ConfigProvider, Radio } from 'manyid';
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <Radio.Group value={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
    <br />
    <Radio.Group value={1} disabled>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  </ConfigProvider>
);
export default App;
`,description:"<p>\u7EBF\u6846\u98CE\u683C\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"radioradiobutton"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#radioradiobutton"},(0,n.tZ)("span",{className:"icon icon-link"})),"Radio/Radio.Button"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[7].value),(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value)))),(0,n.tZ)("h3",{id:"radiogroup"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#radiogroup"},(0,n.tZ)("span",{className:"icon icon-link"})),"Radio.Group"),(0,n.tZ)("p",null,e[27].value,(0,n.tZ)("code",null,e[28].value),e[29].value),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[30].value),(0,n.tZ)("th",null,e[31].value),(0,n.tZ)("th",null,e[32].value),(0,n.tZ)("th",null,e[33].value),(0,n.tZ)("th",null,e[34].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[37].value),e[38].value,(0,n.tZ)("code",null,e[39].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[40].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value,(0,n.tZ)("code",null,e[51].value),e[52].value,(0,n.tZ)("code",null,e[53].value),e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value,(0,n.tZ)("code",null,e[63].value),e[64].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[65].value),e[66].value,(0,n.tZ)("code",null,e[67].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[68].value)),(0,n.tZ)("td",null,e[69].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[72].value),e[73].value,(0,n.tZ)("code",null,e[74].value),e[75].value,(0,n.tZ)("code",null,e[76].value)),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,n.tZ)("h3",{id:"radio"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#radio"},(0,n.tZ)("span",{className:"icon icon-link"})),"Radio"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[86].value),(0,n.tZ)("th",null,e[87].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[88].value),(0,n.tZ)("td",null,e[89].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[90].value),(0,n.tZ)("td",null,e[91].value)))))))}a.default=i}}]);
