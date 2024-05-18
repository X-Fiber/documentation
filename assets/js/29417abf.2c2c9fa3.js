"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8793],{41772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(85893),s=n(11151);const c={},o="\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438",i={id:"architecture/display-core/fn-elements/providers",title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438",description:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u043e\u043f\u0438\u0441\u0443\u044e\u0442\u044c \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0440\u044f\u0434\u0443 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456, \u044f\u043a\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u044f\u043a \u0432 \u0441\u0430\u043c\u043e\u043c\u0443 \u044f\u0434\u0440\u0456 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f, \u0442\u0430\u043a \u0456 \u043c\u043e\u0436\u0443\u0442\u044c",source:"@site/docs/architecture/display-core/fn-elements/providers.md",sourceDirName:"architecture/display-core/fn-elements",slug:"/architecture/display-core/fn-elements/providers",permalink:"/docs/architecture/display-core/fn-elements/providers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/display-core/fn-elements/providers.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureId",previous:{title:"\u0421\u0435\u0440\u0432\u0456\u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457",permalink:"/docs/architecture/display-core/fn-elements/services/auth"},next:{title:"\u0406\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457",permalink:"/docs/architecture/display-core/fn-elements/integrations"}},a={},d=[];function u(e){const t={admonition:"admonition",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438",children:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u043e\u043f\u0438\u0441\u0443\u044e\u0442\u044c \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0440\u044f\u0434\u0443 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456, \u044f\u043a\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u044f\u043a \u0432 \u0441\u0430\u043c\u043e\u043c\u0443 \u044f\u0434\u0440\u0456 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f, \u0442\u0430\u043a \u0456 \u043c\u043e\u0436\u0443\u0442\u044c\n\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u043f\u0440\u0438 \u043e\u043f\u0438\u0441\u0456 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u0412\u043e\u043d\u0438 \u043d\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044e\u0442\u044c \u0441\u0442\u0430\u043d, \u0430 \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u043f\u0435\u0440\u0435\u0434\n\u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f\u043c \u0439\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0443, \u043f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u0437\u043d\u0438\u0449\u0443\u0454\u0442\u044c\u0441\u044f, \u043e\u0447\u0438\u0449\u0443\u044e\u0447\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0443 \u043f\u0430\u043c\u02bc\u044f\u0442\u044c \u0432\u0456\u0434 \u0446\u044c\u043e\u0433\u043e \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430."})}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"\u041e\u043f\u0438\u0441 \u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0438, \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0442\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0457\u0445 \u043f\u0435\u0440\u0435\u043b\u0456\u043a\u0443 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0456\u0439 \u0440\u043e\u0437\u0440\u043e\u0431\u0446\u0456."})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},c=r.createContext(s);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);