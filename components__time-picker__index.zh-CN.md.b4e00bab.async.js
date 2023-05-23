"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[1176],{631126:function(s,d,l){l.r(d);var p=l(502143),c=l(968521),_=l(659378),Z=l(631007),u=l(374912),a=l(828089),v=l(902068),P=l(574399),f=l(863942),h=l(316073),E=l(24628),x=l(719260),g=l(956140),k=l(833531),i=l(905388),T=l(626643),y=l(606965),j=l(249706),C=l(795127),A=l(116846),O=l(73024),n=l(606641),o=l(667294),e=l(370917);function r(){var m=(0,n.eL)(),t=m.texts;return(0,e.tZ)(n.dY,null,(0,e.tZ)(o.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("p",null,t[1].value),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-time-picker-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/time-picker/demo/basic.tsx",jsx:`import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'manyid';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
);
export default App;
`,description:"<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>"}},{demo:{id:"components-time-picker-demo-value"},previewerProps:{title:"\u53D7\u63A7\u7EC4\u4EF6",filename:"components/time-picker/demo/value.tsx",jsx:`import { TimePicker } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};
export default App;
`,description:"<p>value \u548C onChange \u9700\u8981\u914D\u5408\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-time-picker-demo-size"},previewerProps:{title:"\u4E09\u79CD\u5927\u5C0F",filename:"components/time-picker/demo/size.tsx",jsx:`import dayjs from 'dayjs';
import { Space, TimePicker } from 'manyid';
const App = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
  </Space>
);
export default App;
`,description:"<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u5927\u7684\u7528\u5728\u8868\u5355\u4E2D\uFF0C\u4E2D\u7684\u4E3A\u9ED8\u8BA4\u3002</p>"}},{demo:{id:"components-time-picker-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/time-picker/demo/disabled.tsx",jsx:`import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'manyid';
dayjs.extend(customParseFormat);
const App = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
`,description:"<p>\u7981\u7528\u65F6\u95F4\u9009\u62E9\u3002</p>"}},{demo:{id:"components-time-picker-demo-hide-column"},previewerProps:{title:"\u9009\u62E9\u65F6\u5206",filename:"components/time-picker/demo/hide-column.tsx",jsx:`import dayjs from 'dayjs';
import { TimePicker } from 'manyid';
const format = 'HH:mm';
const App = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default App;
`,description:"<p>TimePicker \u6D6E\u5C42\u4E2D\u7684\u5217\u4F1A\u968F\u7740 <code>format</code> \u53D8\u5316\uFF0C\u5F53\u7565\u53BB <code>format</code> \u4E2D\u7684\u67D0\u90E8\u5206\u65F6\uFF0C\u6D6E\u5C42\u4E2D\u5BF9\u5E94\u7684\u5217\u4E5F\u4F1A\u6D88\u5931\u3002</p>"}},{demo:{id:"components-time-picker-demo-interval-options"},previewerProps:{title:"\u6B65\u957F\u9009\u9879",filename:"components/time-picker/demo/interval-options.tsx",jsx:`import { TimePicker } from 'manyid';
const App = () => <TimePicker minuteStep={15} secondStep={10} hourStep={1} />;
export default App;
`,description:"<p>\u53EF\u4EE5\u4F7F\u7528 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> \u6309\u6B65\u957F\u5C55\u793A\u53EF\u9009\u7684\u65F6\u5206\u79D2\u3002</p>"}},{demo:{id:"components-time-picker-demo-addon"},previewerProps:{title:"\u9644\u52A0\u5185\u5BB9",filename:"components/time-picker/demo/addon.tsx",jsx:`import { Button, TimePicker } from 'manyid';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default App;
`,description:"<p>\u5728 TimePicker \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-time-picker-demo-12hours"},previewerProps:{title:"12 \u5C0F\u65F6\u5236",filename:"components/time-picker/demo/12hours.tsx",jsx:`import { Space, TimePicker } from 'manyid';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </Space>
);
export default App;
`,description:"<p>12 \u5C0F\u65F6\u5236\u7684\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u7684 format \u4E3A <code>h:mm:ss a</code>\u3002</p>"}},{demo:{id:"components-time-picker-demo-colored-popup"},previewerProps:{debug:!0,title:"\u8272\u4ED8\u304D\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7",filename:"components/time-picker/demo/colored-popup.tsx",jsx:`import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'manyid';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
export default App;
`,description:"<p>\u5C06\u81EA\u5B9A\u4E49 class \u4F20\u7ED9 <code>TimePicker</code> \u5F39\u6846\u3002</p>"}},{demo:{id:"components-time-picker-demo-range-picker"},previewerProps:{title:"\u8303\u56F4\u9009\u62E9\u5668",filename:"components/time-picker/demo/range-picker.tsx",jsx:`import { TimePicker } from 'manyid';
const App = () => <TimePicker.RangePicker />;
export default App;
`,description:"<p>\u901A\u8FC7 <code>TimePicker.RangePicker</code> \u4F7F\u7528\u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668\u3002</p>"}},{demo:{id:"components-time-picker-demo-bordered"},previewerProps:{title:"\u65E0\u8FB9\u6846",filename:"components/time-picker/demo/bordered.tsx",jsx:`import { TimePicker } from 'manyid';
const { RangePicker } = TimePicker;
const App = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);
export default App;
`,description:"<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-time-picker-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/time-picker/demo/status.tsx",jsx:`import { Space, TimePicker } from 'manyid';
const App = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A TimePicker \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-time-picker-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/time-picker/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'manyid';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
  />
);
export default App;
`,description:"<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>"}},{demo:{id:"components-time-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/time-picker/demo/render-panel.tsx",jsx:`import { TimePicker } from 'manyid';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;
const App = () => <InternalTimePicker />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("hr",null),(0,e.tZ)(u.Z,{lang:"jsx"},t[2].value),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[3].value),(0,e.tZ)("th",null,t[4].value),(0,e.tZ)("th",null,t[5].value),(0,e.tZ)("th",null,t[6].value),(0,e.tZ)("th",null,t[7].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[8].value),(0,e.tZ)("td",null,t[9].value),(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[12].value),(0,e.tZ)("td",null,t[13].value),(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value),(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[24].value),(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value),(0,e.tZ)("td",null,t[27].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[28].value),(0,e.tZ)("td",null,t[29].value),(0,e.tZ)("td",null,t[30].value),(0,e.tZ)("td",null,t[31].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[32].value),(0,e.tZ)("td",null,t[33].value),(0,e.tZ)("td",null,(0,e.tZ)("a",{href:"http://day.js.org/"},t[34].value)),(0,e.tZ)("td",null,t[35].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value),(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[40].value),(0,e.tZ)("td",null,t[41].value),(0,e.tZ)("td",null,(0,e.tZ)(n.rU,{to:"#disabledtime"},t[42].value)),(0,e.tZ)("td",null,t[43].value),(0,e.tZ)("td",null,t[44].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[45].value),(0,e.tZ)("td",null,t[46].value),(0,e.tZ)("td",null,t[47].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[48].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[49].value),(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value),(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[53].value),(0,e.tZ)("td",null,t[54].value),(0,e.tZ)("td",null,t[55].value),(0,e.tZ)("td",null,t[56].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[57].value),(0,e.tZ)("td",null,t[58].value),(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null,t[60].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[61].value),(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null,t[63].value),(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[65].value),(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null,t[67].value),(0,e.tZ)("td",null,t[68].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[69].value),(0,e.tZ)("td",null,t[70].value),(0,e.tZ)("td",null,t[71].value),(0,e.tZ)("td",null,t[72].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[73].value),(0,e.tZ)("td",null,t[74].value),(0,e.tZ)("td",null,t[75].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[76].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[77].value),(0,e.tZ)("td",null,t[78].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[79].value),t[80].value,(0,e.tZ)("code",null,t[81].value),t[82].value,(0,e.tZ)("code",null,t[83].value),t[84].value,(0,e.tZ)("code",null,t[85].value)),(0,e.tZ)("td",null,t[86].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[87].value),(0,e.tZ)("td",null,t[88].value),(0,e.tZ)("td",null,t[89].value),(0,e.tZ)("td",null,t[90].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[91].value),(0,e.tZ)("td",null,t[92].value),(0,e.tZ)("td",null,t[93].value),(0,e.tZ)("td",null,t[94].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[95].value),(0,e.tZ)("td",null,t[96].value),(0,e.tZ)("td",null,t[97].value),(0,e.tZ)("td",null,t[98].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[99].value),(0,e.tZ)("td",null,t[100].value),(0,e.tZ)("td",null,t[101].value),(0,e.tZ)("td",null,t[102].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[103].value),(0,e.tZ)("td",null,t[104].value),(0,e.tZ)("td",null,t[105].value),(0,e.tZ)("td",null,t[106].value),(0,e.tZ)("td",null,t[107].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[108].value),(0,e.tZ)("td",null,t[109].value,(0,e.tZ)("code",null,t[110].value),t[111].value,(0,e.tZ)("code",null,t[112].value),t[113].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[114].value),t[115].value,(0,e.tZ)("code",null,t[116].value),t[117].value,(0,e.tZ)("code",null,t[118].value)),(0,e.tZ)("td",null,t[119].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[120].value),(0,e.tZ)("td",null,t[121].value),(0,e.tZ)("td",null,t[122].value),(0,e.tZ)("td",null,t[123].value),(0,e.tZ)("td",null,t[124].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[125].value),(0,e.tZ)("td",null,t[126].value),(0,e.tZ)("td",null,t[127].value),(0,e.tZ)("td",null,t[128].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[129].value),(0,e.tZ)("td",null,t[130].value,(0,e.tZ)("code",null,t[131].value),t[132].value,(0,e.tZ)("code",null,t[133].value)),(0,e.tZ)("td",null,t[134].value),(0,e.tZ)("td",null,t[135].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[136].value),(0,e.tZ)("td",null,t[137].value),(0,e.tZ)("td",null,(0,e.tZ)("a",{href:"http://day.js.org/"},t[138].value)),(0,e.tZ)("td",null,t[139].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[140].value),(0,e.tZ)("td",null,t[141].value),(0,e.tZ)("td",null,t[142].value),(0,e.tZ)("td",null,t[143].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[144].value),(0,e.tZ)("td",null,t[145].value),(0,e.tZ)("td",null,t[146].value),(0,e.tZ)("td",null,t[147].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h4",{id:"disabledtime"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#disabledtime"},(0,e.tZ)("span",{className:"icon icon-link"})),"DisabledTime"),(0,e.tZ)(u.Z,{lang:"typescript"},t[148].value),(0,e.tZ)("h2",{id:"\u65B9\u6CD5"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[149].value),(0,e.tZ)("th",null,t[150].value),(0,e.tZ)("th",null,t[151].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[152].value),(0,e.tZ)("td",null,t[153].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[154].value),(0,e.tZ)("td",null,t[155].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"rangepicker"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker"},(0,e.tZ)("span",{className:"icon icon-link"})),"RangePicker"),(0,e.tZ)("p",null,t[156].value,(0,e.tZ)(n.rU,{to:"/components/date-picker-cn#rangepicker"},t[157].value),t[158].value),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[159].value),(0,e.tZ)("th",null,t[160].value),(0,e.tZ)("th",null,t[161].value),(0,e.tZ)("th",null,t[162].value),(0,e.tZ)("th",null,t[163].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[164].value),(0,e.tZ)("td",null,t[165].value),(0,e.tZ)("td",null,(0,e.tZ)(n.rU,{to:"#rangedisabledtime"},t[166].value)),(0,e.tZ)("td",null,t[167].value),(0,e.tZ)("td",null,t[168].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[169].value),(0,e.tZ)("td",null,t[170].value),(0,e.tZ)("td",null,t[171].value),(0,e.tZ)("td",null,t[172].value),(0,e.tZ)("td",null,t[173].value)))),(0,e.tZ)("h3",{id:"rangedisabledtime"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rangedisabledtime"},(0,e.tZ)("span",{className:"icon icon-link"})),"RangeDisabledTime"),(0,e.tZ)(u.Z,{lang:"typescript"},t[174].value),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)(n.rU,{to:"/docs/react/use-custom-date-library#timepicker"},t[175].value))))))}d.default=r}}]);
