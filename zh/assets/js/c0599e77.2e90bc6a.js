"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9167],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var n=r(83117),o=(r(67294),r(3905));const a={sidebar_label:"\u7f51\u7edc",title:"\u7f51\u7edc\uff08macOS\uff09"},i=void 0,c={unversionedId:"ui/preferences/virtual-machine/network",id:"version-1.9/ui/preferences/virtual-machine/network",title:"\u7f51\u7edc\uff08macOS\uff09",description:"\u542f\u7528 socket-vmnet",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.9/ui/preferences/virtual-machine/network.md",sourceDirName:"ui/preferences/virtual-machine",slug:"/ui/preferences/virtual-machine/network",permalink:"/zh/1.9/ui/preferences/virtual-machine/network",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.9/ui/preferences/virtual-machine/network.md",tags:[],version:"1.9",frontMatter:{sidebar_label:"\u7f51\u7edc",title:"\u7f51\u7edc\uff08macOS\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u786c\u4ef6",permalink:"/zh/1.9/ui/preferences/virtual-machine/hardware"},next:{title:"\u5377",permalink:"/zh/1.9/ui/preferences/virtual-machine/volumes"}},u={},p=[{value:"\u542f\u7528 socket-vmnet",id:"\u542f\u7528-socket-vmnet",level:3}],l={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.9/preferences/macOS_virtualMachine_tabNetwork.png",alt:null})),(0,o.kt)("h3",{id:"\u542f\u7528-socket-vmnet"},"\u542f\u7528 socket-vmnet"),(0,o.kt)("admonition",{title:"\u8b66\u544a",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u8bbe\u7f6e\u3002")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u6b64\u89c6\u56fe\u542f\u7528\u6216\u7981\u7528\u7f51\u7edc\u8bbe\u7f6e\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u542f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"socket-vmnet"),"\uff0c\u8fd9\u5c06\u5141\u8bb8\u6dfb\u52a0\u53e6\u4e00\u4e2a\u53ef\u4ece\u4e3b\u673a\u548c\u5176\u4ed6\u6765\u5bbe\u8bbf\u95ee\u7684\u6765\u5bbe IP\u3002\u542f\u7528\u7684\u9009\u9879\u8fd8\u4e3a QEMU \u63d0\u4f9b ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/vmnet"},"vmnet.framework")," \u652f\u6301\uff0c\u5e76\u4e14\u4e0d\u4f9d\u8d56\u4e8e VDE\u3002"))}s.isMDXComponent=!0}}]);