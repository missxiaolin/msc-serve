import{E as t}from"./index-ff87e842.js";import{c as e,_ as s,r as a,o as r,a as o,b as i,k as n,l,x as p,F as c}from"./index-f4eb0487.js";import{r as u}from"./service-f992a9ed.js";const d={class:"flex flex-row justify-between",style:{width:"100%"}};const m=s({components:{Echarts:t},props:{options:{type:Object,required:!0}},name:"perfEchart",setup:t=>({ntFormat:e=>{let s=null==t?void 0:t.options;if(!s||!Object.keys(s).length)return 0;let a=s.NT[e]||0;if(!a&&0===a)return 0;const r=s.FP||{},o=s.FCP||{};return"FP"==e&&Object.keys(r).length&&(a=r.startTime),"FPC"==e&&Object.keys(o).length&&(a=o.startTime),Number((a||0).toFixed(2))},navigationEchart:e((()=>{var e;const s=(null==(e=t.options)?void 0:e.NT)||{};if(!s||!Object.keys(s).length)return{};const a=["DomReady","Res","DomParse","Trans","TTFB","SSL","TCP","DNS"],r=[],o=[];a.forEach(((t,e)=>{const i=(s[t]||0).toFixed(2);o.push(`${i}ms`);const n={name:t,type:"bar",stack:"Total",label:{show:!0,position:"right"},data:[]};for(let s=0,r=a.length;s<r;s++)e==s?n.data.push(i):n.data.push("-");r.push(n)}));const{DomParse:i=0,Res:n=0,Trans:l=0,TTFB:p=0,TCP:c=0,SSL:u=0,DNS:d=0}=s;return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(let e=1,s=t.length;e<s;e++){let{name:s,value:a,seriesName:r,color:o}=t[e];if("-"!==a)return`${s}</br><span style="display:flex; align-items: center;">\n\t\t\t\t\t<i style="display:block;margin-right:5px;border-radius:50%;width:10px;height:10px;left:5px;background-color:${o}"></i>${r}:\n\t\t\t\t\t<i style="padding-left: 30px;">${a}</i>\n\t\t\t\t</span>`}}},xAxis:{type:"value",show:!1,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dotted"}}},yAxis:[{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dotted"}},type:"category",data:["DOM准备","资源加载","DOM解析","内容传输","请求响应","SSL建连","TCP链接","DNS查询"]},{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dotted"}},type:"category",data:o}],seriesColorReset:!1,series:[{name:"Placeholder",type:"bar",stack:"Total",silent:!0,itemStyle:{borderColor:"transparent",color:"transparent"},emphasis:{itemStyle:{borderColor:"transparent",color:"transparent"}},data:[`${n+i+p+c+u+d}`,`${i+p+c+u+d}`,`${l+p+c+u+d}`,`${p+c+u+d}`,`${c+u+d}`,`${c+d}`,`${d}`,`${d}`]},...r]}}))})},[["render",function(t,e,s,u,m,h){const f=a("el-statistic"),y=a("Echarts");return r(),o(c,null,[i("div",d,[n(f,{title:"白屏时间",value:u.ntFormat("FP")},{suffix:l((()=>[p("ms")])),_:1},8,["value"]),n(f,{title:"首字节",value:u.ntFormat("FirseByte")},{suffix:l((()=>[p("ms")])),_:1},8,["value"]),n(f,{title:"DOM Ready",value:u.ntFormat("DomReady")},{suffix:l((()=>[p("ms")])),_:1},8,["value"]),n(f,{title:"首次可交互时间",value:u.ntFormat("TTI")},{suffix:l((()=>[p("ms")])),_:1},8,["value"]),n(f,{title:"页面完全加载",value:u.ntFormat("Load")},{suffix:l((()=>[p("ms")])),_:1},8,["value"])]),n(y,{options:u.navigationEchart},null,8,["options"])],64)}]]);function h(t){return u({url:"/adm/performance/list",method:"post",data:t})}function f(t){return u({url:"/adm/performance/echart/by/url",method:"post",data:t})}export{m as P,f as a,h as p};
