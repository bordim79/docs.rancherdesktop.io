"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_label:"Emulation",title:"Emulation (macOS)"},o=void 0,u={unversionedId:"ui/preferences/virtual-machine/emulation",id:"ui/preferences/virtual-machine/emulation",title:"Emulation (macOS)",description:"QEMU",source:"@site/docs/ui/preferences/virtual-machine/emulation.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/emulation",permalink:"/next/ui/preferences/virtual-machine/emulation",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/virtual-machine/emulation.md",tags:[],version:"current",frontMatter:{sidebar_label:"Emulation",title:"Emulation (macOS)"},sidebar:"tutorialSidebar",previous:{title:"Environment",permalink:"/next/ui/preferences/application/environment"},next:{title:"Hardware",permalink:"/next/ui/preferences/virtual-machine/hardware"}},l={},c=[{value:"QEMU",id:"qemu",level:3},{value:"VZ",id:"vz",level:3}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabEmulation.png",alt:null})),(0,a.kt)("h3",{id:"qemu"},"QEMU"),(0,a.kt)("p",null,'The "',(0,a.kt)("a",{parentName:"p",href:"https://www.qemu.org/documentation/"},"QEMU"),'" option is enabled by default and is used to run a guest operating system.'),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabEmulation_vz.png",alt:null})),(0,a.kt)("h3",{id:"vz"},"VZ"),(0,a.kt)("admonition",{title:"warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is an ",(0,a.kt)("strong",{parentName:"p"},"experimental")," setting. The setting is available for ARM machines on  macOS 13.3 or later, and Intel machines on macOS 13.0 or later.")),(0,a.kt)("p",null,'The "VZ" option can also be enabled to make use of the native macOS ',(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/virtualization"},"Virtualization.Framework")," for running a guest machine."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VZ option:\nThe suboption allows for users to enable ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/virtualization/running_intel_binaries_in_linux_vms_with_rosetta"},"Rosetta support"),". This makes it possible for users to run applications that contain x86_64 instructions on Apple hardware.")))}s.isMDXComponent=!0}}]);