"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[487],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),l=n(34334),i=n(12466),o=n(76775),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),v(e)}),[s,v,l]),tabValues:l}}var k=n(72389),b="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},21532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),l=n(74866),i=n(85162);n(93687);const o={title:"\u914d\u7f6e\u811a\u672c"},u=void 0,s={unversionedId:"how-to-guides/provisioning-scripts",id:"version-1.9/how-to-guides/provisioning-scripts",title:"\u914d\u7f6e\u811a\u672c",description:"\u914d\u7f6e\u811a\u672c\u53ef\u4ee5\u8986\u76d6 Rancher Desktop \u7684\u4e00\u4e9b\u5185\u90e8\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u7528\u4e8e\u5411 K3s \u63d0\u4f9b\u67d0\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6dfb\u52a0\u989d\u5916\u7684\u6302\u8f7d\u3001\u589e\u52a0 ulimit \u503c\u7b49\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a macOS\u3001Linux \u548c Windows \u4e3b\u673a\u8bbe\u7f6e\u811a\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/how-to-guides/provisioning-scripts.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/provisioning-scripts",permalink:"/zh/1.9/how-to-guides/provisioning-scripts",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/provisioning-scripts.md",tags:[],version:"1.9",frontMatter:{title:"\u914d\u7f6e\u811a\u672c"},sidebar:"tutorialSidebar",previous:{title:"Skaffold \u4e0e Rancher Desktop",permalink:"/zh/1.9/how-to-guides/skaffold-and-rancher-desktop"},next:{title:"\u589e\u52a0\u6253\u5f00\u6587\u4ef6\u9650\u5236",permalink:"/zh/1.9/how-to-guides/increasing-open-file-limit"}},c={},p=[{value:"macOS &amp; Linux",id:"macos--linux",level:2},{value:"Windows",id:"windows",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u914d\u7f6e\u811a\u672c\u53ef\u4ee5\u8986\u76d6 Rancher Desktop \u7684\u4e00\u4e9b\u5185\u90e8\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u7528\u4e8e\u5411 K3s \u63d0\u4f9b\u67d0\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6dfb\u52a0\u989d\u5916\u7684\u6302\u8f7d\u3001\u589e\u52a0 ulimit \u503c\u7b49\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a macOS\u3001Linux \u548c Windows \u4e3b\u673a\u8bbe\u7f6e\u811a\u672c\u3002"),(0,r.kt)("h2",{id:"macos--linux"},"macOS & Linux"),(0,r.kt)("p",null,"\u5728 macOS \u548c Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 lima override.yaml \u6765\u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u4ee5\u4e0b\u8def\u5f84\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6587\u4ef6\u3002")),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e0a\u4e00\u6b65\u4e2d\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6587\u4ef6\u4e2d\u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u6765\u589e\u52a0\u5bb9\u5668\u7684 ulimit\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6765\u8986\u76d6/\u4fee\u6539 lima \u914d\u7f6e\u8bbe\u7f6e\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u521b\u5efa\u4e86\u989d\u5916\u7684\u6302\u8f7d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mounts:\n  - location: /some/path\n    writable: true\n")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728 Windows \u4e0a\uff0c\u4f60\u53ea\u80fd\u4e3a 1.1.0 \u6216\u66f4\u9ad8\u7248\u672c\u7684 Rancher Desktop \u4f7f\u7528\u8fd9\u4e9b\u914d\u7f6e\u811a\u672c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f60\u9700\u8981\u81f3\u5c11\u8fd0\u884c Rancher Desktop \u4e00\u6b21\u4ee5\u5141\u8bb8\u5b83\u521b\u5efa\u914d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"%AppData%\\\\rancher-desktop\\\\provisioning")," \u76ee\u5f55\u3002\u5b8c\u6574\u8def\u5f84\u7684\u793a\u4f8b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\\\Users\\\\Joe\\\\AppData\\\\Roaming\\\\rancher-desktop\\\\provisioning"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\uff0c\u4efb\u4f55\u6587\u4ef6\u6269\u5c55\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".start")," \u7684\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s-overrides.start"),"\uff09\u90fd\u53ef\u4ee5\u5728 ",(0,r.kt)("em",{parentName:"p"},"Rancher Desktop \u542f\u52a8 Kubernetes \u540e\u7aef\uff08\u5982\u679c\u542f\u7528\uff09")," \u65f6\u6267\u884c\u3002\u6b64\u7c7b\u6587\u4ef6\u5c06\u5728 Rancher Desktop WSL \u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".start")," \u6587\u4ef6\u7684\u793a\u4f8b\u6d41\u7a0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rancher Desktop \u5185\u90e8\u8bbe\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u914d\u7f6e\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u5728 UI \u4e2d\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dockerd")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"containerd")),(0,r.kt)("li",{parentName:"ul"},"Kubernetes (K3s)")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"%AppData%\\\\rancher-desktop\\\\provisioning\\\\insecure-registry.start")," \u5c06\u5141\u8bb8 ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u9ed8\u8ba4\u4f7f\u7528\u4e0d\u5b89\u5168\u7684\u955c\u50cf\u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nmkdir -p /etc/nerdctl\ncat >  /etc/nerdctl/nerdctl.toml <<EOF\ninsecure_registry = true\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u6587\u4ef6\u6269\u5c55\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},".stop")," \u7684\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"wipe-data.stop"),"\uff09\u53ef\u4ee5\u5728 ",(0,r.kt)("em",{parentName:"li"},"Rancher Desktop \u5173\u95ed Kubernetes \u540e\u7aef\uff08\u5982\u679c\u542f\u7528\uff09\u540e")," \u6267\u884c\u3002\u6b64\u7c7b\u6587\u4ef6\u5c06\u5728\u76f8\u540c\u7684 Rancher Desktop WSL \u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".stop")," \u6587\u4ef6\u7684\u793a\u4f8b\u6d41\u7a0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62 ",(0,r.kt)("inlineCode",{parentName:"li"},"k3s"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"dockerd")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"containerd")),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u53d6\u6d88\u914d\u7f6e\u7684\u811a\u672c")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u811a\u672c\u9700\u8981\u4ee5 Unix \u884c\u7ed3\u5c3e\u4fdd\u5b58\uff0c\u672a\u5b8c\u6210\u884c\u5c3e\u8f6c\u6362\uff0c\u4e14\u5177\u6709 DOS \u884c\u7ed3\u5c3e\u7684\u6587\u4ef6\u53ef\u80fd\u4f1a\u4ea7\u751f\u610f\u60f3\u4e0d\u5230\u7684\u7ed3\u679c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u66f4\u6539\u7684\u5185\u5bb9\u662f\u6709\u9650\u5236\u7684\u3002\u4f8b\u5982\uff0c\u4f60\u4e0d\u80fd\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u66f4\u6539 WSL2 \u4e0a\u7684\u786c ulimit\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u914d\u7f6e\u811a\u672c\uff0c\u5982\u679c\u4f60\u5bf9\u914d\u7f6e\u811a\u672c\u6709\u4efb\u4f55\u5177\u4f53\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u5728 Slack/Github \u4e0a\u4e0e Rancher Desktop \u56e2\u961f\u8054\u7cfb\u3002"))}m.isMDXComponent=!0}}]);