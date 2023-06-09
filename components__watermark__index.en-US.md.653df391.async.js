"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[4292],{797766:function(m,a,t){t.r(a);var _=t(502143),c=t(968521),p=t(659378),h=t(631007),i=t(374912),o=t(828089),v=t(902068),Z=t(574399),g=t(863942),f=t(316073),E=t(24628),y=t(719260),x=t(956140),P=t(833531),r=t(905388),I=t(626643),A=t(606965),b=t(249706),M=t(795127),D=t(116846),O=t(73024),l=t(606641),d=t(667294),n=t(370917);function u(){var s=(0,l.eL)(),e=s.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value),(0,n.tZ)("li",null,e[2].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-watermark-demo-basic"},previewerProps:{title:"Basic",filename:"components/watermark/demo/basic.tsx",jsx:`import { Watermark } from 'manyid';
const App = () => (
  <Watermark content="Manyi Design">
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-watermark-demo-multi-line"},previewerProps:{title:"Multi-line watermark",filename:"components/watermark/demo/multi-line.tsx",jsx:`import { Watermark } from 'manyid';
const App = () => (
  <Watermark content={['Manyi Design', 'Happy Working']}>
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>Use 'content' to set a string array to specify multi-line text watermark content.</p>"}},{demo:{id:"components-watermark-demo-image"},previewerProps:{title:"Image watermark",filename:"components/watermark/demo/image.tsx",jsx:`import { Watermark } from 'manyid';
const App = () => (
  <Watermark
    height={30}
    width={130}
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>Specify the image address via 'image'. To ensure that the image is high definition and not stretched, set the width and height, and upload at least twice the width and height of the logo image address.</p>"}},{demo:{id:"components-watermark-demo-custom"},previewerProps:{title:"Custom configuration",filename:"components/watermark/demo/custom.tsx",jsx:`import { Form, Input, InputNumber, Popover, Slider, Space, Typography, Watermark } from 'manyid';
import { useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
const { Paragraph } = Typography;
const ColorPicker = ({ value, onChange }) => {
  const switchStyle = {
    padding: 4,
    background: '#fff',
    borderRadius: 2,
    border: '1px solid #dedede',
    display: 'inline-block',
    cursor: 'pointer',
  };
  const colorStyle = {
    width: 36,
    height: 14,
    borderRadius: 2,
    background: \`rgba(\${value?.r}, \${value?.g}, \${value?.b}, \${value?.a})\`,
  };
  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      overlayInnerStyle={{
        padding: 0,
      }}
      content={<SketchPicker color={value} onChange={(color) => onChange?.(color.rgb)} />}
    >
      <div style={switchStyle}>
        <div style={colorStyle} />
      </div>
    </Popover>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [config, setConfig] = useState({
    content: 'Manyi Design',
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0.15,
    },
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
  const watermarkProps = useMemo(
    () => ({
      content,
      font: {
        color: \`rgba(\${color.r},\${color.g},\${color.b},\${color.a})\`,
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config],
  );
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Watermark {...watermarkProps}>
        <Typography>
          <Paragraph>
            The light-speed iteration of the digital world makes products more complex. However,
            human consciousness and attention resources are limited. Facing this design
            contradiction, the pursuit of natural interaction will be the consistent direction of
            Manyi Design.
          </Paragraph>
          <Paragraph>
            Natural user cognition: According to cognitive psychology, about 80% of external
            information is obtained through visual channels. The most important visual elements in
            the interface design, including layout, colors, illustrations, icons, etc., should fully
            absorb the laws of nature, thereby reducing the user&apos;s cognitive cost and bringing
            authentic and smooth feelings. In some scenarios, opportunely adding other sensory
            channels such as hearing, touch can create a richer and more natural product experience.
          </Paragraph>
          <Paragraph>
            Natural user behavior: In the interaction with the system, the designer should fully
            understand the relationship between users, system roles, and task objectives, and also
            contextually organize system functions and services. At the same time, a series of
            methods such as behavior analysis, artificial intelligence and sensors could be applied
            to assist users to make effective decisions and reduce extra operations of users, to
            save users&apos; mental and physical resources and make human-computer interaction more
            natural.
          </Paragraph>
        </Typography>
        <img
          style={{
            zIndex: 10,
            width: '100%',
            maxWidth: 800,
            position: 'relative',
          }}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="\u793A\u4F8B\u56FE\u7247"
        />
      </Watermark>
      <Form
        style={{
          width: 280,
          flexShrink: 0,
          borderLeft: '1px solid #eee',
          paddingLeft: 20,
          marginLeft: 20,
        }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        <Form.Item name="content" label="Content">
          <Input placeholder="\u8BF7\u8F93\u5165" />
        </Form.Item>
        <Form.Item name="color" label="Color">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="rotate" label="Rotate">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item
          label="Gap"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['gap', 0]}>
              <InputNumber
                placeholder="gapX"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber
                placeholder="gapY"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item
          label="Offset"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['offset', 0]}>
              <InputNumber
                placeholder="offsetLeft"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber
                placeholder="offsetTop"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
`,description:"<p>Preview the watermark effect by configuring custom parameters.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"watermark"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#watermark"},(0,n.tZ)("span",{className:"icon icon-link"})),"Watermark"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value,(0,n.tZ)("code",null,e[10].value),e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value,(0,n.tZ)("code",null,e[16].value),e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value,(0,n.tZ)("code",null,e[22].value)),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#font"},e[39].value)),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#font"},e[40].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value,(0,n.tZ)("code",null,e[47].value)),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"font"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#font"},(0,n.tZ)("span",{className:"icon icon-link"})),"Font"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[50].value),(0,n.tZ)("th",null,e[51].value),(0,n.tZ)("th",null,e[52].value),(0,n.tZ)("th",null,e[53].value),(0,n.tZ)("th",null,e[54].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null,e[64].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[65].value),e[66].value,(0,n.tZ)("code",null,e[67].value),e[68].value,(0,n.tZ)("code",null,e[69].value),e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,e[73].value),(0,n.tZ)("td",null,e[74].value),(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[78].value),e[79].value,(0,n.tZ)("code",null,e[80].value),e[81].value,(0,n.tZ)("code",null,e[82].value),e[83].value,(0,n.tZ)("code",null,e[84].value)),(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"handle-abnormal-image-watermarks"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#handle-abnormal-image-watermarks"},(0,n.tZ)("span",{className:"icon icon-link"})),"Handle abnormal image watermarks"),(0,n.tZ)("p",null,e[86].value,(0,n.tZ)("code",null,e[87].value),e[88].value),(0,n.tZ)(i.Z,{lang:"typescript"},e[89].value))))}a.default=u}}]);
