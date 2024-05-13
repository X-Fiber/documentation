"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6495],{75629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=n(85893),s=n(11151);const c={},i="\u0424\u0430\u0431\u0440\u0438\u043a\u0438",o={id:"architecture/compute-core/func-elements/factories",title:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438",description:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 - \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u0433\u0440\u0443\u043f\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0454\u0434\u0438\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f - \u0432\u0438\u0431\u0456\u0440, \u0437\u0430\u043f\u0443\u0441\u043a \u0442\u0430 \u043d\u0430\u0434\u0430\u043d\u043d\u044f \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430",source:"@site/docs/architecture/compute-core/func-elements/factories.md",sourceDirName:"architecture/compute-core/func-elements",slug:"/architecture/compute-core/func-elements/factories",permalink:"/docs/architecture/compute-core/func-elements/factories",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/compute-core/func-elements/factories.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureId",previous:{title:"\u0422\u0443\u043d\u0435\u043b\u0456",permalink:"/docs/architecture/compute-core/func-elements/tunnels"},next:{title:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457",permalink:"/docs/architecture/compute-core/func-elements/strategies"}},d={},a=[{value:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u0444\u0430\u0431\u0440\u0438\u043a\u0438",children:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["\u0424\u0430\u0431\u0440\u0438\u043a\u0438 - \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u0433\u0440\u0443\u043f\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0454\u0434\u0438\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f - \u0432\u0438\u0431\u0456\u0440, \u0437\u0430\u043f\u0443\u0441\u043a \u0442\u0430 \u043d\u0430\u0434\u0430\u043d\u043d\u044f \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\n\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457 / \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0432 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430. \u041a\u043e\u0436\u043d\u0430 \u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u0442\u0430\u043a\u043e\u0436, \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u043e \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438\n\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0447\u0438 \u0432\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430. \u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u044c\u0441\u044f / \u0437\u0443\u043f\u0438\u043d\u044f\u044e\u0442\u044c\u0441\u044f \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 / \u0437\u0443\u043f\u0438\u043d\u043a\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0443\n\u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0439 ",(0,r.jsx)(t.code,{children:"CombinationService"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,r.jsx)(t.p,{children:"\u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u043f\u043e\u0434\u0456\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0432\u0430 \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u0442\u0430 \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0439."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432"})}),"\n",(0,r.jsxs)(t.p,{children:["\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u0432\u0438\u043a\u043e\u043d\u0443\u044e\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u043a \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443. \u0422\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, ",(0,r.jsx)(t.code,{children:"http"}),"\n\u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 ",(0,r.jsx)(t.code,{children:"fastify"}),", ",(0,r.jsx)(t.code,{children:"express"}),", ",(0,r.jsx)(t.code,{children:"koa"})," \u0442\u0430 \u0456\u043d\u0448\u0438\u043c\u0438 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430\u043c\u0438. \u041d\u0430\u0440\u0430\u0437\u0456 ",(0,r.jsx)(t.code,{children:"X-Fiber"})," \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0454\n\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0438:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u041d\u0430\u0437\u0432\u0430"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u0410\u0434\u0430\u043f\u0442\u0435\u0440"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u041e\u043f\u0438\u0441"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"HttpAdapter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"FastifyHttpAdapter"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["\u0420\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0454 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 ",(0,r.jsx)(t.code,{children:"http"})," \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u0431\u0430\u0437\u0456 ",(0,r.jsx)(t.code,{children:"fastify"})," \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0443"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"WsAdapter"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"WsWsAdapter"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["\u0420\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0454 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 ",(0,r.jsx)(t.code,{children:"ws"})," \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0430 \u0431\u0430\u0437\u0456 ",(0,r.jsx)(t.code,{children:"ws"})," \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438"]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u043c\u0430\u044e\u0442\u044c \u0454\u0434\u0438\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0437 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 ",(0,r.jsx)(t.code,{children:"run"})," \u0442\u0430 ",(0,r.jsx)(t.code,{children:"stand"}),", \u044f\u043a\u0456 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0443 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0442\u0430 \u0437\u0443\u043f\u0438\u043d\u043a\u0443\n\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0439"})}),"\n",(0,r.jsxs)(t.p,{children:["\u0424\u0430\u0431\u0440\u0438\u043a\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0439 \u044f\u043a \u0456 \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0456\u0432 \u0437\u0434\u0456\u0439\u0441\u043d\u044e\u044e\u0442\u044c \u0432\u0438\u0431\u0456\u0440 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0457 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f, \u0430\n\u0441\u0430\u043c\u0456 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043c\u0435\u0442\u043e\u0434\u0438 ",(0,r.jsx)(t.code,{children:"run"})," \u0442\u0430 ",(0,r.jsx)(t.code,{children:"stand"}),". \u041e\u043a\u0440\u0456\u043c \u0446\u044c\u043e\u0433\u043e \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0439 \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457,\n\u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043a\u043e\u0436\u043d\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044f \u0454 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u044e \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0454\u044e. \u041d\u0430\u0440\u0430\u0437\u0456 ",(0,r.jsx)(t.code,{children:"X-Fiber"})," \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0454 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u041d\u0430\u0437\u0432\u0430"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044f"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u041e\u043f\u0438\u0441"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"FileStorage"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"BufferFileStorageStrategy"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u0420\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0454 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044e \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432 \u0432 \u0431\u0443\u0444\u0435\u0440\u0456 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"FileStorage"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"RedisFileStorageStrategy"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u0420\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0454 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044e \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432 \u0432 \u0431\u0443\u0444\u0435\u0440\u0456 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0447\u0438 \u0434\u0432\u0430 \u0440\u0435\u0436\u0438\u043c\u0438 \u0440\u043e\u0431\u043e\u0442\u0438: \u043f\u043e\u0432\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0442\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0447\u0430\u0441\u0442\u0438\u043d\u0430\u043c\u0438 \u0437 \u043f\u043e\u0441\u043b\u0456\u0434\u0443\u044e\u0447\u0438\u043c \u0432\u0456\u0434\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u043c \u0437\u0430 \u043c\u0435\u0445\u0430\u043d\u0456\u043a\u043e\u044e \u0441\u0442\u0440\u0456\u043c\u0456\u043d\u0433\u0443."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:'\u041f\u0456\u0434\u0445\u0456\u0434 "\u0424\u0430\u0431\u0440\u0438\u043a\u0430-\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044f" \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0443\u043d\u0438\u043a\u043d\u0443\u0442\u0438 \u043f\u0440\u0438\u0432\u02bc\u044f\u0437\u043a\u0438 \u0434\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430, \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u044e\u0447\u0438 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441,\n\u0434\u043e \u044f\u043a\u043e\u0433\u043e \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0439 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442.'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"factory-arch.svg",src:n(31889).Z+"",width:"937",height:"822"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,r.jsx)(t.p,{children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u0444\u0430\u0431\u0440\u0438\u043a \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u0437\u0430 \u0454\u0434\u0438\u043d\u0438\u043c \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u0454\u043c - \u0432 \u0444\u0430\u0431\u0440\u0438\u0446\u0456 \u043e\u043f\u0438\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u0432\u0438\u0431\u043e\u0440\u0443, \u0430 \u0432 \u0441\u0435\u0440\u0432\u0456\u0441\u0456 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0439\n\u0432\u043e\u043d\u0438 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u044e\u0442\u044c\u0441\u044f"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// ** http.factory.ts */\nimport { injectable, inject } from '~packages'\nimport { CoreSymbols } from '~symbols'\nimport { AbstractFactory } from './abtract.factory'\n\nimport type {\n    IAbstractFactory,\n    IDiscoveryService,\n    ILoggerService,\n    IAbstractHttpAdapter\n} from '~types'\n\n@injectable()\nexport class HttpFactory extends AbstractFactory implements IAbstractFactory {\n    constructor(\n        @inject(CoreSymbols.DiscoveryService)\n        private readonly _discoveryService: IDiscoveryService,\n        @inject(CoreSymbols.LoggerService)\n        private readonly _loggerService: ILoggerService,\n        @inject(CoreSymbols.FastifyAdapter)\n        private readonly _fastifyAdapter: IAbstractHttpAdapter,\n        @inject(CoreSymbols.ExpressAdapter)\n        private readonly _expressAdapter: IAbstractHttpAdapter\n    ) {\n        super();\n    }\n\n    public async run<T>(): Promise<void> {\n        const enable = this._discoveryService.getBoolean('adapters.http.enable', false);\n        if (!enable) return\n\n        const kind = this._discoveryService.getString('adapters.http.kind', 'fastify');\n        try {\n            switch (kind) {\n                case 'fastify':\n                    await this._fastifyAdapter.start();\n                    break;\n                case 'express':\n                    await this._expressAdapter.start()\n                default:\n                    throw new Error(`Http adapter kind is not supported. Use \"fastify\" or \"express\" kind`);\n            }\n        } catch (e) {\n            this._loggerService.error(e)\n            throw e\n        }\n    }\n\n    public async stand(): Promise<void> {\n        const enable = this._discoveryService.getBoolean('adapters.http.enable', false);\n        if (!enable) return\n\n        const kind = this._discoveryService.getString('adapters.http.kind', 'fastify');\n        try {\n            switch (kind) {\n                case 'fastify':\n                    await this._fastifyAdapter.stop();\n                    break;\n                case 'express':\n                    await this._expressAdapter.stop()\n                default:\n                    throw new Error(`Http adapter kind is not supported. Use \"fastify\" or \"express\" kind`);\n            }\n        } catch (e) {\n            this._loggerService.error(e)\n            throw e\n        }\n    }\n}\n\n// ** combination.service.ts */\nimport { injectable, inject } from '~packages'\nimport { CoreSymbols } from '~symbols'\nimport { AbstractService } from './abstract.service';\n\nimport type {\n    IAbstractService,\n    IDiscoveryService,\n    ILoggerService,\n    IAbstractFactory\n} from '~types'\n\n@injectable()\nexport class CombinationService extends AbstractService implements IAbstractService {\n    protected readonly _SERVICE_NAME = GetawayService.name;\n\n    constructor(\n        @inject(CoreSymbols.DiscoveryService)\n        protected readonly _discoveryService: IDiscoveryService,\n        @inject(CoreSymbols.LoggerService)\n        protected readonly _loggerService: ILoggerService,\n        @inject(CoreSymbols.FrameworkFactory)\n        private readonly _httpFactory: IAbstractFactory,\n        // ... other factory inject\n    ) {\n        super();\n    }\n\n    protected async init(): Promise<boolean> {\n        try {\n            await this._httpFactory.run();\n            return true;\n        } catch (e) {\n            this._loggerService.error(e)\n            return false\n        }\n    }\n\n    protected async destroy(): Promise<void> {\n        try {\n            await this._httpFactory.stay();\n            return true;\n        } catch (e) {\n            this._loggerService.error(e)\n            return false\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u0434\u0435:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"HttpFactory"})," - \u043a\u043b\u0430\u0441 ",(0,r.jsx)(t.code,{children:"http"})," \u0444\u0430\u0431\u0440\u0438\u043a\u0438.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@inject(CoreSymbols.FastifyAdapter) ..."})," - \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f ",(0,r.jsx)(t.code,{children:"fastify"})," \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e ",(0,r.jsx)(t.code,{children:"http"})," \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"run"})," - \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430 \u0442\u0430 \u0439\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"stay"})," - \u043c\u0435\u0442\u043e\u0434 \u0437\u0443\u043f\u0438\u043d\u043a\u0438 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0430."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"CombinationService"})," - \u043a\u043b\u0430\u0441 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0439.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"init"})," - \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0441\u0435\u0440\u0432\u0456\u0441\u0443."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"destroy"})," - \u043c\u0435\u0442\u043e\u0434 \u0437\u0443\u043f\u0438\u043d\u043a\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0443."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},31889:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/factory-arch-f4948fc83d3886a81f034677b017fde6.svg"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const s={},c=r.createContext(s);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);