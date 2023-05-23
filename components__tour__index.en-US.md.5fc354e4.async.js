"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[6176],{263005:function(s,l,e){e.r(l);var _=e(502143),c=e(968521),p=e(659378),Z=e(631007),v=e(374912),u=e(828089),m=e(902068),f=e(574399),h=e(863942),E=e(316073),g=e(24628),O=e(719260),P=e(956140),y=e(833531),a=e(905388),B=e(626643),x=e(606965),D=e(249706),T=e(795127),C=e(116846),M=e(73024),o=e(606641),d=e(667294),t=e(370917);function r(){var i=(0,o.eL)(),n=i.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(d.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value,(0,t.tZ)("code",null,n[1].value),n[2].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,n[3].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(a.Z,{items:[{demo:{id:"components-tour-demo-basic"},previewerProps:{title:"Basic",filename:"components/tour/demo/basic.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'manyid';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tour-demo-non-modal"},previewerProps:{title:"Non-modal",filename:"components/tour/demo/non-modal.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'manyid';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>Use <code>mask={false}</code> to make Tour non-modal. At the meantime it is recommended to use with <code>type="primary"</code> to emphasize the guide itself.</p>'}},{demo:{id:"components-tour-demo-placement"},previewerProps:{title:"Placement",filename:"components/tour/demo/placement.tsx",jsx:`import { Button, Tour } from 'manyid';
import { useRef, useState } from 'react';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>Change the placement of the guide relative to the target, there are 12 placements available. When <code>target={null}</code> the guide will show in the center.</p>"}},{demo:{id:"components-tour-demo-mask"},previewerProps:{title:"custom mask style",filename:"components/tour/demo/mask.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'manyid';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
      mask: {
        style: {
          boxShadow: 'inset 0 0 15px #fff',
        },
        color: 'rgba(40, 0, 255, .4)',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
      mask: false,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          color: 'rgba(80, 255, 255, .4)',
        }}
      />
    </>
  );
};
export default App;
`,description:"<p>custom mask style.</p>"}},{demo:{id:"components-tour-demo-indicator"},previewerProps:{title:"custom indicator",filename:"components/tour/demo/indicator.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'manyid';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Custom indicator.</p>"}},{demo:{id:"components-tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",jsx:`import { Tour } from 'manyid';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"tour"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tour"},(0,t.tZ)("span",{className:"icon icon-link"})),"Tour"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[11].value),n[12].value,(0,t.tZ)("code",null,n[13].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[14].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[17].value),n[18].value,(0,t.tZ)("code",null,n[19].value),n[20].value,(0,t.tZ)("code",null,n[21].value),n[22].value,(0,t.tZ)("code",null,n[23].value),n[24].value,(0,t.tZ)("code",null,n[25].value),n[26].value,(0,t.tZ)("code",null,n[27].value),n[28].value,(0,t.tZ)("code",null,n[29].value),n[30].value,(0,t.tZ)("code",null,n[31].value),n[32].value,(0,t.tZ)("code",null,n[33].value),n[34].value,(0,t.tZ)("code",null,n[35].value),n[36].value,(0,t.tZ)("code",null,n[37].value),n[38].value,(0,t.tZ)("code",null,n[39].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[40].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[43].value)),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[47].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[48].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[51].value),n[52].value,(0,t.tZ)("code",null,n[53].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[54].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[57].value)),(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[61].value)),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[65].value)),(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[69].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[70].value)),(0,t.tZ)("td",null,n[71].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[74].value)),(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null,n[76].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,n[78].value),(0,t.tZ)("td",null,n[79].value),(0,t.tZ)("td",null,n[80].value),(0,t.tZ)("td",null,n[81].value)))),(0,t.tZ)("h3",{id:"tourstep"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep"},(0,t.tZ)("span",{className:"icon icon-link"})),"TourStep"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[82].value),(0,t.tZ)("th",null,n[83].value),(0,t.tZ)("th",null,n[84].value),(0,t.tZ)("th",null,n[85].value),(0,t.tZ)("th",null,n[86].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[87].value),(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[89].value),n[90].value,(0,t.tZ)("code",null,n[91].value)),(0,t.tZ)("td",null,n[92].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[93].value),(0,t.tZ)("td",null,n[94].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[95].value),n[96].value,(0,t.tZ)("code",null,n[97].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[98].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[99].value),(0,t.tZ)("td",null,n[100].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[101].value)),(0,t.tZ)("td",null,n[102].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[103].value),(0,t.tZ)("td",null,n[104].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[105].value)),(0,t.tZ)("td",null,n[106].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[107].value),(0,t.tZ)("td",null,n[108].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[109].value)),(0,t.tZ)("td",null,n[110].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[111].value),(0,t.tZ)("td",null,n[112].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[113].value),n[114].value,(0,t.tZ)("code",null,n[115].value),n[116].value,(0,t.tZ)("code",null,n[117].value),n[118].value,(0,t.tZ)("code",null,n[119].value),n[120].value,(0,t.tZ)("code",null,n[121].value),n[122].value,(0,t.tZ)("code",null,n[123].value),n[124].value,(0,t.tZ)("code",null,n[125].value),n[126].value,(0,t.tZ)("code",null,n[127].value),n[128].value,(0,t.tZ)("code",null,n[129].value),n[130].value,(0,t.tZ)("code",null,n[131].value),n[132].value,(0,t.tZ)("code",null,n[133].value),n[134].value,(0,t.tZ)("code",null,n[135].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[136].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[137].value),(0,t.tZ)("td",null,n[138].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[139].value)),(0,t.tZ)("td",null,n[140].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[141].value),(0,t.tZ)("td",null,n[142].value,(0,t.tZ)("code",null,n[143].value),n[144].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[145].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[146].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[147].value),(0,t.tZ)("td",null,n[148].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[149].value),n[150].value,(0,t.tZ)("code",null,n[151].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[152].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[153].value),(0,t.tZ)("td",null,n[154].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[155].value)),(0,t.tZ)("td",null,n[156].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[157].value),(0,t.tZ)("td",null,n[158].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[159].value)),(0,t.tZ)("td",null,n[160].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[161].value),(0,t.tZ)("td",null,n[162].value,(0,t.tZ)("code",null,n[163].value),n[164].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[165].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[166].value)),(0,t.tZ)("td",null,n[167].value)))))))}l.default=r}}]);
