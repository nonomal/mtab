import{r as e,u as l,a as t,j as a,v as o,b as s,d,f as u,h as i,i as n,W as c,J as m,l as _,p,k as r,X as x,Z as g,K as v,aL as h}from"./index.2b069cd0.1728957723508.js";const f={class:"relative pb-0.5",style:{"min-height":"calc(100vh - 30px)"}},b={key:0,class:"absolute w-full flex-col flex justify-center items-center h-full bg-black z-20 bg-opacity-50 rounded-lg"},y={style:{display:"flex","align-items":"center",width:"100%"}},V=["src"],k={style:{display:"flex","align-items":"center",width:"100%"}},w=["src"],U={style:{display:"flex","align-items":"center",width:"100%"}},z=["src"],j={class:"flex"},S={__name:"ext",setup(S){const C=e(""),E=()=>{c({url:"/Setting/delExt"}).then((e=>{1===e.code&&(g({title:"删除成功",message:e.msg,type:"success"}),C.value="")}))},T=e(null),q=l(),G=e=>(1===e.code&&(D.value.ext_logo_64=e.data.url),!0),I=e=>(1===e.code&&(D.value.ext_logo_128=e.data.url),!0),L=e=>(1===e.code&&(D.value.ext_logo_192=e.data.url),!0),D=e({ext_name:"",ext_description:"",ext_version:"",ext_domain:"",ext_logo_64:"",ext_logo_128:"",ext_logo_192:"",ext_protocol:"https",google_ext_link:"",edge_ext_link:"",local_ext_link:""}),H=()=>{window.open(x+C.value+"?v="+D.value.ext_version||(new Date).getTime().toString())},J=()=>{c({url:"/Setting/saveSetting",method:"post",data:{form:D.value}}).then((e=>{v.success(e.msg),1===e.code&&K()}))},K=()=>{c({url:"/Setting/getSetting",method:"post",data:{role:["ext_name","ext_description","ext_version","ext_domain","ext_logo_64","ext_logo_128","ext_logo_192","ext_protocol","google_ext_link","edge_ext_link","local_ext_link"]}}).then((e=>{1===e.code&&Object.assign(D.value,e.data),T.value=e.success,C.value=e.url}))},O=()=>{const e=h.service({text:"正在打包中。。。请稍后"});c({url:"/admin.Index/build",method:"post",data:{extInfo:D.value}}).then((e=>{1===e.code?(g.success(e.msg),C.value=e.data.url):g.error(e.msg)})).finally((()=>{e.close()}))};return K(),(e,l)=>{const c=t("el-input"),g=t("el-form-item"),v=t("el-option"),h=t("el-select"),S=t("el-card"),K=t("el-button"),P=t("el-upload"),W=t("el-form");return a((s(),d("div",f,[T.value?(s(),i(W,{key:1,modelValue:D.value,"onUpdate:modelValue":l[11]||(l[11]=e=>D.value=e),"label-position":"top"},{default:n((()=>[l[31]||(l[31]=u("div",{class:"p-4 rounded-lg bg-white"},[m(" 浏览器扩展详细帮助文档："),u("a",{class:"text-blue-500",target:"_blank",href:"https://jmp6y44jr4.k.topthink.com/@mtab/liulanqikuozhanshangjia.html"},"https://jmp6y44jr4.k.topthink.com/@mtab/liulanqikuozhanshangjia.html")],-1)),_(S,{class:"mt-4"},{default:n((()=>[l[18]||(l[18]=u("h2",{class:"mb-4"},"浏览器扩展基础信息",-1)),_(g,{label:"扩展manifest名称 （name）"},{default:n((()=>[_(c,{type:"text",modelValue:D.value.ext_name,"onUpdate:modelValue":l[0]||(l[0]=e=>D.value.ext_name=e),placeholder:"扩展展示的名称"},null,8,["modelValue"])])),_:1}),_(g,{label:"扩展manifest简介 （description）"},{default:n((()=>[_(c,{type:"text",modelValue:D.value.ext_description,"onUpdate:modelValue":l[1]||(l[1]=e=>D.value.ext_description=e),placeholder:"扩展商城和管理页面的简介"},null,8,["modelValue"])])),_:1}),_(g,{label:"扩展manifest版本号（version）"},{default:n((()=>[_(c,{type:"text",modelValue:D.value.ext_version,"onUpdate:modelValue":l[2]||(l[2]=e=>D.value.ext_version=e),placeholder:"推荐和程序保持一致"},null,8,["modelValue"]),l[13]||(l[13]=u("div",{class:"text-sm text-red-500 mt-2"},"* 建议和程序后台版本号保持一致,    不要出现文字和字母，只需要填写数字和小数点 例如：1.0.0 ",-1))])),_:1}),_(g,{label:"网站网络协议 （ext_protocol）开发环境一般为http，生产环境请务必选择https"},{default:n((()=>[_(h,{modelValue:D.value.ext_protocol,"onUpdate:modelValue":l[3]||(l[3]=e=>D.value.ext_protocol=e)},{default:n((()=>[_(v,{label:"http",value:"http"},{default:n((()=>l[14]||(l[14]=[m("http")]))),_:1}),_(v,{label:"https",value:"https"},{default:n((()=>l[15]||(l[15]=[m("https")]))),_:1})])),_:1},8,["modelValue"]),l[16]||(l[16]=u("div",{class:"text-sm text-red-500 mt-2"},"* 开发环境下一般不会配置ssl所以选择http，生产环境搭配域名后请使用https ",-1))])),_:1}),_(g,{label:"域名（domain）请确保您填的写域名对应的网站配置了SSL证书并且支持HTTPS"},{default:n((()=>[_(c,{type:"text",modelValue:D.value.ext_domain,"onUpdate:modelValue":l[4]||(l[4]=e=>D.value.ext_domain=e),placeholder:"您的网站的域名部分，不要包含协议, 例子：go.mtab.cc"},null,8,["modelValue"]),l[17]||(l[17]=u("div",{class:"text-sm text-red-500 mt-2"},"* 只输入当前网站的域名，不需要http和多余的内容，程序会自己根据域名生成对应的，例如这样写：go.mtab.cc ，如果有端口号请加上端口号, 例如：go.mtab.cc:9200 ",-1))])),_:1})])),_:1}),_(S,{class:"mt-4"},{default:n((()=>[l[22]||(l[22]=u("h2",{class:"mb-4"},"扩展图标 图片文件为png格式哟不要上传错啦 （尺寸单位统一为 像素px 请严格设置好尺寸）",-1)),_(g,{label:"扩展图标64x64（icon）默认会作为网页的favicon"},{default:n((()=>[u("div",y,[D.value.ext_logo_64?(s(),d("img",{key:0,src:D.value.ext_logo_64,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,V)):p("",!0),_(c,{modelValue:D.value.ext_logo_64,"onUpdate:modelValue":l[5]||(l[5]=e=>D.value.ext_logo_64=e),placeholder:"请上传(64x64) logo"},{append:n((()=>[_(P,{class:"upload-demo","show-file-list":!1,"on-success":G,action:r(x)+r(q).state.site.upload},{default:n((()=>[_(K,{type:"primary"},{default:n((()=>l[19]||(l[19]=[m("上传")]))),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])])),_:1}),_(g,{label:"扩展图标128x128（icon）"},{default:n((()=>[u("div",k,[D.value.ext_logo_128?(s(),d("img",{key:0,src:D.value.ext_logo_128,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,w)):p("",!0),_(c,{modelValue:D.value.ext_logo_128,"onUpdate:modelValue":l[6]||(l[6]=e=>D.value.ext_logo_128=e),placeholder:"请上传(128x128) logo"},{append:n((()=>[_(P,{class:"upload-demo","show-file-list":!1,"on-success":I,action:r(x)+r(q).state.site.upload},{default:n((()=>[_(K,{type:"primary"},{default:n((()=>l[20]||(l[20]=[m("上传")]))),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])])),_:1}),_(g,{label:"扩展图标192x192（icon）"},{default:n((()=>[u("div",U,[D.value.ext_logo_192?(s(),d("img",{key:0,src:D.value.ext_logo_192,style:{width:"30px",height:"30px","margin-right":"10px","border-radius":"3px"}},null,8,z)):p("",!0),_(c,{modelValue:D.value.ext_logo_192,"onUpdate:modelValue":l[7]||(l[7]=e=>D.value.ext_logo_192=e),placeholder:"请上传(192x192) logo"},{append:n((()=>[_(P,{class:"upload-demo","show-file-list":!1,"on-success":L,action:r(x)+r(q).state.site.upload},{default:n((()=>[_(K,{type:"primary"},{default:n((()=>l[21]||(l[21]=[m("上传")]))),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])])),_:1})])),_:1}),_(S,{class:"mt-4"},{default:n((()=>[l[26]||(l[26]=u("h2",{class:"mb-4"},"扩展下载地址，用于用户在网页打开扩展时提示安装的地址（不填写则不展示对应的）",-1)),_(g,{label:"Google扩展商城安装地址"},{default:n((()=>[_(c,{modelValue:D.value.google_ext_link,"onUpdate:modelValue":l[8]||(l[8]=e=>D.value.google_ext_link=e),placeholder:"请填写Google扩展商城上架后的详情链接"},null,8,["modelValue"]),l[23]||(l[23]=u("div",{class:"text-red-500 mt-2 text-sm"},"* 上架google后的浏览器插件商城的详情页地址",-1))])),_:1}),_(g,{label:"Edge扩展商城安装地址"},{default:n((()=>[_(c,{modelValue:D.value.edge_ext_link,"onUpdate:modelValue":l[9]||(l[9]=e=>D.value.edge_ext_link=e),placeholder:"请填写Edge扩展商城上架后的详情链接"},null,8,["modelValue"]),l[24]||(l[24]=u("div",{class:"text-red-500 mt-2 text-sm"},"* 上架edge后的浏览器插件商城的详情页地址",-1))])),_:1}),_(g,{label:"本地扩展下载地址"},{default:n((()=>[_(c,{modelValue:D.value.local_ext_link,"onUpdate:modelValue":l[10]||(l[10]=e=>D.value.local_ext_link=e),placeholder:"请填写本地扩展下载地址"},null,8,["modelValue"]),l[25]||(l[25]=u("div",{class:"text-red-500 mt-2 text-sm"},"* 打包后的下载路径一般是 /browserExt.zip?version=1.0.0 （注意的是，1.0.0每次需要换成你最新的打包版本号，防止缓存）",-1))])),_:1})])),_:1}),l[32]||(l[32]=u("div",{class:"text-red-500 mt-2 text-sm"},"* 构建浏览器扩展之前请先保存配置文件",-1)),u("div",j,[_(K,{size:"large",class:"mt-4 w-1/2",type:"primary",onClick:J},{default:n((()=>l[27]||(l[27]=[m("保存配置文件")]))),_:1}),_(K,{size:"large",class:"mt-4 w-1/2",type:"success",onClick:O},{default:n((()=>l[28]||(l[28]=[m("构建浏览器扩展压缩包.zip")]))),_:1}),C.value?(s(),i(K,{key:0,size:"large",class:"mt-4 w-60 flex-shrink-0",type:"danger",onClick:H},{default:n((()=>l[29]||(l[29]=[m(" 下载已打包好的扩展.zip ")]))),_:1})):p("",!0),C.value?(s(),i(K,{key:1,size:"large",class:"mt-4 w-60 flex-shrink-0",type:"warning",onClick:E},{default:n((()=>l[30]||(l[30]=[m(" 删除扩展压缩包.zip ")]))),_:1})):p("",!0)])])),_:1},8,["modelValue"])):(s(),d("div",b,l[12]||(l[12]=[u("div",{class:"text-4xl font-bold text-white"},[u("span",null,"此功能属于高级版本请获取授权后使用"),u("br"),u("span",{class:"text-sm"},"浏览器扩展可以快捷导入浏览器的书签，并且作为浏览器的新标签页起始页，在速度方面比网页要快")],-1),u("a",{href:"https://mtab.cc/pricing.html",target:"_blank",class:"mt-6 text-xs p-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-8 text-white"},"获取订阅授权解锁更多功能",-1)])))],512)),[[o,null!==T.value]])}}};export{S as default};
