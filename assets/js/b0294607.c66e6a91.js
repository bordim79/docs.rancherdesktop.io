"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=l,h=s["".concat(d,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),l=n(7294),a=n(2389),o=n(9443);var i=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(3616),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,a,o=e.lazy,p=e.block,s=e.defaultValue,m=e.values,h=e.groupId,k=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,d.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),y=w.tabGroupChoices,x=w.setTabGroupChoices,N=(0,l.useState)(g),C=N[0],T=N[1],D=[],O=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=y[h];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&T(E)}var I=function(e){var t=e.currentTarget,n=D.indexOf(t),r=b[n].value;r!==C&&(O(t),T(r),null!=h&&x(h,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;n=D[r]||D[0];break;case"ArrowLeft":var l=D.indexOf(e.currentTarget)-1;n=D[l]||D[D.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return D.push(e)},onKeyDown:P,onFocus:I,onClick:I},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function s(e){var t=(0,a.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},6850:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n(6396),i=n(8215),d=["components"],u={title:"Hello World Example"},c=void 0,p={unversionedId:"how-to-guides/hello-world-example",id:"how-to-guides/hello-world-example",title:"Hello World Example",description:"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.",source:"@site/docs/how-to-guides/hello-world-example.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/hello-world-example",permalink:"/how-to-guides/hello-world-example",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/hello-world-example.md",tags:[],version:"current",frontMatter:{title:"Hello World Example"},sidebar:"tutorialSidebar",previous:{title:"Working with Containers",permalink:"/tutorials/working-with-containers"},next:{title:"Create a Multi-Node Cluster with k3d",permalink:"/how-to-guides/create-multi-node-cluster"}},s=[{value:"Example#1 - Build Image &amp; Run Container",id:"example1---build-image--run-container",children:[{value:"Create a folder",id:"create-a-folder",children:[],level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile",children:[],level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below",children:[],level:4},{value:"Build and run the image for verification purposes",id:"build-and-run-the-image-for-verification-purposes",children:[],level:4}],level:3},{value:"Example#2 - Build Image &amp; Deploy Container to Kubernetes",id:"example2---build-image--deploy-container-to-kubernetes",children:[{value:"Create a folder and add a sample index.html file as follows",id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows",children:[],level:4},{value:"Create a blank Dockerfile",id:"create-a-blank-dockerfile-1",children:[],level:4},{value:"Populate the Dockerfile with the command below",id:"populate-the-dockerfile-with-the-command-below-1",children:[],level:4},{value:"Build image from code locally",id:"build-image-from-code-locally",children:[],level:4},{value:"Deploy to Kubernetes",id:"deploy-to-kubernetes",children:[],level:4},{value:"Delete the pod and the image",id:"delete-the-pod-and-the-image",children:[],level:4}],level:3}],m={toc:s};function h(e){var t=e.components,n=(0,l.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster."),(0,a.kt)("p",null,"Rancher Desktop works with two container engines, ",(0,a.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," and ",(0,a.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby"),", the open-sourced components of the Docker ecosystem. For ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl"),", use the ",(0,a.kt)("strong",{parentName:"p"},"containerd")," runtime. For ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"),", use the ",(0,a.kt)("strong",{parentName:"p"},"dockerd(moby)")," runtime."),(0,a.kt)("h3",{id:"example1---build-image--run-container"},"Example#1 - Build Image & Run Container"),(0,a.kt)("h4",{id:"create-a-folder"},"Create a folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ../hello-world\ncd ../hello-world\n")),(0,a.kt)("h4",{id:"create-a-blank-dockerfile"},"Create a blank Dockerfile"),(0,a.kt)("p",null,"On Windows, Create a blank file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("p",null,"On Linux, You can use below command to create a blank ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,a.kt)("h4",{id:"populate-the-dockerfile-with-the-command-below"},"Populate the Dockerfile with the command below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'FROM alpine  \nCMD ["echo", "Hello World!!"]\n')),(0,a.kt)("h4",{id:"build-and-run-the-image-for-verification-purposes"},"Build and run the image for verification purposes"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl build --tag helloworld:v1.0 .\nnerdctl images | grep helloworld\nnerdctl run --rm helloworld:v1.0\n# Remove the image\nnerdctl rmi helloworld:v1.0 \n"))),(0,a.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --tag helloworld:v1.0 .\ndocker images | grep helloworld\ndocker run --rm helloworld:v1.0\n# Remove the image\ndocker rmi helloworld:v1.0 \n")))),(0,a.kt)("h3",{id:"example2---build-image--deploy-container-to-kubernetes"},"Example#2 - Build Image & Deploy Container to Kubernetes"),(0,a.kt)("p",null,"Make sure that you switch the ",(0,a.kt)("strong",{parentName:"p"},"Container Runtime")," setting in the ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel to either ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," as needed."),(0,a.kt)("h4",{id:"create-a-folder-and-add-a-sample-indexhtml-file-as-follows"},"Create a folder and add a sample index.html file as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mkdir ../nginx\ncd ../nginx\necho "<h1>Hello World from NGINX!!</h1>" > index.html\n')),(0,a.kt)("h4",{id:"create-a-blank-dockerfile-1"},"Create a blank Dockerfile"),(0,a.kt)("p",null,"On Windows, Create a blank file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("p",null,"On Linux, You can use below command to create a blank ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vi Dockerfile\n")),(0,a.kt)("h4",{id:"populate-the-dockerfile-with-the-command-below-1"},"Populate the Dockerfile with the command below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM nginx:alpine\nCOPY . /usr/share/nginx/html\n")),(0,a.kt)("h4",{id:"build-image-from-code-locally"},"Build image from code locally"),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note:")," Please note that you need to pass the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace k8s.io")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," build command, so that ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," builds the image and then makes it available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.io")," namespace."),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .\nnerdctl --namespace k8s.io images | grep nginx-helloworld\n"))),(0,a.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --tag nginx-helloworld:latest .\ndocker images | grep nginx-helloworld\n")))),(0,a.kt)("h4",{id:"deploy-to-kubernetes"},"Deploy to Kubernetes"),(0,a.kt)("p",null,"Run below command to create and run a pod using the image built in the previous step. "),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note:")," Please note that you need to pass the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--image-pull-policy=Never")," to use a local image with ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," tag, as ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," tag will always try to pull the images from a remote repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80\nkubectl port-forward pods/hello-world 8080:80\n")),(0,a.kt)("p",null,"Point your web browser to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and you will see the message ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World from NGINX!!"),". If you prefer to stay on the command line, use ",(0,a.kt)("inlineCode",{parentName:"p"},"curl localhost:8080"),"."),(0,a.kt)("h4",{id:"delete-the-pod-and-the-image"},"Delete the pod and the image"),(0,a.kt)(o.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world\n# Remove the image\nnerdctl --namespace k8s.io rmi nginx-helloworld:latest \n"))),(0,a.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl delete pod hello-world \n# Remove the image\ndocker rmi nginx-helloworld:latest\n")))))}h.isMDXComponent=!0}}]);