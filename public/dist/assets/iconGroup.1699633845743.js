import{r as a,u as e,w as o,p as s,o as t,c as n,d as i,e as l,n as d,l as r,F as v,f as u,g as c,h as p,t as m,T as w,j as f,G as D,D as g}from"./index.1699633845743.js";import{$ as M}from"./jquery.1699633845743.js";const h=["onDragenter","onDragleave","onClick"],x=["onDragleave","onDragenter"],y={class:"item"},G={class:"itemBox hover"},k=["src"],z={__name:"iconGroup",props:{data:{type:Object,default:()=>({size:"1x1"})}},setup(z){var C;const j=z,B=a(!1),T=a(j.data),_=e(),b=a(_.getters.findChildren(j.data.id)||[]),L=a(j.data.size);let R=!1,Z=null,$=null;const q=()=>{$=setTimeout((()=>{0==window.MoveData.canMove&&(window.MoveData.canMove=!0)}),300)},F=()=>{clearTimeout($),window.MoveData.canMove=!1},O=a=>{"component"!==window.MoveData.type&&(B.value=!0,M(`.${T.value.id}`).parent().parent().addClass("selBoxsss"),"icon"===window.MoveData.type&&(R=!0,window.MoveData.canMove="lock","number"==typeof Z&&clearTimeout(Z),Z=setTimeout((()=>{R&&E()}),1e3)))},P=()=>{M(`.${T.value.id}`).parent().parent().removeClass("selBoxsss"),B.value=!1,window.MoveData.canMove=!1,R=!1},A=()=>{s.emit("addGroupBox",{type:"show",pid:j.data.id})},E=()=>{s.emit("addGroupBox",{type:"add",pid:j.data.id})};(null==(C=j.data)?void 0:C.id)&&o(j.data,(a=>{var e;e=a,T.value=e,L.value=e.size}));const H=()=>{b.value=g({},_.getters.findChildren(j.data.id))};return s.on("RefreshLink",H),t((()=>{s.off("RefreshLink",H)})),(a,e)=>(n(),i("div",{class:d(["w-full h-full hover",T.value.id]),onDragenter:r(q,["stop"]),onDragleave:r(F,["stop"]),onClick:r(A,["stop"])},[l("div",{class:d("1x1"===L.value?"iconGroupzzz":"iconGroupZZ"),onDragleave:r(P,["stop"]),onDragenter:r(O,["stop"])},null,42,x),l("div",{class:d(["iconGP pointer-events-none","f"+L.value])},[(n(!0),i(v,null,u(f(D)(b.value).slice(0,8),(a=>(n(),c(w,{key:a.id},{default:p((()=>[l("div",y,[l("div",G,[l("img",{class:"icon",src:a.src},null,8,k),l("div",null,m(a.name),1)])])])),_:2},1024)))),128))],2)],42,h))}};export{z as default};
