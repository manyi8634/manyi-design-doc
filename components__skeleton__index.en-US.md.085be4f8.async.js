"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[1527],{131257:function(r,o,n){n.r(o);var _=n(502143),c=n(968521),p=n(659378),m=n(631007),v=n(374912),l=n(828089),Z=n(902068),h=n(574399),g=n(863942),E=n(316073),S=n(24628),k=n(719260),x=n(956140),f=n(833531),i=n(905388),P=n(626643),y=n(606965),B=n(249706),D=n(795127),I=n(116846),b=n(73024),a=n(606641),u=n(667294),t=n(370917);function d(){var s=(0,a.eL)(),e=s.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(u.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value),(0,t.tZ)("li",null,e[3].value),(0,t.tZ)("li",null,e[4].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-skeleton-demo-basic"},previewerProps:{title:"Basic",filename:"components/skeleton/demo/basic.tsx",jsx:`import { Skeleton } from 'manyid';
const App = () => <Skeleton />;
export default App;
`,description:"<p>Simplest Skeleton usage.</p>"}},{demo:{id:"components-skeleton-demo-complex"},previewerProps:{title:"Complex combination",filename:"components/skeleton/demo/complex.tsx",jsx:`import { Skeleton } from 'manyid';
const App = () => (
  <Skeleton
    avatar
    paragraph={{
      rows: 4,
    }}
  />
);
export default App;
`,description:"<p>Complex combination with avatar and multiple paragraphs.</p>"}},{demo:{id:"components-skeleton-demo-active"},previewerProps:{title:"Active Animation",filename:"components/skeleton/demo/active.tsx",jsx:`import { Skeleton } from 'manyid';
const App = () => <Skeleton active />;
export default App;
`,description:"<p>Display active animation.</p>"}},{demo:{id:"components-skeleton-demo-element"},previewerProps:{title:"Button/Avatar/Input/Image/Node",filename:"components/skeleton/demo/element.tsx",jsx:`import { DotChartOutlined } from '@ant-design/icons';
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState('default');
  const [buttonShape, setButtonShape] = useState('default');
  const [avatarShape, setAvatarShape] = useState('circle');
  const handleActiveChange = (checked) => {
    setActive(checked);
  };
  const handleBlockChange = (checked) => {
    setBlock(checked);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleShapeButton = (e) => {
    setButtonShape(e.target.value);
  };
  const handleAvatarShape = (e) => {
    setAvatarShape(e.target.value);
  };
  return (
    <>
      <Space>
        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined
            style={{
              fontSize: 40,
              color: '#bfbfbf',
            }}
          />
        </Skeleton.Node>
      </Space>
      <Divider />
      <Form
        layout="inline"
        style={{
          margin: '16px 0',
        }}
      >
        <Space size={16} wrap>
          <Form.Item label="Active">
            <Switch checked={active} onChange={handleActiveChange} />
          </Form.Item>
          <Form.Item label="Button and Input Block">
            <Switch checked={block} onChange={handleBlockChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Button Shape">
            <Radio.Group value={buttonShape} onChange={handleShapeButton}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="round">Round</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Avatar Shape">
            <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};
export default App;
`,description:"<p>Skeleton Button, Avatar, Input, Image and Node.</p>"}},{demo:{id:"components-skeleton-demo-children"},previewerProps:{title:"Contains sub component",filename:"components/skeleton/demo/children.tsx",jsx:`import { Button, Skeleton, Space } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={16}
    >
      <Skeleton loading={loading}>
        <h4
          style={{
            marginBottom: 16,
          }}
        >
          Manyi Design, a design language
        </h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        Show Skeleton
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Skeleton contains sub component.</p>"}},{demo:{id:"components-skeleton-demo-list"},previewerProps:{title:"List",filename:"components/skeleton/demo/list.tsx",jsx:`import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'manyid';
import React, { useState } from 'react';
const listData = Array.from({
  length: 3,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: \`ant design part \${i + 1}\`,
  avatar: \`https://joesch.moe/api/v1/random?key=\${i}\`,
  description:
    'Manyi Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <>
    {React.createElement(icon, {
      style: {
        marginRight: 8,
      },
    })}
    {text}
  </>
);
const App = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      <Switch
        checked={!loading}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              !loading
                ? [
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  ]
                : undefined
            }
            extra={
              !loading && (
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              )
            }
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Use skeleton in list component.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"skeleton"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeleton"},(0,t.tZ)("span",{className:"icon icon-link"})),"Skeleton"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null,e[12].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value,(0,t.tZ)(a.rU,{to:"#skeletonavatarprops"},e[16].value)),(0,t.tZ)("td",null,e[17].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value,(0,t.tZ)(a.rU,{to:"#skeletonparagraphprops"},e[25].value)),(0,t.tZ)("td",null,e[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value,(0,t.tZ)(a.rU,{to:"#skeletontitleprops"},e[34].value)),(0,t.tZ)("td",null,e[35].value)))),(0,t.tZ)("h3",{id:"skeletonavatarprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonavatarprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonAvatarProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[36].value),(0,t.tZ)("th",null,e[37].value),(0,t.tZ)("th",null,e[38].value),(0,t.tZ)("th",null,e[39].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,e[43].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[46].value),e[47].value,(0,t.tZ)("code",null,e[48].value)),(0,t.tZ)("td",null,e[49].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value,(0,t.tZ)("code",null,e[53].value),e[54].value,(0,t.tZ)("code",null,e[55].value),e[56].value,(0,t.tZ)("code",null,e[57].value)),(0,t.tZ)("td",null,e[58].value)))),(0,t.tZ)("h3",{id:"skeletontitleprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletontitleprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonTitleProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[59].value),(0,t.tZ)("th",null,e[60].value),(0,t.tZ)("th",null,e[61].value),(0,t.tZ)("th",null,e[62].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null,e[66].value)))),(0,t.tZ)("h3",{id:"skeletonparagraphprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonparagraphprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonParagraphProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[67].value),(0,t.tZ)("th",null,e[68].value),(0,t.tZ)("th",null,e[69].value),(0,t.tZ)("th",null,e[70].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[71].value),(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value),(0,t.tZ)("td",null,e[74].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[75].value),(0,t.tZ)("td",null,e[76].value),(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null,e[78].value)))),(0,t.tZ)("h3",{id:"skeletonbuttonprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonbuttonprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonButtonProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[79].value),(0,t.tZ)("th",null,e[80].value),(0,t.tZ)("th",null,e[81].value),(0,t.tZ)("th",null,e[82].value),(0,t.tZ)("th",null,e[83].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[84].value),(0,t.tZ)("td",null,e[85].value),(0,t.tZ)("td",null,e[86].value),(0,t.tZ)("td",null,e[87].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[88].value),(0,t.tZ)("td",null,e[89].value),(0,t.tZ)("td",null,e[90].value),(0,t.tZ)("td",null,e[91].value),(0,t.tZ)("td",null,e[92].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[93].value),(0,t.tZ)("td",null,e[94].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[95].value),e[96].value,(0,t.tZ)("code",null,e[97].value),e[98].value,(0,t.tZ)("code",null,e[99].value),e[100].value,(0,t.tZ)("code",null,e[101].value)),(0,t.tZ)("td",null,e[102].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[103].value),(0,t.tZ)("td",null,e[104].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[105].value),e[106].value,(0,t.tZ)("code",null,e[107].value),e[108].value,(0,t.tZ)("code",null,e[109].value)),(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"skeletoninputprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletoninputprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonInputProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[111].value),(0,t.tZ)("th",null,e[112].value),(0,t.tZ)("th",null,e[113].value),(0,t.tZ)("th",null,e[114].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[115].value),(0,t.tZ)("td",null,e[116].value),(0,t.tZ)("td",null,e[117].value),(0,t.tZ)("td",null,e[118].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[119].value),(0,t.tZ)("td",null,e[120].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[121].value),e[122].value,(0,t.tZ)("code",null,e[123].value),e[124].value,(0,t.tZ)("code",null,e[125].value)),(0,t.tZ)("td",null,e[126].value)))))))}o.default=d}}]);
