import{r as e,w as a,a as l,b as t,d as s,h as u,p,l as d,i,J as o,k as r,X as c,s as n}from"./index.2b069cd0.1728957723508.js";const m={style:{width:"100%",display:"flex","align-items":"center",gap:"10px"}},h={__name:"el-input-upload",props:{placeholder:{type:String,default:"请上传文件或输入网络文件地址"},modelValue:{type:String,default:""},accept:{type:String,default:"image/*"}},emits:["update:modelValue"],setup(h,{emit:g}){const v=g,y=h,V=e(y.modelValue),f=e=>{1===e.code&&v("update:modelValue",e.data.url)},x=e=>{v("update:modelValue",e)};return a((()=>y.modelValue),(e=>{e!==V.value&&(V.value=e)})),(e,a)=>{const g=l("el-image"),v=l("el-input"),y=l("el-button"),w=l("el-upload");return t(),s("div",m,[V.value?(t(),u(g,{key:0,src:V.value,style:{width:"32px",height:"32px","border-radius":"4px","flex-shrink":"0"},"preview-src-list":[V.value]},null,8,["src","preview-src-list"])):p("",!0),d(v,{onChange:x,modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),placeholder:h.placeholder},null,8,["modelValue","placeholder"]),d(w,{"show-file-list":!1,accept:h.accept,action:r(c)+r(n).state.site.upload,"on-success":f},{trigger:i((()=>[d(y,{type:"primary"},{default:i((()=>a[1]||(a[1]=[o("上传文件")]))),_:1})])),_:1},8,["accept","action"])])}}};export{h as _};
