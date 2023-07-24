"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1277],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return r?a.createElement(m,u(u({ref:t},s),{},{components:r})):a.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var c=2;c<l;c++)u[c]=r[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93687:function(e,t,r){var a=r(10412);const n=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),u=n?"ios":"android",o=n?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:u,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(67294),n=r(34334),l="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return O}});var a=r(83117),n=r(67294),l=r(34334),u=r(12466),o=r(76775),i=r(91980),c=r(67392),s=r(50012);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:r,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=i??d;return f({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var b=r(72389),h="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:o,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),p=e=>{const t=e.currentTarget,r=s.indexOf(t),a=c[r].value;a!==o&&(d(t),i(a))},f=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:u}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:p},u,{className:(0,l.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":o===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},68627:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=r(83117),n=(r(67294),r(3905)),l=r(74866),u=r(85162);r(93687);const o={sidebar_label:"\u786c\u4ef6",title:"\u786c\u4ef6\uff08macOS \u548c Linux\uff09"},i=void 0,c={unversionedId:"ui/preferences/virtual-machine/hardware",id:"version-1.9/ui/preferences/virtual-machine/hardware",title:"\u786c\u4ef6\uff08macOS \u548c Linux\uff09",description:"Memory",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/ui/preferences/virtual-machine/hardware.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/hardware",permalink:"/zh/1.9/ui/preferences/virtual-machine/hardware",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/virtual-machine/hardware.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"\u786c\u4ef6",title:"\u786c\u4ef6\uff08macOS \u548c Linux\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u4eff\u771f",permalink:"/zh/1.9/ui/preferences/virtual-machine/emulation"},next:{title:"\u7f51\u7edc",permalink:"/zh/1.9/ui/preferences/virtual-machine/network"}},s={},d=[{value:"Memory",id:"memory",level:3},{value:"CPU",id:"cpu",level:3}],p={toc:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"macOS",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabHardware.png",alt:null}))),(0,n.kt)(u.Z,{value:"Linux",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_virtualMachine_tabHardware.png",alt:null})))),(0,n.kt)("h3",{id:"memory"},"Memory"),(0,n.kt)("p",null,"\u5206\u914d\u7ed9 Rancher Desktop \u7684\u5185\u5b58\u3002\u53ef\u9009\u8303\u56f4\u53d6\u51b3\u4e8e\u4f60\u7684\u7cfb\u7edf\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a\u5206\u914d\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u670d\u52a1\u3002"),(0,n.kt)("h3",{id:"cpu"},"CPU"),(0,n.kt)("p",null,"\u5206\u914d\u7ed9 Rancher Desktop \u7684 CPU \u6570\u91cf\u3002\u53ef\u9009\u8303\u56f4\u53d6\u51b3\u4e8e\u4f60\u7684\u7cfb\u7edf\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a\u5206\u914d\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u670d\u52a1\u3002"))}f.isMDXComponent=!0}}]);