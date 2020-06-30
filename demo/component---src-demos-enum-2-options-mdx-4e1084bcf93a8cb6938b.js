(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FS0Z:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return u}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var o=t("/FXl"),r=t("TjRS"),i=t("ZFoC"),a=t("ibvc");t("aD51");function m(){return(m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/demos/enum2options.mdx"}});var c={_frontmatter:s},p=r.a;function u(n){var e,t=n.components,u=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(o.b)(p,m({},c,u,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"enum-2-options"},"Enum 2 Options"),Object(o.b)(i.c,{__position:0,__code:"<Enum2Options />",__scope:(e={props:u,DefaultLayout:r.a,Playground:i.c,Props:i.d,Enum2Options:a.a},e.DefaultLayout=r.a,e._frontmatter=s,e),mdxType:"Playground"},Object(o.b)(a.a,{mdxType:"Enum2Options"})),Object(o.b)("pre",null,Object(o.b)("code",m({parentName:"pre"},{className:"language-javascript"}),"\nimport React, { FC } from 'react'\nimport { Select, Form } from 'antd'\nimport 'antd/dist/antd.css'\nimport { enum2Options } from 'antd-utils'\n\n// notice: Don't use Number as index of the Enum, or the ts-lint would throw error \n// (also numberic index will be filter out in enum2Options function)\n\nenum ESelectOptions {\n  option0 = 0,\n  optionA = \"a\",\n  optionTest = \"test\",\n  // 0 = a , // sorry it's invalid\n}\n\nconst options = enum2Options(ESelectOptions)\n\nexport const Enum2Options: FC = () => {\n\n  return (\n    <>\n      <Form>\n        <Form.Item name=\"name\">\n          <Select>\n            {\n              (options || []).map((item: any) => (\n                <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>\n              ))\n            }\n          </Select>\n        </Form.Item>\n      </Form>\n    </>\n  )\n}\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/demos/enum2options.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-demos-enum-2-options-mdx-4e1084bcf93a8cb6938b.js.map