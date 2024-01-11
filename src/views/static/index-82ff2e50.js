import{u as e}from"./general-6cad10bc.js";import{u as t,c as l,_ as a,r as o,o as n,a as r,b as s,d as i,e as c,f as u,g as d,h as p,i as f,w as h,s as v,j as g,k as m,l as b,T as w,n as y,m as C,p as k,q as x,t as T,F as _,v as E,x as M,y as A,z as S,A as R,B as O,C as V,D as I,E as F,G as L,H as P,I as j,J as q,K as B,L as D,M as W,N,O as z,P as H,Q as $,R as U,S as G,U as J,V as Y}from"./index-f87793d4.js";import{u as K,t as Q,a as X}from"./tags-view-6b9a4de4.js";import{i as Z}from"./validate-f5786776.js";import{g as ee}from"./index-ac4bdb64.js";import"./service-f6b7e411.js";const te=e(),le={class:"app-main"},ae={class:"app-scrollbar"};const oe=a({setup(){const e=t();return{key:l((()=>e.path)),isManualRefresht:l((()=>te.getManualRefresh))}}},[["render",function(e,t,l,a,u,d){const p=o("router-view");return n(),r("section",le,[s("div",ae,[a.isManualRefresht?c("",!0):(n(),i(p,{key:0}))])])}],["__scopeId","data-v-ff630b8e"]]);var ne=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(ne||{});const re="closed";const se=u("app",(()=>{const e=d({opened:p()!==re,withoutAnimation:!1}),t=f(ne.Desktop);h((()=>e.opened),(e=>function(e){v(e?"opened":re)}(e)));return{device:t,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t},toggleDevice:e=>{t.value=e}}})),ie={props:{collapse:{type:Boolean,default:!1}},setup(e){const t=K(),{layoutMode:l}=g(t);return{layoutMode:l,logo:"/static/logo-647d216c.png",props:e,logoSamll:"/static/logo-small-2a551d00.png"}}},ce=["src"],ue=["src"];const de=a(ie,[["render",function(e,t,l,a,c,u){const d=o("router-link");return n(),r("div",{class:y(["layout-logo-container",{collapse:a.props.collapse,"layout-mode-top":"top"===a.layoutMode}])},[m(w,{name:"layout-logo-fade"},{default:b((()=>[a.props.collapse?(n(),i(d,{key:"collapse",to:"/"},{default:b((()=>[s("img",{src:a.logoSamll,class:"layout-logo"},null,8,ce)])),_:1})):(n(),i(d,{key:"expand",to:"/"},{default:b((()=>[s("img",{src:"left"!==a.layoutMode?a.logoSamll:a.logo,class:"layout-logo-text"},null,8,ue)])),_:1}))])),_:1})],2)}],["__scopeId","data-v-2e6c493d"]]),pe=["href"],fe=C({__name:"sidebarItemLink",props:{to:{}},setup(e){const t=e;return(e,l)=>{const a=o("router-link");return k(Z)(t.to)?(n(),r("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[x(e.$slots,"default")],8,pe)):(n(),i(a,{key:1,to:t.to},{default:b((()=>[x(e.$slots,"default")])),_:3},8,["to"]))}}});function he(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function ve(e,t){for(var l,a="",o=0,n=-1,r=0,s=0;s<=e.length;++s){if(s<e.length)l=e.charCodeAt(s);else{if(47===l)break;l=47}if(47===l){if(n===s-1||1===r);else if(n!==s-1&&2===r){if(a.length<2||2!==o||46!==a.charCodeAt(a.length-1)||46!==a.charCodeAt(a.length-2))if(a.length>2){var i=a.lastIndexOf("/");if(i!==a.length-1){-1===i?(a="",o=0):o=(a=a.slice(0,i)).length-1-a.lastIndexOf("/"),n=s,r=0;continue}}else if(2===a.length||1===a.length){a="",o=0,n=s,r=0;continue}t&&(a.length>0?a+="/..":a="..",o=2)}else a.length>0?a+="/"+e.slice(n+1,s):a=e.slice(n+1,s),o=s-n-1;n=s,r=0}else 46===l&&-1!==r?++r:r=-1}return a}var ge={resolve:function(){for(var e,t="",l=!1,a=arguments.length-1;a>=-1&&!l;a--){var o;a>=0?o=arguments[a]:(void 0===e&&(e=process.cwd()),o=e),he(o),0!==o.length&&(t=o+"/"+t,l=47===o.charCodeAt(0))}return t=ve(t,!l),l?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(he(e),0===e.length)return".";var t=47===e.charCodeAt(0),l=47===e.charCodeAt(e.length-1);return 0!==(e=ve(e,!t)).length||t||(e="."),e.length>0&&l&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return he(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var l=arguments[t];he(l),l.length>0&&(void 0===e?e=l:e+="/"+l)}return void 0===e?".":ge.normalize(e)},relative:function(e,t){if(he(e),he(t),e===t)return"";if((e=ge.resolve(e))===(t=ge.resolve(t)))return"";for(var l=1;l<e.length&&47===e.charCodeAt(l);++l);for(var a=e.length,o=a-l,n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var r=t.length-n,s=o<r?o:r,i=-1,c=0;c<=s;++c){if(c===s){if(r>s){if(47===t.charCodeAt(n+c))return t.slice(n+c+1);if(0===c)return t.slice(n+c)}else o>s&&(47===e.charCodeAt(l+c)?i=c:0===c&&(i=0));break}var u=e.charCodeAt(l+c);if(u!==t.charCodeAt(n+c))break;47===u&&(i=c)}var d="";for(c=l+i+1;c<=a;++c)c!==a&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(n+i):(n+=i,47===t.charCodeAt(n)&&++n,t.slice(n))},_makeLong:function(e){return e},dirname:function(e){if(he(e),0===e.length)return".";for(var t=e.charCodeAt(0),l=47===t,a=-1,o=!0,n=e.length-1;n>=1;--n)if(47===(t=e.charCodeAt(n))){if(!o){a=n;break}}else o=!1;return-1===a?l?"/":".":l&&1===a?"//":e.slice(0,a)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');he(e);var l,a=0,o=-1,n=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,s=-1;for(l=e.length-1;l>=0;--l){var i=e.charCodeAt(l);if(47===i){if(!n){a=l+1;break}}else-1===s&&(n=!1,s=l+1),r>=0&&(i===t.charCodeAt(r)?-1==--r&&(o=l):(r=-1,o=s))}return a===o?o=s:-1===o&&(o=e.length),e.slice(a,o)}for(l=e.length-1;l>=0;--l)if(47===e.charCodeAt(l)){if(!n){a=l+1;break}}else-1===o&&(n=!1,o=l+1);return-1===o?"":e.slice(a,o)},extname:function(e){he(e);for(var t=-1,l=0,a=-1,o=!0,n=0,r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47!==s)-1===a&&(o=!1,a=r+1),46===s?-1===t?t=r:1!==n&&(n=1):-1!==t&&(n=-1);else if(!o){l=r+1;break}}return-1===t||-1===a||0===n||1===n&&t===a-1&&t===l+1?"":e.slice(t,a)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var l=t.dir||t.root,a=t.base||(t.name||"")+(t.ext||"");return l?l===t.root?l+a:l+e+a:a}("/",e)},parse:function(e){he(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var l,a=e.charCodeAt(0),o=47===a;o?(t.root="/",l=1):l=0;for(var n=-1,r=0,s=-1,i=!0,c=e.length-1,u=0;c>=l;--c)if(47!==(a=e.charCodeAt(c)))-1===s&&(i=!1,s=c+1),46===a?-1===n?n=c:1!==u&&(u=1):-1!==n&&(u=-1);else if(!i){r=c+1;break}return-1===n||-1===s||0===u||1===u&&n===s-1&&n===r+1?-1!==s&&(t.base=t.name=0===r&&o?e.slice(1,s):e.slice(r,s)):(0===r&&o?(t.name=e.slice(1,n),t.base=e.slice(1,s)):(t.name=e.slice(r,n),t.base=e.slice(r,s)),t.ext=e.slice(n,s)),r>0?t.dir=e.slice(0,r-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};ge.posix=ge;const me=T(ge),be={components:{sidebarItemLink:fe},props:{item:{type:Object,default:{}},hidden:{type:Boolean,default:!1},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!1},basePath:{type:String,default:""},alwaysShow:{type:Boolean,default:!1}},setup(e){const{item:t,hidden:a,isCollapse:o,isTop:n,isFirstLevel:r,basePath:s,alwaysShow:i}=e,c=l((()=>i)),u=l((()=>{var e;return(null==(e=t.children)?void 0:e.filter((()=>!a)))??[]})),d=l((()=>u.value.length)),p=l((()=>{const t=d.value;switch(!0){case t>1:return null;case 1===t:return u.value[0];default:return{...e.item,path:""}}}));return{item:t,hidden:a,isCollapse:o,isTop:n,isFirstLevel:r,basePath:s,alwaysShowRootMenu:c,theOnlyOneChild:p,resolvePath:e=>{switch(!0){case Z(e):return e;case Z(s):return s;default:return me.resolve(s,e)}}}}},we={key:1};const ye={components:{logo:de,sidebarItem:a(be,[["render",function(e,t,l,a,s,u){const d=o("el-menu-item"),p=o("sidebarItemLink"),f=o("sidebar-item",!0),h=o("el-sub-menu");return a.hidden?c("",!0):(n(),r("div",{key:0,class:y({"simple-mode":a.isCollapse&&!a.isTop,"first-level":a.isFirstLevel})},[a.alwaysShowRootMenu||!a.theOnlyOneChild||a.theOnlyOneChild.children?(n(),i(h,{key:1,index:a.resolvePath(a.item.path),teleported:""},{title:b((()=>{var e,t;return[(null==(e=a.item.meta)?void 0:e.elIcon)?(n(),i(M(a.item.meta.elIcon),{key:0,class:"el-icon"})):c("",!0),(null==(t=a.item.meta)?void 0:t.title)?(n(),r("span",we,S(a.item.meta.title),1)):c("",!0)]})),default:b((()=>[a.item.children?(n(!0),r(_,{key:0},R(a.item.children,(e=>(n(),i(f,{key:e.path,item:e,"is-collapse":a.isCollapse,"is-first-level":!1,"base-path":a.resolvePath(e.path)},null,8,["item","is-collapse","base-path"])))),128)):c("",!0)])),_:1},8,["index"])):(n(),r(_,{key:0},[a.theOnlyOneChild.meta?(n(),i(p,{key:0,to:a.resolvePath(a.theOnlyOneChild.path)},{default:b((()=>[m(d,{index:a.resolvePath(a.theOnlyOneChild.path)},E({default:b((()=>[a.theOnlyOneChild.meta.elIcon?(n(),i(M(a.theOnlyOneChild.meta.elIcon),{key:0,class:"el-icon"})):c("",!0)])),_:2},[a.theOnlyOneChild.meta.title?{name:"title",fn:b((()=>[A(S(a.theOnlyOneChild.meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):c("",!0)],64))],2))}],["__scopeId","data-v-31dc34fe"]])},setup(){const e=se(),a=t(),{sidebar:o,device:n}=g(e),r=l((()=>!o.value.opened)),s=K(),{layoutMode:i,showLogo:c}=g(s),u=ee("--v3-sidebar-menu-bg-color"),d=ee("--v3-sidebar-menu-text-color"),p=ee("--v3-sidebar-menu-active-text-color"),f=l((()=>"left"===i.value)),h=l((()=>f.value&&c.value)),v=l((()=>"top"===i.value)),m=l((()=>f.value?u:void 0)),b=l((()=>f.value?d:void 0)),w=l((()=>f.value?p:void 0)),y=l((()=>n.value===ne.Mobile)),C=l((()=>{const{meta:{activeMenu:e},path:t}=a;return e||t})),k=l((()=>"top"!==i.value?ee("--v3-sidebar-menu-item-height"):ee("--v3-navigationbar-height"))),x=l((()=>"top"!==i.value?ee("--v3-sidebar-menu-hover-bg-color"):"transparent")),T=l((()=>"top"!==i.value?"2px":"0px"));return{isLogo:h,isCollapse:r,activeMenu:C,isTop:v,backgroundColor:m,textColor:b,activeTextColor:w,isMobile:y,routes:O,sidebarMenuItemHeight:k,sidebarMenuHoverBgColor:x,tipLineWidth:T}}},Ce=()=>{V((e=>({"18c798c8":e.tipLineWidth,"34a6e930":e.sidebarMenuItemHeight,"173aa6d8":e.sidebarMenuHoverBgColor,"5c16d82a":e.activeTextColor})))},ke=ye.setup;ye.setup=ke?(e,t)=>(Ce(),ke(e,t)):Ce;const xe=a(ye,[["render",function(e,t,l,a,s,u){const d=o("logo"),p=o("sidebarItem"),f=o("el-menu"),h=o("el-scrollbar");return n(),r("div",{class:y({"has-logo":a.isLogo})},[a.isLogo?(n(),i(d,{key:0,collapse:a.isCollapse},null,8,["collapse"])):c("",!0),m(h,{"wrap-class":"scrollbar-wrapper"},{default:b((()=>[m(f,{"default-active":a.activeMenu,collapse:a.isCollapse&&!a.isTop,"background-color":a.backgroundColor,"text-color":a.textColor,"active-text-color":a.activeTextColor,"unique-opened":!0,"collapse-transition":!1,mode:a.isTop&&!a.isMobile?"horizontal":"vertical"},{default:b((()=>[(n(!0),r(_,null,R(a.routes,(e=>(n(),i(p,{key:e.path,item:e,hidden:e.hidden,"base-path":e.path,"is-collapse":a.isCollapse,"is-top":a.isTop},null,8,["item","hidden","base-path","is-collapse","is-top"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])])),_:1})],2)}],["__scopeId","data-v-56db13d2"]]),Te=a(C({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const l=e,a=()=>{t("toggleClick")};return(e,t)=>{const s=o("el-icon");return n(),r("div",{onClick:a},[m(s,{size:20,class:"icon"},{default:b((()=>[l.isActive?(n(),i(k(I),{key:0})):(n(),i(k(F),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-290dc7a9"]]);function _e(e,t){void 0===t&&(t={});for(var l=function(e){for(var t=[],l=0;l<e.length;){var a=e[l];if("*"!==a&&"+"!==a&&"?"!==a)if("\\"!==a)if("{"!==a)if("}"!==a)if(":"!==a)if("("!==a)t.push({type:"CHAR",index:l,value:e[l++]});else{var o=1,n="";if("?"===e[s=l+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--o){s++;break}}else if("("===e[s]&&(o++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));n+=e[s++]}else n+=e[s++]+e[s++];if(o)throw new TypeError("Unbalanced pattern at ".concat(l));if(!n)throw new TypeError("Missing pattern at ".concat(l));t.push({type:"PATTERN",index:l,value:n}),l=s}else{for(var r="",s=l+1;s<e.length;){var i=e.charCodeAt(s);if(!(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i))break;r+=e[s++]}if(!r)throw new TypeError("Missing parameter name at ".concat(l));t.push({type:"NAME",index:l,value:r}),l=s}else t.push({type:"CLOSE",index:l,value:e[l++]});else t.push({type:"OPEN",index:l,value:e[l++]});else t.push({type:"ESCAPED_CHAR",index:l++,value:e[l++]});else t.push({type:"MODIFIER",index:l,value:e[l++]})}return t.push({type:"END",index:l,value:""}),t}(e),a=t.prefixes,o=void 0===a?"./":a,n="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),r=[],s=0,i=0,c="",u=function(e){if(i<l.length&&l[i].type===e)return l[i++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var a=l[i],o=a.type,n=a.index;throw new TypeError("Unexpected ".concat(o," at ").concat(n,", expected ").concat(e))},p=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};i<l.length;){var f=u("CHAR"),h=u("NAME"),v=u("PATTERN");if(h||v){var g=f||"";-1===o.indexOf(g)&&(c+=g,g=""),c&&(r.push(c),c=""),r.push({name:h||s++,prefix:g,suffix:"",pattern:v||n,modifier:u("MODIFIER")||""})}else{var m=f||u("ESCAPED_CHAR");if(m)c+=m;else if(c&&(r.push(c),c=""),u("OPEN")){g=p();var b=u("NAME")||"",w=u("PATTERN")||"",y=p();d("CLOSE"),r.push({name:b||(w?s++:""),pattern:b&&!w?n:w,prefix:g,suffix:y,modifier:u("MODIFIER")||""})}else d("END")}}return r}function Ee(e,t){return function(e,t){void 0===t&&(t={});var l=function(e){return e&&e.sensitive?"":"i"}(t),a=t.encode,o=void 0===a?function(e){return e}:a,n=t.validate,r=void 0===n||n,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),l)}));return function(t){for(var l="",a=0;a<e.length;a++){var n=e[a];if("string"!=typeof n){var i=t?t[n.name]:void 0,c="?"===n.modifier||"*"===n.modifier,u="*"===n.modifier||"+"===n.modifier;if(Array.isArray(i)){if(!u)throw new TypeError('Expected "'.concat(n.name,'" to not repeat, but got an array'));if(0===i.length){if(c)continue;throw new TypeError('Expected "'.concat(n.name,'" to not be empty'))}for(var d=0;d<i.length;d++){var p=o(i[d],n);if(r&&!s[a].test(p))throw new TypeError('Expected all "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(p,'"'));l+=n.prefix+p+n.suffix}}else if("string"!=typeof i&&"number"!=typeof i){if(!c){var f=u?"an array":"a string";throw new TypeError('Expected "'.concat(n.name,'" to be ').concat(f))}}else{p=o(String(i),n);if(r&&!s[a].test(p))throw new TypeError('Expected "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(p,'"'));l+=n.prefix+p+n.suffix}}else l+=n}return l}}(_e(e,t),t)}const Me={class:"flex flex-row justify-between"},Ae={key:0,class:"no-redirect"},Se=["onClick"],Re=a(C({__name:"index",setup(a){const s=t(),c=L(),u=e(),{proxy:d}=P(),p=f([]),v=()=>{p.value=s.matched.filter((e=>{var t,l;return(null==(t=e.meta)?void 0:t.title)&&!1!==(null==(l=e.meta)?void 0:l.breadcrumb)}))},g=e=>{const{redirect:t,path:l}=e;t?c.push(t):c.push((e=>Ee(e)(s.params))(l))};h((()=>s.path),(e=>{e.startsWith("/redirect/")||v()})),v();const w=l((()=>u.getProjectList)),y=f(u.getCurrentProjectId),C=e=>{u.setCurrentProject(e),d.$nextTick((()=>{u.setManualRefresh()}))};return(e,t)=>{const l=o("el-breadcrumb-item"),a=o("el-breadcrumb"),s=o("el-option"),c=o("el-select");return n(),r("div",Me,[m(a,{class:"app-breadcrumb"},{default:b((()=>[(n(!0),r(_,null,R(p.value,((e,t)=>(n(),i(l,{key:e.path},{default:b((()=>["noRedirect"===e.redirect||t===p.value.length-1?(n(),r("span",Ae,S(e.meta.title),1)):(n(),r("a",{key:1,onClick:j((t=>g(e)),["prevent"])},S(e.meta.title),9,Se))])),_:2},1024)))),128))])),_:1}),m(c,{placeholder:"请选择项目",onChange:C,modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value=e),size:"large",class:"mt5"},{default:b((()=>[(n(!0),r(_,null,R(w.value,(e=>(n(),i(s,{key:e.id,label:e.name,value:e.monitorAppId},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-930d9604"]]),Oe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ve=(()=>{if("undefined"==typeof document)return!1;const e=Oe[0],t={};for(const l of Oe){if((null==l?void 0:l[1])in document){for(const[a,o]of l.entries())t[e[a]]=o;return t}}return!1})(),Ie={change:Ve.fullscreenchange,error:Ve.fullscreenerror};let Fe={request:(e=document.documentElement,t)=>new Promise(((l,a)=>{const o=()=>{Fe.off("change",o),l()};Fe.on("change",o);const n=e[Ve.requestFullscreen](t);n instanceof Promise&&n.then(o).catch(a)})),exit:()=>new Promise(((e,t)=>{if(!Fe.isFullscreen)return void e();const l=()=>{Fe.off("change",l),e()};Fe.on("change",l);const a=document[Ve.exitFullscreen]();a instanceof Promise&&a.then(l).catch(t)})),toggle:(e,t)=>Fe.isFullscreen?Fe.exit():Fe.request(e,t),onchange(e){Fe.on("change",e)},onerror(e){Fe.on("error",e)},on(e,t){const l=Ie[e];l&&document.addEventListener(l,t,!1)},off(e,t){const l=Ie[e];l&&document.removeEventListener(l,t,!1)},raw:Ve};Object.defineProperties(Fe,{isFullscreen:{get:()=>Boolean(document[Ve.fullscreenElement])},element:{enumerable:!0,get:()=>document[Ve.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[Ve.fullscreenEnabled])}}),Ve||(Fe={isEnabled:!1});const Le=Fe,Pe=a(C({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(e){const t=e,a=f(!1),s=l((()=>a.value?t.exitTips:t.openTips)),c=l((()=>a.value?"fullscreen-exit":"fullscreen")),u=()=>{const e=document.querySelector(t.element)||void 0;Le.isEnabled?Le.toggle(e):B.warning("您的浏览器无法工作")},d=()=>{a.value=Le.isFullscreen};q((e=>{Le.on("change",d),e((()=>{Le.isEnabled&&Le.off("change",d)}))}));const p=f(!1),h=l((()=>p.value?"内容区复原":"内容区放大")),v=l((()=>p.value?"fullscreen-exit":"fullscreen")),g=()=>{document.body.className=p.value?"":"content-large",p.value=!p.value};return(e,t)=>{const l=o("SvgIcon"),d=o("el-tooltip"),p=o("el-dropdown-item"),f=o("el-dropdown-menu"),w=o("el-dropdown");return n(),r("div",null,[e.content?(n(),i(w,{key:1},{dropdown:b((()=>[m(f,null,{default:b((()=>[m(p,{onClick:g},{default:b((()=>[A(S(h.value),1)])),_:1}),m(p,{onClick:u,disabled:a.value},{default:b((()=>[A("内容区全屏")])),_:1},8,["disabled"])])),_:1})])),default:b((()=>[m(l,{name:v.value},null,8,["name"])])),_:1})):(n(),i(d,{key:0,effect:"dark",content:s.value,placement:"bottom"},{default:b((()=>[m(l,{name:c.value,onClick:u},null,8,["name"])])),_:1},8,["content"]))])}}}),[["__scopeId","data-v-99c21081"]]),je={components:{hamburger:Te,breadcrumb:Re,sideBar:xe,screenfull:Pe,themeSwitch:Q},setup(){const e=se(),t=L(),a=K(),{sidebar:o,device:n}=g(e),{layoutMode:r,showNotify:s,showThemeSwitch:i,showScreenfull:c}=g(a),u=l((()=>"top"===r.value)),d=l((()=>n.value===ne.Mobile));return{UserFilled:D,isMobile:d,isTop:u,sidebar:o,toggleSidebar:()=>{e.toggleSidebar(!1)},showScreenfull:c,showThemeSwitch:i,showNotify:s,logout:()=>{t.push("/login")}}}},qe=e=>(W("data-v-ac5bd324"),e=e(),N(),e),Be={class:"navigation-bar"},De={class:"right-menu"},We={class:"right-menu-avatar"},Ne=qe((()=>s("span",null,"admin",-1))),ze=qe((()=>s("span",{style:{display:"block"}},"退出登录",-1)));const He=a(je,[["render",function(e,t,l,a,u,d){const p=o("hamburger"),f=o("breadcrumb"),h=o("side-bar"),v=o("screenfull"),g=o("themeSwitch"),w=o("el-avatar"),y=o("el-dropdown-item"),C=o("router-link"),k=o("el-dropdown-menu"),x=o("el-dropdown");return n(),r("div",Be,[!a.isTop||a.isMobile?(n(),i(p,{key:0,"is-active":a.sidebar.opened,class:"hamburger",onToggleClick:a.toggleSidebar},null,8,["is-active","onToggleClick"])):c("",!0),!a.isTop||a.isMobile?(n(),i(f,{key:1,class:"breadcrumb"})):c("",!0),a.isTop&&!a.isMobile?(n(),i(h,{key:2,class:"side-bar"})):c("",!0),s("div",De,[a.showScreenfull?(n(),i(v,{key:0,class:"right-menu-item"})):c("",!0),a.showThemeSwitch?(n(),i(g,{key:1,class:"right-menu-item"})):c("",!0),m(x,{class:"right-menu-item"},{dropdown:b((()=>[m(k,null,{default:b((()=>[m(C,{to:{path:"/info",query:{setid:123456}}},{default:b((()=>[m(y,null,{default:b((()=>[A("个人信息")])),_:1})])),_:1}),m(y,{divided:"",onClick:a.logout},{default:b((()=>[ze])),_:1},8,["onClick"])])),_:1})])),default:b((()=>[s("div",We,[m(w,{icon:a.UserFilled,size:30},null,8,["icon"]),Ne])])),_:1})])])}],["__scopeId","data-v-ac5bd324"]]),$e={class:"scroll-container"},Ue={ref:"scrollbarContentRef",class:"scrollbar-content"};const Ge={class:"tags-view-container"};const Je=a({components:{scrollPane:a({props:["tagRefs"],components:{screenfull:Pe},setup(e){const l=t(),a=K(),o=f(),n=f();let r=0;const s=()=>{const e=n.value.clientWidth,t=o.value.wrapRef.clientWidth;return{scrollbarContentRefWidth:e,scrollbarRefWidth:t,lastDistance:e-t-r}},i=(e,t=200)=>{let l=0;const{scrollbarContentRefWidth:a,scrollbarRefWidth:n,lastDistance:i}=s();n>a||(l="left"===e?Math.max(0,r-t):Math.min(r+t,r+i),o.value.setScrollLeft(l))},c=()=>{const t=e.tagRefs;for(let e=0;e<t.length;e++)if(l.path===t[e].$props.to.path){const l=t[e].$el,a=l.offsetWidth,o=l.offsetLeft,{scrollbarRefWidth:n}=s();if(o<r){return void i("left",r-o)}const c=n+r-a;if(o>c){return void i("right",o-c)}}};return h(l,(()=>{$(c)}),{deep:!0}),{scrollTo:i,wheelScroll:({deltaY:e})=>{/^-/.test(e.toString())?i("left"):i("right")},scroll:({scrollLeft:e})=>{r=e},ArrowLeft:z,ArrowRight:H,settingsStore:a,scrollbarContentRef:n,scrollbarRef:o}}},[["render",function(e,t,l,a,u,d){const p=o("ArrowLeft"),f=o("el-icon"),h=o("el-scrollbar"),v=o("ArrowRight"),g=o("screenfull");return n(),r("div",$e,[m(f,{class:"arrow left",onClick:t[0]||(t[0]=e=>a.scrollTo("left"))},{default:b((()=>[m(p)])),_:1}),m(h,{ref:"scrollbarRef",onWheelPassive:a.wheelScroll,onScroll:a.scroll,class:"scrollbar-content"},{default:b((()=>[s("div",Ue,[x(e.$slots,"default",{},void 0,!0)],512)])),_:3},8,["onWheelPassive","onScroll"]),m(f,{class:"arrow right",onClick:t[1]||(t[1]=e=>a.scrollTo("right"))},{default:b((()=>[m(v)])),_:1}),a.settingsStore.showScreenfull?(n(),i(g,{key:0,element:".app-main",content:!0,class:"screenfull"})):c("",!0)])}],["__scopeId","data-v-89a04ddf"]])},setup(){const e=f([]),l=P(),a=L(),o=t(),n=X(),r=f(!1),s=f(0),i=f(0),c=f({});let u=[];const d=e=>e.path===o.path,p=e=>{var t;return null==(t=e.meta)?void 0:t.affix},v=(e,t="/")=>{const l=[];return e.forEach((e=>{if(p(e)){const a=me.resolve(t,e.path);l.push({fullPath:a,path:a,meta:{...e.meta}})}if(e.children){const t=v(e.children,e.path);l.push(...t)}})),l},g=(e,t)=>{const l=e.slice(-1)[0],o=null==l?void 0:l.fullPath;void 0!==o?a.push(o):"Dashboard"===t.name?a.push({path:"/redirect"+t.path,query:t.query}):a.push("/")},m=()=>{r.value=!1},b=()=>{var e;(null==(e=o.meta)?void 0:e.title)&&(n.addVisitedView(o),n.addCachedView(o))};return h(o,(()=>{b()}),{deep:!0}),U((()=>{(()=>{var e;u=v(O);for(const t of u)(null==(e=t.meta)?void 0:e.title)&&n.addVisitedView(t)})(),b()})),h(r,(e=>{e?document.body.addEventListener("click",m):document.body.removeEventListener("click",m)})),{tagRefs:e,tagsViewStore:n,isActive:d,isAffix:p,closeSelectedTag:e=>{n.delVisitedView(e),n.delCachedView(e),d(e)&&g(n.visitedViews,e)},visible:r,refreshSelectedTag:e=>{n.delCachedView(e),a.replace({path:"/redirect"+e.path,query:e.query})},selectedTag:c,closeOthersTags:()=>{const e=c.value.fullPath;e!==o.path&&void 0!==e&&a.push(e),n.delOthersVisitedViews(c.value),n.delOthersCachedViews(c.value)},closeAllTags:e=>{n.delAllVisitedViews(),n.delAllCachedViews(),u.some((e=>e.path===o.path))||g(n.visitedViews,e)},openMenu:(e,t)=>{const a=l.proxy.$el.getBoundingClientRect().left,o=l.proxy.$el.offsetWidth-105,n=t.clientX-a+15;i.value=n>o?o:n,s.value=t.clientY,r.value=!0,c.value=e},left:i,top:s,closeMenu:m}}},[["render",function(e,t,l,a,u,d){const p=o("Close"),f=o("el-icon"),h=o("router-link"),v=o("scroll-pane");return n(),r("div",Ge,[m(v,{class:"tags-view-wrapper","tag-refs":a.tagRefs},{default:b((()=>[(n(!0),r(_,null,R(a.tagsViewStore.visitedViews,(e=>(n(),i(h,{ref_for:!0,ref:"tagRefs",key:e.path,class:y([{active:a.isActive(e)},"tags-view-item"]),to:{path:e.path,query:e.query},onContextmenu:j((t=>a.openMenu(e,t)),["prevent"])},{default:b((()=>{var t;return[A(S(null==(t=e.meta)?void 0:t.title)+" ",1),a.isAffix(e)?c("",!0):(n(),i(f,{key:0,size:12,onClick:j((t=>a.closeSelectedTag(e)),["prevent","stop"])},{default:b((()=>[m(p)])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onContextmenu"])))),128))])),_:1},8,["tag-refs"]),G(s("ul",{class:"contextmenu",style:Y({left:a.left+"px",top:a.top+"px"})},[s("li",{onClick:t[0]||(t[0]=e=>a.refreshSelectedTag(a.selectedTag))},"刷新"),a.isAffix(a.selectedTag)?c("",!0):(n(),r("li",{key:0,onClick:t[1]||(t[1]=e=>a.closeSelectedTag(a.selectedTag))}," 关闭 ")),s("li",{onClick:t[2]||(t[2]=(...e)=>a.closeOthersTags&&a.closeOthersTags(...e))},"关闭其它"),s("li",{onClick:t[3]||(t[3]=e=>a.closeAllTags(a.selectedTag))},"关闭所有")],4),[[J,a.visible]])])}],["__scopeId","data-v-b19b46df"]]),Ye={class:"fixed-header layout-header"},Ke={class:"content"},Qe={class:"main-container"};const Xe=a({components:{sidebar:xe,appMain:oe,logo:de,navigationBar:He,tagsView:Je},setup(){const e=se(),t=K(),{showTagsView:a,showLogo:o}=g(t);return{layoutClasses:l((()=>({hideSidebar:!e.sidebar.opened}))),showTagsView:a,showLogo:o}}},[["render",function(e,t,l,a,u,d){const p=o("logo"),f=o("navigation-bar"),h=o("tags-view"),v=o("sidebar"),g=o("appMain");return n(),r("div",{class:y([a.layoutClasses,"app-wrapper"])},[s("div",Ye,[a.showLogo?(n(),i(p,{key:0,collapse:!1,class:"logo"})):c("",!0),s("div",Ke,[m(f),G(m(h,null,null,512),[[J,a.showTagsView]])])]),s("div",Qe,[m(v,{class:"sidebar-container"}),m(g,{class:"app-main"})])],2)}],["__scopeId","data-v-78255965"]]);const Ze={class:"app-wrapper"},et={class:"fixed-header layout-header"},tt={class:"content"};const lt=a({components:{leftMode:a({components:{appMain:oe,sidebar:xe,navigationBar:He,tagsView:Je},setup(){const e=se(),t=K(),{showTagsView:a,fixedHeader:o}=g(t);return{showTagsView:a,fixedHeader:o,layoutClasses:l((()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===ne.Mobile}))),handleClickOutside:()=>{e.closeSidebar(!1)}}}},[["render",function(e,t,l,a,i,u){const d=o("sidebar"),p=o("navigation-bar"),f=o("tags-view"),h=o("appMain");return n(),r("div",{class:y([a.layoutClasses,"app-wrapper"])},[a.layoutClasses.mobile&&a.layoutClasses.openSidebar?(n(),r("div",{key:0,class:"drawer-bg",onClick:t[0]||(t[0]=(...e)=>a.handleClickOutside&&a.handleClickOutside(...e))})):c("",!0),m(d,{class:"sidebar-container"}),s("div",{class:y([{hasTagsView:a.showTagsView},"main-container"])},[s("div",{class:y([{"fixed-header":a.fixedHeader},"layout-header"])},[m(p),G(m(f,null,null,512),[[J,a.showTagsView]])],2),m(h,{class:"app-main"})],2)],2)}],["__scopeId","data-v-4bcd8cc8"]]),topMode:a({components:{appMain:oe,navigationBar:He,tagsView:Je,logo:de},setup(){const e=K(),{showTagsView:t,showLogo:l}=g(e);return{showTagsView:t,showLogo:l}}},[["render",function(e,t,l,a,u,d){const p=o("logo"),f=o("navigation-bar"),h=o("tags-view"),v=o("appMain");return n(),r("div",Ze,[s("div",et,[s("div",tt,[a.showLogo?(n(),i(p,{key:0,collapse:!1,class:"logo"})):c("",!0),m(f,{class:"navigation-bar"})]),G(m(h,null,null,512),[[J,a.showTagsView]])]),s("div",{class:y([{hasTagsView:a.showTagsView},"main-container"])},[m(v,{class:"app-main"})],2)])}],["__scopeId","data-v-130eb4c9"]]),leftTopMode:Xe},setup(){const e=se(),t=K(),{layoutMode:a,showGreyMode:o,showColorWeakness:n}=g(t),r=l((()=>({showGreyMode:o.value,showColorWeakness:n.value})));return{layoutMode:a,appStore:e,DeviceEnum:ne,classes:r}}},[["render",function(e,t,l,a,s,u){const d=o("leftMode"),p=o("topMode"),f=o("leftTopMode");return n(),r("div",{class:y([a.classes,"main-content"])},["left"===a.layoutMode||a.appStore.device===a.DeviceEnum.Mobile?(n(),i(d,{key:0})):"top"===a.layoutMode?(n(),i(p,{key:1})):"left-top"===a.layoutMode?(n(),i(f,{key:2})):c("",!0)],2)}],["__scopeId","data-v-cc4d412f"]]);export{lt as default};
