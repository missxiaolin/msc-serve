import{E as e}from"./index-b2eaaf40.js";import{h as a,t as l}from"./index-cd0c75ff.js";import{i as t,w as r,_ as s,r as o,o as n,a as p,k as i,F as u,b as d,R as c,a8 as h,a9 as m,aa as g,ab as f,ac as y,ad as v,Q as b,ae as D,S as C,d as T,l as _,e as S,A as z,y as k}from"./index-affe7dad.js";import{D as w}from"./detailPopup-fdd841c0.js";import{r as x}from"./service-0e365184.js";import{u as U}from"./usePagination-f5a0e47d.js";import"./validate-f5786776.js";const V={components:{Echarts:e},props:{echartsOptions:{type:Object,required:!0}},setup(e){const l=t({}),s=()=>{let{seriesData:t=[],axisData:r=[],seriesName:s={}}=e.echartsOptions;t=t.map(((e,a)=>({...{name:s[a],type:"bar",barGap:0,emphasis:{focus:"series"},...e}}))),l.value={xAxis:{type:"category",data:r,axisLabel:{color:"#95979e",align:"center",formatter:(e,l)=>{const t=a(e).format("MM-DD HH:mm").split(" ");return`${t[0]}\n${t[1]}`}}},yAxis:{type:"value"},dataZoom:[{type:"inside"}],seriesColorReset:!0,series:[...t]}};return s(),r((()=>e.echartsOptions),(e=>{s()})),{options:l}}},P=d("div",{class:"flex"},null,-1);const R={class:"app-container"},N={class:"table-wrapper"},O={class:"pager-wrapper"};const j=s({name:"Resource",components:{ResHoursEchart:s(V,[["render",function(e,a,l,t,r,s){const d=o("Echarts");return n(),p(u,null,[P,i(d,{options:t.options},null,8,["options"])],64)}]]),DetailPopup:w},setup(){const e=t(!1),a=t({}),r=t([{value:"IMG",label:"IMG"},{value:"LINK",label:"LINK"},{value:"SCRIPT",label:"SCRIPT"}]),s=t({pageUrl:"",url:"",resourceType:"",data:l({format:["00:00:00","23:59:59"]})}),o=t({}),n=t([]),{paginationData:p,handleCurrentChange:i,handleSizeChange:u}=U((()=>{d()}));c((()=>{d(),D()}));const d=async()=>{let e={url:s.value.url,pageUrl:s.value.pageUrl,resourceType:s.value.resourceType,startTime:s.value.data[0],endTime:s.value.data[1],page:p.currentPage,pageSize:p.pageSize},a=await(l=e,x({url:"/adm/resource/list",method:"post",data:l}));var l;a.success&&(p.total=a.model.count,n.value=a.model.list)},D=async()=>{let e={startTime:s.value.data[0],endTime:s.value.data[1]},l=await(t=e,x({url:"/adm/resource/hour",method:"post",data:t}));var t;l.success&&(a.value=l.model)};return{resourceTypes:r,loading:e,searchData:s,resetSearch:()=>{s.value={pageUrl:"",url:"",resourceType:"",data:l({format:["00:00:00","23:59:59"]})},d(),D()},handleSearch:d,Search:h,Refresh:m,CirclePlus:g,RefreshRight:f,Delete:y,Download:v,tableData:n,paginationData:p,handleCurrentChange:i,handleSizeChange:u,handleDetail:e=>{o.value={},b((()=>o.value=e))},perfNode:o,init:async()=>{d(),D()},echartsOptions:a}}},[["render",function(e,a,l,t,r,s){const c=o("el-input"),h=o("el-form-item"),m=o("el-option"),g=o("el-select"),f=o("el-date-picker"),y=o("el-button"),v=o("el-form"),b=o("el-card"),w=o("ResHoursEchart"),x=o("el-table-column"),U=o("el-table"),V=o("el-pagination"),P=o("DetailPopup"),j=D("loading");return n(),p(u,null,[d("div",R,[C((n(),T(b,{shadow:"never",class:"search-wrapper"},{default:_((()=>[i(v,{ref:"searchFormRef",inline:!0,model:t.searchData},{default:_((()=>[i(h,{prop:"pageUrl",label:"页面链接"},{default:_((()=>[i(c,{modelValue:t.searchData.pageUrl,"onUpdate:modelValue":a[0]||(a[0]=e=>t.searchData.pageUrl=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(h,{prop:"resourceType",label:"资源类型"},{default:_((()=>[i(g,{modelValue:t.searchData.resourceType,"onUpdate:modelValue":a[1]||(a[1]=e=>t.searchData.resourceType=e),placeholder:"请选择"},{default:_((()=>[(n(!0),p(u,null,z(t.resourceTypes,(e=>(n(),T(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(h,{prop:"url",label:"资源链接"},{default:_((()=>[i(c,{modelValue:t.searchData.url,"onUpdate:modelValue":a[2]||(a[2]=e=>t.searchData.url=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(h,{prop:"phone",label:"日期"},{default:_((()=>[i(f,{modelValue:t.searchData.data,"onUpdate:modelValue":a[3]||(a[3]=e=>t.searchData.data=e),type:"datetimerange","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])])),_:1}),i(h,null,{default:_((()=>[i(y,{type:"primary",onClick:t.init},{default:_((()=>[k("查询")])),_:1},8,["onClick"]),i(y,{onClick:t.resetSearch},{default:_((()=>[k("重置")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})),[[j,t.loading]]),t.echartsOptions.seriesName?(n(),T(b,{key:0,shadow:"always",class:"mt20 mb20"},{default:_((()=>[i(w,{echartsOptions:t.echartsOptions},null,8,["echartsOptions"])])),_:1})):S("",!0),C((n(),T(b,{shadow:"never"},{default:_((()=>[d("div",N,[i(U,{border:"",data:t.tableData},{default:_((()=>[i(x,{prop:"resourceType",label:"错误类型",align:"center"}),i(x,{prop:"errorMsg",label:"错误信息",align:"center"}),i(x,{prop:"html",label:"HTML内容",align:"center"}),i(x,{prop:"pageUrl",label:"上报页面",align:"center"}),i(x,{prop:"happenTime",label:"上报时间",align:"center"}),i(x,{label:"操作",fixed:"right",align:"center"},{default:_((({row:e})=>[i(y,{type:"text",onClick:a=>t.handleDetail(e)},{default:_((()=>[k(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),d("div",O,[i(V,{background:"",layout:t.paginationData.layout,"page-sizes":t.paginationData.pageSizes,total:t.paginationData.total,"page-size":t.paginationData.pageSize,currentPage:t.paginationData.currentPage,onSizeChange:t.handleSizeChange,onCurrentChange:t.handleCurrentChange},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[j,t.loading]])]),t.perfNode.resourceType?(n(),T(P,{key:0,perfNode:t.perfNode},null,8,["perfNode"])):S("",!0)],64)}],["__scopeId","data-v-c81a3c6a"]]);export{j as default};