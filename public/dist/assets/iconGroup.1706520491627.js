import{r as a,u as e,w as o,q as s,o as t,c as n,d as l,e as i,n as r,l as d,F as u,f as v,g as c,h as p,p as f,x as m,T as w,j as g,I as D,G as M}from"./index.1706520491627.js";import{$ as h}from"./jquery.1706520491627.js";const x=["onDragenter","onDragleave","onClick"],y=["onDragleave","onDragenter"],k={class:"item"},C={class:"itemBox hover"},G=["src","alt"],z={__name:"iconGroup",props:{data:{type:Object,default:()=>({size:"1x1"})}},setup(z){var B;const j=z,T=a(!1),b=a(j.data),_=e(),q=a(_.getters.findChildren(j.data.id)||[]),L=a(j.data.size),R=a=>{let{bgColor:e=null}=a;return _.state.config.theme.iconBg&&null===e?"#fff":e};let Z=!1,$=null,F=null;const I=()=>{F=setTimeout((()=>{0==window.MoveData.canMove&&(window.MoveData.canMove=!0)}),300)},O=()=>{clearTimeout(F),window.MoveData.canMove=!1},P=a=>{"component"!==window.MoveData.type&&(T.value=!0,h(`.${b.value.id}`).parent().parent().addClass("selBoxsss"),"icon"===window.MoveData.type&&(Z=!0,window.MoveData.canMove="lock","number"==typeof $&&clearTimeout($),$=setTimeout((()=>{Z&&H()}),300)))},A=()=>{h(`.${b.value.id}`).parent().parent().removeClass("selBoxsss"),T.value=!1,window.MoveData.canMove=!1,Z=!1},E=()=>{s.emit("addGroupBox",{type:"show",pid:j.data.id})},H=()=>{s.emit("addGroupBox",{type:"add",pid:j.data.id})};(null==(B=j.data)?void 0:B.id)&&o(j.data,(a=>{var e;e=a,b.value=e,L.value=e.size}));const J=()=>{q.value=M({},_.getters.findChildren(j.data.id))};return s.on("RefreshLink",J),t((()=>{s.off("RefreshLink",J)})),(a,e)=>(n(),l("div",{class:r(["w-full h-full hover",b.value.id]),onDragenter:d(I,["stop"]),onDragleave:d(O,["stop"]),onClick:d(E,["stop"])},[i("div",{class:r("1x1"===L.value?"iconGroupzzz":"iconGroupZZ"),onDragleave:d(A,["stop"]),onDragenter:d(P,["stop"])},null,42,y),i("div",{class:r(["iconGP pointer-events-none","f"+L.value])},[(n(!0),l(u,null,v(g(D)(q.value).slice(0,8),(a=>(n(),c(w,{key:a.id},{default:p((()=>[i("div",k,[i("div",C,[i("img",{class:"icon",style:f({background:R(a)}),src:a.src,alt:a.name},null,12,G),i("div",null,m(a.name),1)])])])),_:2},1024)))),128))],2)],42,x))}};export{z as default};
