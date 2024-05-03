"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6672],{56494:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(85893),c=t(11151);const r={},s=void 0,i={id:"methodology/server/best-practice/sync-dictionary",title:"sync-dictionary",description:"\u0414\u0430, \u0432 \u0438\u0434\u0435\u0430\u043b\u0435, \u0432\u043d\u0435\u0448\u043d\u044f\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0430\u043c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0445 \u0445\u0435\u0448\u0438. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442",source:"@site/docs/methodology/server/best-practice/sync-dictionary.md",sourceDirName:"methodology/server/best-practice",slug:"/methodology/server/best-practice/sync-dictionary",permalink:"/documentation/docs/methodology/server/best-practice/sync-dictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/methodology/server/best-practice/sync-dictionary.md",tags:[],version:"current",frontMatter:{}},a={},d=[];function u(n){const e={p:"p",...(0,c.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u0414\u0430, \u0432 \u0438\u0434\u0435\u0430\u043b\u0435, \u0432\u043d\u0435\u0448\u043d\u044f\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0430\u043c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0445 \u0445\u0435\u0448\u0438. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\n\u0432\u0430\u043c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0436\u0434\u0443 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438 \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439. \u0412\u043e\u0442 \u043a\u0430\u043a \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c:"}),"\n",(0,o.jsx)(e.p,{children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0438 \u0445\u0435\u0448\u0435\u0439: \u0412\u043d\u0435\u0448\u043d\u044f\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0430\u043c \u043a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0435\u0433\u043e\n\u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u0438 \u0445\u0435\u0448\u0435\u043c. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c\n\u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0445\u0435\u0448\u0435\u0439.\n\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: \u0412\u0430\u0448\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u0438 \u0445\u0435\u0448\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u041f\u0440\u0438\n\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0445\u0435\u0448\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u0445\u0435\u0448\u0430\u043c\u0438 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445.\n\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438: \u0415\u0441\u043b\u0438 \u0445\u0435\u0448 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0441\u044f, \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u044b\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u0432\u043e\n\u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u043d\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439.\n\u0423\u0447\u0435\u0442 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439 \u0438 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438: \u041f\u0440\u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \u0445\u0435\u0448\u0435\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439, \u0442\u043e \u0435\u0441\u0442\u044c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430\n\u0440\u0430\u0437\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0445\u0435\u0448\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438, \u0445\u043e\u0442\u044f \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043d\u0438\u0437\u043a\u0430, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u0440\u0438\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u0445\u0435\u0448-\u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a SHA-256.\n\u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445: \u041e\u0431\u0435\u0441\u043f\u0435\u0447\u044c\u0442\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0438 \u0445\u0435\u0448\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c\n\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u043b\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0438\u0445 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438.\n\u041f\u043e\u0434\u0445\u043e\u0434 \u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0438 \u0445\u0435\u0448\u0435\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u043d\u0430\u0434\u0435\u0436\u043d\u0443\u044e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0438\n\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0442\u044c \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."}),"\n",(0,o.jsx)(e.p,{children:"\u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u0430\u0448 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 10 000 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0445\u0435\u0448\u0435\u0439 \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0441\u0435 \u0435\u0449\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c.\n\u0412\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c:"}),"\n",(0,o.jsx)(e.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439: \u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0445\u0435\u0448\u0435\u0439 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f\n\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430. \u042d\u0442\u043e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u043f\u0440\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0432\u0430\u0448 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0438\u0437 10 000 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439.\n\u041a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0445\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f: \u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0432\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0445\u0435\u0448\u0438 \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f, \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445 \u0432\n\u043f\u0430\u043c\u044f\u0442\u0438 \u0438\u043b\u0438 \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u0432\u0430\u043c \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0445\u0435\u0448\u0438 \u0441\u043d\u043e\u0432\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430,\n\u0447\u0442\u043e \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442 \u0432\u0440\u0435\u043c\u044f \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u0445\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f: \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0438\u0437\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u0445\u0435\u0448-\u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0442\u0430\u043a\u0443\u044e \u043a\u0430\u043a\nSHA-256, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0435 \u0445\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.\n\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f: \u0412\u0430\u043c \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 10 000 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0440\u0430\u0437\u0443. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0437\u0431\u0438\u0442\u044c \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u043d\u0430\n\u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u043b\u043a\u0438\u0435 \u0447\u0430\u0441\u0442\u0438 \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430\n\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f.\n\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445: \u041f\u043e\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0445\u0435\u0448\u0438 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0447\u0442\u043e\u0431\u044b \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c\n\u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043d\u0438\u043c \u043f\u0440\u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439."}),"\n",(0,o.jsx)(e.p,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043e \u0442\u043e\u043c, \u0432 \u043a\u0430\u043a\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u043d\u043e\u0441\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u043b\u0438\n\u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0412\u043e\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,o.jsx)(e.p,{children:"\u041e\u0434\u0438\u043d \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u043f\u0440\u0430\u0432\u0434\u044b: \u0415\u0441\u043b\u0438 \u0432\u0430\u0448\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c \u043f\u0440\u0430\u0432\u0434\u044b \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0432 \u0432\u0430\u0448\u0435\u0439\n\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\n\u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u044f\u0441\u044c \u043d\u0430 \u043d\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0445 \u0438\u0437 \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.\n\u0414\u0432\u0443\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u044f\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f: \u0415\u0441\u043b\u0438 \u043e\u0431\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0440\u0430\u0432\u043d\u043e\u043f\u0440\u0430\u0432\u043d\u044b \u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u0431\u0435\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445,\n\u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0443\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u044e\u044e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0432\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0438 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0438 \u0432\u043e\n\u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043e\u0441\u0442\u0430\u0432\u0430\u043b\u0438\u0441\u044c \u0432 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438.\n\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438: \u0412\u0430\u0448\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0438\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438,\n\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442, \u0433\u0434\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u043f\u0440\u0438 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e \u0442\u043e\u043c, \u0433\u0434\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442\n\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435.\n\u041a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441 \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0435: \u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043e\u0431\u0441\u0443\u0434\u0438\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u0438\u043b\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u0433\u0434\u0435\n\u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0435 \u0432\u043d\u043e\u0441\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u0421\u043e\u0433\u043b\u0430\u0441\u0443\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u043f\u043e\u0434\u0445\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044f\u043c \u0432\u0441\u0435\u0445\n\u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u043e\u0440\u043e\u043d.\n\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f: \u041f\u043e\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0432\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0438\n\u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439, \u0447\u0442\u043e\u0431\u044b \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0443\u0447\u043d\u043e\u0435 \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0438 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438."})]})}function p(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>s});var o=t(67294);const c={},r=o.createContext(c);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);