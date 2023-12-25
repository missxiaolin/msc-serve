import{e,h as a,W as o,G as s,f as r,X as l,Y as n,_ as t,r as i,o as d,a as u,d as m,b as c,j as g,H as p,v,Z as h,L as f,M as w}from"./index-b021bdf4.js";import{a as x,u as b,t as y}from"./tags-view-2bca508d.js";import{r as F,g as V,s as k,a as _}from"./service-8ecc8995.js";const D=e("user",(()=>{const e=a(V()||""),s=x(),r=b(),l=()=>{r.cacheTagsView||(s.delAllVisitedViews(),s.delAllCachedViews())};return{login:a=>{return o=void 0,s=[a],r=function*({username:a,password:o}){const{model:s}=yield(r={username:a,password:o},F({url:"/adm/login",method:"post",data:r}));var r;k(s.token),e.value=s.token},new Promise(((e,a)=>{var l=e=>{try{t(r.next(e))}catch(o){a(o)}},n=e=>{try{t(r.throw(e))}catch(o){a(o)}},t=a=>a.done?e(a.value):Promise.resolve(a.value).then(l,n);t((r=r.apply(o,s)).next())}));var o,s,r},logout:()=>{_(),e.value="",o(),l()},resetToken:()=>{_(),e.value=""}}})),L={components:{themeSwitch:y},setup(){const e=s(),o=r({username:"admin",password:"12345678"}),t=a(null),i=a(!1);return{loginFormData:o,loginFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},handleLogin:()=>{var a;null==(a=t.value)||a.validate(((a,s)=>{a?(i.value=!0,D().login(o).then((()=>{e.push({path:"/"})})).catch((()=>{o.password=""})).finally((()=>{i.value=!1}))):console.error("表单校验不通过",s)}))},User:l,Lock:n,loading:i,loginFormRef:t}}},j={class:"login-container"},R={class:"login-card"},U=(e=>(f("data-v-a28b13e5"),e=e(),w(),e))((()=>c("div",{class:"title"},[c("img",{src:"/static/logo-647d216c.png"})],-1))),q={class:"content"};const z=t(L,[["render",function(e,a,o,s,r,l){const n=i("themeSwitch"),t=i("el-input"),f=i("el-form-item"),w=i("el-button"),x=i("el-form");return d(),u("div",j,[m(n,{class:"theme-switch"}),c("div",R,[U,c("div",q,[m(x,{ref:"loginFormRef",model:s.loginFormData,rules:s.loginFormRules,onKeyup:h(s.handleLogin,["enter"])},{default:g((()=>[m(f,{prop:"username"},{default:g((()=>[m(t,{modelValue:s.loginFormData.username,"onUpdate:modelValue":a[0]||(a[0]=e=>s.loginFormData.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":s.User,size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),m(f,{prop:"password"},{default:g((()=>[m(t,{modelValue:s.loginFormData.password,"onUpdate:modelValue":a[1]||(a[1]=e=>s.loginFormData.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":s.Lock,size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),m(w,{loading:s.loading,type:"primary",size:"large",onClick:p(s.handleLogin,["prevent"])},{default:g((()=>[v("登 录")])),_:1},8,["loading","onClick"])])),_:1},8,["model","rules","onKeyup"])])])])}],["__scopeId","data-v-a28b13e5"]]);export{z as default};