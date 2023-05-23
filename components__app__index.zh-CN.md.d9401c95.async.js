"use strict";(self.webpackChunkmanyid=self.webpackChunkmanyid||[]).push([[8288],{413111:function(s,u,t){t.r(u);var m=t(502143),c=t(968521),E=t(659378),p=t(631007),_=t(374912),a=t(828089),r=t(902068),Z=t(574399),v=t(863942),h=t(316073),D=t(24628),P=t(719260),M=t(956140),C=t(833531),x=t(905388),g=t(626643),O=t(606965),A=t(249706),f=t(795127),I=t(116846),y=t(73024),i=t(606641),o=t(667294),n=t(370917);function l(){var d=(0,i.eL)(),e=d.texts;return(0,n.tZ)(i.dY,null,(0,n.tZ)(o.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value,(0,n.tZ)("code",null,e[2].value),e[3].value,(0,n.tZ)("code",null,e[4].value),e[5].value,(0,n.tZ)("code",null,e[6].value),e[7].value,(0,n.tZ)("code",null,e[8].value),e[9].value),(0,n.tZ)("li",null,e[10].value,(0,n.tZ)("code",null,e[11].value),e[12].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(i.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'manyid';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Manyi Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>\u83B7\u53D6 <code>message</code>, <code>notification</code>, <code>modal</code> \u9759\u6001\u65B9\u6CD5\u3002</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"\u5982\u4F55\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),(0,n.tZ)("h3",{id:"\u57FA\u7840\u7528\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),(0,n.tZ)("p",null,e[13].value,(0,n.tZ)("code",null,e[14].value),e[15].value),(0,n.tZ)(_.Z,{lang:"tsx"},e[16].value),(0,n.tZ)("p",null,e[17].value),(0,n.tZ)("h3",{id:"\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E0E-configprovider-\u5148\u540E\u987A\u5E8F"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E0E ConfigProvider \u5148\u540E\u987A\u5E8F"),(0,n.tZ)("p",null,e[18].value,(0,n.tZ)("code",null,e[19].value),e[20].value),(0,n.tZ)(_.Z,{lang:"tsx"},e[21].value),(0,n.tZ)("h3",{id:"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u5D4C\u4F7F\u7528\u573A\u666F\u5982\u65E0\u5FC5\u8981\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5185\u5D4C\u4F7F\u7528\u573A\u666F\uFF08\u5982\u65E0\u5FC5\u8981\uFF0C\u5C3D\u91CF\u4E0D\u505A\u5D4C\u5957\uFF09"),(0,n.tZ)(_.Z,{lang:"tsx"},e[22].value),(0,n.tZ)("h3",{id:"\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u573A\u666Fredux-\u573A\u666F"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u573A\u666F\uFF08redux \u573A\u666F\uFF09"),(0,n.tZ)(_.Z,{lang:"tsx"},e[23].value),(0,n.tZ)(_.Z,{lang:"tsx"},e[24].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#app"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[25].value),(0,n.tZ)("th",null,e[26].value),(0,n.tZ)("th",null,e[27].value),(0,n.tZ)("th",null,e[28].value),(0,n.tZ)("th",null,e[29].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,(0,n.tZ)(i.rU,{to:"/components/message-cn/#messageconfig"},e[32].value)),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,(0,n.tZ)(i.rU,{to:"/components/notification-cn/#notificationconfig"},e[37].value)),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value)))))))}u.default=l}}]);
