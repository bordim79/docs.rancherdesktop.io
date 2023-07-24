"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[7093],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),l=n(34334),a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,s),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(83117),l=n(67294),a=n(34334),s=n(12466),o=n(76775),i=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,u]=k({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=i??d;return m({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var v=n(72389),h="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),i(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=f(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",h)},l.createElement(b,(0,r.Z)({},e,t)),l.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return l.createElement(T,(0,r.Z)({key:String(t)},e))}},10490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(83117),l=(n(67294),n(3905)),a=n(74866),s=n(85162);const o={title:"\u547d\u4ee4\u53c2\u8003\uff1ardctl"},i=void 0,u={unversionedId:"references/rdctl-command-reference",id:"version-latest/references/rdctl-command-reference",title:"\u547d\u4ee4\u53c2\u8003\uff1ardctl",description:"rdctl \u662f\u5305\u542b\u5728 Rancher Desktop \u4e2d\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b83\u80fd\u8ba9\u4f60\u901a\u8fc7\u547d\u4ee4\u884c\u8bbf\u95ee GUI \u529f\u80fd\u3002rdctl \u65e8\u5728\u5e2e\u52a9\u7528\u6237\u5b8c\u6210\u811a\u672c\uff08\u7528\u4e8e\u81ea\u52a8\u5316\u3001CI/CD\uff09\u3001\u6545\u969c\u6392\u9664\u3001\u8fdc\u7a0b\u7ba1\u7406\u7b49\u4efb\u52a1\u3002\u5f53\u524d\u7248\u672c\u7684 rdctl \u652f\u6301\u4ee5\u4e0b\u547d\u4ee4\uff08\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u5c06\u652f\u6301\u66f4\u591a\u547d\u4ee4\uff09\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/zh/references/rdctl-command-reference",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/references/rdctl-command-reference.md",tags:[],version:"latest",frontMatter:{title:"\u547d\u4ee4\u53c2\u8003\uff1ardctl"},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/references/architecture"},next:{title:"\u6346\u7ed1\u7684\u5b9e\u7528\u7a0b\u5e8f",permalink:"/zh/references/bundled-utilities"}},c={},d=[{value:"rdctl \u6216 rdctl help",id:"rdctl-\u6216-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl extension install",id:"rdctl-extension-install",level:2},{value:"rdctl extension ls",id:"rdctl-extension-ls",level:2},{value:"rdctl extension uninstall",id:"rdctl-extension-uninstall",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u662f\u5305\u542b\u5728 Rancher Desktop \u4e2d\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b83\u80fd\u8ba9\u4f60\u901a\u8fc7\u547d\u4ee4\u884c\u8bbf\u95ee GUI \u529f\u80fd\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u65e8\u5728\u5e2e\u52a9\u7528\u6237\u5b8c\u6210\u811a\u672c\uff08\u7528\u4e8e\u81ea\u52a8\u5316\u3001CI/CD\uff09\u3001\u6545\u969c\u6392\u9664\u3001\u8fdc\u7a0b\u7ba1\u7406\u7b49\u4efb\u52a1\u3002\u5f53\u524d\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u652f\u6301\u4ee5\u4e0b\u547d\u4ee4\uff08\u5373\u5c06\u53d1\u5e03\u7684\u7248\u672c\u4e2d\u5c06\u652f\u6301\u66f4\u591a\u547d\u4ee4\uff09\uff1a"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u5f53\u524d\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u662f\u5b9e\u9a8c\u6027\u7684\uff0c\u56e0\u6b64\u6240\u6709\u5b50\u547d\u4ee4\u7684\u540d\u79f0\u3001\u53c2\u6570\u4ee5\u53ca\u5b83\u4eec\u7684\u8f93\u51fa\u53ef\u80fd\u4f1a\u6539\u53d8\u3002")),(0,l.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u4e3a\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u547d\u4ee4\u5217\u8868"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"rdctl list-settings"),(0,l.kt)("li",{parentName:"ul"},"rdctl set"),(0,l.kt)("li",{parentName:"ul"},"rdctl shutdown")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5f88\u591a ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u547d\u4ee4\u90fd\u6709\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"API")," \u8c03\u7528\u3002\u4e0b\u9762\u5217\u51fa\u4e86\u4e24\u79cd\u683c\u5f0f\u7684\u53ef\u7528\u547d\u4ee4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"api")," \u793a\u4f8b\u5047\u5b9a\u4f60\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," \u4f5c\u4e3a\u4e0e API \u5bf9\u8bdd\u7684\u5de5\u5177\u3002")),(0,l.kt)("h2",{id:"rdctl-\u6216-rdctl-help"},"rdctl \u6216 rdctl help"),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl help")," \u67e5\u770b\u53ef\u7528\u547d\u4ee4\u7684\u5217\u8868\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Run API endpoints directly\n  completion    Generate the autocompletion script for the specified shell\n  factory-reset Clear all the Rancher Desktop state and shut it down.\n  help          Help about any command\n  list-settings Lists the current settings.\n  set           Update selected fields in the Rancher Desktop UI and restart the backend.\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop, or update its settings.\n  version       Shows the CLI version.\n\nFlags:\n      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n'))),(0,l.kt)("h2",{id:"rdctl-api"},"rdctl api"),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api /")," \u5168\u5c40\u5217\u51fa\u6240\u6709\u7aef\u70b9\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl api / | jq -r .[]\nGET /\nGET /v0\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"))),(0,l.kt)("h2",{id:"rdctl-api-vx"},"rdctl api /vX"),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api /v1")," \u5217\u51fa\u7248\u672c 1 \u4e2d\u7684\u6240\u6709\u7aef\u70b9\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl api /v1 | jq -r .[]\nGET /v1\nGET /v1/about\nGET /v1/diagnostic_categories\nGET /v1/diagnostic_checks\nPOST /v1/diagnostic_checks\nGET /v1/diagnostic_ids\nPUT /v1/factory_reset\nPUT /v1/propose_settings\nGET /v1/settings\nPUT /v1/settings\nPUT /v1/shutdown\nGET /v1/transient_settings\nPUT /v1/transient_settings\n"))),(0,l.kt)("h2",{id:"rdctl-api-v0settings"},"rdctl api /v0/settings"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rdctl api [endpoints]")," \u662f\u5bf9\u76f4\u63a5\u4f7f\u7528 API \u7684\u7528\u6237\u6700\u6709\u7528\u7684\u547d\u4ee4\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u9002\u5408\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl set")," \u4e00\u6837\u65e5\u5e38\u4f7f\u7528\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n')),(0,l.kt)("p",null,"\u4e0e\u4ee5\u4e0b\u547d\u4ee4\u662f\u4e00\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl set --kubernetes-enabled=false\n")),(0,l.kt)("p",null,"\u53ea\u662f\u5b83\u6ca1\u90a3\u4e48\u7b80\u6d01\u548c\u7528\u6237\u53cb\u597d\u3002"),(0,l.kt)("h2",{id:"rdctl-extension-install"},"rdctl extension install"),(0,l.kt)("p",null,"\u5b89\u88c5 Rancher Desktop \u6269\u5c55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension install <image-id>\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u9009\u9879 & \u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9009\u9879")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--force               Avoids any interactivity.\n<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension install docker/logs-explorer-extension:0.2.2\nInstalling image docker/logs-explorer-extension:0.2.2\n"))),(0,l.kt)("h2",{id:"rdctl-extension-ls"},"rdctl extension ls"),(0,l.kt)("p",null,"\u5217\u51fa\u5f53\u524d\u5b89\u88c5\u7684\u955c\u50cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension ls\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension ls\nExtension IDs\n\ndocker/logs-explorer-extension:0.2.2\n"))),(0,l.kt)("h2",{id:"rdctl-extension-uninstall"},"rdctl extension uninstall"),(0,l.kt)("p",null,"\u5378\u8f7d Rancher Desktop \u6269\u5c55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rdctl extension uninstall <image-id>\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u9009\u9879 & \u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9009\u9879")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2\nUninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2\n"))),(0,l.kt)("h2",{id:"rdctl-list-settings"},"rdctl list-settings"),(0,l.kt)(a.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl list-settings")," \u4ee5\u67e5\u770b\u5f53\u524d\u7684\u6d3b\u52a8\u914d\u7f6e\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},'> rdctl list-settings\n{\n  "version": 6,\n  "application": {\n    "adminAccess": false,\n    "pathManagementStrategy": "rcfiles",\n    "updater": {\n      "enabled": false\n    },\n    "debug": false,\n    "telemetry": {\n      "enabled": true\n    },\n    "autoStart": false,\n    "startInBackground": false,\n    "hideNotificationIcon": false,\n    "window": {\n      "quitOnClose": false\n    }\n  },\n  "virtualMachine": {\n    "memoryInGB": 6,\n    "numberCPUs": 2,\n    "hostResolver": true\n  },\n  "WSL": {\n    "integrations": {}\n  },\n  "containerEngine": {\n    "allowedImages": {\n      "enabled": false,\n      "patterns": [\n        "docker.io"\n      ]\n    },\n    "name": "moby"\n  },\n  "kubernetes": {\n    "version": "",\n    "port": 6443,\n    "enabled": false,\n    "options": {\n      "traefik": true,\n      "flannel": true\n    },\n    "ingress": {\n      "localhostOnly": false\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "diagnostics": {\n    "showMuted": false,\n    "mutedChecks": {}\n  },\n  "experimental": {\n    "virtualMachine": {\n      "type": "qemu",\n      "useRosetta": false,\n      "socketVMNet": false,\n      "mount": {\n        "type": "reverse-sshfs",\n        "9p": {\n          "securityModel": "none",\n          "protocolVersion": "9p2000.L",\n          "msizeInKB": 128,\n          "cacheMode": "mmap"\n        }\n      },\n      "networkingTunnel": false\n    }\n  },\n  "extensions": {\n    "docker/logs-explorer-extension:0.2.2": true\n  }\n}\n\n')))),(0,l.kt)(s.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b API \u4ee5\u67e5\u770b\u5f53\u524d\u7684\u6d3b\u52a8\u914d\u7f6e\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"-X GET")," \u662f\u53ef\u9009\u7684\u3002\u4f60\u4e5f\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\u524d\u9762\u7684\u547d\u4ee4\u3002"))),(0,l.kt)("h2",{id:"rdctl-set"},"rdctl set"),(0,l.kt)(a.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl set [flags]")," \u6765\u8bbe\u7f6e\u5c5e\u6027\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cKubernetes \u4f1a\u5728\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," \u547d\u4ee4\u65f6\u91cd\u7f6e\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5355\u4e2a\u547d\u4ee4\u4e2d\u4f7f\u7528\u94fe\u63a5\u6765\u8bbe\u7f6e\u591a\u4e2a\u5c5e\u6027\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u53c2\u8003\u793a\u4f8b\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n")))),(0,l.kt)(s.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b API \u6765\u8bbe\u7f6e\u5c5e\u6027\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n'))))),(0,l.kt)("h2",{id:"rdctl-shutdown"},"rdctl shutdown"),(0,l.kt)(a.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl shutdown")," \u6765\u6b63\u5e38\u5173\u95ed Rancher Desktop\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl shutdown\nShutting down.\n")))),(0,l.kt)(s.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b API \u6765\u5173\u95ed Rancher Desktop\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n'))))),(0,l.kt)("h2",{id:"rdctl-start"},"rdctl start"),(0,l.kt)(a.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl start")," \u6765\u786e\u4fdd Rancher Desktop \u6309\u7167\u8981\u6c42\u8fd0\u884c\u548c\u914d\u7f6e\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n")))),(0,l.kt)(s.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b API \u6765\u786e\u4fdd Rancher Desktop \u6309\u7167\u8981\u6c42\u8fd0\u884c\u548c\u914d\u7f6e\uff0c\u8bf7\u586b\u5199\u4f60\u7684\u7528\u6237\u548c\u5bc6\u7801\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n'))))),(0,l.kt)("h2",{id:"rdctl-version"},"rdctl version"),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rdctl version")," \u6765\u67e5\u770b\u5f53\u524d rdctl CLI \u7684\u7248\u672c\uff1a"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u793a\u4f8b\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-autoupdate=true"},"> rdctl version\nrdctl client version: 1.1.0, targeting server version: v1\n"))))}m.isMDXComponent=!0}}]);