import{f as e}from"./index-da95a02c.js";import{r as t,b as r,c as s}from"./service-81f5d47a.js";function i(e){return t({url:"/adm/project/save",method:"post",data:e})}function o(e){return t({url:"/adm/project/list",method:"post",data:e})}const a=e({id:"app-general",state:()=>({projectList:r("PROJECT_ALL")?JSON.parse(r("PROJECT_ALL")||"[]"):[],currentProjectId:r("PROJECT_ID")||"",refreshTimer:null,manualRefresh:!1}),getters:{getProjectList(){return this.projectList},getCurrentProjectId(){return this.currentProjectId},getManualRefresh(){return this.manualRefresh}},actions:{setCurrentProject(e){this.currentProjectId=e,s("PROJECT_ID",e)},setProjectList(e){var t;this.projectList=e,s("PROJECT_ALL",JSON.stringify(e));let i=null==(t=e[0])?void 0:t.monitorAppId;i&&!r("PROJECT_ID")&&(this.currentProjectId=i.monitorAppId,s("PROJECT_ID",i.monitorAppId))},getValidProject(){return e=this,r=null,s=function*(){let e=yield t({url:"/adm/project/all/status/list",method:"post"});e.success&&this.setProjectList(e.model)},new Promise(((t,i)=>{var o=e=>{try{n(s.next(e))}catch(t){i(t)}},a=e=>{try{n(s.throw(e))}catch(t){i(t)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,a);n((s=s.apply(e,r)).next())}));var e,r,s},setManualRefresh(){this.refreshTimer||(this.manualRefresh=!0,this.refreshTimer=setTimeout((()=>{this.manualRefresh=!1,this.refreshTimer=null,clearTimeout(this.refreshTimer)}),100))}}});export{o as a,i as p,a as u};