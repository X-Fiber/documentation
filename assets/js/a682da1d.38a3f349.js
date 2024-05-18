"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8419],{82944:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=o(85893),r=o(11151);const t={},c="\u041c\u043e\u0434\u0435\u043b\u044c MongoDB",d={id:"scheme/server/documents/mongo-model",title:"\u041c\u043e\u0434\u0435\u043b\u044c MongoDB",description:'\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 "\u041c\u043e\u0434\u0435\u043b\u044c MongoDB" \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u043e\u043f\u0438\u0441 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 NoSQL \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445 MongoDB. \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430',source:"@site/docs/scheme/server/documents/mongo-model.md",sourceDirName:"scheme/server/documents",slug:"/scheme/server/documents/mongo-model",permalink:"/docs/scheme/server/documents/mongo-model",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheme/server/documents/mongo-model.md",tags:[],version:"current",frontMatter:{},sidebar:"schemeId",previous:{title:"\u0411\u0440\u043e\u043a\u0435\u0440 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u044c",permalink:"/docs/scheme/server/documents/broker"},next:{title:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0439 MongoDB",permalink:"/docs/scheme/server/documents/mongo-repository"}},i={},l=[{value:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0421\u043a\u043b\u0430\u0434",id:"\u0441\u043a\u043b\u0430\u0434",level:2},{value:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0430\u0433\u0435\u043d\u0442\u0456\u0432 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456",id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442-\u0430\u0433\u0435\u043d\u0442\u0456\u0432-\u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456",level:3},{value:"\u0420\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f",id:"\u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f",level:2},{value:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u043c\u043e\u0434\u0435\u043b\u044c-mongodb",children:"\u041c\u043e\u0434\u0435\u043b\u044c MongoDB"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:['\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 "\u041c\u043e\u0434\u0435\u043b\u044c MongoDB" \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u043e\u043f\u0438\u0441 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 ',(0,s.jsx)(n.code,{children:"NoSQL"})," \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445 ",(0,s.jsx)(n.code,{children:"MongoDB"}),". \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\n\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u043f\u0435\u0440\u0435\u043b\u0456\u043a\u0443 \u043f\u043e\u043b\u0456\u0432, \u0437\u0432\u02bc\u044f\u0437\u043a\u0456\u0432 \u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0456\u043d\u0448\u0438\u0445 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0439, \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c \u043d\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432 \u0442\u043e\u0449\u043e."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0457 \u0432 ",(0,s.jsx)(n.code,{children:"NoSQL"})," \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445 ",(0,s.jsx)(n.code,{children:"MongoDB"}),' \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 "\u041c\u043e\u0434\u0435\u043b\u044c MongoDB" \u0437 \u043e\u043f\u0438\u0441\u043e\u043c\n\u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e\u0457 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430.']}),"\n",(0,s.jsx)(n.p,{children:'\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 "\u041c\u043e\u0434\u0435\u043b\u044c MongoDB" \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456 "\u0420\u0435\u0454\u0441\u0442\u0440" \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0457 \u043e\u0431\u043b\u0430\u0441\u0442\u0456, \u044f\u043a\u0430 \u0432 \u0441\u0432\u043e\u044e \u0447\u0435\u0440\u0433\u0443, \u043f\u043e\u0432\u0438\u043d\u043d\u0430\n\u0431\u0443\u0442\u0438 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u043c\u0443 \u0441\u0435\u0440\u0432\u0456\u0441\u0456, \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e\u043c\u0443 \u0434\u043e \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u0426\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0443\u0454, \u0449\u043e \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u0431\u0443\u0434\u0435\n\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u043c\u043e\u0434\u0435\u043b\u0456 MongoDB. \u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u044f\u0434\u0440\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u044c \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0443 \u0432 \u0441\u0435\u0440\u0432\u0456\u0441\n\u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u041d\u0430 \u0435\u0442\u0430\u043f\u0456 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0437\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0430 \u0437 MongoDB, \u0437\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447 \u043e\u0442\u0440\u0438\u043c\u0430\u0454 \u0432\u0456\u0434 \u0441\u0435\u0440\u0432\u0456\u0441\u0430 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u043f\u043e\u0432\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043b\u0456\u043a\n\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432, \u0437 \u044f\u043a\u0438\u043c\u0438 \u0437\u0434\u0456\u0439\u0441\u043d\u0438\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456 \u043c\u0430\u043d\u0456\u043f\u0443\u043b\u044f\u0446\u0456\u0457 \u0432 \u0442\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0456 \u0456 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0439 \u0432 \u0431\u0430\u0437\u0456 \u0434\u0430\u043d\u0438\u0445 MongoDB.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"mongo-model-arch.svg",src:o(11473).Z+"",width:"812",height:"1062"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f ",(0,s.jsx)(n.code,{children:"MongoDB"})," \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0443 \u0437 ",(0,s.jsx)(n.code,{children:"MongoDB"})," \u0432 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043d\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0456, \u0442\u0430, \u0437\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0434\u043e\u0434\u0430\u0442\u0438\n\u043e\u043f\u0446\u0456\u0457 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 \u0440\u043e\u0431\u043e\u0442\u0438 \u0437\u02bc\u0454\u0434\u043d\u0443\u0432\u0430\u0447\u0430 \u0437 MongoDB \u0431\u0430\u0437\u043e\u044e \u0434\u0430\u043d\u0438\u0445."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u041c\u043e\u0434\u0435\u043b\u044c \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u044f\u043a \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0442\u0430\u043a \u0456 \u0445\u0443\u043a\u0438, \u0442\u0440\u0438\u0433\u0435\u0440\u0438 \u0442\u0430 \u0456\u043d\u0448\u0456 \u043c\u0435\u0442\u043e\u0434\u0438. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u0442\u044c\u0441\u044f \u0443\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u043c\u0435\u0442\u043e\u0434\u0438\n\u043e\u043a\u0440\u0435\u043c\u043e \u0432\u0456\u0434 \u043c\u043e\u0434\u0435\u043b\u0456, \u043f\u0440\u043e\u0442\u0435 \u0437\u0432'\u044f\u0437\u0443\u0432\u0430\u0442\u0438 \u0445\u0443\u043a\u0438 \u0442\u0430 \u0442\u0440\u0438\u0433\u0435\u0440\u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443 \u0437 \u043c\u043e\u0434\u0435\u043b\u043b\u044e."})}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u043a\u043b\u0430\u0434",children:"\u0421\u043a\u043b\u0430\u0434"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:'\u041e\u043f\u0438\u0441 \u0441\u043a\u043b\u0430\u0434\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 "\u041c\u043e\u0434\u0435\u043b\u044c MongoDB" \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0456\u0439 \u0440\u043e\u0437\u0440\u043e\u0431\u0446\u0456.'})}),"\n",(0,s.jsx)(n.h3,{id:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442-\u0430\u0433\u0435\u043d\u0442\u0456\u0432-\u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456",children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0430\u0433\u0435\u043d\u0442\u0456\u0432 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456"}),"\n",(0,s.jsx)(n.p,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0430\u0433\u0435\u043d\u0442\u0456\u0432 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u044f\u0432\u043b\u044f\u0454 \u0441\u043e\u0431\u043e\u044e \u043e\u0431\u02bc\u0454\u043a\u0442 \u0437 \u043f\u0435\u0440\u0435\u043b\u0456\u043a\u043e\u043c \u0430\u0433\u0435\u043d\u0442\u0456\u0432:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"type IBaseAgent = {\n    // agent functionality description\n}\n\nexport type Agents = {\n    baseAgent: IBaseAgent;\n  };\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0434\u0435:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"baseAgent"})," - \u0430\u0433\u0435\u043d\u0442 \u0437 \u043f\u0435\u0440\u0435\u043b\u0456\u043a\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0456\u0432 \u0456\u043c\u0435\u043d \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456, \u044f\u043a\u0456 \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u0410\u0433\u0435\u043d\u0442 \u0431\u0430\u0437\u043e\u0432\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0439 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0456\u0439 \u0440\u043e\u0437\u0440\u043e\u0431\u0446\u0456 \u0442\u0430 \u043d\u0430\u0434\u0430\u043b\u0456, \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043e\u043f\u0438\u0441\u0443 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 ",(0,s.jsx)(n.code,{children:"MongoDB"}),",\n\u0434\u043e \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0443 \u043e\u043f\u0438\u0441 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0447\u0430\u0441\u043e\u0432\u0438\u0445 \u0432\u0456\u0434\u043c\u0456\u0442\u043e\u043a - ",(0,s.jsx)(n.code,{children:"createAt"}),", ",(0,s.jsx)(n.code,{children:"updateAt"})," \u0442\u043e\u0449\u043e."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f",children:"\u0420\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["\u041e\u043f\u0438\u0441 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u043e\u043f\u0438\u0441\u0443 \u043c\u043e\u0434\u0435\u043b\u0456 ",(0,s.jsx)(n.code,{children:"MongoDB"})," \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0456\u0439 \u0440\u043e\u0437\u0440\u043e\u0431\u0446\u0456."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),"\n",(0,s.jsxs)(n.p,{children:['\u0429\u043e\u0431 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u044c MongoDB \u0434\u043b\u044f \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0456 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445 MongoDB \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 "\u041c\u043e\u0434\u0435\u043b\u044c MongoDB"\n\u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456 "\u0420\u0435\u0454\u0441\u0442\u0440" \u0446\u0456\u0454\u0457 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0457 \u043e\u0431\u043b\u0430\u0441\u0442\u0456. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043d\u043e\u0457 \u043e\u0431\u043b\u0430\u0441\u0442\u0456 - \u0430\u0433\u0440\u0435\u0433\u0430\u0442 "\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456", \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0432 \u043e\u043f\u0438\u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432\n\u0444\u0443\u043d\u043a\u0446\u0456\u0457 ',(0,s.jsx)(n.code,{children:"setRegistry"})," \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u044c MongoDB \u0442\u0430 \u0456\u043d\u0448\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044f:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { setRegistry } from '@x-fiber/proton';\nimport { BusUsersAggMongoModel } from './BusUsers.agg.mongo-model';\n\nexport const BusUsersAggRegistry = setRegistry<'BusUsersAgg'>('BusUsersAgg', {\n  mongo: {\n      name: 'BUS_USERS_AGG',\n      model: BusUsersAggMongoModel\n  },\n  // ... other documents\n});\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11473:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/mongo-model-arch-58c0de613e3e6efe1e93c2ceb673b613.svg"},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>c});var s=o(67294);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);