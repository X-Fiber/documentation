"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4585],{27596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var o=t(85893),i=t(11151);const s={},c="\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456",r={id:"architecture/compute-core/ba-communication/loaders",title:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456",description:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u0434\u043b\u044f \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0443 \u044f\u0434\u0440\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c. \u0426\u0435\u0439 \u043f\u0440\u043e\u0446\u0435\u0441",source:"@site/docs/architecture/compute-core/ba-communication/loaders.md",sourceDirName:"architecture/compute-core/ba-communication",slug:"/architecture/compute-core/ba-communication/loaders",permalink:"/documentation/docs/architecture/compute-core/ba-communication/loaders",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/compute-core/ba-communication/loaders.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureId",previous:{title:"\u0417\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u0447\u0456",permalink:"/documentation/docs/architecture/compute-core/ba-communication/setters"},next:{title:"\u042f\u0434\u0440\u043e \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c",permalink:"/documentation/docs/architecture/display-core/"}},a={},m=[{value:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456",children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u0434\u043b\u044f \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0443 \u044f\u0434\u0440\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c. \u0426\u0435\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\n\u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044e \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432 \u0442\u0430 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u0435\u0439, \u0449\u043e \u0441\u043a\u043b\u0430\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0437 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432, \u0434\u043b\u044f \u043f\u043e\u0431\u0443\u0434\u043e\u0432\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e\u0457\n\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438."})}),"\n",(0,o.jsx)(n.h2,{id:"\u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,o.jsx)(n.p,{children:"\u041a\u043e\u0436\u0435\u043d \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u0456 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0457 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438, \u043d\u0435\u0437\u0430\u043b\u0435\u0436\u043d\u043e \u0432\u0456\u0434 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u043e\u0431'\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0435\u0439\n\u0441\u0435\u0440\u0432\u0456\u0441\u0443, \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0457 \u043e\u0431\u043b\u0430\u0441\u0442\u0456 \u0447\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u043f\u0438\u0441\u0443 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u0426\u0435 \u0441\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0432\u0438\u0431\u0456\u0440, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0444\u043e\u0440\u043c\u0430\u0442 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f\n\u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u043c\u043e\u0436\u0435 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u0441\u043f\u043e\u0441\u043e\u0431\u0443, \u044f\u043a\u0438\u043c \u0457\u0457 \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0454 \u044f\u0434\u0440\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c. \u0423 \u043f\u0440\u043e\u0446\u0435\u0441\u0456 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438\n\u043c\u0456\u043d\u0456\u043c\u0456\u0437\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043d\u0430\u0434\u043b\u0438\u0448\u043a\u043e\u0432\u0438\u0445 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0456\u0439 \u0442\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443, \u0449\u043e \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u043f\u043e\u0442\u0440\u0435\u0431 \u044f\u0434\u0440\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u0443\n\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0432\u0430\u043d\u0456\u0439 \u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0456 \u0442\u0430 \u0447\u0456\u0442\u043a\u043e\u043c\u0443 \u0440\u043e\u0437\u0434\u0456\u043b\u0435\u043d\u043d\u0456 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0435\u0439."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"loader-arch.svg",src:t(55307).Z+"",width:"912",height:"1122"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"\u041d\u0430\u0440\u0430\u0437\u0456 \u043e\u0431\u0440\u043e\u0431\u043a\u043e\u044e \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0437\u0430\u0439\u043c\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u041f\u0440\u043e\u0442\u0435, \u0443 \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u0456\u0445 \u0432\u0435\u0440\u0441\u0456\u044f\u0445, \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0447\u0438 \u0437\nv3.0.0, \u0431\u0443\u0434\u0435 \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u043e \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e\u0457 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0456\u0457 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457, \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0439 \u0442\u0430 \u0456\u043d\u0448\u0438\u0445 \u0432\u0430\u0436\u043b\u0438\u0432\u0438\u0445 \u0430\u0441\u043f\u0435\u043a\u0442\u0456\u0432. \u0426\u0435\u0439\n\u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b \u0431\u0443\u0434\u0435 \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u0438\u0439 \u0437\u0430\u0432\u0434\u044f\u043a\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0430\u043c \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0439 \u0442\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457."})}),"\n",(0,o.jsx)(n.h2,{id:"\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,o.jsx)(n.p,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u0443 \u044f\u0434\u0440\u0456 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u0456 \u043b\u0438\u0448\u0435 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u041f\u043e\u0434\u0430\u043b\u044c\u0448\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0430 \u0441\u0445\u0435\u043c\u0438\n\u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454\u0442\u044c\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u043e\u043c \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438. \u041f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0443 \u0434\u043e\n\u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f."}),"\n",(0,o.jsx)(n.p,{children:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u043e\u043f\u0438\u0441\u0443 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0430 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438 \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0454 \u0442\u0430\u043a:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { inversify } from '~packages'\nimport type { NSchemaLoader } from '~types'\n\nconst { injectable } = inversify\n\n@injectable()\nexport class SchemeLoader implements ISchemeLoader {\n    // other class structure\n\n    public setBusinessLogic(services: ServiceStructure[]): void {\n        services.forEach((service) => {\n            service.domains.forEach((domain) => {\n                const name = domain.domain;\n                const {documents} = domain;\n\n                this._setDomain(name);\n                if (documents.router) {\n                    this._setRoute(name, documents.router);\n                }\n                if (documents.dictionaries) {\n                    this._setDictionaries(name, documents.dictionaries);\n                }\n                if (documents.emitter) {\n                    this._setEmitter(name, documents.emitter);\n                }\n                if (documents.wsListener) {\n                    this._setWsListener(name, documents.wsListener);\n                }\n                if (documents.typeormSchema) {\n                    this._setTypeormSchema(name, documents.typeormSchema);\n                }\n                if (documents.typeormRepo && documents.typeormSchema) {\n                    this._setTypeormRepository(\n                        name,\n                        documents.typeormSchema.model,\n                        documents.typeormRepo\n                    );\n                }\n\n                if (documents.validators) {\n                    this._setValidator(name, documents.validators);\n                }\n\n                this._applyDomainToService(service.service, domain.domain);\n            });\n        });\n    }\n\n    private _applyDomainToService(service: string, domain: string): void {\n        const sStorage = this.services.get(service);\n        if (!sStorage) {\n            this.services.set(\n                service,\n                new Map<string, NSchemaLoader.DomainStorage>()\n            );\n            this._applyDomainToService(service, domain);\n            return;\n        }\n\n        const dStorage = this._domains.get(domain);\n        if (!dStorage) {\n            throw new Error(`Domain ${domain} not found`);\n        }\n\n        sStorage.set(domain, dStorage);\n    }\n\n    // other class structure\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u0434\u0435:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SchemeLoader"})," - \u043a\u043b\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0447\u0456 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"setBusinessLogic"})," - \u043f\u0443\u0431\u043b\u0456\u0447\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u0433\u0440\u0443\u043f\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432 \u0437 \u0431\u0456\u0437\u043d\u0435\u0441-\u0441\u0445\u0435\u043c\u0438."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"_applyDomainToService"})," - \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0441\u0443 \u043d\u043e\u0432\u043e\u0457 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0457 \u043e\u0431\u043b\u0430\u0441\u0442\u0456"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},55307:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/loader-arch-d14faeb224c06b914b62bd34bb5f5a3e.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var o=t(67294);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);