(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0TrG":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),r=n("TjRS"),o=n("ZFoC"),s=n("vGI8");n("aD51");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/demos/paste-tags.mdx"}});var i={_frontmatter:c},p=r.a;function u(e){var t,n=e.components,u=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,m({},i,u,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"paste-tags"},"Paste Tags"),Object(a.b)(o.c,{__position:0,__code:"<PasteTags />",__scope:(t={props:u,DefaultLayout:r.a,Playground:o.c,Props:o.d,PasteTags:s.a},t.DefaultLayout=r.a,t._frontmatter=c,t),mdxType:"Playground"},Object(a.b)(s.a,{mdxType:"PasteTags"})),Object(a.b)("pre",null,Object(a.b)("code",m({parentName:"pre"},{className:"language-javascript"}),"\n// Try input 'a,b,c,1,2,3,a'\n// or Paste with 'a,b,c,1,2,3,a'\n\nimport React, { FC } from 'react'\nimport { Select, Form } from 'antd'\nimport 'antd/dist/antd.css'\nimport { pasteTags } from 'antd-utils'\nimport { useForm } from 'antd/lib/form/util'\n\nexport const PasteTags: FC = () => {\n  const [form] = useForm();\n  return (\n    <>\n      <Form form={form}>\n        <Form.Item name=\"name\">\n          <Select\n            mode=\"tags\"\n            onChange={(value: string[]) => pasteTags(value, form, \"name\")} />\n        </Form.Item>\n      </Form>\n    </>\n  )\n}\n")))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/demos/paste-tags.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-demos-paste-tags-mdx-9608d69d7456e96292a5.js.map