"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8212],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(67294),a=r(34334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(83117),a=r(67294),o=r(34334),l=r(12466),u=r(76775),i=r(91980),c=r(67392),s=r(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=k({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=r(72389),h="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==u&&(d(t),i(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":u===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(T,(0,n.Z)({key:String(t)},e))}},77885:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(83117),a=(r(67294),r(3905)),o=r(74866),l=r(85162);const u={title:"\u4f7f\u7528\u5bb9\u5668"},i=void 0,c={unversionedId:"tutorials/working-with-containers",id:"version-latest/tutorials/working-with-containers",title:"\u4f7f\u7528\u5bb9\u5668",description:"nerdctl \u662f\u4e00\u4e2a\u4e0e Docker \u517c\u5bb9\u7684\u5bb9\u5668 CLI\u3002nerdctl \u4e3b\u8981\u7528\u4e8e\u5bf9 Docker \u4e2d\u4e0d\u5b58\u5728\u7684 containerd \u5c16\u7aef\u529f\u80fd\u8fdb\u884c\u8bd5\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/tutorials/working-with-containers.md",sourceDirName:"tutorials",slug:"/tutorials/working-with-containers",permalink:"/zh/tutorials/working-with-containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/tutorials/working-with-containers.md",tags:[],version:"latest",frontMatter:{title:"\u4f7f\u7528\u5bb9\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u955c\u50cf",permalink:"/zh/tutorials/working-with-images"},next:{title:"Hello World \u793a\u4f8b",permalink:"/zh/how-to-guides/hello-world-example"}},s={},d=[{value:"\u8fd0\u884c\u5bb9\u5668",id:"\u8fd0\u884c\u5bb9\u5668",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"\u66b4\u9732\u7aef\u53e3",id:"\u66b4\u9732\u7aef\u53e3",level:2},{value:"\u5b9a\u4f4d Kubernetes \u547d\u540d\u7a7a\u95f4",id:"\u5b9a\u4f4d-kubernetes-\u547d\u540d\u7a7a\u95f4",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u662f\u4e00\u4e2a\u4e0e Docker \u517c\u5bb9\u7684\u5bb9\u5668 CLI\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u4e3b\u8981\u7528\u4e8e\u5bf9 Docker \u4e2d\u4e0d\u5b58\u5728\u7684 containerd \u5c16\u7aef\u529f\u80fd\u8fdb\u884c\u8bd5\u9a8c\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/moby/moby"},"Moby")," \u662f\u4e00\u4e2a\u7531 Docker \u521b\u5efa\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u7528\u4e8e\u542f\u7528\u548c\u52a0\u901f\u8f6f\u4ef6\u5bb9\u5668\u5316\u3002\u7ec4\u4ef6\u5305\u62ec\u5bb9\u5668\u6784\u5efa\u5de5\u5177\u3001\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u3001\u7f16\u6392\u5de5\u5177\u548c\u8fd0\u884c\u65f6\u7b49\u3002Docker CLI \u4f7f\u7528 Moby \u8fd0\u884c\u65f6\u3002"),(0,a.kt)("h2",{id:"\u8fd0\u884c\u5bb9\u5668"},"\u8fd0\u884c\u5bb9\u5668"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"bridge")," CNI \u7f51\u7edc (10.4.0.0/24) \u8fd0\u884c\u5bb9\u5668\uff1a"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl run -it --rm alpine\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it --rm alpine\n")))),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 BuildKit \u6784\u5efa\u955c\u50cf\uff1a"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -t foo /some-dockerfile-directory\nnerdctl run -it --rm foo\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t foo /some-dockerfile-directory\ndocker run -it --rm foo\n")))),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 BuiltKit \u8fdb\u884c\u6784\u5efa\u5e76\u5c06\u8f93\u51fa\u53d1\u9001\u5230\u672c\u5730\u76ee\u5f55\uff1a"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build -o type=local,dest=. /some-dockerfile-directory\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -o type=local,dest=. /some-dockerfile-directory\n")))),(0,a.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("p",null,"Docker Compose \u662f\u4e00\u4e2a\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668 Docker \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u3002"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl-compose")," CLI \u7528\u4e8e\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u517c\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl compose up -d\nnerdctl compose down\n"))),(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"Docker CLI \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," \u547d\u4ee4\u652f\u6301\u5927\u591a\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u547d\u4ee4\u548c\u6807\u5fd7\u3002\u5b83\u6709\u671b\u6210\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u7684\u76f4\u63a5\u66ff\u4ee3\u54c1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up -d\ndocker compose down\n")))),(0,a.kt)("h2",{id:"\u66b4\u9732\u7aef\u53e3"},"\u66b4\u9732\u7aef\u53e3"),(0,a.kt)("p",null,"\u8981\u4e3a\u5bb9\u5668\u516c\u5f00\u7aef\u53e3 8000\uff1a"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl run -d -p 8000:80 nginx\n"))),(0,a.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 8000:80 nginx\n")))),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/")," \u6765\u8bbf\u95ee\u5bb9\u5668\uff1a"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u66b4\u9732\u7684\u7aef\u53e3\u53ef\u4ee5\u5728 macOS \u548c Linux \u4e0a\u7684\u6240\u6709\u7f51\u7edc\u63a5\u53e3\u4e0a\u8bbf\u95ee\u3002\u7136\u800c\uff0c\u5728 Windows \u4e0a\uff0c\u66b4\u9732\u7684\u7aef\u53e3\u53ea\u80fd\u901a\u8fc7 localhost \u7f51\u7edc\u63a5\u53e3\u8bbf\u95ee\uff08\u53c2\u89c1 issue ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180"},"#1180"),"\uff09\u3002\u76ee\u524d\u7684\u4e00\u4e2a\u89e3\u51b3\u65b9\u6cd5\u662f",(0,a.kt)("a",{parentName:"em",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1180#issuecomment-1005514200"},"\u5728 Windows \u4e3b\u673a\u4e0a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"a"},"portproxy")),"\uff0c\u4ece\u800c\u5c06\u7aef\u53e3\u516c\u5f00\u7ed9\u5176\u4ed6\u7f51\u7edc\u63a5\u53e3"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=localhost\n")),(0,a.kt)("h2",{id:"\u5b9a\u4f4d-kubernetes-\u547d\u540d\u7a7a\u95f4"},"\u5b9a\u4f4d Kubernetes \u547d\u540d\u7a7a\u95f4"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace")," \u53c2\u6570\u6765\u5b9a\u4f4d Kubernetes \u547d\u540d\u7a7a\u95f4\u3002\u8bf7\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u4e0d\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build -t demo:latest /code/demos/rd/anvil-app\nnerdctl --namespace k8s.io ps\n")))))}m.isMDXComponent=!0}}]);