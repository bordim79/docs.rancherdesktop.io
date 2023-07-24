"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7588],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93687:function(e,t,n){var a=n(10412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),l=n(34334),i=n(12466),o=n(76775),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),v(e)}),[s,v,l]),tabValues:l}}var b=n(72389),h="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},96641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),l=n(74866),i=n(85162);n(93687);const o={sidebar_label:"\u5377",title:"\u5377\uff08macOS \u548c Linux\uff09"},u=void 0,s={unversionedId:"ui/preferences/virtual-machine/volumes",id:"ui/preferences/virtual-machine/volumes",title:"\u5377\uff08macOS \u548c Linux\uff09",description:"Mount Type",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/preferences/virtual-machine/volumes.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/volumes",permalink:"/zh/next/ui/preferences/virtual-machine/volumes",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/virtual-machine/volumes.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u5377",title:"\u5377\uff08macOS \u548c Linux\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc",permalink:"/zh/next/ui/preferences/virtual-machine/network"},next:{title:"\u96c6\u6210",permalink:"/zh/next/ui/preferences/wsl/integrations"}},c={},p=[{value:"Mount Type",id:"mount-type",level:2},{value:"reverse-sshfs",id:"reverse-sshfs",level:3},{value:"9p",id:"9p",level:3},{value:"virtiofs",id:"virtiofs",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mount-type"},"Mount Type"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabVolumes.png",alt:null})))),(0,r.kt)("h3",{id:"reverse-sshfs"},"reverse-sshfs"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," \u9009\u9879\u5361\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"reverse-sshfs")," \u6302\u8f7d\u7c7b\u578b\u3002\u8fd9\u4f1a\u901a\u8fc7\u5728\u4e3b\u673a\u4e0a\u8fd0\u884c SFTP \u670d\u52a1\u5668\u6765\u516c\u5f00\u6587\u4ef6\u7cfb\u7edf\u3002\u7136\u540e\uff0c\u4e3b\u673a\u5b9e\u4f8b\u5c06\u542f\u52a8\u4e0e\u6765\u5bbe\u7684 SSH \u8fde\u63a5\uff0c\u5141\u8bb8\u5176\u8fde\u63a5\u5230 SFTP \u670d\u52a1\u5668\u3002\u8fd9\u662f\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u6302\u8f7d\u7c7b\u578b\u3002"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes_9P.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabVolumes_9P.png",alt:null})))),(0,r.kt)("h3",{id:"9p"},"9p"),(0,r.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u8bbe\u7f6e\u3002")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," \u9009\u9879\u5361\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/filesystems/9p.txt"},"9p")," \u6302\u8f7d\u7c7b\u578b\u3002\u8fd9\u5c06\u901a\u8fc7\u4f7f\u7528 QEMU \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"virtio-9p-pci")," \u8bbe\u5907\u6765\u516c\u5f00\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache Mode\uff1a\n\u6307\u5b9a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"mmap")," \u7684\u7f13\u5b58\u7b56\u7565\u3002\u7f13\u5b58\u9009\u9879\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"[none\u3001loose\u3001fscache\u3001mmap]"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Memory Size In KiB:\n\u7528\u6237\u53ef\u4ee5\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"9p")," \u6570\u636e\u5305\u5927\u5c0f\u7684\u5b57\u8282\u6570\u3002\u6700\u5c0f\u503c\u4e3a 4 KiB\uff0c\u9ed8\u8ba4\u503c\u4e3a 128 KiB\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Protocol Version\uff1a\n\u7528\u6237\u53ef\u4ee5\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"9p")," \u534f\u8bae\u7248\u672c\u3002\u9009\u9879\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"[9p2000, 9p2000.u, 9p2000.L]"),"\uff0c\u9ed8\u8ba4\u534f\u8bae\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"9p200.L"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Security Model\uff1a\n\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u53d7\u652f\u6301\u7684\u5b89\u5168\u6a21\u578b\uff0c\u9009\u9879\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"[passthrough\u3001mapped-xattr\u3001mapped-file\u3001none]"),"\u3002\u9ed8\u8ba4\u5b89\u5168\u8bbe\u7f6e\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),"\u3002"))),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabVolumes_virtiofs.png",alt:null})))),(0,r.kt)("h3",{id:"virtiofs"},"virtiofs"),(0,r.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u8bbe\u7f6e\u3002")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," \u9009\u9879\u5361\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://virtio-fs.gitlab.io/"},"virtiofs")," \u6302\u8f7d\u7c7b\u578b\u3002\u8fd9\u662f\u4f7f\u7528 Apple ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtualization.Framework")," \u5171\u4eab\u76ee\u5f55\u8bbe\u5907\u5b9e\u73b0\u7684\u3002"))}d.isMDXComponent=!0}}]);