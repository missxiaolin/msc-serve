import{i as e,_ as l,r,o as a,d as s,l as n,b as d,k as o,z as t,y as p,a as i,e as u,F as f,A as c,M as N,N as b}from"./index-a9cc547b.js";const m={props:{perfNode:{type:Object,required:!0}},name:"",setup:()=>({drawerVisible:e(!0),resetFile:e=>{if(!e)return"";let l=e.match(/\http(.+?)\.js/g);return l&&l.length?l[0]:""}})},h=e=>(N("data-v-d55c5372"),e=e(),b(),e),v={class:"js-error-detail-content flex flex-1"},g={class:"flex-1 left-content"},x={class:"title flex"},y={class:"line1 flex"},k={class:"flex flex-1 align-items-center","data-user":"上报人"},R={class:"flex flex-1 align-items-center","data-user":"浏览器"},_={class:"flex flex-1 align-items-center","data-user":"系统"},T={class:"line2"},w={class:"flex flex-wrap"},O=h((()=>d("label",null,"ip:",-1))),V=h((()=>d("label",null,"区域:",-1))),z=h((()=>d("label",null,"设备:",-1))),E=h((()=>d("label",null,"设备尺寸:",-1))),I=h((()=>d("label",null,"浏览器:",-1))),F=h((()=>d("label",null,"地址页面:",-1))),U={class:"single-ellipsis"},j=h((()=>d("h2",{class:"title"},"UserAgent",-1))),A={class:"line3"},J={class:"title"},M={class:"line4"},S={key:0},D={class:"title"},C={class:"line4"},q={key:0,class:"vue-replenish-info"},P=h((()=>d("h3",null,"其他补充信息：",-1)));const B=l(m,[["render",function(e,l,N,b,m,h){const B=r("UserFilled"),G=r("el-icon"),H=r("ChromeFilled"),K=r("Iphone"),L=r("el-scroll"),Q=r("el-drawer");return a(),s(Q,{modelValue:b.drawerVisible,"onUpdate:modelValue":l[0]||(l[0]=e=>b.drawerVisible=e),ref:"drawerRef",title:"详情",direction:"rtl",size:"80%","append-to-body":!0,"z-index":9999},{default:n((()=>[d("div",v,[o(L,{ref:"scrollbarRef",trigger:"hover",class:"flex-1",direction:"all"},{default:n((()=>{var e,l,r,s;return[d("div",g,[d("h2",x," 基本信息 (项目ID: "+t(N.perfNode.monitorAppId)+") ",1)]),d("div",y,[d("p",k,[o(G,{size:20},{default:n((()=>[o(B)])),_:1}),p(" "+t(N.perfNode.uuId),1)]),d("p",R,[o(G,{size:"20"},{default:n((()=>[o(H)])),_:1}),p(" "+t(N.perfNode.browserInfo),1)]),d("p",_,[o(G,{size:"20"},{default:n((()=>[o(K)])),_:1}),p(" "+t(N.perfNode.os),1)])]),d("div",null,[d("dl",T,[d("dd",w,[d("p",null,[O,d("label",null,t(N.perfNode.ip||""),1)]),d("p",null,[V,d("label",null,t(N.perfNode.country||""),1)]),d("p",null,[z,d("label",null,t(N.perfNode.device||""),1)]),d("p",null,[E,d("label",null,t(N.perfNode.deviceType||""),1)]),d("p",null,[I,d("label",null,t(N.perfNode.device||""),1)]),d("p",null,[F,d("label",U,t(N.perfNode.pageUrl),1)])])]),j,d("dl",A,[d("dd",null,t(N.perfNode.userAgent),1)]),"RESOURCE_ERROR"===N.perfNode.category?(a(),i(f,{key:0},[d("h2",J,"错误信息 ("+t(N.perfNode.happenTime)+")",1),d("dl",M,[d("dt",null,t(N.perfNode.category)+"： "+t(N.perfNode.errorMsg),1),d("dd",null,t(N.perfNode.html||""),1),N.perfNode.paths&&N.perfNode.paths.length?(a(),i("dd",S," DOM Paths："+t(JSON.stringify(N.perfNode.paths)),1)):u("",!0)])],64)):u("",!0),"JS_ERROR"===N.perfNode.category?(a(),i(f,{key:1},[d("h2",D,t("vueError"==N.perfNode.subType?"Vue":"Js")+"错误堆栈 ("+t(N.perfNode.happenTime)+") ",1),d("dl",C,[d("dt",null,t(N.perfNode.type)+"： "+t(N.perfNode.errorMsg),1),(a(!0),i(f,null,c(N.perfNode.stackTraces?JSON.parse(N.perfNode.stackTraces):[],((e,l)=>(a(),i("dd",{key:l},[p(" at functionName: "+t(e.functionName)+"（",1),d("cite",null,[p(t(b.resetFile(e.filename))+":",1),d("b",null,t(e.lineno),1),p(":"),d("b",null,t(e.colno),1)]),p("） ")])))),128))]),"vueError"==(null==(e=N.perfNode)?void 0:e.subType)?(a(),i("div",q,[P,d("p",null,[p(" hook: "),d("b",null,t(null==(l=N.perfNode)?void 0:l.hook),1)]),d("p",null,[p(" componentName: "),d("b",null,t(null==(r=N.perfNode)?void 0:r.componentName),1)]),d("p",null,[p(" componentNameTrace: "),d("b",null,t(null==(s=N.perfNode)?void 0:s.componentNameTrace),1)])])):u("",!0)],64)):u("",!0)])]})),_:1},512)])])),_:1},8,["modelValue"])}],["__scopeId","data-v-d55c5372"]]);export{B as D};