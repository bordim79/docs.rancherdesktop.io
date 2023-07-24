"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[1984],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(83117),r=n(67294),i=n(34334),o=n(12466),l=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,i]),tabValues:i}}var g=n(72389),f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},25735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),i=n(74866),o=n(85162);const l={title:"Features"},s=void 0,u={unversionedId:"getting-started/features",id:"version-1.6/getting-started/features",title:"Features",description:"General",source:"@site/versioned_docs/version-1.6/getting-started/features.md",sourceDirName:"getting-started",slug:"/getting-started/features",permalink:"/1.6/getting-started/features",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/getting-started/features.md",tags:[],version:"1.6",frontMatter:{title:"Features"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/1.6/getting-started/installation"},next:{title:"Working with Images",permalink:"/1.6/tutorials/working-with-images"}},c={},d=[{value:"General",id:"general",level:2},{value:"Port Forwarding",id:"port-forwarding",level:2},{value:"Images",id:"images",level:2},{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3},{value:"Diagnostics",id:"diagnostics",level:2},{value:"Preferences",id:"preferences",level:2},{value:"Application",id:"application",level:3},{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Behavior",id:"behavior",level:4},{value:"Administrative Access",id:"administrative-access",level:5},{value:"Automatic Updates",id:"automatic-updates-1",level:5},{value:"Statistics",id:"statistics-1",level:5},{value:"Environment",id:"environment",level:4},{value:"Configure PATH",id:"configure-path",level:5},{value:"WSL (Windows)",id:"wsl-windows",level:3},{value:"Virtual Machine (macOS &amp; Linux)",id:"virtual-machine-macos--linux",level:3},{value:"Memory",id:"memory",level:4},{value:"CPUs",id:"cpus",level:4},{value:"Container Runtime",id:"container-runtime",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Enable Kubernetes",id:"enable-kubernetes",level:4},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Kubernetes Port",id:"kubernetes-port",level:4},{value:"Enable Traefik",id:"enable-traefik",level:4}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"General")," tab provides information on communication channels where users can connect with the Rancher Desktop team and community to ask questions, report bugs, or discuss Rancher Desktop in general."),(0,r.kt)("h2",{id:"port-forwarding"},"Port Forwarding"),(0,r.kt)("p",null,"To forward a port:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the service and click ",(0,r.kt)("strong",{parentName:"li"},"Forward"),"."),(0,r.kt)("li",{parentName:"ol"},"Specify a port to use or use the randomly assigned port."),(0,r.kt)("li",{parentName:"ol"},"Click the ","\u2713"," button to confirm your selection."),(0,r.kt)("li",{parentName:"ol"},"Optional: click ",(0,r.kt)("strong",{parentName:"li"},"Cancel")," to remove the port assigned.")),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Images")," tab, allows you to manage the images on your virtual machine."),(0,r.kt)("p",null,"To manage your images using nerdctl instead, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/1.6/tutorials/working-with-images"},"Images")," section."),(0,r.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,r.kt)("p",null,"This feature uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," to scan your images for vulnerabilities and configuration issues."),(0,r.kt)("p",null,"To scan an image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the image list, find the image you want to scan."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"."),(0,r.kt)("li",{parentName:"ol"},"A summary of the vulnerabilities, sorted by the level of severity, are displayed."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},">")," to view the details of each vulnerability, including reference links to learn more about the particular vulnerability.")),(0,r.kt)("h3",{id:"adding-images"},"Adding Images"),(0,r.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,r.kt)("p",null,"Use this option to pull images from a registry to your virtual machine."),(0,r.kt)("p",null,"To pull an image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Pull")," tab."),(0,r.kt)("li",{parentName:"ol"},"Enter the name of the image to pull.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: By default, images are pulled from ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," which uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]")," format. To pull from other registries, include the hostname ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Pull"),".")),(0,r.kt)("h4",{id:"building-images"},"Building Images"),(0,r.kt)("p",null,"Use this option to build an image and add it to your virtual machine."),(0,r.kt)("p",null,"To build an image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"+")," button in the top-right corner."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Build")," tab."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the image being built. E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Build"),"."),(0,r.kt)("li",{parentName:"ol"},"In the file browser, select the Dockerfile to build an image with.")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"show-logs"},"Show Logs"),(0,r.kt)("p",null,"Use this option to open the folder containing all Rancher Desktop log files."),(0,r.kt)("h4",{id:"enable-debug-mode"},"Enable Debug Mode"),(0,r.kt)("p",null,"Enable debug level logging."),(0,r.kt)("h3",{id:"reset-kubernetes"},"Reset Kubernetes"),(0,r.kt)("p",null,"Reset Kubernetes and remove all workloads and configurations. Before the reset occurs, users are presented with a confirmation and the option to also delete container images."),(0,r.kt)("p",null,"To reset Kubernetes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Reset Kubernetes"),". A confirmation window appears."),(0,r.kt)("li",{parentName:"ol"},"Optional: select whether to also delete container images."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Reset")," to proceed. Kubernetes stops and starts again.")),(0,r.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,r.kt)("p",null,"Remove the cluster and all other Rancher Desktop settings. To continue The initial setup procedure must be done again."),(0,r.kt)("p",null,"To perform a factory reset:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Reset"),". A confirmation window appears."),(0,r.kt)("li",{parentName:"ol"},"Optional: select whether cached Kubernetes images are kept."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Factory Reset")," to proceed. Kubernetes stops and Rancher Desktop closes."),(0,r.kt)("li",{parentName:"ol"},"Optional: start Rancher Desktop again.")),(0,r.kt)("h2",{id:"diagnostics"},"Diagnostics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Rancher Desktop ",(0,r.kt)("em",{parentName:"p"},"doesn't")," send the diagnostics data to any remote server for processing or storing."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Diagnostics")," feature runs several checks in the background to detect common problems such as missing minimum requirements, misconfigurations, etc., in your environment to help you self-troubleshoot and fix Rancher Desktop application issues."),(0,r.kt)("p",null,"The diagnostics checks are run every time when the application launches. If there are any problems identified then the count of failed checks is shown next to the ",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," menu text in the left navigation bar, indicating that something needs your attention. The ",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," tab displays the results of the diagnostics tests, highlighting areas that need attention, and guides you to resolve problems."),(0,r.kt)("p",null,"On this tab you can mute/unmute individual checks if you have a non-standard setup and know that these checks don't apply to your situation. You can also rerun the diagnostics anytime to verify that changes you have made to your environment have rectified the problem."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38995).Z,width:"1150",height:"737"})),(0,r.kt)("h2",{id:"preferences"},"Preferences"),(0,r.kt)("p",null,"This page allows you to modify the settings of your Rancher Desktop instance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To access the ",(0,r.kt)("strong",{parentName:"li"},"Preferences"),", click on the ","\u2699"," icon in the upper-right corner."),(0,r.kt)("li",{parentName:"ol"},"Use the tabs on the left to access different categories of Rancher Desktop preferences."),(0,r.kt)("li",{parentName:"ol"},"Update preferences as needed. The preferences available are outlined below."),(0,r.kt)("li",{parentName:"ol"},"To apply the updates, click ",(0,r.kt)("strong",{parentName:"li"},"Apply"),".")),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("h4",{id:"automatic-updates"},"Automatic Updates"),(0,r.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,r.kt)("h4",{id:"statistics"},"Statistics"),(0,r.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected.")),(0,r.kt)(o.Z,{value:"macOS & Linux",mdxType:"TabItem"},(0,r.kt)("h4",{id:"behavior"},"Behavior"),(0,r.kt)("h5",{id:"administrative-access"},"Administrative Access"),(0,r.kt)("p",null,"Allows Rancher Desktop to acquire administrative access (sudo access) when starting for some operations. This allows for enhanced functionality, including bridged networking and default docker socket support. Changes will only be applied next time Rancher Desktop starts."),(0,r.kt)("h5",{id:"automatic-updates-1"},"Automatic Updates"),(0,r.kt)("p",null,"When an update is available, users are provided a notification and the release notes for the upgrade target. This happens whether automatic updates are enabled or not. If this option is enabled, the update is downloaded and then installed the next time Rancher Desktop is started."),(0,r.kt)("h5",{id:"statistics-1"},"Statistics"),(0,r.kt)("p",null,"This option allows Rancher Desktop to collect information on how you interact with the Rancher Desktop application. Information such as what workloads you run are not collected."),(0,r.kt)("h4",{id:"environment"},"Environment"),(0,r.kt)("h5",{id:"configure-path"},"Configure PATH"),(0,r.kt)("p",null,"A Rancher Desktop installation comes with command-line utilities that are used to interface with its various features. Some examples of these utilities are ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),". These utilities are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," - you may see which utilities are included in your installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin"),"."),(0,r.kt)("p",null,"In order to use the utilities, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," must be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," variable in your shell."),(0,r.kt)("p",null,"There are two options for doing this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," management will add ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," by modifying your shell .rc files for you."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," management does not change anything - in this mode, you must add ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," yourself.")))),(0,r.kt)("h3",{id:"wsl-windows"},"WSL (Windows)"),(0,r.kt)("p",null,"The option to make the Rancher Desktop Kubernetes configuration accessible to any Linux distributions configured for WSL. Once enabled, you can communicate with the Rancher Desktop Kubernetes cluster using tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," from within the WSL distribution."),(0,r.kt)("p",null,"With WSL, memory and CPU allocation is configured globally across all Linux distributions. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig"},"WSL documentation")," for instructions."),(0,r.kt)("h3",{id:"virtual-machine-macos--linux"},"Virtual Machine (macOS & Linux)"),(0,r.kt)("h4",{id:"memory"},"Memory"),(0,r.kt)("p",null,"The amount of memory to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services."),(0,r.kt)("h4",{id:"cpus"},"CPUs"),(0,r.kt)("p",null,"The number of CPUs to allocate to Rancher Desktop. The selectable range is based on your system. The red area within the range indicates an allocation that may affect system services."),(0,r.kt)("h3",{id:"container-runtime"},"Container Runtime"),(0,r.kt)("p",null,"Set the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"container runtime")," for Rancher Desktop. Users have the option of ",(0,r.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," which provides namespaces for containers and the use of nerdctl or ",(0,r.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time."),(0,r.kt)("p",null,"When switching to a different container runtime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Workloads and images that have been built or pulled using the existing container runtime are not available on the container runtime being switched to.")),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("h4",{id:"enable-kubernetes"},"Enable Kubernetes"),(0,r.kt)("p",null,"This option allows you to enable or disable Kubernetes. By disabling Kubernetes, you can run just ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," by itself for reduced resource consumption. By default, Kubernetes is enabled."),(0,r.kt)("p",null,"To enable/disable Kubernetes, just check/uncheck the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," checkbox. The app will be restarted when you enable/disable Kubernetes. Disabling Kubernetes will not delete existing resources and they will be available again when you enable Kubernetes again."),(0,r.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,r.kt)("p",null,"This option presents a list of Kubernetes versions that your Rancher Desktop instance can use."),(0,r.kt)("p",null,"When upgrading:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A check is performed to see if the target Kubernetes version is available locally. If not, it downloads the files."),(0,r.kt)("li",{parentName:"ul"},"Workloads are retained."),(0,r.kt)("li",{parentName:"ul"},"Images are retained.")),(0,r.kt)("p",null,"When downgrading:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Workloads are removed."),(0,r.kt)("li",{parentName:"ul"},"Images are retained.")),(0,r.kt)("p",null,"To switch versions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes version")," drop-down menu."),(0,r.kt)("li",{parentName:"ol"},"Select the version you want to change to.")),(0,r.kt)("h4",{id:"kubernetes-port"},"Kubernetes Port"),(0,r.kt)("p",null,"Set the port Kubernetes is exposed on. Use this setting to avoid port collisions if multiple instances of K3s are running."),(0,r.kt)("h4",{id:"enable-traefik"},"Enable Traefik"),(0,r.kt)("p",null,"This option allows you to enable or disable Traefik. By disabling Traefik, you can free up port 80 and 443 for alternate ingress configuration. By default, Traefik is enabled."),(0,r.kt)("p",null,"Disabling Traefik will not delete existing resources."))}m.isMDXComponent=!0},38995:function(e,t,n){t.Z=n.p+"assets/images/diagnostics-checks-table-971df7ee385bade2b8489134d79e2984.png"}}]);