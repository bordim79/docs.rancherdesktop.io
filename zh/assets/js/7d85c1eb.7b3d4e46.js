"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8496],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93687:function(e,t,n){var r=n(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",u=a?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:u,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(34334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(83117),a=n(67294),l=n(34334),o=n(12466),u=n(76775),i=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=b({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=i??d;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var v=n(72389),h="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(d(t),i(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function O(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},54044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));n(74866),n(85162),n(93687);const l={title:"\u6982\u8ff0",slug:"/"},o=void 0,u={unversionedId:"getting-started/introduction",id:"version-1.9/getting-started/introduction",title:"\u6982\u8ff0",description:"Rancher Desktop \u662f\u4e00\u6b3e\u5728\u684c\u9762\u4e0a\u63d0\u4f9b\u5bb9\u5668\u548c Kubernetes \u7ba1\u7406\u7684\u5e94\u7528\u3002\u5b83\u9002\u7528\u4e8e Mac\uff08\u5305\u62ec Intel \u548c Apple \u82af\u7247\uff09\u3001Windows \u548c Linux\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/zh/1.9/",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/getting-started/introduction.md",tags:[],version:"1.9",frontMatter:{title:"\u6982\u8ff0",slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u5b89\u88c5",permalink:"/zh/1.9/getting-started/installation"}},i={},s=[{value:"\u5bb9\u5668\u7ba1\u7406",id:"\u5bb9\u5668\u7ba1\u7406",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rancher \u4e0e Rancher Desktop",id:"rancher-\u4e0e-rancher-desktop",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop \u662f\u4e00\u6b3e\u5728\u684c\u9762\u4e0a\u63d0\u4f9b\u5bb9\u5668\u548c Kubernetes \u7ba1\u7406\u7684\u5e94\u7528\u3002\u5b83\u9002\u7528\u4e8e Mac\uff08\u5305\u62ec Intel \u548c Apple \u82af\u7247\uff09\u3001Windows \u548c Linux\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.10/getting-started/introduction_preferences_tabKubernetes.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4e0a\u56fe\u5de6\u8fb9\u662f Mac \u4e0a\u7684 Kubernetes \u8bbe\u7f6e\uff0c\u53f3\u8fb9\u662f Windows\u3002")),(0,a.kt)("h2",{id:"\u5bb9\u5668\u7ba1\u7406"},"\u5bb9\u5668\u7ba1\u7406"),(0,a.kt)("p",null,"Rancher Desktop \u63d0\u4f9b\u4e86\u6784\u5efa\u3001\u63a8\u9001\u548c\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\u4ee5\u53ca\u8fd0\u884c\u5bb9\u5668\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7 Docker CLI\uff08\u5f53\u4f60\u9009\u62e9 Moby/dockerd \u4f5c\u4e3a\u5f15\u64ce\u65f6\uff09\u6216 nerdctl\uff08\u5f53\u4f60\u9009\u62e9 containerd \u4f5c\u4e3a\u5f15\u64ce\u65f6\uff09\u5b9e\u73b0\uff0c\u800c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/nerdctl"},"nerdctl"),' \u662f containerd \u9879\u76ee\u63d0\u4f9b\u7684 "\u517c\u5bb9 containerd \u7684 Docker CLI"\u3002'),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Kubernetes \u5185\u7f6e\u5728 Rancher Desktop \u4e2d\uff0c\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io/"},"K3s")," \u63d0\u4f9b\u3002K3s \u662f\u4e00\u4e2a\u7ecf\u8fc7\u8ba4\u8bc1\u7684\u8f7b\u91cf\u7ea7\u53d1\u884c\u7248\u3002\u901a\u8fc7 Rancher Desktop\uff0c\u4f60\u80fd\u591f ",(0,a.kt)("em",{parentName:"p"},"\u9009\u62e9\u4f60\u7684 Kubernetes \u7248\u672c"),"\uff0c\u5e76\u4e14",(0,a.kt)("em",{parentName:"p"},"\u4e00\u952e\u91cd\u7f6e Kubernetes \u6216 Kubernetes \u4ee5\u53ca\u6574\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002"),(0,a.kt)("h2",{id:"rancher-\u4e0e-rancher-desktop"},"Rancher \u4e0e Rancher Desktop"),(0,a.kt)("p",null,"\u867d\u7136 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," \u548c Rancher Desktop \u7684\u540d\u5b57\u91cc\u90fd\u5305\u542b ",(0,a.kt)("em",{parentName:"p"},"Rancher"),"\uff0c\u4f46\u5b83\u4eec\u7684\u529f\u80fd\u662f\u6709\u5dee\u522b\u7684\u3002Rancher Desktop \u4e0d\u662f\u684c\u9762\u7248 Rancher\u3002Rancher \u662f\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684\u5f3a\u5927\u89e3\u51b3\u65b9\u6848\uff0cRancher Desktop \u63d0\u4f9b\u672c\u5730 Kubernetes \u548c\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u8fd9\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\u76f8\u8f85\u76f8\u6210\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5728\u672c\u5730\u7cfb\u7edf\u4e0a\u8fd0\u884c Rancher\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u5b89\u88c5\u5230 Rancher Desktop \u4e2d\u3002"))}d.isMDXComponent=!0}}]);