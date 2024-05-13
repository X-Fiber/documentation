"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4904],{97158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(85893),c=n(11151),s=n(52991);const i={},o="\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438",l={id:"architecture/compute-core/fn-elements",title:"\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438",description:"\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u043d\u0430\u0431\u0456\u0440 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 \u0442\u0430 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438, \u0430 \u0442\u0430\u043a\u043e\u0436",source:"@site/docs/architecture/compute-core/fn-elements.mdx",sourceDirName:"architecture/compute-core",slug:"/architecture/compute-core/fn-elements",permalink:"/docs/architecture/compute-core/fn-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/compute-core/fn-elements.mdx",tags:[],version:"current",frontMatter:{},sidebar:"architectureId",previous:{title:"\u0417\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0456",permalink:"/docs/architecture/compute-core/connectors"},next:{title:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u0438",permalink:"/docs/architecture/compute-core/func-elements/adapters"}},a={},d=[];function u(e){const t={admonition:"admonition",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456-\u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438"}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u043d\u0430\u0431\u0456\u0440 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432 \u0442\u0430 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438, \u0430 \u0442\u0430\u043a\u043e\u0436\n\u043e\u043f\u0438\u0441\u0443\u044e\u0442\u044c \u0440\u043e\u0431\u043e\u0442\u0443 \u0441\u0430\u043c\u043e\u0433\u043e \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c."}),(0,r.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u0456 \u043f\u043e\u0434\u0456\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u043d\u0430 3 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f - \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0439, \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0439 \u0442\u0430 \u0437\u043c\u0456\u0448\u0430\u043d\u0438\u0439. \u0412\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\n\u0432\u0438\u043a\u043e\u043d\u0443\u044e\u0442\u044c \u0440\u043e\u043b\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432, \u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u0437\u0430\u043f\u0443\u0441\u043a \u0444\u0430\u0431\u0440\u0438\u043a \u0456\u043d\u0448\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0456\u0432, \u043f\u0440\u043e\u0441\u043b\u0443\u0445\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0442\u043e\u0449\u043e.\n\u0412\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456 \u0440\u043e\u0437\u0448\u0438\u0440\u044e\u044e\u0442\u044c \u0442\u0430 \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u043f\u043e \u0440\u043e\u0431\u043e\u0442\u0456 \u0437 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438. \u0417\u043c\u0456\u0448\u0430\u043d\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u044f\u043a\n\u0432 \u0441\u0430\u043c\u043e\u043c\u0443 \u044f\u0434\u0440\u0456 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c, \u0442\u0430\u043a \u0456 \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438."})]}),"\n",(0,r.jsx)(t.p,{children:"\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u0441\u043a\u043b\u0430\u0434\u0430\u044e\u0442\u044c:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u0421\u0435\u0440\u0432\u0456\u0441\u0438"}),": \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0456 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0438 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f, \u0440\u043e\u0431\u043e\u0442\u0430 \u0437 \u0441\u0435\u0441\u0456\u044f\u043c\u0438 \u0442\u043e\u0449\u043e."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438"}),": \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u044e\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043e\u043f\u0438\u0441 \u043c\u0435\u0442\u043e\u0434\u0456\u0432, \u044f\u043a\u0456 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u044e\u0442\u044c \u0441\u0442\u0430\u043d\u0443 - \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u044c, \u043e\u0431\u0440\u043e\u0431\u043a\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0442\u043e\u0449\u043e."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u0406\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457"}),": \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u044f \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f \u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0448\u0438\u0440\u043e\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043b\u0456\u043a\u0443 \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0434\u043b\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0456\u043c\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u043c\u0438 \u0442\u0430 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u043c\u0438 \u0440\u0456\u0448\u0435\u043d\u043d\u044f\u043c\u0438."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u0422\u0443\u043d\u0435\u043b\u0456"}),": \u0441\u0442\u0432\u043e\u0440\u044e\u044e\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u043f\u043e \u0440\u043e\u0431\u043e\u0442\u0456 \u0437 \u0437\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0430\u043c\u0438."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438"}),": \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0443\u044e\u0442\u044c \u0442\u0430 \u043d\u0430\u043b\u0430\u0448\u0442\u043e\u0432\u0443\u044e\u0442\u044c \u0440\u043e\u0431\u043e\u0442\u0443 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0439 \u0442\u0430 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457"}),": \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457 \u0442\u0430 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438, \u044f\u043a\u0456 \u043f\u0435\u0440\u0435\u0440\u043e\u0441\u043b\u0438 \u0432 \u0433\u0440\u0443\u043f\u0443 \u0440\u0456\u0448\u0435\u043d\u044c \u043e\u0434\u043d\u0456\u0454\u0457 \u0456 \u0442\u0456\u0454\u0457 \u0436 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0441\u0442\u0430\u044e\u0442\u044c \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044f\u043c\u0438 \u0437 \u043f\u043e\u0441\u043b\u0456\u0434\u0443\u044e\u0447\u043e\u044e \u0457\u0445 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0454\u044e \u0437\u0430 \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0444\u0430\u0431\u0440\u0438\u043a."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u0438"}),": \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u044e\u0442\u044c \u043e\u0431\u0440\u043e\u0431\u043a\u0443 \u0437\u0430\u043f\u0438\u0442\u0456\u0432, \u0432\u0456\u0434\u043e\u043a\u0440\u0435\u043c\u043b\u044e\u044e\u0447\u0438 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0456\u0432 \u0432\u0456\u0434 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u0414\u0435\u0442\u0430\u043b\u0456 \u0437\u043e\u043d\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456, \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0438 \u0440\u043e\u0431\u043e\u0442\u0438 \u0442\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043a\u043e\u0436\u043d\u043e\u0457 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u043c\u043e\u0434\u0443\u043b\u0456\u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0456 \u0432 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u043c\u0443 \u0440\u043e\u0437\u0434\u0456\u043b\u0456:"}),"\n","\n","\n",(0,r.jsx)(s.Z,{items:[{type:"link",href:"func-elements/adapters",label:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u0438",description:"\ud83d\udcda \u041e\u0431\u0440\u043e\u0431\u043a\u0430 http \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0442\u0430 ws \u043f\u043e\u0434\u0456\u0439"},{type:"link",href:"func-elements/services",label:"\u0421\u0435\u0440\u0432\u0456\u0441\u0438",description:"\ud83d\udcda \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456."},{type:"link",href:"func-elements/providers",label:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438",description:"\ud83d\udcda \u041d\u0430\u0434\u0430\u043d\u043d\u044f \u0433\u043e\u0442\u043e\u0432\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 "},{type:"link",href:"func-elements/tunnels",label:"\u0422\u0443\u043d\u0435\u043b\u0456",description:"\ud83d\udcda \u041c\u043e\u0434\u0443\u043b\u0456 \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 \u0456\u043d\u0448\u0438\u043c\u0438 \u0437\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0430\u043c\u0438 "},{type:"link",href:"func-elements/factories",label:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438",description:"\ud83d\udcda \u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0439"},{type:"link",href:"func-elements/strategies",label:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457",description:"\ud83d\udcda \u0420\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f \u0433\u0440\u0443\u043f\u0438 \u0440\u0456\u0448\u0435\u043d\u044c, \u044f\u043a\u0456 \u0432\u0438\u0440\u0456\u0448\u0443\u044e\u0442\u044c \u043e\u0434\u043d\u0443 \u0437\u0430\u0434\u0430\u0447\u0443"}]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>j});n(67294);var r=n(90512),c=n(53438),s=n(33692),i=n(13919),o=n(95999),l=n(92503);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",a.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:c,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",a.cardTitle),title:c,children:[n," ",c]}),s&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",a.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,c.LM)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,c.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,c.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const c={},s=r.createContext(c);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);