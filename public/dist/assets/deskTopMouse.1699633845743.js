import{u as s,r as e,a8 as o,p as t,o as n,c as l,d as a,e as i,l as u,x as m,m as p,a9 as d}from"./index.1699633845743.js";import{_ as c}from"./edit.1699633845743.js";import{a as r}from"./href.1699633845743.js";const v=["onClick"],k=[i("img",{src:"/dist/assets/add.1699633845743.svg"},null,-1),i("span",null,"添加图标",-1)],g=["onClick"],C=[i("img",{src:"/dist/assets/class.1699633845743.svg"},null,-1),i("span",null,"创建分类",-1)],f=["onClick"],x=[i("img",{src:c},null,-1),i("span",null,"批量编辑",-1)],h=["onClick"],w=[i("img",{src:"/dist/assets/reload.1699633845743.svg"},null,-1),i("span",null,"刷新页面",-1)],I=["onClick"],M=[i("img",{src:"/dist/assets/setting.1699633845743.svg"},null,-1),i("span",null,"设置",-1)],j={__name:"deskTopMouse",setup(c){const j=s(),y=e(!1),L=o({top:"0px",left:"0px"}),T=()=>{r("tab://setting"),y.value=!1},_=()=>{let s={id:d(),size:"2x2",component:"iconGroup",name:"创建分组",type:"component",url:"iconGroup",children:[]};j.state.link.push(s),j.commit("updateLink"),y.value=!1},b=()=>{j.state.editStatus=!0,y.value=!1},E=()=>{r("tab://addicon"),y.value=!1},G=()=>{t.emit("reload"),y.value=!1},z=s=>{L.top=s.top+"px",L.left=s.left+"px",y.value=!0},S=s=>{y.value&&(y.value=!1)};return window.addEventListener("mousedown",S),t.on("deskTopMouse",z),n((()=>{window.removeEventListener("mousedown",S),t.off("deskTopMouse",z)})),(s,e)=>y.value?(l(),a("div",{key:0,class:"mouseMenu",style:m(L),onMousedown:e[0]||(e[0]=u((()=>{}),["stop"])),onContextmenu:e[1]||(e[1]=u((()=>{}),["prevent"]))},[i("div",{onClick:u(E,["stop"]),class:"mouseItem mhover"},k,8,v),i("div",{onClick:u(_,["stop"]),class:"mouseItem mhover"},C,8,g),i("div",{onClick:u(b,["stop"]),class:"mouseItem mhover"},x,8,f),i("div",{onClick:u(G,["stop"]),class:"mouseItem mhover"},w,8,h),i("div",{onClick:u(T,["stop"]),class:"mouseItem mhover"},M,8,I)],36)):p("",!0)}};export{j as default};