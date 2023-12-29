import{c as a}from"./index-e51ca18a.js";import{r as t}from"./service-4a0c217b.js";import{p as e,M as l,a as o,b as n}from"./index-7b2870a3.js";import{_ as i,r as s,o as r,a as c,k as d,l as p,b as u,y,z as h,d as m,e as f,M as D,N as v,c as g,w as b,F as _,g as x,R as C}from"./index-1656c061.js";import{E as j,l as K}from"./index-885fb35f.js";const T={props:{title:{type:String,default:()=>""},optionData:{type:Object,default:()=>({})},objKey:{type:String,default:()=>""}},setup:()=>({riseTrendCompout:(a,t,e)=>{let l=0;return l=e?(a-t)/a:(t-a)/t,`${(100*(l||0)).toFixed(0)} %`}})},w={class:"footer-item"},P=(a=>(D("data-v-7212cecc"),a=a(),v(),a))((()=>u("span",null,"较昨日",-1))),E={class:"green"};const $={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},confine:!0,formatter:a=>{let{name:t,value:e,seriesName:l,color:o}=a[0],n=t;return t.includes(".com")&&(t=t.split(".com")[1],t=t.split("?"),n=`${t[0]}</br>${t[1]?t[1].slice(0,20)+"...":""}`),`${n}</br><span style="display:flex; align-items: center;">\n\t\t\t\t<i style="display:block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:${o}"></i>${l}:\n\t\t\t\t <i style="padding-left: 30px;">${e}</i>\n\t\t\t</span>`}},xAxis:{type:"value",splitNumber:5,position:"top"},yAxis:{type:"category",data:[],axisLabel:{color:"#95979e",interval:0,formatter:a=>`${a.slice(0,20)}${a.length>20?"...":""}`}},series:[{name:"数量",type:"bar",label:{show:!0,position:"right",valueAnimation:!0},emphasis:{focus:"series"},data:[]}]};const M={components:{dataCardItem:i(T,[["render",function(a,t,e,l,o,n){const i=s("el-statistic"),D=s("CaretTop"),v=s("CaretBottom"),g=s("el-icon");return r(),c("div",null,[d(i,{value:e.optionData.analyseData.todayData[e.objKey]},{title:p((()=>[y(h(e.title),1)])),_:1},8,["value"]),u("div",w,[P,u("span",E,[y(h(l.riseTrendCompout(e.optionData.analyseData.todayData[e.objKey],e.optionData.analyseData.yesterdayData[e.objKey],e.optionData.analyseData.todayData[e.objKey]>e.optionData.analyseData.yesterdayData[e.objKey]))+" ",1),d(g,{size:"14"},{default:p((()=>[e.optionData.analyseData.todayData[e.objKey]>e.optionData.analyseData.yesterdayData[e.objKey]?(r(),m(D,{key:0})):f("",!0),e.optionData.analyseData.todayData[e.objKey]<e.optionData.analyseData.yesterdayData[e.objKey]?(r(),m(v,{key:1})):f("",!0)])),_:1})])])])}],["__scopeId","data-v-7212cecc"]]),pageHoursEchart:e,colItem:i({props:{title:{type:String,default:""},tip:{type:String,default:""},chart:{type:Object,default:{}},optionData:{type:Object,default:{}},chartKey:{type:String,default:""}},components:{Echarts:j},setup(a){const{chart:t}=a,e=g((()=>(a,e=t.topEchartModel)=>{const l=K.cloneDeep($),o=e[a],n=(null==o?void 0:o.axisData)||[],i=(null==o?void 0:o.seriesData)||[],s=i.length,r=s-t.showNum;return l.yAxis.data=n.slice(r,s),l.series[0].data=i.slice(r,s),l}));return b(t,(()=>{})),{chartData:e}}},[["render",function(a,t,e,l,o,n){const i=s("WarningFilled"),m=s("el-icon"),f=s("el-tooltip"),D=s("Echarts");return r(),c(_,null,[u("dl",null,[u("dt",null,[y(h(e.title)+" "+h(e.chart.showNum)+" ",1),d(f,{effect:"dark",content:e.tip,placement:"right"},{default:p((()=>[d(m,{size:"20"},{default:p((()=>[d(i)])),_:1})])),_:1},8,["content"])]),u("dd",null,h(e.optionData.analyseTime),1)]),d(D,{options:l.chartData(e.chartKey,e.chart.topEchartModel),size:e.chart.echartHeight},null,8,["options","size"])],64)}],["__scopeId","data-v-699eebab"]]),MapEcharts:l},setup(){let e=x({analyseTime:"",analyseData:{todayData:{pvCount:0,uvCount:0,newUvCount:0,ipCounct:0,jumpCount:0,visitFrequency:0},yesterdayData:{pvCount:0,uvCount:0,newUvCount:0,ipCounct:0,jumpCount:0,visitFrequency:0}}});const l=async()=>{let a={analyseTime:e.analyseTime},l=await function(a){return t({url:"/adm/analyse/core",method:"post",data:a})}(a);if(!l.success)return!1;e.analyseData=l.model},i=()=>{l(),d(),p()},s=g((()=>({startTime:`${e.analyseTime} 00:00:00`,endTime:`${e.analyseTime} 23:59:59`}))),r=g((()=>({...s.value})));let c=x({topEchartModel:{},ipcregion:[],showNum:10,echartHeight:200});const d=async()=>{const a={...s.value,limit:30},t=await o(a);if(!t.success)return!1;c.topEchartModel=t.model},p=async()=>{const a={...s.value};let t=await n(a);if(!t.success)return!1;c.ipcregion=t.model};return C((()=>{e.analyseTime=a(),i()})),{data:e,disabledDate:a=>a.getTime()>Date.now(),initQuery:i,hourPvUvParam:r,chart:c,handleTopNumChange:a=>{c.echartHeight={10:300,20:400,30:500}[a]}}}},N=a=>(D("data-v-8451148f"),a=a(),v(),a),k={class:"app-container center"},O={class:"home-title flex"},U=N((()=>u("dt",{class:"flex-1"},"核心数据",-1))),z={class:"top-title"},I=N((()=>u("span",{style:{color:"var(--e-color-success-light-3)"}},"(H-1数据)",-1))),V=N((()=>u("div",{class:"top-title"},"实时数据",-1))),F={class:"home-title flex"},H=N((()=>u("dt",null,"综合数据",-1))),S={class:"flex-1"},A={class:"synthetic-data flex"},Y={class:"synthetic-data flex"},q={class:"e-col"},Q={class:"e-col"},W={class:"e-col"},B={class:"e-col"},L={class:"e-col"},R={class:"e-col"},G={class:"top-title"};const J=i(M,[["render",function(a,t,e,l,o,n){const i=s("el-date-picker"),h=s("WarningFilled"),m=s("el-icon"),f=s("el-tooltip"),D=s("dataCardItem"),v=s("el-col"),g=s("el-row"),b=s("el-card"),_=s("pageHoursEchart"),x=s("el-radio-button"),C=s("el-radio-group"),j=s("colItem"),K=s("MapEcharts");return r(),c("div",k,[u("dl",O,[U,u("dd",null,[d(i,{modelValue:l.data.analyseTime,"onUpdate:modelValue":t[0]||(t[0]=a=>l.data.analyseTime=a),type:"date","value-format":"YYYY-MM-DD",placeholder:"请选择查询日期",clearable:!1,"disabled-date":l.disabledDate,onChange:l.initQuery},null,8,["modelValue","disabled-date","onChange"])])]),d(b,{class:"box-card"},{default:p((()=>[u("div",z,[y(" 流量数据 "),I,d(f,{effect:"dark",content:"定时数据，每小时59分钟59秒统计",placement:"right"},{default:p((()=>[d(m,{size:"20"},{default:p((()=>[d(h)])),_:1})])),_:1})]),d(g,{gutter:24},{default:p((()=>[d(v,{span:4},{default:p((()=>[d(D,{optionData:l.data,title:"浏览量(PV)",objKey:"pvCount"},null,8,["optionData"])])),_:1}),d(v,{span:4},{default:p((()=>[d(D,{optionData:l.data,title:"访客数(UV)",objKey:"uvCount"},null,8,["optionData"])])),_:1}),d(v,{span:4},{default:p((()=>[d(D,{optionData:l.data,title:"新访客",objKey:"newUvCount"},null,8,["optionData"])])),_:1}),d(v,{span:4},{default:p((()=>[d(D,{optionData:l.data,title:"IP数",objKey:"ipCounct"},null,8,["optionData"])])),_:1}),d(v,{span:4},{default:p((()=>[d(D,{optionData:l.data,title:"频次(人均)",objKey:"visitFrequency"},null,8,["optionData"])])),_:1}),d(v,{span:4},{default:p((()=>[d(D,{optionData:l.data,title:"跳出率",objKey:"jumpCount"},null,8,["optionData"])])),_:1})])),_:1})])),_:1}),d(b,{class:"box-card mt20"},{default:p((()=>[V,d(_,{params:l.hourPvUvParam},null,8,["params"])])),_:1}),u("dl",F,[H,u("dd",S,[d(C,{modelValue:l.chart.showNum,"onUpdate:modelValue":t[1]||(t[1]=a=>l.chart.showNum=a),onChange:l.handleTopNumChange,size:"small"},{default:p((()=>[d(x,{label:10},{default:p((()=>[y("10")])),_:1}),d(x,{label:20},{default:p((()=>[y("20")])),_:1}),d(x,{label:30},{default:p((()=>[y("30")])),_:1})])),_:1},8,["modelValue","onChange"])])]),u("section",A,[u("div",Y,[u("div",q,[d(b,null,{default:p((()=>[d(j,{chart:l.chart,optionData:l.data,chartKey:"simpleUrl",title:"页面访问量TOP",tip:"统计网站的访问数量"},null,8,["chart","optionData"])])),_:1})]),u("div",Q,[d(b,null,{default:p((()=>[d(j,{chart:l.chart,optionData:l.data,chartKey:"cregion",title:"城市名称访问用户量TOP",tip:"在不同城市访问网站的用户量分布情况。ps: 城市是根据ip地址查询出来的，并不是每个ip都能查询出来，查询出来的结果也未必准确，只作为趋势参考"},null,8,["chart","optionData"])])),_:1})]),u("div",W,[d(b,null,{default:p((()=>[d(j,{chart:l.chart,optionData:l.data,chartKey:"device",title:"浏览设备访问用户量TOP",tip:"数值代表使用的浏览设备的数量"},null,8,["chart","optionData"])])),_:1})]),u("div",B,[d(b,null,{default:p((()=>[d(j,{chart:l.chart,optionData:l.data,chartKey:"os",title:"系统版本访问用户量TOP",tip:"不同设备星号的用户量分布情况"},null,8,["chart","optionData"])])),_:1})]),u("div",L,[d(b,null,{default:p((()=>[d(j,{chart:l.chart,optionData:l.data,chartKey:"browser",title:"浏览器版本访问用户量TOP",tip:"数值代表使用的浏览器版本的数量"},null,8,["chart","optionData"])])),_:1})]),u("div",R,[d(b,null,{default:p((()=>[d(j,{chart:l.chart,optionData:l.data,chartKey:"screen",title:"设备分辨率访问用户量TOP",tip:"数值代表设备的物理分辨率"},null,8,["chart","optionData"])])),_:1})])])]),d(b,{class:"box-card mt20"},{default:p((()=>[u("div",G,[y(" 地理分布 "),d(f,{effect:"dark",content:"城市是根据ip地址查询出来的，并不是每个ip都能查询出结果，查询出来的结果也未必准确，只作为趋势参考。",placement:"right"},{default:p((()=>[d(m,{size:"20"},{default:p((()=>[d(h)])),_:1})])),_:1})]),d(K,{ipCregion:l.chart.ipcregion},null,8,["ipCregion"])])),_:1})])}],["__scopeId","data-v-8451148f"]]);export{J as default};
