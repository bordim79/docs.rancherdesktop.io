"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[6044],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),a=r(7294),o=r(4334),l=r(2389),s=r(7392),i=r(7094),u=r(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:h,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,i.U)(),[N,O]=(0,a.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==N&&(x(t),O(n),null!=h&&y(h,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},7841:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const s={title:"Create a Multi-Node Cluster with k3d"},i=void 0,u={unversionedId:"how-to-guides/create-multi-node-cluster",id:"version-1.6.1/how-to-guides/create-multi-node-cluster",title:"Create a Multi-Node Cluster with k3d",description:"Rancher Desktop provides a single cluster with single node setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use k3d with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.",source:"@site/versioned_docs/version-1.6.1/how-to-guides/create-multi-node-cluster.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-multi-node-cluster",permalink:"/how-to-guides/create-multi-node-cluster",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6.1/how-to-guides/create-multi-node-cluster.md",tags:[],version:"1.6.1",frontMatter:{title:"Create a Multi-Node Cluster with k3d"},sidebar:"tutorialSidebar",previous:{title:"Hello World Example",permalink:"/how-to-guides/hello-world-example"},next:{title:"Setup NGINX Ingress Controller",permalink:"/how-to-guides/setup-NGINX-Ingress-Controller"}},c={},p=[{value:"Steps to spin up a multi-node cluster",id:"steps-to-spin-up-a-multi-node-cluster",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher Desktop provides a ",(0,a.kt)("strong",{parentName:"p"},"single cluster with single node")," setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn't have in-built multi node/cluster functionality, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io"},"k3d")," with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes."),(0,a.kt)("h3",{id:"steps-to-spin-up-a-multi-node-cluster"},"Steps to spin up a multi-node cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure ",(0,a.kt)("strong",{parentName:"p"},"dockerd(moby)")," is selected as the Container Runtime in the ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install k3d."))),(0,a.kt)(o.Z,{groupId:"installation-approach",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"wget",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n"))),(0,a.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"k3d cluster create")," command to spin up multi node clusters. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"k3d cluster create two-node-cluster --agents 2\nk3d cluster create three-node-cluster --agents 3\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"k3d sets the newly created cluster as active. You can switch between clusters via ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl config use-context")," command. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl config use-context k3d-two-node-cluster\n")),(0,a.kt)("p",null,"To learn more about ",(0,a.kt)("strong",{parentName:"p"},"k3s")," and ",(0,a.kt)("strong",{parentName:"p"},"k3d"),", refer to these projects' docs at ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"k3s docs")," and ",(0,a.kt)("a",{parentName:"p",href:"https://k3d.io/"},"k3d docs"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Please note that the clusters created by ",(0,a.kt)("inlineCode",{parentName:"strong"},"k3d")," are not managed by Rancher Desktop GUI.")))}m.isMDXComponent=!0}}]);