"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8635],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93687:function(e,n,t){var r=t(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",u=a?"macOS":l?"Windows":"Linux";n.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),a=t(34334),l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(83117),a=t(67294),l=t(34334),o=t(12466),u=t(76775),i=t(91980),c=t(67392),s=t(50012);function p(e){return function(e){var n;return(null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,c]=m({queryString:t,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,s.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=i??p;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var v=t(72389),g="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==u&&(p(n),i(r))},f=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>s.push(e),onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":u===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function O(e){const n=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},1082:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=t(83117),a=(t(67294),t(3905)),l=t(74866),o=t(85162),u=t(93687);const i={sidebar_label:"\u901a\u7528",title:"\u901a\u7528"},c=void 0,s={unversionedId:"ui/preferences/container-engine/general",id:"ui/preferences/container-engine/general",title:"\u901a\u7528",description:"\u4e3a Rancher Desktop \u8bbe\u7f6e[\u5bb9\u5668\u8fd0\u884c\u65f6]\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 [containerd] \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 [dockerd (moby)] \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/preferences/container-engine/general.md",sourceDirName:"ui/preferences/container-engine",slug:"/ui/preferences/container-engine/general",permalink:"/zh/next/ui/preferences/container-engine/general",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/container-engine/general.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u901a\u7528",title:"\u901a\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7406",permalink:"/zh/next/ui/preferences/wsl/proxy"},next:{title:"\u5141\u8bb8\u7684\u955c\u50cf",permalink:"/zh/next/ui/preferences/container-engine/allowed-images"}},p={},d=[{value:"Container Engine",id:"container-engine",level:4}],f={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a Rancher Desktop \u8bbe\u7f6e",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 ",(0,a.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002"),(0,a.kt)(l.Z,{groupId:"os",defaultValue:u.Z.defaultOs,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Windows_containerEngine_tabGeneral.png",alt:null}))),(0,a.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_containerEngine_tabGeneral.png",alt:null}))),(0,a.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/Linux_containerEngine_tabGeneral.png",alt:null})))),(0,a.kt)("h4",{id:"container-engine"},"Container Engine"),(0,a.kt)("p",null,"\u5207\u6362\u5230\u4e0d\u540c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u65f6\u5019\uff1a\u4f7f\u7528\u5f53\u524d\u5bb9\u5668\u8fd0\u884c\u65f6\u6784\u5efa\u6216\u62c9\u53d6\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u955c\u50cf\u5728\u5207\u6362\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4e0d\u53ef\u7528\u3002"))}m.isMDXComponent=!0}}]);