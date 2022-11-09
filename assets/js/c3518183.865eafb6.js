"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8663],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||i[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3117),r=n(7294),o=n(4334),l=n(2389),s=n(7392),c=n(7094),u=n(2466),p="tabList__CuJ",i="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:h,groupId:m,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=h??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,c.U)(),[N,R]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=m){const e=w[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&R(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==N&&(D(t),R(a),null!=m&&y(m,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:I},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return i}});var a=n(3117),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={title:"Rancher on Rancher Desktop"},c=void 0,u={unversionedId:"how-to-guides/rancher-on-rancher-desktop",id:"how-to-guides/rancher-on-rancher-desktop",title:"Rancher on Rancher Desktop",description:"While Rancher and Rancher Desktop share the Rancher name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.",source:"@site/docs/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/next/how-to-guides/rancher-on-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"current",frontMatter:{title:"Rancher on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/next/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold and Rancher Desktop",permalink:"/next/how-to-guides/skaffold-and-rancher-desktop"}},p={},i=[],d={toc:i};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and ",(0,r.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," share the ",(0,r.kt)("em",{parentName:"p"},"Rancher")," name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop."),(0,r.kt)("p",null,"This guide outlines steps to install Rancher Dashboard on Rancher Desktop using ",(0,r.kt)("inlineCode",{parentName:"p"},"container runtime")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," (local environment):"),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl run --privileged -d --restart=no -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,r.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run --privileged -d --restart=no -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,r.kt)(l.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"1: Add Jetstack charts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,r.kt)("p",null,"2: Add latest Rancher charts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,r.kt)("p",null,"3: Create cert-manager namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cert-manager\n")),(0,r.kt)("p",null,"4: Install cert-manager services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.7.1 --set installCRDs=true\n")),(0,r.kt)("p",null,"5: Create cattle-system namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cattle-system\n")),(0,r.kt)("p",null,"6: Install Rancher application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n")))),(0,r.kt)("p",null,"The installation takes a few minutes to complete. After the installation, you can access the Rancher UI as follows: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installed through ",(0,r.kt)("inlineCode",{parentName:"li"},"container runtime"),": ",(0,r.kt)("a",{parentName:"li",href:"https://localhost:8443/"},"https://localhost:8443/")," "),(0,r.kt)("li",{parentName:"ul"},"Installed through ",(0,r.kt)("inlineCode",{parentName:"li"},"helm")," ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.rd.localhost/"},"https://rancher.rd.localhost/"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8433).Z,width:"1189",height:"875"})),(0,r.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,r.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl ps\n")),(0,r.kt)("p",null,"2: Get the Bootstrap Password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,r.kt)("p",null,"3: Bootstrap Password example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"))),(0,r.kt)(l.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,r.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,r.kt)("p",null,"2: Get the Bootstrap Password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,r.kt)("p",null,"3: Bootstrap Password example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n")))),(0,r.kt)("p",null,"Follow the wizard instructions and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue")," to land on the main Rancher UI page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2132).Z,width:"1589",height:"979"})),(0,r.kt)("p",null,"From the Rancher UI, you can manage your local cluster, node, and more. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/"},"Rancher Docs"),"."))}h.isMDXComponent=!0},2132:function(e,t,n){t.Z=n.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},8433:function(e,t,n){t.Z=n.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"}}]);