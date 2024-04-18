import{b as e}from"./defavatar.1713442796762.js";import{r as a,b as l,c as t,d as o,e as r,k as i,h as d,Z as n,G as u,j as s,q as p,g as m,m as c,Y as g,H as v}from"./index.1713442796762.js";const h={class:"userManager"},f={class:"p-4 bg-white rounded-lg overflow-hidden flex flex-wrap gap-4"},w={class:"mt-4 flex gap-x-4"},_={class:"bg-white p-4 rounded-lg overflow-hidden w-full"},b=["src"],y={key:1,class:"rounded-full m-auto",src:e,style:{width:"40px",height:"40px"}},V={__name:"user",setup(e){const V={mail:"",password:"",manager:0},k=a(!1),x=a(Object.assign({},V)),C=a(!1),z=a([]),U=a({email:""}),j=()=>{x.value=a({mail:"",password:"",manager:""}).value,C.value=!0},I=()=>{n({url:"/admin/userUpdate",method:"post",data:x.value}).then((e=>{1===e.code&&(C.value=!1,S()),v.success(e.msg)}))},O=a({current_page:1,per_page:50,total:0,refresh(e){O.value.current_page=e,S()},sizes(e){O.value.per_page=e,S()}}),q=a([]),P={order:"desc",prop:"id"},S=()=>{n({url:"/admin/UserList",method:"post",data:{search:U.value,page:O.value.current_page,limit:O.value.per_page,sort:P}}).then((e=>{let a=e.data;q.value=a.data,Object.assign(O.value,a)}))},D=({column:e,prop:a,order:l})=>{let t="asc";"descending"===l&&(t="desc"),P.order=t,P.prop=a,S()};return S(),(e,a)=>{const P=l("el-input"),L=l("el-button"),Q=l("el-table-column"),A=l("el-tag"),G=l("el-table"),H=l("el-pagination"),M=l("el-dialog"),R=l("el-form-item"),Y=l("el-option"),Z=l("el-select"),B=l("el-form"),E=l("el-link");return t(),o("div",h,[r("div",f,[i(P,{modelValue:U.value.email,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value.email=e),style:{width:"200px"},placeholder:"邮箱",clearable:""},null,8,["modelValue"]),i(L,{onClick:S,type:"primary"},{default:d((()=>[u("搜索")])),_:1}),i(L,{type:"danger",onClick:j},{default:d((()=>[u("添加新用户")])),_:1})]),r("div",w,[r("div",_,[i(G,{onSortChange:D,data:q.value,height:"calc(100vh - 200px)"},{default:d((()=>[i(Q,{prop:"id",sortable:"custom",label:"用户ID",align:"center","min-width":"100"}),i(Q,{prop:"avatar",label:"头像",align:"center","min-width":"70"},{default:d((e=>[e.row.avatar?(t(),o("img",{key:0,class:"rounded-full m-auto",src:s(p)(e.row.avatar),style:{width:"40px",height:"40px"}},null,8,b)):(t(),o("img",y))])),_:1}),i(Q,{prop:"nickname","show-overflow-tooltip":"",label:"昵称",align:"center","min-width":"200"}),i(Q,{prop:"mail",label:"邮箱",align:"center","min-width":"200"}),i(Q,{prop:"login_ip",label:"登录IP",align:"center","min-width":"200"}),i(Q,{prop:"login_time",sortable:"custom",label:"上次登录时间",align:"center","min-width":"200"}),i(Q,{prop:"register_ip",label:"注册IP",align:"center","min-width":"200"}),i(Q,{prop:"qq_open_id","show-overflow-tooltip":"",label:"QQ OpenId",align:"center","min-width":"200"}),i(Q,{prop:"create_time",sortable:"custom",label:"注册时间",align:"center","min-width":"200"}),i(Q,{prop:"login_fail_count",sortable:"custom",label:"登录失败次数",align:"center","min-width":"150"}),i(Q,{prop:"manager",label:"权限",align:"center","min-width":"100"},{default:d((e=>[0===e.row.manager?(t(),m(A,{key:0,type:"info",size:"small"},{default:d((()=>[u("用户")])),_:1})):c("",!0),1===e.row.manager?(t(),m(A,{key:1,type:"danger",size:"small"},{default:d((()=>[u("管理员")])),_:1})):c("",!0)])),_:1}),i(Q,{fixed:"right",label:"操作","min-width":"180",align:"center"},{default:d((e=>[i(L,{type:"info",onClick:a=>{return l=e.row,k.value=!0,z.value=[],void n({url:"/admin/userLoginRecord",method:"post",data:{user_id:l.id}}).then((e=>{1===e.code&&(z.value=e.data)}));var l},size:"small"},{default:d((()=>[u("登录记录")])),_:2},1032,["onClick"]),i(L,{type:"primary",onClick:a=>{return l=e.row,x.value=Object.assign({},V,l),void(C.value=!0);var l},size:"small"},{default:d((()=>[u("操作")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i(H,{"page-sizes":[15,20,30,40,50,100],onCurrentChange:O.value.refresh,class:"mt-6",layout:"sizes,total,prev,pager,jumper","page-size":O.value.per_page,onSizeChange:O.value.sizes,total:O.value.total},null,8,["onCurrentChange","page-size","onSizeChange","total"])])]),i(M,{title:"登录记录(最近100条记录)",modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),width:1e3,"align-center":"","close-on-click-modal":!1},{default:d((()=>[i(G,{border:"",data:z.value,height:"calc(100vh - 203px)",he:""},{default:d((()=>[i(Q,{prop:"ip",label:"登录IP",align:"center",width:"180"}),i(Q,{prop:"create_time",label:"登录时间",align:"center",width:"180"}),i(Q,{prop:"user_agent",label:"User-Agent",align:"center","min-width":"200"})])),_:1},8,["data"])])),_:1},8,["modelValue"]),i(M,{title:"编辑用户",modelValue:C.value,"onUpdate:modelValue":a[7]||(a[7]=e=>C.value=e),width:600,"align-center":"","close-on-click-modal":!1},{default:d((()=>[i(B,{modelValue:x.value,"onUpdate:modelValue":a[5]||(a[5]=e=>x.value=e),"label-width":"100px","label-position":"top"},{default:d((()=>[i(R,{label:"邮箱"},{default:d((()=>[i(P,{modelValue:x.value.mail,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value.mail=e),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),i(R,{label:"设置密码"},{default:d((()=>[i(P,{modelValue:x.value.password,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value.password=e),placeholder:"请设置新密码,否则请留空"},null,8,["modelValue"])])),_:1}),i(R,{label:"是否管理员"},{default:d((()=>[i(Z,{modelValue:x.value.manager,"onUpdate:modelValue":a[4]||(a[4]=e=>x.value.manager=e),class:"w-full",placeholder:"请选择"},{default:d((()=>[i(Y,{label:"用户",value:0}),i(Y,{label:"管理员",value:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),i(L,{class:"mt-4 w-full",onClick:I,type:"primary",size:"large"},{default:d((()=>[u("提交")])),_:1}),x.value.id?(t(),m(E,{key:0,class:"mt-6",type:"danger",onClick:a[6]||(a[6]=e=>(async e=>{try{await g.confirm("您确定删除当前用户？删除后数据将全部删除！","危险操作警告"),1===(await n({url:"/admin/userDelete",method:"post",data:{id:e}})).code&&(v.success("已删除当前用户所有数据"),C.value=!1,S())}catch(a){v.info("操作已取消")}})(x.value.id))},{default:d((()=>[u("删除用户")])),_:1})):c("",!0)])),_:1},8,["modelValue"])])}}};export{V as default};
