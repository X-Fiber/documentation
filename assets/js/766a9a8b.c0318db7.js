"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[581],{35454:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var s=c(85893),i=c(11151);const r={},d="\u0421\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432",o={id:"architecture/compute-core/func-elements/services/discovery",title:"\u0421\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432",description:"\u0421\u0435\u0440\u0432\u0456\u0441 \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0454\u044e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0443 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u0442\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432. \u0426\u0435",source:"@site/docs/architecture/compute-core/func-elements/services/discovery.md",sourceDirName:"architecture/compute-core/func-elements/services",slug:"/architecture/compute-core/func-elements/services/discovery",permalink:"/docs/architecture/compute-core/func-elements/services/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/compute-core/func-elements/services/discovery.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureId",previous:{title:"\u0421\u0435\u0440\u0432\u0456\u0441\u0438",permalink:"/docs/architecture/compute-core/func-elements/services"},next:{title:"\u0421\u0435\u0440\u0432\u0456\u0441 \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f",permalink:"/docs/architecture/compute-core/func-elements/services/logger"}},l={},t=[{value:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",level:2},{value:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439",id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439",level:2},{value:"\u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c",id:"\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f-\u044f\u0434\u0440\u0430-\u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c",level:3},{value:"\u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438",id:"\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f-\u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u0441\u0435\u0440\u0432\u0456\u0441-\u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432",children:"\u0421\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u0421\u0435\u0440\u0432\u0456\u0441 \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0454\u044e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0443 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u0442\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432. \u0426\u0435\n\u043a\u043b\u044e\u0447\u043e\u0432\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0443\u0454 \u0432\u0441\u044e \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0443 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0456\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0438. \u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0456 \u0434\u0430\u043d\u0456\n\u0432\u0438\u0442\u044f\u0433\u0443\u044e\u0442\u044c\u0441\u044f \u043f\u043e \u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0447\u043d\u0456\u0439 \u043b\u0430\u043d\u0446\u0456, \u0449\u043e \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0432\u0430\u0442\u0438 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442\u0438 \u0442\u0430 \u0443\u0437\u0433\u043e\u0434\u0436\u0443\u0432\u0430\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043d\u0430 \u0440\u0456\u0437\u043d\u0438\u0445 \u0440\u0456\u0432\u043d\u044f\u0445\n\u0441\u0438\u0441\u0442\u0435\u043c\u0438. \u041a\u0440\u0456\u043c \u0442\u043e\u0433\u043e, \u0441\u0435\u0440\u0432\u0456\u0441 \u043d\u0430\u0434\u0430\u0454 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e \u043e\u043a\u0440\u0435\u043c\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0438\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\n\u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c, \u0449\u043e \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0443\u0454 \u0433\u043d\u0443\u0447\u043a\u0456\u0441\u0442\u044c \u0442\u0430 \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f\u043c\u0438."})}),"\n",(0,s.jsx)(n.h2,{id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u0456 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0438\u043c \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438\n\u0432\u0456\u043d \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0446\u0438\u0445 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439. \u041f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0456\u0441\u0442\u044c \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0437'\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0456\u0432 \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0437'\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c, \u0430\n\u043f\u0435\u0440\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0456\u0441\u043e\u043c, \u044f\u043a\u0438\u0439 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0432 \u0446\u044c\u043e\u043c\u0443 \u0437'\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0456, \u0454 \u0441\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432. \u0422\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c, \u0432\u0441\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0438 \u0437\u0430\u0432\u0436\u0434\u0438\n\u043c\u0430\u044e\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0441\u0432\u043e\u0457\u0445 \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c. \u0412\u0430\u0436\u043b\u0438\u0432\u043e \u0432\u0456\u0434\u0437\u043d\u0430\u0447\u0438\u0442\u0438, \u0449\u043e \u0441\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432 \u0432\u0438\u043c\u0430\u0433\u0430\u0454 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456\n\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0443."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"discovery-service-arch.svg",src:c(78126).Z+"",width:"1112",height:"950"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:'\u041e\u043f\u0438\u0441, \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439, \u044f\u043a\u0456 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u044f\u0434\u0440\u043e\u043c \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0434\u0438\u0432\u0438\u0441\u044c \u0432\n\u0440\u043e\u0437\u0434\u0456\u043b "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0447\u043d\u0435\u043c".'})}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u0421\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u044f\u043a \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0439 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439 \u0442\u0430 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u0456\u043d\u0446\u0435\u0432\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432,\n\u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u0441\u0435\u0440\u0432\u0456\u0441\u0438, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u0438, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0457 \u0442\u043e\u0449\u043e. \u0426\u0435\u0439 \u0441\u0435\u0440\u0432\u0456\u0441 \u0442\u0430\u043a\u043e\u0436 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u0430\u0433\u0435\u043d\u0442\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 ",(0,s.jsx)(n.code,{children:"fnAgent"}),",\n\u044f\u043a\u0438\u0439 \u043c\u0430\u0454 \u0432\u043b\u0430\u0441\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440 \u0456\u043c\u0435\u043d discovery. \u0426\u0435\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440 \u0456\u043c\u0435\u043d \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1.\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432 \u044f\u0434\u0440\u0456 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { inversify, ioredis } from '~packages';\nimport { AbstractConnector } from './abstract.connector';\n\nimport type { NRedisConnector } from '~types'\n\nconst { injectable } = inversify;\n\n@injectable()\nexport class RedisConnector extends AbstractConnector implements IRedisConnector {\n    private _config: NRedisConnector.Config | undefined;\n    private _connection: IoRedis.IoRedis | undefined;\n\n    constructor(\n        // ... inject elements\n    ) {\n        super();\n    }\n\n    private _setConfig(): void {\n        this._config = {\n            enable: this._discoveryService.getBoolean(\n                'connectors.redis.enable',\n                false\n            ),\n            protocol: this._discoveryService.getString(\n                'connectors.redis.connect.protocol',\n                'redis'\n            )\n            // ... other configuration variables\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0434\u0435:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RedisConnector"})," - \u043a\u043b\u0430\u0441 \u0437\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0430 \u0437 ",(0,s.jsx)(n.code,{children:"Redis"})," \u0437 \u0447\u0430\u0441\u0442\u043a\u043e\u0432\u0438\u043c \u043e\u043f\u0438\u0441\u043e\u043c."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IRedisConnector"})," - \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,s.jsx)(n.code,{children:"RedisConnector"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NRedisConnector"})," - \u043f\u0440\u043e\u0441\u0442\u0456\u0440 \u0456\u043c\u0435\u043d \u0442\u0438\u043f\u0456\u043f, \u044f\u043a\u0438\u0439 \u043e\u043f\u0438\u0441\u0443\u0454 \u043f\u0435\u0440\u0435\u043b\u0456\u043a \u0442\u0438\u043f\u0456\u0432, \u044f\u043a\u0456 \u0432\u0456\u0434\u043d\u043e\u0441\u044f\u0442\u044c\u0441\u044f \u0434\u043e ",(0,s.jsx)(n.code,{children:"RedisConnector"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"_config"})," - \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f ",(0,s.jsx)(n.code,{children:"Redis"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"_setConfig"})," - \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 ",(0,s.jsx)(n.code,{children:"Redis"})," \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f\u043c\u0438.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enable"})," - \u0437\u043c\u0456\u043d\u043d\u0430 ",(0,s.jsx)(n.code,{children:"boolean"})," \u0442\u0438\u043f\u0443, \u044f\u043a\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u043f\u0440\u0438\u0454\u0434\u043d\u0430\u043d\u043d\u044f ",(0,s.jsx)(n.code,{children:"Redis"})," \u0434\u043e \u0440\u043e\u0431\u043e\u0442\u0438 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"protocol"})," - \u0442\u0438\u043f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0457 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0434\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ",(0,s.jsx)(n.code,{children:"Redis"})," \u0441\u0445\u043e\u0432\u0438\u0449\u0430."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2.\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0456"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { setRouter } from '@x-fiber/calculator';\n\nexport const BusUsersAggRouter = setRouter<'get-one'>({\n  'get-one': {\n    GET: {\n      scope: 'private:user',\n      params: ['userId'],\n      handler: async (request, agents, context) => {\n        const { discovery } = agents.fnAgent;\n\n        type Config = {\n          integrations: {\n            system1: {\n              enable: boolean;\n              path: string;\n              fallbackPath: string;\n            };\n          };\n          urls: {\n            callbackUrl: string;\n            robinUrls: string[]\n          };\n          retryNumber: number;\n          certificatePath: string\n        };\n\n        const path = discovery.getMandatory<string, Config>('integrations.system1.path'); \n        console.log(path) // string environment or throw e\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0434\u0435:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"setRouter"})," \u0454 \u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u043e\u044e \u0444\u0443\u043d\u043a\u0446\u0456\u0454\u044e \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c, \u0449\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043e\u043f\u0438\u0441\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 ",(0,s.jsx)(n.code,{children:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BusUsersAggRouter"})," - \u0446\u0435 \u043e\u043f\u0438\u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 ",(0,s.jsx)(n.code,{children:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440"})," \u0432 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0456\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0456 ",(0,s.jsx)(n.code,{children:"BusUsersAgg"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"discovery"})," - \u043f\u0440\u043e\u0441\u0442\u0456\u0440 \u0456\u043c\u0435\u043d \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0443 \u0434\u043e \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0437 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432 DiscoveryService \u0434\u043b\u044f \u0430\u0433\u0435\u043d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 ",(0,s.jsx)(n.code,{children:"fnAgent"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Config"})," - \u0442\u0438\u043f \u043e\u043f\u0438\u0441\u0443 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"})," - \u0437\u043c\u0456\u043d\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0443, \u044f\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0443\u0454 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0437 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 \u0430\u0431\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454 \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u0443 \u0440\u0430\u0437\u0456 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u043e\u0441\u0442\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u043a\u043b\u044e\u0447\u0430."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439",children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439"}),"\n",(0,s.jsx)(n.p,{children:'\u0426\u044f \u0456\u0454\u0440\u0430\u0440\u0445\u0456\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0454 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c. \u0412\u043e\u043d\u0430 \u0434\u0456\u0454 \u0437\u0430 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u043c\n"\u043f\u0435\u0440\u0435\u043c\u0430\u0433\u0430\u0454 \u0442\u043e\u0439, \u0445\u0442\u043e \u043c\u0430\u0454 \u0432\u0438\u0449\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442". \u0426\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e \u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443 \u043a\u043e\u043d\u0444\u043b\u0456\u043a\u0442\u0443 \u043c\u0456\u0436 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0432\u0456\u0434\u0434\u0430\u0441\u0442\u044c\n\u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0443 \u0442\u0438\u043c, \u044f\u043a\u0456 \u043c\u0430\u044e\u0442\u044c \u0431\u0456\u043b\u044c\u0448\u0438\u0439 \u043f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u0456\u0439 \u043f\u0430\u043f\u0446\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430, \u0431\u0443\u0434\u0443\u0442\u044c\n\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u0456 \u043d\u0430\u0442\u043e\u043c\u0456\u0441\u0442\u044c \u0442\u0438\u0445, \u0449\u043e \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0456 \u0443 \u043f\u0430\u043f\u0446\u0456 \u043f\u0440\u043e\u0435\u043a\u0442\u0443.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u0420\u0456\u0432\u0435\u043d\u044c 1. \u0417\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0439 \u0444\u0430\u0439\u043b"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443: ",(0,s.jsx)(n.code,{children:"/{homedir}/.fiber"}),". \u041f\u043e\u0432\u043d\u0438\u0439 \u0448\u043b\u044f\u0445 \u0434\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0457 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"/{homedir}/.fiber/{profile}/{kind}.{env}.config.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0434\u0435:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{homedir}"})," - \u0434\u043e\u043c\u0430\u0448\u043d\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0456\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".fiber"}),"- \u0440\u0435\u0437\u0435\u0440\u0432\u043e\u0432\u0430\u043d\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0456\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0444\u0456\u043b\u0456\u0432 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439 ",(0,s.jsx)(n.code,{children:"X-Fiber"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{profile}"})," - \u043f\u0440\u043e\u0444\u0456\u043b\u044c \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457, \u043f\u043e\u0432'\u044f\u0437\u0430\u043d\u0438\u0439 \u0437 \u0432\u0435\u0431-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u043e\u043c."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{kind}.{env}.config.json"})," - \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u0444\u0430\u0439\u043b, \u0434\u0435:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{kind}"})," - \u0442\u0438\u043f \u044f\u0434\u0440\u0430 (\u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438, ",(0,s.jsx)(n.code,{children:"calculator"}),", ",(0,s.jsx)(n.code,{children:"display"}),", ",(0,s.jsx)(n.code,{children:"visualizer"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{env}"})," - \u0442\u0438\u043f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, ",(0,s.jsx)(n.code,{children:"development"}),", ",(0,s.jsx)(n.code,{children:"alpha-testing"}),", ",(0,s.jsx)(n.code,{children:"production"})," \u0442\u043e\u0449\u043e)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u0420\u0456\u0432\u0435\u043d\u044c 2. \u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0439 \u0444\u0430\u0439\u043b"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443: ",(0,s.jsx)(n.code,{children:"/{processdir}/config"}),". \u041f\u043e\u0432\u043d\u0438\u0439 \u0448\u043b\u044f\u0445 \u0434\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0457 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"`/{processdir}/config/{kind}.{env}.config.json`\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0434\u0435:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{processdir}"})," - \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0456\u044f, \u0437 \u044f\u043a\u043e\u0457 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441 (\u0448\u043b\u044f\u0445 \u0434\u043e ",(0,s.jsx)(n.code,{children:"package.json"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{kind}.{env}.config.json"})," - \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0439 \u0444\u0430\u0439\u043b, \u0434\u0435:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{kind}"})," - \u0442\u0438\u043f \u044f\u0434\u0440\u0430 (\u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438, ",(0,s.jsx)(n.code,{children:"calculator"}),", ",(0,s.jsx)(n.code,{children:"display"}),", ",(0,s.jsx)(n.code,{children:"visualizer"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{env}"})," - \u0442\u0438\u043f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, ",(0,s.jsx)(n.code,{children:"development"}),", ",(0,s.jsx)(n.code,{children:"alpha-testing"}),", ",(0,s.jsx)(n.code,{children:"production"})," \u0442\u043e\u0449\u043e)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f-\u044f\u0434\u0440\u0430-\u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c",children:"\u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:'\u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u043f\u043e\u0434\u0456\u043b\u044f\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0438 \u0456\u043c\u0435\u043d, \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u044f\u043a\u0438\u0439 \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0432 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0447\u043d\u0435\u043c".'})}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443 \u043c\u0430\u0454 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0432\u0438\u0433\u043b\u044f\u0434:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "adapters": {\n        "http": {\n            "port": 12000\n            }\n        },\n    "services": {\n        "logger": {\n            "enable": true\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f-\u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438",children:"\u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"X-Fiber"})," \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043e\u043f\u0438\u0441 \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c, \u044f\u043a\u0456 \u0432 \u043f\u043e\u0434\u0430\u043b\u044c\u0448\u043e\u043c\u0443 \u0454 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0456\n\u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0437\u0430\u0432\u0434\u044f\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0443 \u0456\u043c\u0435\u043d ",(0,s.jsx)(n.code,{children:"discovery"})," \u0432 \u0430\u0433\u0435\u043d\u0442\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 ",(0,s.jsx)(n.code,{children:"fnAgent"}),", \u044f\u043a\u0438\u0439 \u043d\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0432 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0430\u0445 ",(0,s.jsx)(n.code,{children:"http"}),"\n\u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0442\u0430 ",(0,s.jsx)(n.code,{children:"ws"})," \u043f\u043e\u0434\u0456\u0439."]})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0432\u043b\u0430\u0441\u043d\u043e\u0457 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u0442\u0430\u043a\u0438\u0439 \u0432\u0438\u0433\u043b\u044f\u0434:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "application": {\n        "SysAdmin": {\n            "callbackUrl": "http://localhost:38012"\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043f\u043e\u043b\u044f \u043c\u043e\u0436\u043b\u0438\u0432\u0438\u0439 \u0437\u0430\u0432\u0434\u044f\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0443 \u0456\u043c\u0435\u043d ",(0,s.jsx)(n.code,{children:"discovery"})," \u0430\u0433\u0435\u043d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 ",(0,s.jsx)(n.code,{children:"fnAgent"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// ...\n        const url = agents.fnAgent.discovery.getMandatory('SysAdmin.callbackUrl')\n        console.log(url) // http://localhost:38012\n// ...\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u043f\u0438\u0441\u0443 \u0442\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432 ",(0,s.jsx)(n.code,{children:"DiscoveryService"})," \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043e\u0431'\u0454\u043a\u0442\n",(0,s.jsx)(n.code,{children:"application"})," \u0443 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0456\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0456 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443. \u0426\u0456 \u0434\u0430\u043d\u0456 \u043c\u043e\u0436\u0443\u0442\u044c \u043c\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u043e\u0441\u0442\u0456.\n\u041f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432, \u0441\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u0456\u0432 ",(0,s.jsx)(n.code,{children:"DiscoveryService"})," \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043b\u0438\u0448\u0435 \u0442\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f,\n\u044f\u043a\u0456 \u043e\u043f\u0438\u0441\u0430\u043d\u0456 \u0432 \u0446\u044c\u043e\u043c\u0443 \u043e\u0431'\u0454\u043a\u0442\u0456, \u0456 \u0434\u043e\u0434\u0430\u0454 \u0457\u0445 \u0434\u043e \u043f\u0430\u043c'\u044f\u0442\u0456 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c."]}),(0,s.jsxs)(n.p,{children:["\u0429\u043e\u0434\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u0437\u043c\u0456\u043d\u043d\u0438\u0445, \u043d\u0435 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0434\u043e\u0434\u0430\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"application"})," \u0434\u043e \u043a\u043b\u044e\u0447\u0456\u0432, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u0456\u0441\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\n\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u044f\u0434\u0440\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0432\u0456\u0434\u043e\u043a\u0440\u0435\u043c\u043b\u044e\u0454 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0456 \u0434\u0430\u043d\u0456 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u0432\u0456\u0434\n\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438."]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},78126:(e,n,c)=>{c.d(n,{Z:()=>s});const s=c.p+"assets/images/discovery-service-arch-a62997c4b2e848843559e500757741a7.svg"},11151:(e,n,c)=>{c.d(n,{Z:()=>o,a:()=>d});var s=c(67294);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);