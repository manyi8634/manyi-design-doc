"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[8706],{414510:function(s,e,l){l.r(e);var r=l(502143),m=l(968521),c=l(659378),Z=l(631007),v=l(374912),u=l(828089),p=l(902068),E=l(574399),C=l(863942),h=l(316073),x=l(24628),P=l(719260),f=l(956140),D=l(833531),o=l(905388),O=l(626643),A=l(606965),M=l(249706),g=l(795127),R=l(116846),y=l(73024),a=l(606641),i=l(667294),t=l(370917);function d(){var _=(0,a.eL)(),n=_.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(o.Z,{items:[{demo:{id:"components-statistic-demo-basic"},previewerProps:{title:"Basic",filename:"components/statistic/demo/basic.tsx",jsx:`import { Button, Col, Row, Statistic } from 'manyid';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button
        style={{
          marginTop: 16,
        }}
        type="primary"
      >
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-statistic-demo-unit"},previewerProps:{title:"Unit",filename:"components/statistic/demo/unit.tsx",jsx:`import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'manyid';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
);
export default App;
`,description:"<p>Add unit through <code>prefix</code> and <code>suffix</code>.</p>"}},{demo:{id:"components-statistic-demo-animated"},previewerProps:{title:"Animated number",filename:"components/statistic/demo/animated.tsx",jsx:`import { Col, Row, Statistic } from 'manyid';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
    </Col>
  </Row>
);
export default App;
`,description:'<p>Animated number with <a href="https://www.npmjs.com/package/react-countup">react-countup</a>.</p>'}},{demo:{id:"components-statistic-demo-card"},previewerProps:{background:"grey",title:"In Card",filename:"components/statistic/demo/card.tsx",jsx:`import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'manyid';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default App;
`,description:"<p>Display statistic data in Card.</p>"}},{demo:{id:"components-statistic-demo-countdown"},previewerProps:{title:"Countdown",filename:"components/statistic/demo/countdown.tsx",jsx:`import { Col, Row, Statistic } from 'manyid';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const App = () => {
  const onFinish = () => {
    console.log('finished!');
  };
  const onChange = (val) => {
    if (val && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
      <Col span={12}>
        <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
      </Col>
      <Col
        span={24}
        style={{
          marginTop: 32,
        }}
      >
        <Countdown title="Day Level" value={deadline} format="D \u5929 H \u65F6 m \u5206 s \u79D2" />
      </Col>
      <Col span={12}>
        <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
      </Col>
    </Row>
  );
};
export default App;
`,description:"<p>Countdown component.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h4",{id:"statistic"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statistic"},(0,t.tZ)("span",{className:"icon icon-link"})),"Statistic"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[3].value),(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[8].value),(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[11].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[19].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value),(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h4",{id:"statisticcountdown"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statisticcountdown"},(0,t.tZ)("span",{className:"icon icon-link"})),"Statistic.Countdown"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[49].value),(0,t.tZ)("th",null,n[50].value),(0,t.tZ)("th",null,n[51].value),(0,t.tZ)("th",null,n[52].value),(0,t.tZ)("th",null,n[53].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value,(0,t.tZ)("a",{href:"https://day.js.org/"},n[56].value)),(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[58].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null,n[70].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,n[78].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[79].value),(0,t.tZ)("td",null,n[80].value),(0,t.tZ)("td",null,n[81].value),(0,t.tZ)("td",null,n[82].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[83].value),(0,t.tZ)("td",null,n[84].value),(0,t.tZ)("td",null,n[85].value),(0,t.tZ)("td",null,n[86].value),(0,t.tZ)("td",null,n[87].value)))))))}e.default=d}}]);
