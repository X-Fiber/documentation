"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1013],{17498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(85893),a=n(11151),s=n(74866),o=n(85162);const l={},u=void 0,c={id:"scheme/server/documents/tabs/realization.server-typeorm-schema",title:"realization.server-typeorm-schema",description:"",source:"@site/docs/scheme/server/documents/tabs/realization.server-typeorm-schema.mdx",sourceDirName:"scheme/server/documents/tabs",slug:"/scheme/server/documents/tabs/realization.server-typeorm-schema",permalink:"/documentation/docs/scheme/server/documents/tabs/realization.server-typeorm-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheme/server/documents/tabs/realization.server-typeorm-schema.mdx",tags:[],version:"current",frontMatter:{}},i={},m=[];function d(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"common",label:"typescript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { setTypeormSchema } from '@x-fiber/typescheme';\nimport type { NSysUsers } from '~SysAdmin/Domains/Types';\nimport type { SysAdminEntities } from '~SysAdmin/Common/Types';\n\nexport const SysUsersTypeormEntity = setTypeormSchema<SysAdminEntities, NSysUsers.EntitySchema>({\n    model: 'SYS_USERS_REG',\n    getSchema: (agent) => {\n        return {\n            name: 'SYS_USERS_REG',\n            columns: {\n                    userId: {\n                    type: 'char',\n                    generated: 'uuid',\n                    primary: true,\n                },\n                    first_name: {\n                    type: 'varchar',\n                    length: 50,\n                    nullable: false,\n                    comment: 'User first name',\n                },\n                    middle_name: {\n                    type: 'varchar',\n                    length: 50,\n                    nullable: true,\n                    comment: 'User middle name',\n                },\n                    last_name: {\n                    type: 'varchar',\n                    length: 50,\n                    nullable: false,\n                    comment: 'User last name',\n                },\n                    birthdate: {\n                    type: 'date',\n                    nullable: true,\n                },\n                    password: {\n                    type: 'varchar',\n                    length: 200,\n                    nullable: false,\n                },\n            },\n        };\n    },\n});\n\n"})})}),(0,r.jsx)(o.Z,{value:"d.ts",label:"type declaration",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type SysAdminEntities = 'SYS_USERS_REG'\n\nexport namespace NSysUsers {\n    export type EntitySchema = {\n        userId: string;\n        first_name: string;\n        middle_name: string;\n        last_name: string;\n        password: string;\n        birthdate: string;\n    };\n}\n"})})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(90512);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),a=n(90512),s=n(12466),o=n(16550),l=n(20469),u=n(91980),c=n(67392),i=n(50012);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,m]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),b(e)}),[m,b,s]),tabValues:s}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==r&&(c(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:m,onClick:i,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function S(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(S,{...e,...t})]})}function E(e){const t=(0,b.Z)();return(0,y.jsx)(x,{...e,children:m(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);