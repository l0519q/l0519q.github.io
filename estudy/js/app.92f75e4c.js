(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3e27":function(e,t,s){"use strict";var n=s("8c97"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{attrs:{id:"app"}},[s("a-layout-header",{staticClass:"header flexrow"},[s("h2",[e._v("蝉壳 eStudy")]),e.loggedIn?s("div",{staticClass:"right flexrow"},[e.isTeacher?s("div",{staticClass:"flexrow"},[s("h4",[e._v(e._s(e.info.name))]),s("a-button",{staticClass:"vcenter",attrs:{icon:"file-add",type:"primary"},on:{click:function(t){e.showAssignment=!0}}},[e._v("新建作业")])],1):s("div",{staticClass:"flexrow"},[s("h4",{staticClass:"flexcol"},[s("span",[e._v(e._s(e.info.full_name))]),s("span",[e._v("学号："+e._s(e.info.name))])]),s("h5",{staticClass:"flexcol"},e._l(e.student.orgs,function(t,n){return s("span",{key:t+"_"+n},[e._v(e._s(t))])}),0),s("div",[s("span",{staticClass:"label"},[e._v(e._s(e.student.stats.uncommitted)+"个作业待提交")]),s("span",{staticClass:"label"},[e._v(e._s(e.student.stats.revising)+"个作业待批改")]),s("span",{staticClass:"label"},[e._v(e._s(e.student.stats.improvable)+"个作业需完善")]),s("span",{staticClass:"label"},[e._v(e._s(e.student.stats.finished)+"个作业已完成")])])]),s("a",{staticClass:"vcenter",attrs:{href:"http://vipgit.chanke.xyz",target:"_blank"}},[s("a-button",{attrs:{icon:"home"}},[e._v("代码仓库")])],1),s("a-button",{staticClass:"vcenter",attrs:{icon:"logout"},on:{click:function(t){return e.$store.dispatch("user/logout")}}},[e._v("退出")])],1):e._e()]),s("a-layout-content",[e.loggedIn?s("div",[e.isTeacher?s("Teacher",{attrs:{teacher:e.teacher}}):s("Student",{attrs:{student:e.student}})],1):s("Authorization"),s("a-modal",{attrs:{footer:null},model:{value:e.showAssignment,callback:function(t){e.showAssignment=t},expression:"showAssignment"}},[s("form",[s("a-form-item",{attrs:{label:"课程"}},[s("a-select",{attrs:{name:"org_id"},model:{value:e.createAssignmentForm.org_id,callback:function(t){e.$set(e.createAssignmentForm,"org_id",t)},expression:"createAssignmentForm.org_id"}},e._l(e.teacher.orgs,function(t,n){return s("a-select-option",{key:"org_"+n,attrs:{value:t.id}},[e._v(e._s(t.full_name))])}),1)],1),s("a-form-item",{attrs:{label:"作业名称"}},[s("a-input",{attrs:{name:"name"},model:{value:e.createAssignmentForm.name,callback:function(t){e.$set(e.createAssignmentForm,"name",t)},expression:"createAssignmentForm.name"}})],1),s("a-form-item",{attrs:{label:"开始/结束时间"}},[s("a-range-picker",{model:{value:e.createAssignmentForm.time_range,callback:function(t){e.$set(e.createAssignmentForm,"time_range",t)},expression:"createAssignmentForm.time_range"}})],1),s("a-form-item",[s("a-button",{attrs:{type:"primary"},on:{click:e.createAssignment}},[e._v("提交")])],1)],1)])],1)],1)},r=[],o=(s("7f7f"),s("cebc")),i=s("2f62"),c=s("bc3a"),l=s.n(c),u=l.a.create({baseURL:"https://sandbox-api.estudy.chanke.xyz"});u.defaults.withCredentials=!0,u.defaults.headers.post["Content-Type"]="application/json",u.interceptors.response.use(function(e){return e.data.data},function(e){var t=e.config,s=e.response;return t._slient||n["default"].$notification.error({message:"API Error",description:s.data.errorMessage}),Promise.reject(e)});var d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"authorization"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"filed"},[s("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.errors.has("name")},attrs:{type:"text",placeholder:"请输入用户名",name:"name","data-vv-as":"用户名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},[s("a-icon",{staticClass:"icon",attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1),s("span",{staticClass:"error-tip"},[e._v(e._s(e.errors.first("name")))])],1),s("div",{staticClass:"filed"},[s("a-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.errors.has("password")},attrs:{type:"password",placeholder:"请输入密码",name:"password","data-vv-as":"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[s("a-icon",{staticClass:"icon",attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),s("span",{staticClass:"error-tip"},[e._v(e._s(e.errors.first("password")))])],1),s("div",{staticClass:"filed"},[s("a-button",{attrs:{type:"primary",htmlType:"submit"}},[e._v("登陆")])],1)])])},f=[],m={data:function(){return{form:{name:"",password:""}}},methods:{submit:function(){var e=this;this.$validator.validateAll().then(function(t){t&&e.$store.dispatch("user/login",e.form)})}}},p=m,b=(s("3e27"),s("2877")),v=Object(b["a"])(p,d,f,!1,null,null,null),g=v.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-table",{attrs:{rowKey:function(e){return e.assignment_id},pagination:!1,dataSource:e.teacher.assignments,columns:e.columns},scopedSlots:e._u([{key:"operation",fn:function(t,n,a){return[n.work_count>0?s("div",[e.revisingAssignment?s("a-button",{attrs:{type:"primary",icon:"minus-square"},on:{click:function(t){e.revisingAssignment=!1}}},[e._v("收起")]):s("a-button",{attrs:{type:"primary",icon:"plus-square"},on:{click:function(t){e.revisingAssignment=n}}},[e._v("展开")]),s("a",{attrs:{href:e.downloadHost+"All?id="+n.assignment_id}},[s("a-button",{attrs:{icon:"download"}},[e._v("下载全部")])],1)],1):s("div",[s("a-popconfirm",{attrs:{title:"确定删除该作业？",okText:"确定",cancelText:"取消"},on:{confirm:function(t){return e.removeAssignment(n.assignment_id)}}},[s("a-button",{attrs:{icon:"delete",type:"danger"}},[e._v("删除")])],1)],1)]}}])}),e.revisingAssignment?s("a-table",{attrs:{rowKey:function(e){return e.id},pagination:!1,dataSource:e.revisingAssignment.works,columns:e.workColumns},scopedSlots:e._u([{key:"operation",fn:function(t,n,a){return[s("a",{attrs:{href:e.downloadHost+"?id="+n.id+"&type=student"}},[s("a-button",{attrs:{icon:"download"}},[e._v("下载")])],1),s("a-button",{attrs:{type:"primary",icon:"form"},on:{click:function(t){e.revisingWork=n,e.revisingForm.review=n.teacher_review}}},[e._v("批改")])]}}],null,!1,4208279406)}):e._e(),s("a-modal",{attrs:{visible:Boolean(e.revisingWork),footer:null},on:{cancel:function(t){e.revisingWork=!1}}},[s("form",[s("a-form-item",{attrs:{label:"状态"}},[s("a-select",{model:{value:e.revisingForm.status,callback:function(t){e.$set(e.revisingForm,"status",t)},expression:"revisingForm.status"}},e._l(e.work_status,function(t,n){return s("a-select-option",{key:"status_"+n,attrs:{value:n}},[e._v("\n                        "+e._s(t)+"\n                    ")])}),1)],1),s("a-form-item",{attrs:{label:"批改意见"}},[s("a-textarea",{attrs:{autosize:""},model:{value:e.revisingForm.review,callback:function(t){e.$set(e.revisingForm,"review",t)},expression:"revisingForm.review"}})],1),s("a-form-item",{attrs:{label:"附件"}},[s("a-upload",{attrs:{action:e.uploadHost,headers:{Token:e.info.token},data:{id:e.revisingWork.id}}},[s("a-button",{attrs:{icon:"upload"}},[e._v("上传")])],1)],1),s("a-form-item",[s("a-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)])],1)},j=[],_=(s("ffc1"),s("ac6a"),s("20d6"),"https://sandbox-api.estudy.chanke.xyz"),k={0:"待批改",1:"需完善",2:"已完成"},w={props:["teacher"],data:function(){return{work_status:k,revisingWork:!1,revisingAssignment:!1,revisingForm:{status:"0",review:""},downloadHost:_+"/teacher/download",uploadHost:_+"/teacher/upload",workColumns:[{title:"学员名字",dataIndex:"user.full_name"},{title:"学号",dataIndex:"user.name"},{title:"提交作业名称",dataIndex:"student_upload_name"},{title:"提交时间",dataIndex:"commit_time"},{title:"状态",customRender:function(e,t,s){return k[t.status]}},{title:"操作",scopedSlots:{customRender:"operation"}}]}},computed:Object(o["a"])({},Object(i["b"])("user",["info"]),{columns:function(){return[{title:"课程",dataIndex:"org_name"},{title:"作业名称",dataIndex:"name"},{title:"开始-截止时间",customRender:function(e,t,s){return"".concat(t.start_time," ~ ").concat(t.end_time)}},{title:"状态",customRender:function(e,t,s){return"".concat(t.student_count," 个学员 / ").concat(t.work_count," 个提交")+(t.work_count>0?" - ".concat(t.work_update_time):"")}},{title:"操作",scopedSlots:{customRender:"operation"},key:"operation",filteredValue:this.revisingAssignment?[this.revisingAssignment.assignment_id]:null,onFilter:function(e,t){return e===t.assignment_id}}]}}),methods:{removeAssignment:function(e){var t=this;u.post("/teacher/deleteAssignment",{id:e}).then(function(s){var n=t.teacher.assignments.findIndex(function(t){return t.assignment_id===e});t.teacher.assignments.splice(n,1),t.$message.info("删除成功")})},save:function(){var e=this,t={id:this.revisingWork.id,review:this.revisingForm.review,status:this.revisingForm.status};u.post("/teacher/review",t).then(function(t){Object.entries(t).forEach(function(t){return e.$set(e.revisingWork,t[0],t[1])})}).finally(function(){e.revisingWork=!1})}}},y=w,x=Object(b["a"])(y,h,j,!1,null,null,null),A=x.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a-table",{attrs:{rowKey:function(e){return e.assignment_id},pagination:!1,columns:e.columns,dataSource:e.student.assignments},scopedSlots:e._u([{key:"operation",fn:function(t,n,a){return[s("a-upload",{attrs:{name:"file",action:e.uploadHost,headers:{Token:e.info.token},data:{id:n.assignment_id},showUploadList:!1},on:{change:e.changeUpload}},[s("a-button",{attrs:{icon:"upload"}},[e._v("上传")])],1),n.work?s("a",{attrs:{href:e.downloadHost+"?id="+n.work.id+"&type=student"}},[s("a-button",{attrs:{icon:"download"}},[e._v("下载")])],1):e._e()]}},{key:"info",fn:function(t,n,a){return[n.work?s("div",[0==n.work.status?s("div",[e._v("\n                    "+e._s("0000-00-00"==n.work.teacher_download_time.slice(0,10)?n.work.commit_time+" 提交":n.work.teacher_download_time+" 老师已下载")+"\n                ")]):1==n.work.status?s("div",[s("p",[e._v(e._s(n.work.review_time+" 老师提交修改意见"))]),s("a-button",{on:{click:function(t){e.visible=n.work}}},[e._v("查看详情")])],1):s("div",[s("p",[e._v(e._s(n.work.review_time+" 老师批改完成"))]),s("a-button",{on:{click:function(t){e.visible=n.work}}},[e._v("查看详情")])],1),s("a-modal",{attrs:{title:"批改意见",visible:Boolean(e.visible)},on:{cancel:function(t){e.visible=!1}}},[e.visible&&e.visible.teacher_review?s("p",[e._v(e._s(e.visible.teacher_review))]):e._e(),e.visible&&e.visible.teacher_upload_name?s("p",[s("a",{attrs:{href:e.downloadHost+"?id="+e.visible.id+"&type=teacher"}},[s("a-button",[e._v("附件")])],1)]):e._e(),s("template",{slot:"footer"},[s("a-button",{attrs:{type:"primary"},on:{click:function(t){e.visible=!1}}},[e._v("\n                            明白了\n                        ")])],1)],2)],1):e._e()]}}])})],1)},C=[],F={0:"待批改",1:"需完善",2:"已完成"},O="https://sandbox-api.estudy.chanke.xyz",S={props:["student"],computed:Object(o["a"])({},Object(i["b"])("user",["info"])),methods:{changeUpload:function(e){"done"===e.file.status&&e.file.response.data?this.$message.info("上传成功"):"error"===e.file.status&&this.$notification.error({messgae:"上传失败",description:e.file.response.errorMessage})}},data:function(){return{visible:!1,uploadHost:O+"/student/upload",downloadHost:O+"/student/download",columns:[{title:"课程",dataIndex:"org_name"},{title:"作业名称",dataIndex:"name"},{title:"开始-截止时间",customRender:function(e,t,s){return"".concat(t.start_time," ~ ").concat(t.end_time)}},{title:"操作",scopedSlots:{customRender:"operation"}},{title:"状态",customRender:function(e,t){return t.work?F[t.work.status]:"未提交"}},{title:"信息",scopedSlots:{customRender:"info"}}]}}},T=S,$=Object(b["a"])(T,z,C,!1,null,null,null),I=$.exports,M=s("c1df"),D=s.n(M);s("5c3a");D.a.locale("zh-cn");var H={name:"app",data:function(){return{student:{orgs:[],stats:[],assignments:[]},teacher:{orgs:[],assignments:[]},createAssignmentForm:{org_id:"",name:"",time_range:[D()(),D()()]},showAssignment:!1}},computed:Object(o["a"])({},Object(i["b"])("user",["info","loggedIn"]),{isTeacher:function(){return this.info.is_admin>0}}),created:function(){this.loggedIn&&this.loadDetails()},watch:{loggedIn:function(e){e&&this.loadDetails()}},components:{Authorization:g,Teacher:A,Student:I},methods:{onChange:function(e,t){},loadDetails:function(){var e=this;this.isTeacher?u.get("/teacher/detail").then(function(t){e.teacher.orgs=t.orgs,e.teacher.assignments=t.assignments}):u.get("/student/detail").then(function(t){console.log(t),e.student.orgs=t.orgs,e.student.stats=t.stats,e.student.assignments=t.assignments})},createAssignment:function(){var e=this,t={org_id:this.createAssignmentForm.org_id,name:this.createAssignmentForm.name,start_time:this.createAssignmentForm.time_range[0].format("YYYY-MM-DD"),end_time:this.createAssignmentForm.time_range[1].format("YYYY-MM-DD")};u.post("/teacher/createAssignment",t).then(function(t){e.teacher.assignments.unshift(t)}).finally(function(){e.showAssignment=!1})}}},R=H,q=(s("5c0b"),Object(b["a"])(R,a,r,!1,null,null,null)),E=q.exports,P={loggedIn:!1,info:{}},W={},Y={login:function(e,t){e.loggedIn=!0,e.info=t,u.defaults.headers.common["Token"]=e.info.token},updateToken:function(e,t){e.info.token=t},logout:function(e){e.info={},e.loggedIn=!1,u.defaults.headers.common["Token"]=""}},U={login:function(e,t){var s=e.commit;u.post("/auth/login",t).then(function(e){s("login",e)})},checkedLogin:function(e){var t=e.commit,s=e.state,n=e.dispatch;u.defaults.headers.common["Token"]=s.info.token,u.post("/auth/refreshToken",{},{_slient:!0}).then(function(e){t("updateToken",e)}).catch(function(){n("logout")})},logout:function(e){var t=e.commit;t("logout")}},L={namespaced:!0,state:P,getters:W,mutations:Y,actions:U},N=s("0e44");n["default"].use(i["a"]);var K=new i["a"].Store({modules:{user:L},plugins:[Object(N["a"])({key:"eStudy",paths:["user"],subscriber:function(e){return e.dispatch("user/checkedLogin"),function(t){return e.subscribe(t)}}})]}),B=s("f23d"),G=s("218c"),J=s.n(G),V=(s("202f"),s("7bb1")),Q=s("fd7a"),X=s.n(Q);n["default"].use(B["a"]),n["default"].$notification=J.a,n["default"].use(V["b"]),V["a"].localize("zh_CN",X.a),n["default"].config.productionTip=!1,new n["default"]({store:K,render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(e,t,s){},"8c97":function(e,t,s){}});
//# sourceMappingURL=app.92f75e4c.js.map