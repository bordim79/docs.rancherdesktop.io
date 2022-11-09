"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9264],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),o=r(4334),a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),o=r(7294),a=r(4334),l=r(2389),s=r(7392),i=r(7094),u=r(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:f,className:g}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,s.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,i.U)(),[I,w]=(0,o.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==I&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,r=x.indexOf(t),n=k[r].value;n!==I&&(C(t),w(n),null!=f&&y(f,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:O},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":I===t})}),r??t)}))),r?(0,o.cloneElement)(b.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}},9124:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(3117),o=(r(7294),r(3905)),a=r(5488),l=r(5162);const s={title:"\u8bbe\u7f6e NGINX Ingress Controller"},i=void 0,u={unversionedId:"how-to-guides/setup-NGINX-Ingress-Controller",id:"how-to-guides/setup-NGINX-Ingress-Controller",title:"\u8bbe\u7f6e NGINX Ingress Controller",description:"Rancher Desktop \u5728\u540e\u53f0\u4f7f\u7528 K3s\uff0c\u800c K3s \u53c8\u4f7f\u7528 Traefik \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u9ed8\u8ba4 Ingress Controller\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7528\u4f8b\u53ef\u80fd\u9700\u8981\u6216\u66f4\u9002\u5408\u4f7f\u7528 NGINX\u3002\u4ee5\u4e0b\u793a\u4f8b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 NGINX Ingress Controller \u8fdb\u884c\u90e8\u7f72\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/setup-NGINX-Ingress-Controller.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/setup-NGINX-Ingress-Controller",permalink:"/zh/next/how-to-guides/setup-NGINX-Ingress-Controller",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/setup-NGINX-Ingress-Controller.md",tags:[],version:"current",frontMatter:{title:"\u8bbe\u7f6e NGINX Ingress Controller"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/next/how-to-guides/create-multi-node-cluster"},next:{title:"\u4f7f\u7528 VS Code Docker \u6269\u5c55\u6765\u8c03\u8bd5\u5bb9\u5668\u5e94\u7528\u7a0b\u5e8f",permalink:"/zh/next/how-to-guides/vs-code-docker"}},c={},p=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher Desktop \u5728\u540e\u53f0\u4f7f\u7528 K3s\uff0c\u800c K3s \u53c8\u4f7f\u7528 Traefik \u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u9ed8\u8ba4 Ingress Controller\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u7528\u4f8b\u53ef\u80fd\u9700\u8981\u6216\u66f4\u9002\u5408\u4f7f\u7528 NGINX\u3002\u4ee5\u4e0b\u793a\u4f8b\u6b65\u9aa4\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 NGINX Ingress Controller \u8fdb\u884c\u90e8\u7f72\u3002"),(0,o.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes Settings")," \u9875\u9762\u53d6\u6d88\u9009\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Traefik")," \u6765\u7981\u7528 Traefik\u3002\u4f60\u53ef\u80fd\u9700\u8981\u9000\u51fa\u5e76\u91cd\u65b0\u542f\u52a8 Rancher Desktop \u624d\u80fd\u4f7f\u66f4\u6539\u751f\u6548\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u90e8\u7f72 NGINX Ingress Controller\uff1a"))),(0,o.kt)(a.Z,{groupId:"deployment-approach",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n  --namespace ingress-nginx --create-namespace\n"))),(0,o.kt)(l.Z,{value:"kubectl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u7b49\u5f85 ingress pod \u8fd0\u884c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get pods --namespace=ingress-nginx\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u793a\u4f8b deployment \u548c\u5173\u8054\u7684 service\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create deployment demo --image=nginx --port=80\nkubectl expose deployment demo\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa ingress \u8d44\u6e90\u3002\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u7528\u4e86\u6620\u5c04\u5230 localhost \u7684\u4e3b\u673a\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl create ingress demo-localhost --class=nginx --rule="demo.localdev.me/*=demo:80"\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u5c06\u672c\u5730\u7aef\u53e3\u8f6c\u53d1\u5230 Ingress Controller\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80\n")),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u4f60\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"http://demo.localdev.me:8080/"},"http://demo.localdev.me:8080/")," \uff0c\u4f60\u5e94\u8be5\u4f1a\u770b\u5230 NGINX \u7684\u6b22\u8fce\u9875\u9762\u3002"))}m.isMDXComponent=!0}}]);