"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9704],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Using Persistent Storage"},i=void 0,s={unversionedId:"tutorials/using-persistent-storage",id:"version-latest/tutorials/using-persistent-storage",title:"Using Persistent Storage",description:"Containers are, by design, ephemeral and stateless. However, most real-world use cases require containers to produce or consume data that often needs to be persisted. To address this challenge, container engines offer mechanisms such as Bind mounts and Volumes. Both the docker and nerdctl CLIs provide options -v and --mount to start a container with a bind mount or a volume.",source:"@site/versioned_docs/version-latest/tutorials/using-persistent-storage.md",sourceDirName:"tutorials",slug:"/tutorials/using-persistent-storage",permalink:"/zh/tutorials/using-persistent-storage",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/tutorials/using-persistent-storage.md",tags:[],version:"latest",frontMatter:{title:"Using Persistent Storage"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5bb9\u5668",permalink:"/zh/tutorials/working-with-containers"},next:{title:"Hello World \u793a\u4f8b",permalink:"/zh/how-to-guides/hello-world-example"}},l={},c=[{value:"Bind mount",id:"bind-mount",level:2},{value:"Using <code>-v</code>",id:"using--v",level:3},{value:"macOS &amp; Linux",id:"macos--linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Using <code>--mount</code>",id:"using---mount",level:3},{value:"macOS &amp; Linux",id:"macos--linux-1",level:4},{value:"Windows",id:"windows-1",level:4},{value:"Volume",id:"volume",level:2},{value:"Using <code>-v</code>",id:"using--v-1",level:3},{value:"Using <code>--mount</code>",id:"using---mount-1",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),m={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.rancherdesktop.io/tutorials/working-with-storage"})),(0,a.kt)("p",null,"Containers are, by design, ephemeral and stateless. However, most real-world use cases require containers to produce or consume data that often needs to be persisted. To address this challenge, container engines offer mechanisms such as ",(0,a.kt)("strong",{parentName:"p"},"Bind mounts")," and ",(0,a.kt)("strong",{parentName:"p"},"Volumes"),". Both the docker and nerdctl CLIs provide options ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--mount")," to start a container with a bind mount or a volume."),(0,a.kt)("h2",{id:"bind-mount"},"Bind mount"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bind mount")," mounts a file or directory on the host machine into a container. For example, to mount the current directory of the host machine to ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src")," directory of a container, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," or the slightly verbose ",(0,a.kt)("inlineCode",{parentName:"p"},"--mount")," as shown below."),(0,a.kt)("h3",{id:"using--v"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"-v")),(0,a.kt)("h4",{id:"macos--linux"},"macOS & Linux"),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl container run --rm -it -v $(pwd)/src:/app/src alpine:latest /bin/sh\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker container run --rm -it -v $(pwd)/src:/app/src alpine:latest /bin/sh\n")))),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"// Cmd\nnerdctl container run --rm -it -v %cd%/src:/app/src alpine:latest /bin/sh\n\n// Powershell\nnerdctl container run --rm -it -v ${pwd}/src:/app/src alpine:latest /bin/sh\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"// Cmd\ndocker container run --rm -it -v %cd%/src:/app/src alpine:latest /bin/sh\n\n// Powershell\ndocker container run --rm -it -v ${pwd}/src:/app/src alpine:latest /bin/sh\n")))),(0,a.kt)("h3",{id:"using---mount"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"--mount")),(0,a.kt)("h4",{id:"macos--linux-1"},"macOS & Linux"),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl container run --rm -it --mount=type=bind,source=$(pwd)/src,target=/app/src alpine:latest /bin/sh\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker container run --rm -it --mount=type=bind,source=$(pwd)/src,target=/app/src alpine:latest /bin/sh\n")))),(0,a.kt)("h4",{id:"windows-1"},"Windows"),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"// Cmd\nnerdctl container run --rm -it --mount=type=bind,source=%cd%/src,target=/app/src alpine:latest /bin/sh\n\n// Powershell\nnerdctl container run --rm -it --mount=type=bind,source=${pwd}/src,target=/app/src alpine:latest /bin/sh\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"// Cmd\ndocker container run --rm -it --mount=type=bind,source=%cd%/src,target=/app/src alpine:latest /bin/sh\n\n// Powershell\ndocker container run --rm -it --mount=type=bind,source=${pwd}/src,target=/app/src alpine:latest /bin/sh\n")))),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src")," is not available on the host machine then the command creates it. Anything you create inside the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src")," on the host machine is available at ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src")," inside the container and vice versa. Try adding or modifying content inside ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src")," in the container and exit the container by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," in the shell. On restarting the container, you will notice that the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src"),"  is persisted and same would be the case for container engine, and host machine restarts.\n."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, Rancher Desktop allows creating bind mounts only on the following directories by default: ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/$USER")," on macOS, ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/$USER")," on Linux, and ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/rancher-desktop")," on both. For Windows, all files are automatically shared via WSL2."),(0,a.kt)("p",{parentName:"admonition"},"If you want to change the behavior of the mounts, you can use provisioning scripts as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/1209#issuecomment-1370181132"},"thread"),".")),(0,a.kt)("h2",{id:"volume"},"Volume"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Volume")," is an another mechanism to achieve persistance for container workloads. While Bind mounts link to the host's file system, volumes on the otherhand are managed by the container engine and provide data persistence and isolation from the host. For example, to create a named volume and start a container using the volume, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," or the slightly verbose ",(0,a.kt)("inlineCode",{parentName:"p"},"--mount")," as shown below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a named volume")),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl volume create my-persistent-data\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker volume create my-persistent-data\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start a container using the named volume created in the previous step")),(0,a.kt)("h3",{id:"using--v-1"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"-v")),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl container run --rm -it -v my-persistent-data:/app/src alpine:latest /bin/sh\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker container run --rm -it -v my-persistent-data:/app/src alpine:latest /bin/sh\n")))),(0,a.kt)("h3",{id:"using---mount-1"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"--mount")),(0,a.kt)(d,{groupId:"container-runtime",mdxType:"Tabs"},(0,a.kt)(u,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl container run --rm -it --mount=type=volume,source=my-persistent-data,target=/app/src alpine:latest /bin/sh\n"))),(0,a.kt)(u,{value:"docker",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker container run --rm -it --mount=type=volume,source=my-persistent-data,target=/app/src alpine:latest /bin/sh\n")))),(0,a.kt)("p",null,"Try adding or modifying content inside ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src")," in the container and exit the container by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," in the shell. On restarting the container, you will notice that the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/src"),"  is persisted and same would be the case for container engine, and host machine restarts."))}h.isMDXComponent=!0}}]);