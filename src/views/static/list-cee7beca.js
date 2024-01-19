import{P as e,W as a,p as t}from"./index-65f78ca0.js";import{c as l,_ as n,r as i,o as r,d as o,l as d,k as u,y as p,z as s,i as c,b as f,a as g,e as m,M as b,N as h,R as v,a8 as x,a9 as y,aa as V,ab as w,ac as _,ad as j,Q as N,ae as T,S as D,F as k}from"./index-de6888cb.js";import{t as S}from"./index-6bec9422.js";import{u as C}from"./usePagination-b8a27874.js";import"./index-2e8609a7.js";import"./validate-f5786776.js";import"./service-84b7c36b.js";const P=n({props:{data:{type:Array,defualt:()=>[]}},setup:e=>({NFTable:l((()=>{const a=["startTime","responseEnd","duration","dns","tcp","ssl","ttfb","contentDownload"];if(!e.data||!e.data.length)return[];return e.data.map((e=>{for(let t in e)a.includes(t)&&(e[t]=(e[t]||0).toFixed(2)+"ms");return e}))}))})},[["render",function(e,a,t,l,n,c){const f=i("el-table-column"),g=i("el-table");return r(),o(g,{data:l.NFTable,stripe:"","max-height":"500"},{default:d((()=>[u(f,{prop:"name",label:"资源名称",fixed:"",width:"200"}),u(f,{prop:"transferSize",label:"资源大小",fixed:""}),u(f,{prop:"initiatorType",label:"资源类型"}),u(f,{prop:"responseStatus",label:"资源状态"}),u(f,{prop:"startTime",label:"开始时间"}),u(f,{prop:"duration",label:"资源的总耗时"}),u(f,{prop:"responseEnd",label:"资源下载时间"}),u(f,{prop:"renderBlockingStatus",label:"否有渲染阻塞",fixed:"right"}),u(f,{label:"命中缓存",fixed:"right"},{default:d((({row:e})=>[p(s("cache"==e.deliveryType?"浏览器缓存":"服务器获取"),1)])),_:1})])),_:1},8,["data"])}]]);const R={components:{PerfEchart:e,WxPerfEchart:a,WxPerfResTable:n({props:{data:{type:Array,defualt:()=>[]}},setup(e){function a(e){const a=new Date(e);return`${a.getFullYear()}-${("0"+(a.getMonth()+1)).slice(-2)}-${("0"+a.getDate()).slice(-2)} ${("0"+a.getHours()).slice(-2)}:${("0"+a.getMinutes()).slice(-2)}:${("0"+a.getSeconds()).slice(-2)}`}return{NFTable:l((()=>{if(!e.data||!e.data.length)return[];return e.data.map((e=>(e.startTime=a(parseInt(e.startTime)),e.domainLookupStart=a(parseInt(e.domainLookupStart)),e.domainLookupEnd=a(parseInt(e.domainLookupEnd)),e)))}))}}},[["render",function(e,a,t,l,n,p){const s=i("el-table-column"),c=i("el-table");return r(),o(c,{data:l.NFTable,stripe:"","max-height":"500"},{default:d((()=>[u(s,{prop:"name",label:"资源名称",fixed:"",width:"200"}),u(s,{prop:"transferSize",label:"资源大小",fixed:""}),u(s,{prop:"initiatorType",label:"资源类型"}),u(s,{prop:"startTime",label:"开始时间"}),u(s,{prop:"domainLookupStart",label:"DNS查询开始"}),u(s,{prop:"domainLookupEnd",label:"DNS查询结束"}),u(s,{prop:"duration",label:"资源的总耗时"})])),_:1},8,["data"])}]]),PerfResTable:P},props:{perfNode:{type:Object,required:!0},project:{type:Object,required:!0}},name:"perfDetail",setup(e){const{perfNode:a,project:t}=e;return{drawerVisible:c(!0),perfEchartOPtion:l((()=>{const e=a["navigation-timing"]||{};let l={};return 1==t.projectType&&(l={nt:e.textValue,fp:a["first-paint"]||{}}),2==t.projectType&&(l={nt:a.textValue}),l}))}}},z=e=>(b("data-v-97ebb8c6"),e=e(),h(),e),L={class:"detail-wapper flex-1"},F={class:"detail-top-content"},E={class:"flex basic-info"},U={key:0},$={class:"other-basic"},I={class:"detail-bottom-content flex flex-1"},O={class:"navigation-content"},M={key:0,class:"title"},W={key:1,class:"flex navigation-target"},A=z((()=>f("h2",{class:"title"},"页面加载瀑布图",-1))),q=z((()=>f("h2",{class:"title"},"会话性能指标",-1))),B=z((()=>f("h3",{class:"title"},"RF 资源",-1)));const H={class:"app-container"},Q={class:"table-wrapper"},Y={class:"pager-wrapper"};const G=n({name:"Performance",components:{PerfDetail:n(R,[["render",function(e,a,t,l,n,c){const b=i("Edit"),h=i("el-icon"),v=i("Clock"),x=i("PerfEchart"),y=i("WxPerfEchart"),V=i("PerfResTable"),w=i("WxPerfResTable"),_=i("el-scroll"),j=i("el-drawer");return r(),o(j,{modelValue:l.drawerVisible,"onUpdate:modelValue":a[0]||(a[0]=e=>l.drawerVisible=e),ref:"drawerRef",title:"性能指标查看",direction:"rtl",size:"95%","z-index":9999,"append-to-body":!0},{default:d((()=>{var e,a,n,i;return[f("section",L,[f("div",F,[f("dl",E,[(null==(e=t.perfNode)?void 0:e.uuId)?(r(),g("dd",U,[u(h,{size:15},{default:d((()=>[u(b)])),_:1}),p(s(null==(a=t.perfNode)?void 0:a.uuId),1)])):m("",!0),f("dd",null,[u(h,{size:15},{default:d((()=>[u(v)])),_:1}),p(s(null==(n=t.perfNode)?void 0:n.happenTime),1)])]),f("div",$,s(null==(i=t.perfNode)?void 0:i.simpleUrl),1)]),f("div",I,[u(_,{ref:"scrollbarRef",trigger:"hover",class:"flex-1",direction:"all"},{default:d((()=>[f("div",O,[1==t.project.projectType?(r(),g("h2",M,"会话性能指标")):m("",!0),1==t.project.projectType?(r(),g("dl",W,[f("dd",null," CLS："+s(t.perfNode["cumulative-layout-shift"]&&t.perfNode["cumulative-layout-shift"].numValue||0)+" ms ",1),f("dd",null," FCP："+s(t.perfNode["first-contentful-paint"]&&t.perfNode["first-contentful-paint"].numValue||0)+" ms ",1),f("dd",null," FID："+s(t.perfNode["first-input-delay"]&&t.perfNode["first-input-delay"].textValue.delay||0)+" ms ",1),f("dd",null," FP："+s(t.perfNode["first-paint"]&&t.perfNode["first-paint"].numValue||0)+" ms ",1),f("dd",null," LCP："+s(t.perfNode["largest-contentful-paint"]&&t.perfNode["largest-contentful-paint"].numValue||0)+" ms ",1)])):m("",!0),A,f("div",null,[1==t.project.projectType?(r(),o(x,{key:0,options:l.perfEchartOPtion},null,8,["options"])):m("",!0),2==t.project.projectType?(r(),o(y,{key:1,options:l.perfEchartOPtion},null,8,["options"])):m("",!0)]),q,f("div",null,[B,1==t.project.projectType?(r(),o(V,{key:0,data:t.perfNode["resource-flow"]&&t.perfNode["resource-flow"].textValue?t.perfNode["resource-flow"].textValue:[]},null,8,["data"])):m("",!0),2==t.project.projectType?(r(),o(w,{key:1,data:t.perfNode["wx-resource-flow"]&&t.perfNode["wx-resource-flow"].textValue},null,8,["data"])):m("",!0)])])])),_:1},512)])])]})),_:1},8,["modelValue"])}],["__scopeId","data-v-97ebb8c6"]])},setup(){const e=c(!1),a=c({simpleUrl:"",data:S({format:["00:00:00","23:59:59"]})}),l=c({}),n=c([]),i=c({}),{paginationData:r,handleCurrentChange:o,handleSizeChange:d}=C((()=>{u()}));v((()=>{u()}));const u=async()=>{let e={simpleUrl:a.value.simpleUrl,startTime:a.value.data[0],endTime:a.value.data[1],page:r.currentPage,pageSize:r.pageSize},l=await t(e);l.success&&(r.total=l.model.count,n.value=l.model.list,i.value=l.model.project)};return{loading:e,searchData:a,resetSearch:()=>{a.value={simpleUrl:"",data:S({format:["00:00:00","23:59:59"]})},r.currentPage=1,u()},handleSearch:u,Search:x,Refresh:y,CirclePlus:V,RefreshRight:w,Delete:_,Download:j,tableData:n,paginationData:r,handleCurrentChange:o,handleSizeChange:d,handleDetail:e=>{l.value={},N((()=>l.value=e))},perfNode:l,project:i}}},[["render",function(e,a,t,l,n,c){const b=i("el-input"),h=i("el-form-item"),v=i("el-date-picker"),x=i("el-button"),y=i("el-form"),V=i("el-card"),w=i("el-table-column"),_=i("Histogram"),j=i("el-icon"),N=i("el-table"),S=i("el-pagination"),C=i("PerfDetail"),P=T("loading");return r(),g(k,null,[f("div",H,[D((r(),o(V,{shadow:"never",class:"search-wrapper"},{default:d((()=>[u(y,{ref:"searchFormRef",inline:!0,model:l.searchData},{default:d((()=>[u(h,{prop:"simpleUrl",label:"页面链接"},{default:d((()=>[u(b,{modelValue:l.searchData.simpleUrl,"onUpdate:modelValue":a[0]||(a[0]=e=>l.searchData.simpleUrl=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(h,{prop:"phone",label:"日期"},{default:d((()=>[u(v,{modelValue:l.searchData.data,"onUpdate:modelValue":a[1]||(a[1]=e=>l.searchData.data=e),type:"datetimerange","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])])),_:1}),u(h,null,{default:d((()=>[u(x,{type:"primary",onClick:l.handleSearch},{default:d((()=>[p("查询")])),_:1},8,["onClick"]),u(x,{onClick:l.resetSearch},{default:d((()=>[p("重置")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})),[[P,l.loading]]),D((r(),o(V,{shadow:"never"},{default:d((()=>[f("div",Q,[1==l.project.projectType?(r(),o(N,{key:0,border:"",data:l.tableData},{default:d((()=>[u(w,{prop:"simpleUrl",label:"url",align:"center"}),u(w,{label:"会话性能指标",align:"center"},{default:d((()=>[u(w,{label:"Navigation 指标",align:"center"},{default:d((()=>[u(w,{label:"DNS 查询"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.dnsLookup?e["navigation-timing"].textValue.dnsLookup:0),1)])),_:1}),u(w,{label:"TCP 链接"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.initialConnection?e["navigation-timing"].textValue.initialConnection:0),1)])),_:1}),u(w,{label:"SSL 建连"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.ssl?e["navigation-timing"].textValue.ssl:0),1)])),_:1}),u(w,{label:"TTFB 请求响应"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.ttfb?e["navigation-timing"].textValue.ttfb:0),1)])),_:1}),u(w,{label:"TRANS 内容传输"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.contentDownload?e["navigation-timing"].textValue.contentDownload:0),1)])),_:1}),u(w,{label:"DOM 解析"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.domParse?e["navigation-timing"].textValue.domParse:0),1)])),_:1}),u(w,{label:"RES 资源加载"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.resourceLoad?e["navigation-timing"].textValue.resourceLoad:0),1)])),_:1})])),_:1}),u(w,{label:"性能关键指标",align:"center"},{default:d((()=>[u(w,{label:"白屏时间"},{default:d((({row:e})=>[p(s(e["first-paint"]&&e["first-paint"].value?e["first-paint"].value:"-"),1)])),_:1}),u(w,{label:"FCP 灰屏时间"},{default:d((({row:e})=>[p(s(e["first-contentful-paint"]&&e["first-contentful-paint"].value?e["first-contentful-paint"].value:"-"),1)])),_:1}),u(w,{label:"DOM完成加载"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.domReady?e["navigation-timing"].textValue.domReady:0),1)])),_:1}),u(w,{label:"页面完全加载"},{default:d((({row:e})=>[p(s(e["navigation-timing"]&&e["navigation-timing"].textValue.pageLoad?e["navigation-timing"].textValue.pageLoad:0),1)])),_:1})])),_:1})])),_:1}),u(w,{label:"性能图表",fixed:"right",align:"center"},{default:d((({row:e})=>[u(x,{type:"text",onClick:a=>l.handleDetail(e)},{default:d((()=>[u(j,{style:{"vertical-align":"middle"}},{default:d((()=>[u(_)])),_:1})])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])):m("",!0),2==l.project.projectType?(r(),o(N,{key:1,border:"",data:l.tableData},{default:d((()=>[u(w,{prop:"simpleUrl",label:"url",align:"center"}),u(w,{label:"小程序启动耗时",align:"center"},{default:d((({row:e})=>[p(s(e.textValue.appLaunchduration?`${e.textValue.appLaunchduration.toFixed(2)}ms`:"-"),1)])),_:1}),u(w,{prop:"textValue.routeduration",label:"路由耗时",align:"center"},{default:d((({row:e})=>[p(s(e.textValue.routeduration?`${e.textValue.routeduration.toFixed(2)}ms`:"-"),1)])),_:1}),u(w,{label:"页面渲染",align:"center"},{default:d((({row:e})=>[p(s(e.textValue.firstRenderviewLayerReadyTime?e.textValue.firstRenderviewLayerRenderEndTime-e.textValue.firstRenderviewLayerReadyTime+"ms":"-"),1)])),_:1}),u(w,{prop:"textValue.evaluateScriptduration",label:"js注入耗时",align:"center"},{default:d((({row:e})=>[p(s(e.textValue.evaluateScriptduration?`${e.textValue.evaluateScriptduration.toFixed(2)}ms`:"-"),1)])),_:1}),u(w,{prop:"textValue.downloadPackageduration",label:"代码包下载耗时",align:"center"},{default:d((({row:e})=>[p(s(e.textValue.downloadPackageduration?`${e.textValue.downloadPackageduration.toFixed(2)}ms`:"-"),1)])),_:1}),u(w,{label:"性能图表",fixed:"right",align:"center"},{default:d((({row:e})=>[u(x,{type:"text",onClick:a=>l.handleDetail(e)},{default:d((()=>[u(j,{style:{"vertical-align":"middle"}},{default:d((()=>[u(_)])),_:1})])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])):m("",!0)]),f("div",Y,[u(S,{background:"",layout:l.paginationData.layout,"page-sizes":l.paginationData.pageSizes,total:l.paginationData.total,"page-size":l.paginationData.pageSize,currentPage:l.paginationData.currentPage,onSizeChange:l.handleSizeChange,onCurrentChange:l.handleCurrentChange},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[P,l.loading]])]),l.perfNode.simpleUrl?(r(),o(C,{key:0,project:l.project,perfNode:l.perfNode},null,8,["project","perfNode"])):m("",!0)],64)}],["__scopeId","data-v-2272feb8"]]);export{G as default};
//# sourceMappingURL=list-cee7beca.js.map