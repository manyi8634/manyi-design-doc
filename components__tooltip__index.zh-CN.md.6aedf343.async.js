"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[3451],{663729:function(r,o,e){e.r(o);var m=e(502143),_=e(968521),s=e(659378),c=e(631007),v=e(374912),i=e(828089),Z=e(902068),T=e(574399),f=e(863942),B=e(316073),h=e(24628),E=e(719260),x=e(956140),g=e(833531),u=e(905388),P=e(626643),y=e(606965),A=e(249706),D=e(795127),w=e(116846),b=e(73024),l=e(606641),a=e(667294),t=e(370917);function d(){var p=(0,l.eL)(),n=p.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("p",null,n[1].value),(0,t.tZ)("p",null,n[2].value,(0,t.tZ)("code",null,n[3].value),n[4].value,(0,t.tZ)("code",null,n[5].value),n[6].value),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(u.Z,{items:[{demo:{id:"components-tooltip-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tooltip/demo/basic.tsx",jsx:`import { Tooltip } from 'manyid';
const App = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-tooltip-demo-placement"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/tooltip/demo/placement.tsx",jsx:`import { Button, Tooltip } from 'manyid';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const App = () => (
  <div>
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left',
      }}
    >
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24,
      }}
    >
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
);
export default App;
`,description:"<p>\u4F4D\u7F6E\u6709 12 \u4E2A\u65B9\u5411\u3002</p>",style:`#components-tooltip-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-tooltip-demo-placement .ant-btn {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"components-tooltip-demo-arrow"},previewerProps:{title:"\u7BAD\u5934\u5C55\u793A",filename:"components/tooltip/demo/arrow.tsx",jsx:`import { Button, Divider, Segmented, Tooltip } from 'manyid';
import { useMemo, useState } from 'react';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const gap = 8;
const btnProps = {
  style: {
    width: buttonWidth,
  },
};
const App = () => {
  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <div className="demo">
      <Segmented
        value={arrow}
        options={options}
        onChange={(val) => {
          setArrow(val);
        }}
      />
      <Divider orientation="center">Content</Divider>
      <div
        style={{
          marginLeft: buttonWidth,
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>TR</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          float: 'left',
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text} arrow={mergedArrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + 24,
          display: 'flex',
          flexDirection: 'column',
          rowGap: gap,
        }}
      >
        <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text} arrow={mergedArrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          display: 'flex',
          flexWrap: 'nowrap',
          columnGap: gap,
        }}
      >
        <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
          <Button {...btnProps}>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u652F\u6301\u663E\u793A\u3001\u9690\u85CF\u4EE5\u53CA\u5C06\u7BAD\u5934\u4FDD\u6301\u5C45\u4E2D\u5B9A\u4F4D\u3002</p>"}},{demo:{id:"components-tooltip-demo-shift"},previewerProps:{iframe:"200",title:"\u8D34\u8FB9\u504F\u79FB",filename:"components/tooltip/demo/shift.tsx",jsx:`import { Button, Tooltip } from 'manyid';
import React from 'react';
const App = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div>
      <div
        style={{
          width: '300vw',
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip title="Thanks for using manyid. Have a nice day!" open>
          <Button>Scroll The Window</Button>
        </Tooltip>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u5F53 Tooltip \u8D34\u8FB9\u65F6\uFF0C\u81EA\u52A8\u504F\u79FB\u5E76\u4E14\u8C03\u6574\u7BAD\u5934\u4F4D\u7F6E\u3002\u5F53\u8D85\u51FA\u8FC7\u591A\u65F6\uFF0C\u5219\u4E00\u540C\u6EDA\u51FA\u5C4F\u5E55\u3002</p>"}},{demo:{id:"components-tooltip-demo-auto-adjust-overflow"},previewerProps:{debug:!0,title:"\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E",filename:"components/tooltip/demo/auto-adjust-overflow.tsx",jsx:`import { Button, Tooltip, Typography } from 'manyid';
import React from 'react';
const Block = React.forwardRef((props, ref) => (
  <div
    style={{
      overflow: 'auto',
      position: 'relative',
      padding: '24px',
      border: '1px solid #e9e9e9',
    }}
    ref={ref}
  >
    <div
      style={{
        width: '200%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 16,
      }}
    >
      <Tooltip {...props} placement="left" title="Prompt Text">
        <Button>Adjust automatically / \u81EA\u52A8\u8C03\u6574</Button>
      </Tooltip>
      <Tooltip {...props} placement="left" title="Prompt Text" autoAdjustOverflow={false}>
        <Button>Ignore / \u4E0D\u5904\u7406</Button>
      </Tooltip>
    </div>
  </div>
));
const App = () => {
  const containerRef1 = React.useRef(null);
  const containerRef2 = React.useRef(null);
  React.useEffect(() => {
    containerRef1.current.scrollLeft = containerRef1.current.clientWidth * 0.5;
    containerRef2.current.scrollLeft = containerRef2.current.clientWidth * 0.5;
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 16,
      }}
    >
      <Typography.Title level={5}>With \`getPopupContainer\`</Typography.Title>
      <Block ref={containerRef1} getPopupContainer={(trigger) => trigger.parentElement} />

      <Typography.Title level={5}>Without \`getPopupContainer\`</Typography.Title>
      <Block ref={containerRef2} />
    </div>
  );
};
export default App;
`,description:"<p>\u6C14\u6CE1\u6846\u4E0D\u53EF\u89C1\u65F6\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-tooltip-demo-destroy-tooltip-on-hide"},previewerProps:{debug:!0,title:"\u9690\u85CF\u540E\u9500\u6BC1",filename:"components/tooltip/demo/destroy-tooltip-on-hide.tsx",jsx:`import { Tooltip } from 'manyid';
const App = () => (
  <Tooltip destroyTooltipOnHide title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>destroyTooltipOnHide</code> \u63A7\u5236\u63D0\u793A\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1 dom \u8282\u70B9\u3002</p>"}},{demo:{id:"components-tooltip-demo-colorful"},previewerProps:{title:"\u591A\u5F69\u6587\u5B57\u63D0\u793A",filename:"components/tooltip/demo/colorful.tsx",jsx:`import { Button, Divider, Space, Tooltip } from 'manyid';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
const App = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);
export default App;
`,description:"<p>\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u6587\u5B57\u63D0\u793A\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-tooltip-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tooltip/demo/render-panel.tsx",jsx:`import { Tooltip } from 'manyid';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTooltip } = Tooltip;
const App = () => (
  <>
    <InternalTooltip title="Hello, Pink Pure Panel!" color="pink" />
    <InternalTooltip title="Hello, Customize Color Pure Panel!" color="#f50" />
    <InternalTooltip
      title="Hello, Pure Panel!"
      placement="bottomLeft"
      style={{
        width: 200,
      }}
    />
  </>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-tooltip-demo-debug"},previewerProps:{debug:!0,title:"Debug",filename:"components/tooltip/demo/debug.tsx",jsx:`import { Button, Tooltip } from 'manyid';
const App = () => (
  <Tooltip
    open
    title="Thanks for using manyid. Have a nice day!"
    arrow={{
      pointAtCenter: true,
    }}
    placement="topLeft"
  >
    <Button>Point at center</Button>
  </Tooltip>
);
export default App;
`,description:"<p>Debug \u7528\u4F8B\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value),(0,t.tZ)("th",null,n[10].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value)))),(0,t.tZ)("h3",{id:"\u5171\u540C\u7684-api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684-api"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5171\u540C\u7684 API"),(0,t.tZ)("p",null,n[15].value),(0,t.tZ)(i.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[16].value),(0,t.tZ)("th",null,n[17].value),(0,t.tZ)("th",null,n[18].value),(0,t.tZ)("th",null,n[19].value),(0,t.tZ)("th",null,n[20].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value,(0,t.tZ)("a",{href:"https://github.com/react-component/tooltip"},n[23].value)),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[53].value),(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null,n[70].value),(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value,(0,t.tZ)("code",null,n[75].value),n[76].value,(0,t.tZ)("code",null,n[77].value),n[78].value,(0,t.tZ)("code",null,n[79].value),n[80].value,(0,t.tZ)("code",null,n[81].value),n[82].value,(0,t.tZ)("code",null,n[83].value),n[84].value,(0,t.tZ)("code",null,n[85].value),n[86].value,(0,t.tZ)("code",null,n[87].value),n[88].value,(0,t.tZ)("code",null,n[89].value),n[90].value,(0,t.tZ)("code",null,n[91].value),n[92].value,(0,t.tZ)("code",null,n[93].value),n[94].value,(0,t.tZ)("code",null,n[95].value),n[96].value,(0,t.tZ)("code",null,n[97].value)),(0,t.tZ)("td",null,n[98].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[99].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[100].value),(0,t.tZ)("td",null,n[101].value,(0,t.tZ)("code",null,n[102].value),n[103].value,(0,t.tZ)("code",null,n[104].value),n[105].value,(0,t.tZ)("code",null,n[106].value),n[107].value,(0,t.tZ)("code",null,n[108].value),n[109].value),(0,t.tZ)("td",null,n[110].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[111].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[112].value),(0,t.tZ)("td",null,n[113].value,(0,t.tZ)("code",null,n[114].value),n[115].value,(0,t.tZ)(l.rU,{to:"/docs/react/faq#%E5%BC%B9%E5%B1%82%E7%B1%BB%E7%BB%84%E4%BB%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%9F%E4%B8%80%E8%87%B3-open-%E5%B1%9E%E6%80%A7"},n[116].value),n[117].value),(0,t.tZ)("td",null,n[118].value),(0,t.tZ)("td",null,n[119].value),(0,t.tZ)("td",null,n[120].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[121].value),(0,t.tZ)("td",null,n[122].value,(0,t.tZ)("code",null,n[123].value)),(0,t.tZ)("td",null,n[124].value),(0,t.tZ)("td",null,n[125].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[126].value),(0,t.tZ)("td",null,n[127].value),(0,t.tZ)("td",null,n[128].value),(0,t.tZ)("td",null,n[129].value),(0,t.tZ)("td",null,n[130].value)))),(0,t.tZ)("h2",{id:"\u6CE8\u610F"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6CE8\u610F"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u6CE8\u610F"),(0,t.tZ)("p",null,n[131].value,(0,t.tZ)("code",null,n[132].value),n[133].value,(0,t.tZ)("code",null,n[134].value),n[135].value,(0,t.tZ)("code",null,n[136].value),n[137].value,(0,t.tZ)("code",null,n[138].value),n[139].value,(0,t.tZ)("code",null,n[140].value),n[141].value))))}o.default=d}}]);
