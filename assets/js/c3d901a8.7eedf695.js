"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1952],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=n(83117),r=(n(67294),n(3905));const a={title:"VS Code Remote Containers"},i=void 0,s={unversionedId:"how-to-guides/vs-code-remote-containers",id:"version-latest/how-to-guides/vs-code-remote-containers",title:"VS Code Remote Containers",description:"The [Visual Studio Code Remote - Containers] extension lets you use a Docker container as a full-featured development environment, which helps ensure a consistent environment across developer machines and makes it easy for new team members and contributors to get up and running. Since Rancher Desktop supports Docker CLI via [Moby], you can use the Visual Studio Code Remote - Containers extension out-of-the-box.",source:"@site/versioned_docs/version-latest/how-to-guides/vs-code-remote-containers.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/vs-code-remote-containers",permalink:"/how-to-guides/vs-code-remote-containers",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/vs-code-remote-containers.md",tags:[],version:"latest",frontMatter:{title:"VS Code Remote Containers"},sidebar:"tutorialSidebar",previous:{title:"Debugging a Container App with VS Code Docker extension",permalink:"/how-to-guides/vs-code-docker"},next:{title:"Rancher on Rancher Desktop",permalink:"/how-to-guides/rancher-on-rancher-desktop"}},c={},l=[{value:"Steps to try a sample dev container",id:"steps-to-try-a-sample-dev-container",level:3},{value:"Next steps",id:"next-steps",level:3}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Visual Studio Code Remote - Containers")," extension lets you use a Docker container as a full-featured development environment, which helps ensure a consistent environment across developer machines and makes it easy for new team members and contributors to get up and running. Since Rancher Desktop supports Docker CLI via ",(0,r.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"Moby"),", you can use the Visual Studio Code Remote - Containers extension out-of-the-box."),(0,r.kt)("h3",{id:"steps-to-try-a-sample-dev-container"},"Steps to try a sample dev container"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and launch Rancher Desktop. Select ",(0,r.kt)("inlineCode",{parentName:"li"},"dockerd (moby)")," as the Container Runtime from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Kubernetes Settings")," menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84969).Z,width:"1155",height:"743"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install and launch Visual Studio Code or Visual Studio Code Insiders. This tutorial uses Visual Studio Code.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34176).Z,width:"1158",height:"741"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install the Remote Development extension pack. ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(30593).Z,width:"1155",height:"742"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"After the extension is installed, you will see the extension item in the side bar, and a green button at the lower left corner to show the command palette with various options/commands related to ",(0,r.kt)("inlineCode",{parentName:"li"},"Remote Development"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9414).Z,width:"1154",height:"742"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Microsoft provides a number of sample dev containers at this GitHub repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-dev-containers.git"},"https://github.com/microsoft/vscode-dev-containers.git"),". Clone this repository to your local machine.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/microsoft/vscode-dev-containers.git\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"F1"),' to bring up a search bar on the command pallette to query for available commands. Begin to type in "Dev Containers: Open Folder in Container..." and click on the command ',(0,r.kt)("inlineCode",{parentName:"li"},"Dev Containers: Open Folder in Container..."),". Browse to one of the samples in the cloned respository, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"javascript-node"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55313).Z,width:"2040",height:"1530"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63868).Z,width:"1157",height:"740"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On selecting a sample, you will see the progress notification  ",(0,r.kt)("img",{src:n(13168).Z,width:"280",height:"34"})," while the container is being loaded, and once the container is successfully started, the bottom left corner shows the container name. ",(0,r.kt)("img",{src:n(36237).Z,width:"198",height:"23"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the container is started, Press ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," in the VS Code IDE to start the sample application. You will see that the application is started and served on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58139).Z,width:"895",height:"519"})),(0,r.kt)("p",null,"Congratulations! You have successfully loaded and run a sample dev container using Rancher Desktop and VS Code."),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Microsoft has provided extensive documentation about using dev containers in various scenarios ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/remote-overview"},"here"),". Please refer to the following tutorials to try a use case that's relevant to your needs."),(0,r.kt)("p",null,"Happy Containerizing with Rancher Desktop!"))}d.isMDXComponent=!0},84969:function(e,t,n){t.Z=n.p+"assets/images/rd-main-682924ff059ac64a1aa2636e09ce2ef3.png"},34176:function(e,t,n){t.Z=n.p+"assets/images/vscode-main-f178361041b0f3168d8041a308fa00b1.png"},58139:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-appinbrowser-e9d44a0336fe517fe6ff131ad5a2a23a.png"},55313:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-commandpalette-b10da256e680258d31715b286f25f914.png"},13168:function(e,t){t.Z="data:image/png;base64,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"},36237:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAXCAYAAABQ+TDXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAScSURBVHhe7ZixaxRBFMb9eyxE7RQLQSsLSSEWKnb+AZZqEY2CiqYy2AlilKRKJyEaIgYVEsRLUBNDiNccSXGopEgOEuJ47yZf5s3bN7t7t3tnAjPww9uZ2Xkz73vf7sZDRwaumEgkYjl8q9IiGiMSYfTEGOdffzbLq1PmqjIWiexHum4MMkVte8v8qDxQxyOR/UhXjRFNETmodM0YnZhirG6UtmHeT1xU55fNYHVzNyZa72JrHL87bX42d7FTn1LHe8GZN4tmPbCHYwOjZqZhmhpfSIy1g41RMy8GLqvjaVjNytepsDGujT01p0Vfp28KMsbv6rDXd25ujSo00V8mEPhv46vpZ+JQ7KKic2yh/1+ztQuMQU3mYj8Yo1sUMsaJZ+NmrrFl1paGPXPcX9k0O+sz5ubQJW9+FpoxCJu47hUUxe3FU/ngGqNmPrWezH7xRmOkcGp00iwIcxwdGGwW27Zp/GrPHCFjaGMQBQ1Pe81EmFvUdPJTi6+Hz56lyktvXygavPlcc4VAZ3PN7UXuOysGkLEw7tab2r1/w0xPvGr9Dj0YXNGOJOaFjOGfJzlu10TbMB8q3xPG8Ofo2hH2rO5e5Ait0wdeYWMQZZkjzRhUlDikVuh0L41rY07c5BOJEis/oTRofT4PAsii5YVtjSRF801IfctMPLoHcULGSIshC4UbH+vx+wnkDtccnju+Fo1JY+Car4UCxxx57fak75mucW5pMIKfV+aLrj9W3yXuyUMpxiBSzbH+xdzJYY4sY6BgtGLmAvK5uDckfNoYkEIBvg+Ix/cvjSCvNfg5pNBZMTBfFhDyivGs83L4fuia51bGk6YEPMeaCWUMrQ5COmnG0AzULqUZg4A5qvNP9vr2zPFnxtwQCZNkGQOJod96swXCCzkrWVxobZwICc4FRdHyOLIvZAy7Dm++0NIYoRj4rTXKnVwvD7JoEYMbDfsJ5RIPkNu7n2MyPo+BNbUWWptrg9rI0jSLUo3R93be1Lc3zOz0Pa+fzNE//sjr0wgZQwqaVcxcMCmsJFT0HAgr45VhDCuk69OKBOfOiqGNc+R6edDy53JmCx3x6Cyhpzo3htxf2pmzCOlHtUStnbNySjPGnik+PVTH8xAyhjx8KBkciET/piUnjxBWuOSTHoKTYbKK1l27dbiBcU8RY2Sdpd2iIzRjEKTVTv2bt/+QLtww9j7fPPI+bU6ItFoI7T0PpRijb3LR1HeKmYLQjCGfqAQE5smjAuF/xKII1xvJgpbYBOqCQXTaG39ryCLNKtrQHF4EOBeEbtcYdG0LxT/z4+pq6zpkjLRCDBUXckYNsTVd7Dy3H7k/7J8XN9bm55RaIAY3Bq3Fa4CPoS8vhY0BU8zPFjMFQQeWLSSYSyha0gCymNNwRemavFfuL61AQ33W6NScmO4c/n9ddmIMP4Zt0nhlGINAHB47mcekLrZg0WpmZGIhEcOf42sRMkYytr7vPBQyxsnn02al+flUhikikU4gY+R9+LVD4TfG2aHran8k0m1Cb8AyKGyMSKTX8M/P0CdgUaIxIhGFaIxIRCEaIxJRiMaIRBSsMSrmH0xonOubZb/0AAAAAElFTkSuQmCC"},9414:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-installed-a9e4e95d1fdb6d6bdf1c384376e6a712.png"},30593:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-marketplace-3c4d59014a6ebada6ca73a2282fd7803.png"},63868:function(e,t,n){t.Z=n.p+"assets/images/vscode-remotedevelopment-openfolder-a0bc5ec3a9afc6ddebd9085f710a7ae9.png"}}]);