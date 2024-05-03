"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8958],{64106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(85893),s=t(11151);const o={},c="\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u0438",i={id:"architecture/display-core/fn-elements/adapters",title:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u0438",description:"\u041e\u0431\u0440\u043e\u0431\u043a\u0430 http \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0442\u0430 ws \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u0441\u0438\u043b\u0430\u043c\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u044f\u0434\u0440\u0430 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f. \u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u0432",source:"@site/docs/architecture/display-core/fn-elements/adapters.md",sourceDirName:"architecture/display-core/fn-elements",slug:"/architecture/display-core/fn-elements/adapters",permalink:"/documentation/docs/architecture/display-core/fn-elements/adapters",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/display-core/fn-elements/adapters.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureId",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438",permalink:"/documentation/docs/architecture/display-core/fn-elements"},next:{title:"\u0421\u0435\u0440\u0432\u0456\u0441\u0438",permalink:"/documentation/docs/architecture/display-core/fn-elements/services"}},d={},a=[{value:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",level:2},{value:"<code>http</code> \u0430\u0434\u0430\u043f\u0442\u0435\u0440",id:"http-\u0430\u0434\u0430\u043f\u0442\u0435\u0440",level:3},{value:"<code>ws</code> \u0430\u0434\u0430\u043f\u0442\u0435\u0440",id:"ws-\u0430\u0434\u0430\u043f\u0442\u0435\u0440",level:3},{value:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f-1",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0438",children:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440\u0438"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u041e\u0431\u0440\u043e\u0431\u043a\u0430 ",(0,r.jsx)(n.code,{children:"http"})," \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0442\u0430 ",(0,r.jsx)(n.code,{children:"ws"})," \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u0441\u0438\u043b\u0430\u043c\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u044f\u0434\u0440\u0430 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f. \u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u0432\n\u0440\u0430\u043c\u043a\u0430\u0445 \u0436\u0438\u0442\u0442\u0454\u0432\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u0447\u0438 \u043f\u043e\u0434\u0456\u0457. \u0416\u0438\u0442\u0442\u0454\u0432\u0456 \u0446\u0438\u043a\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u044c \u0432 \u0441\u043e\u0431\u0456 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u0457 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443, \u0437\u0430\u043b\u0443\u0447\u0435\u043d\u043d\u044f \u0442\u0438\u043f\u0456\u0432\n\u043f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0456\u0432, \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f, \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443 \u0456 \u0442.\u0434."]})}),"\n",(0,r.jsx)(n.h2,{id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u044f\u0434\u0440\u0430 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0438\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432, \u0423 \u0446\u044c\u043e\u043c\u0443 \u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0442\u0430\u043a\u043e\u0436 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441\n\u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0439 ",(0,r.jsx)(n.code,{children:"CombinationService"}),", \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u0442\u0430 \u0444\u0430\u0431\u0440\u0438\u043a."]}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0456\u0441\u043d\u0443\u0454 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432, \u0442\u043e \u0437\u0430\u043f\u0443\u0441\u043a \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0446\u0456\u0454\u0457 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0439, \u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0456 \u0437\u0430\u043f\u0443\u0441\u043a \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432, \u043c\u043e\u0436\u043b\u0438\u0432\u0438\u0439 \u043b\u0438\u0448\u0435 \u043f\u0456\u0441\u043b\u044f \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432,\n\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0456\u0457 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0432 \u043f\u0430\u043c'\u044f\u0442\u044c \u044f\u0434\u0440\u0430 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f.\n\u0426\u044f \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0456\u0441\u0442\u044c \u0437\u0443\u043c\u043e\u0432\u043b\u0435\u043d\u0430 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0432\u0456\u0434 \u0432\u0438\u0449\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432."})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u0417\u0430\u043f\u0443\u0441\u043a \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0456\u044e \u0432\u0435\u0431-\u043a\u043b\u0456\u0454\u043d\u0442\u0430 \u0437\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0438\u043c \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u043c, \u043d\u0430 \u043f\u0435\u0432\u043d\u043e\u043c\u0443 \u0445\u043e\u0441\u0442\u0456 \u0442\u0430 \u043f\u043e\u0440\u0442\u0443, \u0456\u0437 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044e\n\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f ",(0,r.jsx)(n.code,{children:"ssl"})," \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0456\u0432 \u0442\u0430 \u0437\u0430\u043a\u0440\u0438\u0442\u0438\u0445 \u043a\u043b\u044e\u0447\u0456\u0432."]})}),"\n",(0,r.jsx)(n.h2,{id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443: ",(0,r.jsx)(n.code,{children:"http"})," \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0454 \u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043c\u0438, \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 ",(0,r.jsx)(n.code,{children:"http"})," \u0442\u0430\n\u0441\u0442\u0430\u0442\u0443\u0441\u043d\u0438\u043c\u0438 \u043a\u043e\u0434\u0430\u043c\u0438, \u0442\u043e\u0434\u0456 \u044f\u043a \u0430\u0434\u0430\u043f\u0442\u0435\u0440 ",(0,r.jsx)(n.code,{children:"ws"})," \u043f\u0440\u0430\u0446\u044e\u0454 \u0437\u0433\u0456\u0434\u043d\u043e \u0437 \u0434\u043e\u0432\u0456\u043b\u044c\u043d\u0438\u043c \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043e\u043c, \u044f\u043a\u0438\u0439 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e \u0444\u043e\u0440\u043c\u0443\u0454\u0442\u044c\u0441\u044f \u0441\u0430\u043c\u043e\u0441\u0442\u0456\u0439\u043d\u043e\n\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u043e\u043c ",(0,r.jsx)(n.code,{children:"X-Fiber"})," \u0437\u0430 \u0432\u043b\u0430\u0441\u043d\u0438\u043c \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043e\u043c."]}),"\n",(0,r.jsxs)(n.h3,{id:"http-\u0430\u0434\u0430\u043f\u0442\u0435\u0440",children:[(0,r.jsx)(n.code,{children:"http"})," \u0430\u0434\u0430\u043f\u0442\u0435\u0440"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0410\u0434\u0430\u043f\u0442\u0435\u0440 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0443\u0454 ",(0,r.jsx)(n.code,{children:"http"})," \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044e \u044f\u0434\u0440\u0430 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0456\u0437 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e\u044e \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u043e\u044e \u0442\u0430 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."]}),"\n",(0,r.jsx)(n.p,{children:"HTTP \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043e\u043f\u0435\u0440\u0443\u0454 \u0432\u043b\u0430\u0441\u043d\u0438\u043c \u0436\u0438\u0442\u0442\u0454\u0432\u0438\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432, \u0449\u043e \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f CORS (Cross-Origin\nResource Sharing), \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044e \u0432\u0445\u0456\u0434\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445, \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0457\u0445 \u043e\u0431\u0440\u043e\u0431\u043a\u0443. \u0412\u0456\u043d\n\u0437\u0434\u0456\u0439\u0441\u043d\u044e\u0454 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044e \u0434\u0430\u043d\u0438\u0445 \u0437\u0430\u043f\u0438\u0442\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e \u043e\u043f\u0438\u0441\u0443 \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443, \u0434\u043e\u0434\u0430\u0454 \u0442\u043e\u043a\u0435\u043d\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0445\n\u0442\u0438\u043f\u0430\u0445 \u043f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0454 \u0437\u0430\u043f\u0438\u0442 \u0434\u043e \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u0456\u0441\u043b\u044f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0443, \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043e\u0431\u0440\u043e\u0431\u043b\u044e\u0454 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0442\u0430\n\u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432 \u0445\u0456\u0434 \u0440\u043e\u0431\u043e\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0456\u0434\u0443\u044e\u0447\u043e\u0457 \u043e\u0431\u0440\u043e\u043a\u0438 \u0446\u0456\u0454\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456."}),"\n",(0,r.jsxs)(n.h3,{id:"ws-\u0430\u0434\u0430\u043f\u0442\u0435\u0440",children:[(0,r.jsx)(n.code,{children:"ws"})," \u0430\u0434\u0430\u043f\u0442\u0435\u0440"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0410\u0434\u0430\u043f\u0442\u0435\u0440 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0443\u0454 ",(0,r.jsx)(n.code,{children:"ws"})," \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044e \u044f\u0434\u0440\u0430 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0456\u0437 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e\u044e \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u043e\u044e \u0442\u0430 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."]}),"\n",(0,r.jsx)(n.p,{children:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0454 \u0432 \u043c\u0435\u0436\u0430\u0445 \u0432\u043b\u0430\u0441\u043d\u043e\u0433\u043e \u0436\u0438\u0442\u0442\u0454\u0432\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0443 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432, \u0449\u043e \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044e \u0434\u0430\u043d\u0438\u0445, \u043f\u043e\u0448\u0443\u043a\n\u0442\u0430 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0457 \u043f\u043e\u0434\u0456\u0457, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0457\u0457 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f. \u0412\u0456\u043d \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044e \u0434\u0430\u043d\u0438\u0445 \u0437\u0430\u043f\u0438\u0442\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e \u043e\u043f\u0438\u0441\u0443\n\u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043f\u043e\u0434\u0456\u0457, \u0434\u043e\u0434\u0430\u0454 \u0442\u043e\u043a\u0435\u043d\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0445 \u0442\u0438\u043f\u0430\u0445 \u043f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0454 \u043f\u043e\u0434\u0456\u044e \u0434\u043e \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0440\u0430\u0437\u043e\u043c \u0437 \u0456\u043d\u0448\u043e\u044e\n\u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e\u044e \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0454\u044e. \u041f\u0456\u0441\u043b\u044f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0443, \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043e\u0431\u0440\u043e\u0431\u043b\u044e\u0454 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0442\u0430 \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432 \u0445\u0456\u0434 \u0440\u043e\u0431\u043e\u0442\u0438\n\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0456\u0434\u0443\u044e\u0447\u043e\u0457 \u043e\u0431\u0440\u043e\u043a\u0438 \u0446\u0456\u0454\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456."}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["\u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b ",(0,r.jsx)(n.code,{children:"ws"})," \u043d\u0435 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043f\u043e\u0431\u0443\u0434\u043e\u0432\u0438 \u043f\u043e\u0434\u0456\u0439, ",(0,r.jsx)(n.code,{children:"X-Fiber"})," \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u0454 \u0432\u043b\u0430\u0441\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0457.\n\u0426\u0435\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u0442\u0438\u043f \u043f\u043e\u0434\u0456\u0457, \u0449\u043e \u0430\u043d\u0430\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 ",(0,r.jsx)(n.code,{children:"http"})," \u043c\u0435\u0442\u043e\u0434\u0443, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043a\u043e\u043c\u0443\u043d\u0456\u043a\u0430\u0446\u0456\u0439\u043d\u0456 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0438 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u0456 (\u043f\u043e\u0434\u0456\u0457 \u0432\u0456\u0434 \u0441\u0435\u0441\u0456\u0457\n\u0434\u043e \u0441\u0435\u0441\u0456\u0457, \u0432\u0456\u0434 \u0441\u0435\u0441\u0456\u0457 \u0434\u043e \u043a\u0456\u043c\u043d\u0430\u0442\u0438, \u0432\u0456\u0434 \u0441\u0435\u0441\u0456\u0457 \u0434\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0442\u043e\u0449\u043e), \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0434\u0456\u0457 - \u0441\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043d\u0442 \u043a\u043e\u0434\u0443 \u0441\u0442\u0430\u0442\u0443\u0441\u0443, \u0432\u0435\u0440\u0441\u0456\u044f \u043f\u043e\u0434\u0456\u0457,\n\u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u0456 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0442\u0430 \u0442\u0456\u043b\u043e \u043f\u043e\u0434\u0456\u0457, \u0442\u0438\u043f \u043f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0435 \u043f\u043e\u043b\u0435 \u0442\u043e\u043a\u0435\u043d\u0443. \u0426\u0435\u0439 \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043d\u0456\u043c \u0434\u043b\u044f\n\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0437\u0430\u0446\u0456\u0457. \u0422\u0430\u043a\u043e\u0436 \u0432\u043a\u043b\u044e\u0447\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0432\u0430 \u043f\u043e\u0434\u0456\u0457, \u0449\u043e \u0454 \u0430\u043d\u0430\u043b\u043e\u0433\u043e\u043c \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443."]}),(0,r.jsx)(n.p,{children:'\u041f\u043e\u0431\u0443\u0434\u043e\u0432\u0430 \u043f\u043e\u0434\u0456\u0439 \u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0432 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 "\u0411\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0430".'})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f-1",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u0437\u0430\u043f\u0438\u0442\u0456\u0432 ",(0,r.jsx)(n.code,{children:"http"})," \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043c\u0430\u0454 \u0443\u043d\u0456\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u0438\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442, \u0434\u0438\u043c\u0430\u043c\u0430\u043c\u0456\u0447\u043d\u0438\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0432 \u044f\u043a\u0438\u0439 \u043e\u043f\u0438\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u043a\u0456\u043d\u0446\u0435\u0432\u0438\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442.\n\u0410\u0434\u0430\u043f\u0442\u0435\u0440 \u0430\u043d\u0430\u043b\u0456\u0437\u0443\u044e\u0447\u0438 \u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u0456 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043e\u043f\u0438\u0441 \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443 \u0442\u0430 \u0441\u0430\u043c \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447 \u0437\u0430\u043f\u0438\u0442\u0443, \u043f\u0440\u043e\u0432\u043e\u0434\u044f\u0447\u0438 \u0436\u0438\u0442\u0442\u0454\u0432\u0438\u0439\n\u0446\u0438\u043a\u043b \u0446\u044c\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0442\u0443."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// ** common.d.ts */\nexport type HttpMethod =\n    | 'GET'\n    | 'POST'\n    | 'PUT'\n    | 'PATCH'\n    | 'DELETE'\n    | 'OPTIONS'\n    | 'TRACE'\n    | 'HEAD';\n\n// ** http.adapter.d.ts */\nexport namespace NHttpAdapter {\n    export type RequestOptions = {\n        // ... options structure\n    }\n\n    export type Response<R> = {\n        // ... response structure\n    };\n}\n\n\n// ** http.adapter.ts */  \nimport { inversify, inject } from '~packages'\nimport { CoreSymbols } from '~symbols'\n\nimport type {\n    IHttpAdapter, \n    NHttpAdapter, \n    ISchemeService, \n    HttpMethod\n} from '~types'\n\nconst { injectable } = inversify\n\n@injectable()\nexport class HttpAdapter implements IHttpAdapter {\n    // ... other class structure\n\n    constructor(\n        @inject(CoreSymbols.SchemaService)\n        private readonly _schemeService: ISchemeService,\n        // ... other inject structure\n    ) {}\n\n    public async request<\n        SERVICES extends string = string,\n        DOMAIN extends string = string,\n        ROUTE extends string = string,\n        DATA = any,\n        RESULT = void,\n    >(\n        service: SERVICES,\n        domain: DOMAIN,\n        route: ROUTE,\n        method: HttpMethod,\n        config?: NHttpAdapter.RequestOptions<DATA>\n    ): Promise<NHttpAdapter.Response<RESULT>> {\n        const sStorage = this._schemeService.services.get(service);\n        if (!sStorage) {\n            // ... throw error\n        }\n\n        const dStorage = sStorage.get(domain);\n        if (!dStorage) {\n            // ... throw error\n        }\n\n        const sRoute = dStorage.routes.get(route + '{{' + method.toUpperCase() + '}}');\n        if (!sRoute) {\n            // ... throw error\n        }\n\n\n        //  1. root dinamyc params and resolve required params\n        //  2. root query params and resolve requered params\n        //  3. root headers and resolve required headers\n        //  4. root supported language\n\n        const {protocol, host, port} = this._config;\n        try {\n            const response = await this._requester.request(\n                // ... request options structure\n            );\n            return {\n                body: response.data,\n                status: response.status,\n                headers: response.headers,\n                request: response.request,\n            };\n        } catch (e) {\n           // ... processing catch error\n        }\n    }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var r=t(67294);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);