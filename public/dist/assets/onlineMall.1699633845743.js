import{r as a,u as l,S as e,b as s,c as t,d as i,e as n,k as o,j as u,V as d,ac as r,F as c,f as v,n as m,t as p,h as k,ah as f,X as x,g as h,m as g,a9 as y}from"./index.1699633845743.js";import{a as C}from"./href.1699633845743.js";const _={class:"onlinemall"},j={class:"px-4 w-2/3 m-auto"},z={class:"linkarea space-x-2 mt-4"},S=["onClick"],b={class:"linkscroll"},V={class:"linklist grid grid-cols-3 mt-2"},w={class:"links"},L=["src"],F={class:"linkTips"},K={class:"text-sm font-bold"},M={class:"text-xs"},T={class:"mt-2 flex items-center justify-end"},U={class:"flex justify-center"},X={__name:"onlineMall",setup(X){const q=a([]),A=l(),B=a(0),D=a(""),E=a(1),G=a(0),H=a([]);e({url:"/linkStore/getFolder"}).then((a=>{a.data.unshift({id:0,name:"全部"}),q.value=a.data}));const I=()=>{e({url:"/LinkStore/list",method:"post",data:{area:B.value,name:D.value,page:E.value}}).then((a=>{H.value=a.data.data,G.value=a.data.total}))},J=a=>{E.value=a,I()};return I(),(a,l)=>{const X=s("el-input"),N=s("el-icon"),O=s("el-button"),P=s("el-pagination");return t(),i("div",_,[n("div",j,[o(X,{modelValue:D.value,"onUpdate:modelValue":l[0]||(l[0]=a=>D.value=a),class:"iconSearch",placeholder:"搜索标签","suffix-icon":u(d),onKeydown:r(I,["enter"])},null,8,["modelValue","suffix-icon","onKeydown"])]),n("div",z,[(t(!0),i(c,null,v(q.value,(a=>(t(),i("div",{class:m(a.id===B.value?"text-rose-600":""),onClick:l=>(a=>{a!==B.value&&(B.value=a,E.value=1,I())})(a.id)},p(a.name),11,S)))),256))]),n("div",b,[n("div",V,[(t(!0),i(c,null,v(H.value,(a=>(t(),i("div",{key:a.id},[n("div",w,[n("img",{src:a.src,class:"linklogo",alt:""},null,8,L),n("div",F,[n("span",K,p(a.name),1),n("div",M,p(a.tips),1)])]),n("div",T,[o(N,{size:"20px",class:"hover:text-blue-400 hover",onClick:l=>u(C)(a.url,!0)},{default:k((()=>[o(u(f))])),_:2},1032,["onClick"]),o(O,{size:"small",class:"ml-2",round:"",onClick:l=>(a=>{let l={sort:99999,id:y(),name:a.name,size:a.size,src:a.src,url:a.url,type:a.type,app:a.app,tips:a.tips,origin_id:a.id};A.state.link.push(l),A.commit("updateLink"),e({url:"/LinkStore/install_num",method:"post",data:{id:a.id}}).finally((a=>{}))})(a)},{default:k((()=>[x("添加")])),_:2},1032,["onClick"])])])))),128))]),n("div",U,[G.value>15?(t(),h(P,{key:0,layout:"prev, pager, next","page-size":15,total:G.value,onCurrentChange:J},null,8,["total"])):g("",!0)])])])}}};export{X as default};
