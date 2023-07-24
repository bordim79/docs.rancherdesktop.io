"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4068],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93687:function(e,t,n){var r=n(10412);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",l=a?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(34334),i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(83117),a=n(67294),i=n(34334),o=n(12466),l=n(76775),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:n,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=s??p;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var h=n(72389),b="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=v(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function O(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},7739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905)),i=n(74866),o=n(85162);n(93687);const l={title:"Increasing Open File Limit"},s=void 0,u={unversionedId:"how-to-guides/increasing-open-file-limit",id:"version-1.9/how-to-guides/increasing-open-file-limit",title:"Increasing Open File Limit",description:"You may wish to increase the open file limit as Rancher Desktop's default ulimit setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes.",source:"@site/versioned_docs/version-1.9/how-to-guides/increasing-open-file-limit.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/increasing-open-file-limit",permalink:"/1.9/how-to-guides/increasing-open-file-limit",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/how-to-guides/increasing-open-file-limit.md",tags:[],version:"1.9",frontMatter:{title:"Increasing Open File Limit"},sidebar:"tutorialSidebar",previous:{title:"Provisioning Scripts",permalink:"/1.9/how-to-guides/provisioning-scripts"},next:{title:"Running When Offline",permalink:"/1.9/how-to-guides/running-air-gapped"}},c={},p=[{value:"macOS &amp; Linux Steps",id:"macos--linux-steps",level:2},{value:"Windows Steps",id:"windows-steps",level:2}],d={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/how-to-guides/increasing-open-file-limit"})),(0,a.kt)("p",null,"You may wish to increase the open file limit as Rancher Desktop's default ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit")," setting for pods may be too low, depending on your use case. This guide provides steps for increasing the open file limit using provisioning scripts alongside Rancher Desktop's internal processes."),(0,a.kt)("h2",{id:"macos--linux-steps"},"macOS & Linux Steps"),(0,a.kt)("p",null,"First, use lima override.yaml to write the provisioning scripts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," file at below path")),(0,a.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,a.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,a.kt)("p",null,"You can then use the script below to increase the ",(0,a.kt)("inlineCode",{parentName:"p"},"ulimit")," for containers inside your created ",(0,a.kt)("inlineCode",{parentName:"p"},"override.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,a.kt)("p",null,"If using the Elastic platform, please use the script below to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"vm.max_map_count")," parameter as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n    sysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"Lastly, please stop and restart Rancher Desktop in order for the updated limits to take effect."),(0,a.kt)("h2",{id:"windows-steps"},"Windows Steps"),(0,a.kt)("p",null,"First, be sure that you have run Rancher Desktop at least once in order for the configurations to initialize."),(0,a.kt)("p",null,"You can then create a provisioning script, say ",(0,a.kt)("inlineCode",{parentName:"p"},"map_count.start"),", at ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\rancher-desktop\\provisioning")," with the below code to update the open file limit by increasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_map_count")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nsysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"Lastly, please stop and restart Rancher Desktop for these changes to take effect."))}f.isMDXComponent=!0}}]);