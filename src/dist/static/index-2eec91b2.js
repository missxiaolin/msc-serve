import{u as e,c as t,_ as l,r as o,o as a,a as n,b as r,d as s,e as i,f as c,g as d,h as u,w as p,s as f,i as h,j as v,k as g,T as m,n as b,l as w,m as y,p as C,q as k,F as x,t as T,v as _,x as E,y as S,z as A,A as M,B as O,C as R,D as V,E as F,G as I,H as L,I as P,J as q,K as B,L as D,M as W,N,O as H,P as z,Q as j,R as $,S as U,U as G,V as J}from"./index-ff3f8bb3.js";import{u as Y,t as K,a as Q}from"./tags-view-87d5759c.js";import{i as X,g as Z}from"./index-bdf07b24.js";const ee={class:"app-main"},te={class:"app-scrollbar"};const le=l({setup(){const l=e();return{key:t((()=>l.path))}}},[["render",function(e,t,l,i,c,d){const u=o("router-view");return a(),n("section",ee,[r("div",te,[s(u)])])}],["__scopeId","data-v-c5d9b230"]]);var oe=(e=>(e[e.Mobile=0]="Mobile",e[e.Desktop=1]="Desktop",e))(oe||{});const ae="closed";const ne=i("app",(()=>{const e=c({opened:d()!==ae,withoutAnimation:!1}),t=u(oe.Desktop);p((()=>e.opened),(e=>function(e){f(e?"opened":ae)}(e)));return{device:t,sidebar:e,toggleSidebar:t=>{e.opened=!e.opened,e.withoutAnimation=t},closeSidebar:t=>{e.opened=!1,e.withoutAnimation=t},toggleDevice:e=>{t.value=e}}})),re={props:{collapse:{type:Boolean,default:!1}},setup(e){const t=Y(),{layoutMode:l}=h(t);return{layoutMode:l,logo:"/static/logo-647d216c.png",props:e,logoSamll:"/static/logo-small-2a551d00.png"}}},se=["src"],ie=["src"];const ce=l(re,[["render",function(e,t,l,i,c,d){const u=o("router-link");return a(),n("div",{class:b(["layout-logo-container",{collapse:i.props.collapse,"layout-mode-top":"top"===i.layoutMode}])},[s(m,{name:"layout-logo-fade"},{default:v((()=>[i.props.collapse?(a(),g(u,{key:"collapse",to:"/"},{default:v((()=>[r("img",{src:i.logoSamll,class:"layout-logo"},null,8,se)])),_:1})):(a(),g(u,{key:"expand",to:"/"},{default:v((()=>[r("img",{src:"left"!==i.layoutMode?i.logoSamll:i.logo,class:"layout-logo-text"},null,8,ie)])),_:1}))])),_:1})],2)}],["__scopeId","data-v-2e6c493d"]]),de=["href"],ue=w({__name:"sidebarItemLink",props:{to:{}},setup(e){const t=e;return(e,l)=>{const r=o("router-link");return y(X)(t.to)?(a(),n("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[C(e.$slots,"default")],8,de)):(a(),g(r,{key:1,to:t.to},{default:v((()=>[C(e.$slots,"default")])),_:3},8,["to"]))}}});function pe(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function fe(e,t){for(var l,o="",a=0,n=-1,r=0,s=0;s<=e.length;++s){if(s<e.length)l=e.charCodeAt(s);else{if(47===l)break;l=47}if(47===l){if(n===s-1||1===r);else if(n!==s-1&&2===r){if(o.length<2||2!==a||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2))if(o.length>2){var i=o.lastIndexOf("/");if(i!==o.length-1){-1===i?(o="",a=0):a=(o=o.slice(0,i)).length-1-o.lastIndexOf("/"),n=s,r=0;continue}}else if(2===o.length||1===o.length){o="",a=0,n=s,r=0;continue}t&&(o.length>0?o+="/..":o="..",a=2)}else o.length>0?o+="/"+e.slice(n+1,s):o=e.slice(n+1,s),a=s-n-1;n=s,r=0}else 46===l&&-1!==r?++r:r=-1}return o}var he={resolve:function(){for(var e,t="",l=!1,o=arguments.length-1;o>=-1&&!l;o--){var a;o>=0?a=arguments[o]:(void 0===e&&(e=process.cwd()),a=e),pe(a),0!==a.length&&(t=a+"/"+t,l=47===a.charCodeAt(0))}return t=fe(t,!l),l?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(pe(e),0===e.length)return".";var t=47===e.charCodeAt(0),l=47===e.charCodeAt(e.length-1);return 0!==(e=fe(e,!t)).length||t||(e="."),e.length>0&&l&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return pe(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var l=arguments[t];pe(l),l.length>0&&(void 0===e?e=l:e+="/"+l)}return void 0===e?".":he.normalize(e)},relative:function(e,t){if(pe(e),pe(t),e===t)return"";if((e=he.resolve(e))===(t=he.resolve(t)))return"";for(var l=1;l<e.length&&47===e.charCodeAt(l);++l);for(var o=e.length,a=o-l,n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var r=t.length-n,s=a<r?a:r,i=-1,c=0;c<=s;++c){if(c===s){if(r>s){if(47===t.charCodeAt(n+c))return t.slice(n+c+1);if(0===c)return t.slice(n+c)}else a>s&&(47===e.charCodeAt(l+c)?i=c:0===c&&(i=0));break}var d=e.charCodeAt(l+c);if(d!==t.charCodeAt(n+c))break;47===d&&(i=c)}var u="";for(c=l+i+1;c<=o;++c)c!==o&&47!==e.charCodeAt(c)||(0===u.length?u+="..":u+="/..");return u.length>0?u+t.slice(n+i):(n+=i,47===t.charCodeAt(n)&&++n,t.slice(n))},_makeLong:function(e){return e},dirname:function(e){if(pe(e),0===e.length)return".";for(var t=e.charCodeAt(0),l=47===t,o=-1,a=!0,n=e.length-1;n>=1;--n)if(47===(t=e.charCodeAt(n))){if(!a){o=n;break}}else a=!1;return-1===o?l?"/":".":l&&1===o?"//":e.slice(0,o)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');pe(e);var l,o=0,a=-1,n=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,s=-1;for(l=e.length-1;l>=0;--l){var i=e.charCodeAt(l);if(47===i){if(!n){o=l+1;break}}else-1===s&&(n=!1,s=l+1),r>=0&&(i===t.charCodeAt(r)?-1==--r&&(a=l):(r=-1,a=s))}return o===a?a=s:-1===a&&(a=e.length),e.slice(o,a)}for(l=e.length-1;l>=0;--l)if(47===e.charCodeAt(l)){if(!n){o=l+1;break}}else-1===a&&(n=!1,a=l+1);return-1===a?"":e.slice(o,a)},extname:function(e){pe(e);for(var t=-1,l=0,o=-1,a=!0,n=0,r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47!==s)-1===o&&(a=!1,o=r+1),46===s?-1===t?t=r:1!==n&&(n=1):-1!==t&&(n=-1);else if(!a){l=r+1;break}}return-1===t||-1===o||0===n||1===n&&t===o-1&&t===l+1?"":e.slice(t,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var l=t.dir||t.root,o=t.base||(t.name||"")+(t.ext||"");return l?l===t.root?l+o:l+e+o:o}("/",e)},parse:function(e){pe(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var l,o=e.charCodeAt(0),a=47===o;a?(t.root="/",l=1):l=0;for(var n=-1,r=0,s=-1,i=!0,c=e.length-1,d=0;c>=l;--c)if(47!==(o=e.charCodeAt(c)))-1===s&&(i=!1,s=c+1),46===o?-1===n?n=c:1!==d&&(d=1):-1!==n&&(d=-1);else if(!i){r=c+1;break}return-1===n||-1===s||0===d||1===d&&n===s-1&&n===r+1?-1!==s&&(t.base=t.name=0===r&&a?e.slice(1,s):e.slice(r,s)):(0===r&&a?(t.name=e.slice(1,n),t.base=e.slice(1,s)):(t.name=e.slice(r,n),t.base=e.slice(r,s)),t.ext=e.slice(n,s)),r>0?t.dir=e.slice(0,r-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};he.posix=he;const ve=k(he),ge={components:{sidebarItemLink:ue},props:{item:{type:Object,default:{}},hidden:{type:Boolean,default:!1},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!1},basePath:{type:String,default:""},alwaysShow:{type:Boolean,default:!1}},setup(e){const{item:l,hidden:o,isCollapse:a,isTop:n,isFirstLevel:r,basePath:s,alwaysShow:i}=e,c=t((()=>i)),d=t((()=>{var e;return(null==(e=l.children)?void 0:e.filter((()=>!o)))??[]})),u=t((()=>d.value.length)),p=t((()=>{const t=u.value;switch(!0){case t>1:return null;case 1===t:return d.value[0];default:return{...e.item,path:""}}}));return{item:l,hidden:o,isCollapse:a,isTop:n,isFirstLevel:r,basePath:s,alwaysShowRootMenu:c,theOnlyOneChild:p,resolvePath:e=>{switch(!0){case X(e):return e;case X(s):return s;default:return ve.resolve(s,e)}}}}},me={key:1};const be={components:{logo:ce,sidebarItem:l(ge,[["render",function(e,t,l,r,i,c){const d=o("el-menu-item"),u=o("sidebarItemLink"),p=o("sidebar-item",!0),f=o("el-sub-menu");return r.hidden?E("",!0):(a(),n("div",{key:0,class:b({"simple-mode":r.isCollapse&&!r.isTop,"first-level":r.isFirstLevel})},[r.alwaysShowRootMenu||!r.theOnlyOneChild||r.theOnlyOneChild.children?(a(),g(f,{key:1,index:r.resolvePath(r.item.path),teleported:""},{title:v((()=>{var e,t;return[(null==(e=r.item.meta)?void 0:e.elIcon)?(a(),g(_(r.item.meta.elIcon),{key:0,class:"el-icon"})):E("",!0),(null==(t=r.item.meta)?void 0:t.title)?(a(),n("span",me,A(r.item.meta.title),1)):E("",!0)]})),default:v((()=>[r.item.children?(a(!0),n(x,{key:0},M(r.item.children,(e=>(a(),g(p,{key:e.path,item:e,"is-collapse":r.isCollapse,"is-first-level":!1,"base-path":r.resolvePath(e.path)},null,8,["item","is-collapse","base-path"])))),128)):E("",!0)])),_:1},8,["index"])):(a(),n(x,{key:0},[r.theOnlyOneChild.meta?(a(),g(u,{key:0,to:r.resolvePath(r.theOnlyOneChild.path)},{default:v((()=>[s(d,{index:r.resolvePath(r.theOnlyOneChild.path)},T({default:v((()=>[r.theOnlyOneChild.meta.elIcon?(a(),g(_(r.theOnlyOneChild.meta.elIcon),{key:0,class:"el-icon"})):E("",!0)])),_:2},[r.theOnlyOneChild.meta.title?{name:"title",fn:v((()=>[S(A(r.theOnlyOneChild.meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):E("",!0)],64))],2))}],["__scopeId","data-v-31dc34fe"]])},setup(){const l=ne(),o=e(),{sidebar:a,device:n}=h(l),r=t((()=>!a.value.opened)),s=Y(),{layoutMode:i,showLogo:c}=h(s),d=Z("--v3-sidebar-menu-bg-color"),u=Z("--v3-sidebar-menu-text-color"),p=Z("--v3-sidebar-menu-active-text-color"),f=t((()=>"left"===i.value)),v=t((()=>f.value&&c.value)),g=t((()=>"top"===i.value)),m=t((()=>f.value?d:void 0)),b=t((()=>f.value?u:void 0)),w=t((()=>f.value?p:void 0)),y=t((()=>n.value===oe.Mobile)),C=t((()=>{const{meta:{activeMenu:e},path:t}=o;return e||t})),k=t((()=>"top"!==i.value?Z("--v3-sidebar-menu-item-height"):Z("--v3-navigationbar-height"))),x=t((()=>"top"!==i.value?Z("--v3-sidebar-menu-hover-bg-color"):"transparent")),T=t((()=>"top"!==i.value?"2px":"0px"));return{isLogo:v,isCollapse:r,activeMenu:C,isTop:g,backgroundColor:m,textColor:b,activeTextColor:w,isMobile:y,routes:O,sidebarMenuItemHeight:k,sidebarMenuHoverBgColor:x,tipLineWidth:T}}},we=()=>{R((e=>({"18c798c8":e.tipLineWidth,"34a6e930":e.sidebarMenuItemHeight,"173aa6d8":e.sidebarMenuHoverBgColor,"5c16d82a":e.activeTextColor})))},ye=be.setup;be.setup=ye?(e,t)=>(we(),ye(e,t)):we;const Ce=l(be,[["render",function(e,t,l,r,i,c){const d=o("logo"),u=o("sidebarItem"),p=o("el-menu"),f=o("el-scrollbar");return a(),n("div",{class:b({"has-logo":r.isLogo})},[r.isLogo?(a(),g(d,{key:0,collapse:r.isCollapse},null,8,["collapse"])):E("",!0),s(f,{"wrap-class":"scrollbar-wrapper"},{default:v((()=>[s(p,{"default-active":r.activeMenu,collapse:r.isCollapse&&!r.isTop,"background-color":r.backgroundColor,"text-color":r.textColor,"active-text-color":r.activeTextColor,"unique-opened":!0,"collapse-transition":!1,mode:r.isTop&&!r.isMobile?"horizontal":"vertical"},{default:v((()=>[(a(!0),n(x,null,M(r.routes,(e=>(a(),g(u,{key:e.path,item:e,hidden:e.hidden,"base-path":e.path,"is-collapse":r.isCollapse,"is-top":r.isTop},null,8,["item","hidden","base-path","is-collapse","is-top"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])])),_:1})],2)}],["__scopeId","data-v-56db13d2"]]),ke=l(w({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const l=e,r=()=>{t("toggleClick")};return(e,t)=>{const i=o("el-icon");return a(),n("div",{onClick:r},[s(i,{size:20,class:"icon"},{default:v((()=>[l.isActive?(a(),g(y(V),{key:0})):(a(),g(y(F),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-290dc7a9"]]);function xe(e,t){void 0===t&&(t={});for(var l=function(e){for(var t=[],l=0;l<e.length;){var o=e[l];if("*"!==o&&"+"!==o&&"?"!==o)if("\\"!==o)if("{"!==o)if("}"!==o)if(":"!==o)if("("!==o)t.push({type:"CHAR",index:l,value:e[l++]});else{var a=1,n="";if("?"===e[s=l+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--a){s++;break}}else if("("===e[s]&&(a++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));n+=e[s++]}else n+=e[s++]+e[s++];if(a)throw new TypeError("Unbalanced pattern at ".concat(l));if(!n)throw new TypeError("Missing pattern at ".concat(l));t.push({type:"PATTERN",index:l,value:n}),l=s}else{for(var r="",s=l+1;s<e.length;){var i=e.charCodeAt(s);if(!(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||95===i))break;r+=e[s++]}if(!r)throw new TypeError("Missing parameter name at ".concat(l));t.push({type:"NAME",index:l,value:r}),l=s}else t.push({type:"CLOSE",index:l,value:e[l++]});else t.push({type:"OPEN",index:l,value:e[l++]});else t.push({type:"ESCAPED_CHAR",index:l++,value:e[l++]});else t.push({type:"MODIFIER",index:l,value:e[l++]})}return t.push({type:"END",index:l,value:""}),t}(e),o=t.prefixes,a=void 0===o?"./":o,n="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),r=[],s=0,i=0,c="",d=function(e){if(i<l.length&&l[i].type===e)return l[i++].value},u=function(e){var t=d(e);if(void 0!==t)return t;var o=l[i],a=o.type,n=o.index;throw new TypeError("Unexpected ".concat(a," at ").concat(n,", expected ").concat(e))},p=function(){for(var e,t="";e=d("CHAR")||d("ESCAPED_CHAR");)t+=e;return t};i<l.length;){var f=d("CHAR"),h=d("NAME"),v=d("PATTERN");if(h||v){var g=f||"";-1===a.indexOf(g)&&(c+=g,g=""),c&&(r.push(c),c=""),r.push({name:h||s++,prefix:g,suffix:"",pattern:v||n,modifier:d("MODIFIER")||""})}else{var m=f||d("ESCAPED_CHAR");if(m)c+=m;else if(c&&(r.push(c),c=""),d("OPEN")){g=p();var b=d("NAME")||"",w=d("PATTERN")||"",y=p();u("CLOSE"),r.push({name:b||(w?s++:""),pattern:b&&!w?n:w,prefix:g,suffix:y,modifier:d("MODIFIER")||""})}else u("END")}}return r}function Te(e,t){return function(e,t){void 0===t&&(t={});var l=function(e){return e&&e.sensitive?"":"i"}(t),o=t.encode,a=void 0===o?function(e){return e}:o,n=t.validate,r=void 0===n||n,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),l)}));return function(t){for(var l="",o=0;o<e.length;o++){var n=e[o];if("string"!=typeof n){var i=t?t[n.name]:void 0,c="?"===n.modifier||"*"===n.modifier,d="*"===n.modifier||"+"===n.modifier;if(Array.isArray(i)){if(!d)throw new TypeError('Expected "'.concat(n.name,'" to not repeat, but got an array'));if(0===i.length){if(c)continue;throw new TypeError('Expected "'.concat(n.name,'" to not be empty'))}for(var u=0;u<i.length;u++){var p=a(i[u],n);if(r&&!s[o].test(p))throw new TypeError('Expected all "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(p,'"'));l+=n.prefix+p+n.suffix}}else if("string"!=typeof i&&"number"!=typeof i){if(!c){var f=d?"an array":"a string";throw new TypeError('Expected "'.concat(n.name,'" to be ').concat(f))}}else{p=a(String(i),n);if(r&&!s[o].test(p))throw new TypeError('Expected "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(p,'"'));l+=n.prefix+p+n.suffix}}else l+=n}return l}}(xe(e,t),t)}const _e={key:0,class:"no-redirect"},Ee=["onClick"],Se=l(w({__name:"index",setup(t){const l=e(),r=I(),s=u([]),i=()=>{s.value=l.matched.filter((e=>{var t,l;return(null==(t=e.meta)?void 0:t.title)&&!1!==(null==(l=e.meta)?void 0:l.breadcrumb)}))},c=e=>{const{redirect:t,path:o}=e;t?r.push(t):r.push((e=>Te(e)(l.params))(o))};return p((()=>l.path),(e=>{e.startsWith("/redirect/")||i()})),i(),(e,t)=>{const l=o("el-breadcrumb-item"),r=o("el-breadcrumb");return a(),g(r,{class:"app-breadcrumb"},{default:v((()=>[(a(!0),n(x,null,M(s.value,((e,t)=>(a(),g(l,{key:e.path},{default:v((()=>["noRedirect"===e.redirect||t===s.value.length-1?(a(),n("span",_e,A(e.meta.title),1)):(a(),n("a",{key:1,onClick:L((t=>c(e)),["prevent"])},A(e.meta.title),9,Ee))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-d39c32e8"]]),Ae=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Me=(()=>{if("undefined"==typeof document)return!1;const e=Ae[0],t={};for(const l of Ae){if((null==l?void 0:l[1])in document){for(const[o,a]of l.entries())t[e[o]]=a;return t}}return!1})(),Oe={change:Me.fullscreenchange,error:Me.fullscreenerror};let Re={request:(e=document.documentElement,t)=>new Promise(((l,o)=>{const a=()=>{Re.off("change",a),l()};Re.on("change",a);const n=e[Me.requestFullscreen](t);n instanceof Promise&&n.then(a).catch(o)})),exit:()=>new Promise(((e,t)=>{if(!Re.isFullscreen)return void e();const l=()=>{Re.off("change",l),e()};Re.on("change",l);const o=document[Me.exitFullscreen]();o instanceof Promise&&o.then(l).catch(t)})),toggle:(e,t)=>Re.isFullscreen?Re.exit():Re.request(e,t),onchange(e){Re.on("change",e)},onerror(e){Re.on("error",e)},on(e,t){const l=Oe[e];l&&document.addEventListener(l,t,!1)},off(e,t){const l=Oe[e];l&&document.removeEventListener(l,t,!1)},raw:Me};Object.defineProperties(Re,{isFullscreen:{get:()=>Boolean(document[Me.fullscreenElement])},element:{enumerable:!0,get:()=>document[Me.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[Me.fullscreenEnabled])}}),Me||(Re={isEnabled:!1});const Ve=Re,Fe=l(w({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(e){const l=e,r=u(!1),i=t((()=>r.value?l.exitTips:l.openTips)),c=t((()=>r.value?"fullscreen-exit":"fullscreen")),d=()=>{const e=document.querySelector(l.element)||void 0;Ve.isEnabled?Ve.toggle(e):q.warning("您的浏览器无法工作")},p=()=>{r.value=Ve.isFullscreen};P((e=>{Ve.on("change",p),e((()=>{Ve.isEnabled&&Ve.off("change",p)}))}));const f=u(!1),h=t((()=>f.value?"内容区复原":"内容区放大")),m=t((()=>f.value?"fullscreen-exit":"fullscreen")),b=()=>{document.body.className=f.value?"":"content-large",f.value=!f.value};return(e,t)=>{const l=o("SvgIcon"),u=o("el-tooltip"),p=o("el-dropdown-item"),f=o("el-dropdown-menu"),w=o("el-dropdown");return a(),n("div",null,[e.content?(a(),g(w,{key:1},{dropdown:v((()=>[s(f,null,{default:v((()=>[s(p,{onClick:b},{default:v((()=>[S(A(h.value),1)])),_:1}),s(p,{onClick:d,disabled:r.value},{default:v((()=>[S("内容区全屏")])),_:1},8,["disabled"])])),_:1})])),default:v((()=>[s(l,{name:m.value},null,8,["name"])])),_:1})):(a(),g(u,{key:0,effect:"dark",content:i.value,placement:"bottom"},{default:v((()=>[s(l,{name:c.value,onClick:d},null,8,["name"])])),_:1},8,["content"]))])}}}),[["__scopeId","data-v-99c21081"]]),Ie={components:{hamburger:ke,breadcrumb:Se,sideBar:Ce,screenfull:Fe,themeSwitch:K},setup(){const e=ne(),l=I(),o=Y(),{sidebar:a,device:n}=h(e),{layoutMode:r,showNotify:s,showThemeSwitch:i,showScreenfull:c}=h(o),d=t((()=>"top"===r.value)),u=t((()=>n.value===oe.Mobile));return{UserFilled:B,isMobile:u,isTop:d,sidebar:a,toggleSidebar:()=>{e.toggleSidebar(!1)},showScreenfull:c,showThemeSwitch:i,showNotify:s,logout:()=>{l.push("/login")}}}},Le=e=>(D("data-v-ac5bd324"),e=e(),W(),e),Pe={class:"navigation-bar"},qe={class:"right-menu"},Be={class:"right-menu-avatar"},De=Le((()=>r("span",null,"admin",-1))),We=Le((()=>r("span",{style:{display:"block"}},"退出登录",-1)));const Ne=l(Ie,[["render",function(e,t,l,i,c,d){const u=o("hamburger"),p=o("breadcrumb"),f=o("side-bar"),h=o("screenfull"),m=o("themeSwitch"),b=o("el-avatar"),w=o("el-dropdown-item"),y=o("router-link"),C=o("el-dropdown-menu"),k=o("el-dropdown");return a(),n("div",Pe,[!i.isTop||i.isMobile?(a(),g(u,{key:0,"is-active":i.sidebar.opened,class:"hamburger",onToggleClick:i.toggleSidebar},null,8,["is-active","onToggleClick"])):E("",!0),!i.isTop||i.isMobile?(a(),g(p,{key:1,class:"breadcrumb"})):E("",!0),i.isTop&&!i.isMobile?(a(),g(f,{key:2,class:"side-bar"})):E("",!0),r("div",qe,[i.showScreenfull?(a(),g(h,{key:0,class:"right-menu-item"})):E("",!0),i.showThemeSwitch?(a(),g(m,{key:1,class:"right-menu-item"})):E("",!0),s(k,{class:"right-menu-item"},{dropdown:v((()=>[s(C,null,{default:v((()=>[s(y,{to:{path:"/info",query:{setid:123456}}},{default:v((()=>[s(w,null,{default:v((()=>[S("个人信息")])),_:1})])),_:1}),s(w,{divided:"",onClick:i.logout},{default:v((()=>[We])),_:1},8,["onClick"])])),_:1})])),default:v((()=>[r("div",Be,[s(b,{icon:i.UserFilled,size:30},null,8,["icon"]),De])])),_:1})])])}],["__scopeId","data-v-ac5bd324"]]),He={class:"scroll-container"},ze={ref:"scrollbarContentRef",class:"scrollbar-content"};const je={class:"tags-view-container"};const $e=l({components:{scrollPane:l({props:["tagRefs"],components:{screenfull:Fe},setup(t){const l=e(),o=Y(),a=u(),n=u();let r=0;const s=()=>{const e=n.value.clientWidth,t=a.value.wrapRef.clientWidth;return{scrollbarContentRefWidth:e,scrollbarRefWidth:t,lastDistance:e-t-r}},i=(e,t=200)=>{let l=0;const{scrollbarContentRefWidth:o,scrollbarRefWidth:n,lastDistance:i}=s();n>o||(l="left"===e?Math.max(0,r-t):Math.min(r+t,r+i),a.value.setScrollLeft(l))},c=()=>{const e=t.tagRefs;for(let t=0;t<e.length;t++)if(l.path===e[t].$props.to.path){const l=e[t].$el,o=l.offsetWidth,a=l.offsetLeft,{scrollbarRefWidth:n}=s();if(a<r){return void i("left",r-a)}const c=n+r-o;if(a>c){return void i("right",a-c)}}};return p(l,(()=>{z(c)}),{deep:!0}),{scrollTo:i,wheelScroll:({deltaY:e})=>{/^-/.test(e.toString())?i("left"):i("right")},scroll:({scrollLeft:e})=>{r=e},ArrowLeft:N,ArrowRight:H,settingsStore:o,scrollbarContentRef:n,scrollbarRef:a}}},[["render",function(e,t,l,i,c,d){const u=o("ArrowLeft"),p=o("el-icon"),f=o("el-scrollbar"),h=o("ArrowRight"),m=o("screenfull");return a(),n("div",He,[s(p,{class:"arrow left",onClick:t[0]||(t[0]=e=>i.scrollTo("left"))},{default:v((()=>[s(u)])),_:1}),s(f,{ref:"scrollbarRef",onWheelPassive:i.wheelScroll,onScroll:i.scroll,class:"scrollbar-content"},{default:v((()=>[r("div",ze,[C(e.$slots,"default",{},void 0,!0)],512)])),_:3},8,["onWheelPassive","onScroll"]),s(p,{class:"arrow right",onClick:t[1]||(t[1]=e=>i.scrollTo("right"))},{default:v((()=>[s(h)])),_:1}),i.settingsStore.showScreenfull?(a(),g(m,{key:0,element:".app-main",content:!0,class:"screenfull"})):E("",!0)])}],["__scopeId","data-v-89a04ddf"]])},setup(){const t=u([]),l=j(),o=I(),a=e(),n=Q(),r=u(!1),s=u(0),i=u(0),c=u({});let d=[];const f=e=>e.path===a.path,h=e=>{var t;return null==(t=e.meta)?void 0:t.affix},v=(e,t="/")=>{const l=[];return e.forEach((e=>{if(h(e)){const o=ve.resolve(t,e.path);l.push({fullPath:o,path:o,meta:{...e.meta}})}if(e.children){const t=v(e.children,e.path);l.push(...t)}})),l},g=(e,t)=>{const l=e.slice(-1)[0],a=null==l?void 0:l.fullPath;void 0!==a?o.push(a):"Dashboard"===t.name?o.push({path:"/redirect"+t.path,query:t.query}):o.push("/")},m=()=>{r.value=!1},b=()=>{var e;(null==(e=a.meta)?void 0:e.title)&&(n.addVisitedView(a),n.addCachedView(a))};return p(a,(()=>{b()}),{deep:!0}),$((()=>{(()=>{var e;d=v(O);for(const t of d)(null==(e=t.meta)?void 0:e.title)&&n.addVisitedView(t)})(),b()})),p(r,(e=>{e?document.body.addEventListener("click",m):document.body.removeEventListener("click",m)})),{tagRefs:t,tagsViewStore:n,isActive:f,isAffix:h,closeSelectedTag:e=>{n.delVisitedView(e),n.delCachedView(e),f(e)&&g(n.visitedViews,e)},visible:r,refreshSelectedTag:e=>{n.delCachedView(e),o.replace({path:"/redirect"+e.path,query:e.query})},selectedTag:c,closeOthersTags:()=>{const e=c.value.fullPath;e!==a.path&&void 0!==e&&o.push(e),n.delOthersVisitedViews(c.value),n.delOthersCachedViews(c.value)},closeAllTags:e=>{n.delAllVisitedViews(),n.delAllCachedViews(),d.some((e=>e.path===a.path))||g(n.visitedViews,e)},openMenu:(e,t)=>{const o=l.proxy.$el.getBoundingClientRect().left,a=l.proxy.$el.offsetWidth-105,n=t.clientX-o+15;i.value=n>a?a:n,s.value=t.clientY,r.value=!0,c.value=e},left:i,top:s,closeMenu:m}}},[["render",function(e,t,l,i,c,d){const u=o("Close"),p=o("el-icon"),f=o("router-link"),h=o("scroll-pane");return a(),n("div",je,[s(h,{class:"tags-view-wrapper","tag-refs":i.tagRefs},{default:v((()=>[(a(!0),n(x,null,M(i.tagsViewStore.visitedViews,(e=>(a(),g(f,{ref_for:!0,ref:"tagRefs",key:e.path,class:b([{active:i.isActive(e)},"tags-view-item"]),to:{path:e.path,query:e.query},onContextmenu:L((t=>i.openMenu(e,t)),["prevent"])},{default:v((()=>{var t;return[S(A(null==(t=e.meta)?void 0:t.title)+" ",1),i.isAffix(e)?E("",!0):(a(),g(p,{key:0,size:12,onClick:L((t=>i.closeSelectedTag(e)),["prevent","stop"])},{default:v((()=>[s(u)])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onContextmenu"])))),128))])),_:1},8,["tag-refs"]),U(r("ul",{class:"contextmenu",style:J({left:i.left+"px",top:i.top+"px"})},[r("li",{onClick:t[0]||(t[0]=e=>i.refreshSelectedTag(i.selectedTag))},"刷新"),i.isAffix(i.selectedTag)?E("",!0):(a(),n("li",{key:0,onClick:t[1]||(t[1]=e=>i.closeSelectedTag(i.selectedTag))}," 关闭 ")),r("li",{onClick:t[2]||(t[2]=(...e)=>i.closeOthersTags&&i.closeOthersTags(...e))},"关闭其它"),r("li",{onClick:t[3]||(t[3]=e=>i.closeAllTags(i.selectedTag))},"关闭所有")],4),[[G,i.visible]])])}],["__scopeId","data-v-b19b46df"]]),Ue={class:"fixed-header layout-header"},Ge={class:"content"},Je={class:"main-container"};const Ye=l({components:{sidebar:Ce,appMain:le,logo:ce,navigationBar:Ne,tagsView:$e},setup(){const e=ne(),l=Y(),{showTagsView:o,showLogo:a}=h(l);return{layoutClasses:t((()=>({hideSidebar:!e.sidebar.opened}))),showTagsView:o,showLogo:a}}},[["render",function(e,t,l,i,c,d){const u=o("logo"),p=o("navigation-bar"),f=o("tags-view"),h=o("sidebar"),v=o("appMain");return a(),n("div",{class:b([i.layoutClasses,"app-wrapper"])},[r("div",Ue,[i.showLogo?(a(),g(u,{key:0,collapse:!1,class:"logo"})):E("",!0),r("div",Ge,[s(p),U(s(f,null,null,512),[[G,i.showTagsView]])])]),r("div",Je,[s(h,{class:"sidebar-container"}),s(v,{class:"app-main"})])],2)}],["__scopeId","data-v-78255965"]]);const Ke={class:"app-wrapper"},Qe={class:"fixed-header layout-header"},Xe={class:"content"};const Ze=l({components:{leftMode:l({components:{appMain:le,sidebar:Ce,navigationBar:Ne,tagsView:$e},setup(){const e=ne(),l=Y(),{showTagsView:o,fixedHeader:a}=h(l);return{showTagsView:o,fixedHeader:a,layoutClasses:t((()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===oe.Mobile}))),handleClickOutside:()=>{e.closeSidebar(!1)}}}},[["render",function(e,t,l,i,c,d){const u=o("sidebar"),p=o("navigation-bar"),f=o("tags-view"),h=o("appMain");return a(),n("div",{class:b([i.layoutClasses,"app-wrapper"])},[i.layoutClasses.mobile&&i.layoutClasses.openSidebar?(a(),n("div",{key:0,class:"drawer-bg",onClick:t[0]||(t[0]=(...e)=>i.handleClickOutside&&i.handleClickOutside(...e))})):E("",!0),s(u,{class:"sidebar-container"}),r("div",{class:b([{hasTagsView:i.showTagsView},"main-container"])},[r("div",{class:b([{"fixed-header":i.fixedHeader},"layout-header"])},[s(p),U(s(f,null,null,512),[[G,i.showTagsView]])],2),s(h,{class:"app-main"})],2)],2)}],["__scopeId","data-v-4bcd8cc8"]]),topMode:l({components:{appMain:le,navigationBar:Ne,tagsView:$e,logo:ce},setup(){const e=Y(),{showTagsView:t,showLogo:l}=h(e);return{showTagsView:t,showLogo:l}}},[["render",function(e,t,l,i,c,d){const u=o("logo"),p=o("navigation-bar"),f=o("tags-view"),h=o("appMain");return a(),n("div",Ke,[r("div",Qe,[r("div",Xe,[i.showLogo?(a(),g(u,{key:0,collapse:!1,class:"logo"})):E("",!0),s(p,{class:"navigation-bar"})]),U(s(f,null,null,512),[[G,i.showTagsView]])]),r("div",{class:b([{hasTagsView:i.showTagsView},"main-container"])},[s(h,{class:"app-main"})],2)])}],["__scopeId","data-v-130eb4c9"]]),leftTopMode:Ye},setup(){const e=ne(),l=Y(),{layoutMode:o,showGreyMode:a,showColorWeakness:n}=h(l),r=t((()=>({showGreyMode:a.value,showColorWeakness:n.value})));return{layoutMode:o,appStore:e,DeviceEnum:oe,classes:r}}},[["render",function(e,t,l,r,s,i){const c=o("leftMode"),d=o("topMode"),u=o("leftTopMode");return a(),n("div",{class:b([r.classes,"main-content"])},["left"===r.layoutMode||r.appStore.device===r.DeviceEnum.Mobile?(a(),g(c,{key:0})):"top"===r.layoutMode?(a(),g(d,{key:1})):"left-top"===r.layoutMode?(a(),g(u,{key:2})):E("",!0)],2)}],["__scopeId","data-v-cc4d412f"]]);export{Ze as default};
