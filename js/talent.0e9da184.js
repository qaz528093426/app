(function(e){function t(t){for(var s,o,c=t[0],r=t[1],l=t[2],u=0,m=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={talent:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://console.cnyixun.com/static/app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=r;i.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("67b7")},"67b7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("5c96"),i=n.n(a),o=n("4eb5"),c=n.n(o),r=n("6a69"),l=(n("6b30"),n("c5b4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"奇穴模拟器",slug:"talent",root:"/app/talent",feedbackEnable:!0,crumbEnable:!0}},[n("img",{attrs:{slot:"logo","svg-inline":"",src:e.getIcon("talent")},slot:"logo"}),n("div",{staticClass:"m-info"})]),n("LeftSidebar",{attrs:{open:!1}},[n("Nav")],1),n("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[n("div",{staticClass:"m-talent"},[n("div",{staticClass:"m-talent-header"},[n("h1",{staticClass:"m-talent-title"},[e._v("奇穴模拟器")]),n("div",{staticClass:"m-talent-panel"},[n("div",{staticClass:"m-talent-version"},[n("span",{staticClass:"u-label"},[e._v("选择版本")]),n("el-select",{attrs:{placeholder:"请选择游戏版本"},on:{change:e.reload},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}},e._l(e.versions,(function(e){return n("el-option",{key:e.version,attrs:{label:e.name,value:e.version}})})),1)],1)])]),n("div",{staticClass:"m-talent-wrapper"},[n("h2",{staticClass:"m-talent-subtitle"},[e._v("选择心法")]),n("div",{staticClass:"m-talent-xf"},e._l(e.xfmap,(function(t,s){return n("el-radio",{key:s,attrs:{label:t.name},on:{change:e.reload},model:{value:e.xf,callback:function(t){e.xf=t},expression:"xf"}},[n("img",{staticClass:"u-pic",attrs:{src:e._f("xficon")(t.id),alt:t.name}}),n("span",{staticClass:"u-txt"},[e._v(e._s(t.name))])])})),1),n("h2",{staticClass:"m-talent-subtitle"},[e._v("配置奇穴")]),n("div",{staticClass:"qx-container"}),n("h2",{staticClass:"m-talent-subtitle"},[e._v("奇穴编码")]),n("div",{staticClass:"m-talent-extend"},[n("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"通用编码",name:"common"}},[n("div",{staticClass:"m-talent-code"},[n("el-input",{attrs:{placeholder:"粘贴编码亦可自动解析奇穴"},on:{change:e.parseSchema},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),n("div",{staticClass:"m-talent-op"},[n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-copy",size:"small"}},[e._v("点击复制")]),e.isLogin?n("el-button",{staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-add",size:"small"},on:{click:e.save}},[e._v("保存为预设")]):e._e()],1)],1)]),n("el-tab-pane",{attrs:{label:"配装器编码",name:"pz"}},[n("el-input",{attrs:{placeholder:"配装器编码",type:"textarea",rows:4},model:{value:e.pzcode,callback:function(t){e.pzcode=t},expression:"pzcode"}}),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.pzcode,expression:"pzcode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-copy",size:"small"}},[e._v("点击复制")]),e.isLogin?n("el-button",{staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-add",size:"small"},on:{click:e.save}},[e._v("保存为预设")]):e._e()],1)],1)],1)]),e.isLogin?n("div",{staticClass:"m-talent-my"},[n("h2",{staticClass:"m-talent-subtitle"},[e._v("预设方案")]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-talent-list"},[e.list&&e.list.length?n("ul",[e._l(e.list,(function(t,s){return n("li",{key:s,staticClass:"m-talent-list-item"},[n("span",{staticClass:"u-name"},[e._v(e._s(t.name))]),n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-position"},on:{click:function(n){return e.use(t)}}},[e._v("使用")]),n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(n){return e.edit(t)}}},[e._v("改名")]),n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-delete"},on:{click:function(n){return e.del(t)}}},[e._v("删除")])],1)],1)})),n("el-pagination",{staticClass:"u-list-pagination",attrs:{background:"","hide-on-single-page":"",layout:"prev,pager,next,->,total",total:e.total,"page-size":e.per,"current-page":e.page},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],2):n("el-alert",{attrs:{title:"当前没有任何预设方案",type:"info","show-icon":""}})],1)]):e._e()]),n("Footer")],1)],1)}),d=[],u=n("5530"),m=(n("caad"),n("2532"),n("d3b7"),n("b0c0"),n("4de4"),n("a15b"),n("216c")),p=(n("f114"),n("46d4")),f=n("65c2"),v=n("31de"),P=n("1157"),h=n.n(P),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-input",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{placeholder:"点击自动复制"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("template",{slot:"prepend"},[e._v(e._s(e.config.desc+"·"+e.config.name))]),n("template",{slot:"append"},[e._v("点击复制")])],2)],1)},g=[],q={name:"schema",props:["config","version","xf"],data:function(){return{}},computed:{code:function(){var e={version:this.version,xf:this.xf,sq:this.config.sq};return console.log(JSON.stringify(e)),JSON.stringify(e)}},methods:{onCopy:function(e){this.$notify({title:"复制成功",message:"奇穴编码复制成功",type:"success"})},onError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})}},mounted:function(){},components:{}},V=q,E=n("2877"),y=Object(E["a"])(V,b,g,!1,null,null,null),x=(y.exports,n("aa1d")),_=n("bc3a"),C=n.n(_),w=n("41cb");function O(){return C.a.get(f["__ossRoot"]+"data/qixue/index.json")}function N(e){return Object(w["b"])().get("/api/cms/app/talents",e)}function k(e){return Object(w["b"])().post("/api/cms/app/talent",e)}function j(e,t){return Object(w["b"])().put("/api/cms/app/talent/"+e,t)}function z(e){return Object(w["b"])().delete("/api/cms/app/talent/"+e)}var S=n("c9d2"),T={name:"Talent",props:[],data:function(){return{activeName:"common",xf:"其它",sq:"1,1,1,1,1,1,1,1,1,1,1,1",driver:"",code:"",pzcode:"",version:"",versions:[],xfmap:p,schemas:x,isLogin:S["a"].isLogin(),showList:!1,list:[],per:10,page:1,total:0,loading:!1}},computed:{schema_group:function(){return x[this.xf]},client:function(){return location.href.includes("origin")?"origin":"std"},mount:function(){var e;return null===(e=this.xfmap[this.xf])||void 0===e?void 0:e.id},params:function(){var e=this.client,t=this.mount,n=this.version,s=this.code,a=this.pzcode,i=this.xf;return{client:e,type:"talent",mount:t,version:n,code:s,pzcode:a,xf:i}}},methods:{getIcon:function(e){return f["__imgPath"]+"image/box/"+e+".svg"},parseSchema:function(){var e=this;this.driver.then((function(t){if(e.code){var n={};try{n=JSON.parse(e.code),t.load(n),e.$message({message:"编码解析成功",type:"success"})}catch(s){e.$message.error("编码格式错误")}}}))},reload:function(e){var t=this;this.driver.then((function(e){e.load({version:t.version,xf:t.xf,sq:t.sq,editable:!0})}))},onCopy:function(e){this.$notify({title:"复制成功",message:"奇穴编码复制成功",type:"success"})},onError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})},save:function(){var e=this;this.mount?this.$prompt("请输入方案名称","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"输入不能为空",inputValidator:function(e){if(!e)return"输入不能为空"}}).then((function(t){var n=t.value;k(Object(u["a"])(Object(u["a"])({},e.params),{},{name:n})).then((function(){e.$notify({type:"success",title:"成功",message:"保存预设方案成功"}),e.loadList()}))})):this.$notify({type:"warning",title:"提醒",message:"暂未选择心法，请先选择心法"})},loadList:function(){var e=this;this.loading=!0,N().then((function(t){e.list=t.data.data.list,e.page=t.data.data.page,e.per=t.data.data.per,e.total=t.data.data.total})).finally((function(){e.loading=!1}))},use:function(e){this.code=e.code,this.pzcode=e.code;var t=JSON.parse(this.code);this.xf=t.xf,this.parseSchema()},edit:function(e){var t=this;this.$prompt("请输入方案名称","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:e.name,inputErrorMessage:"输入不能为空",inputValidator:function(e){if(!e)return"输入不能为空"}}).then((function(n){var s=n.value;j(e.id,{name:s}).then((function(){t.$notify({type:"success",title:"成功",message:"方案名称修改成功"}),e.name=s}))}))},del:function(e){var t=this;this.$confirm("确认删除预设方案[".concat(e.name,"]？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){z(e.id).then((function(){t.$notify({type:"success",title:"成功",message:"删除预设方案成功"}),t.list=t.list.filter((function(t){return t.id!==e.id}))}))}))},init:function(){var e=this;O().then((function(t){e.versions=t.data,e.version=e.versions&&e.versions.length&&e.versions[0]["version"],e.driver=new v["a"]({version:e.version,editable:!0});var n=e;h()(document).on("JX3_QIXUE_Change",(function(e,t){var s={};s.version=t.version,s.xf=t.xf,s.sq=t.sq.join(","),n.code=JSON.stringify(s),n.pzcode=JSON.stringify(t.overview)}))})),this.loadList()}},filters:{xficon:function(e){return f["__imgPath"]+"image/xf/"+e+".png"}},mounted:function(){this.init()},components:{Nav:m["a"]}},$=T,L=(n("96e7"),Object(E["a"])($,l,d,!1,null,null,null)),J=L.exports;s["default"].config.productionTip=!1,s["default"].use(i.a),s["default"].use(c.a),s["default"].use(r["a"]),new s["default"]({render:function(e){return e(J)}}).$mount("#app")},"96e7":function(e,t,n){"use strict";n("b263")},aa1d:function(e){e.exports=JSON.parse('{"傲血战意":[{"name":"劲风单体","desc":"PVE","sq":"2,1,1,1,2,2,2,4,4,3,3,1"},{"name":"驰骋单体","desc":"PVE","sq":"2,1,1,1,3,2,2,4,4,3,3,1"}],"北傲诀":[{"name":"砺锋七刀","desc":"PVE","sq":"3,1,2,2,1,1,3,1,1,1,3,1"},{"name":"逐鹿七刀","desc":"PVE","sq":"3,1,2,2,1,3,3,1,1,1,3,1"}],"冰心诀":[{"name":"广陵月流","desc":"PVE","sq":"2,2,2,1,1,4,1,1,1,1,4,1"}],"补天诀":[{"name":"团队刷血","desc":"PVE","sq":"1,2,2,2,3,4,2,4,4,3,1,4"}],"毒经":[{"name":"浪客行","desc":"PVE","sq":"1,2,3,1,3,1,1,3,2,4,1,2"}],"分山劲":[{"name":"浪客行","desc":"PVE","sq":"1,3,1,1,3,4,2,1,2,1,1,1"},{"name":"割裂斩绝绝","desc":"PVE","sq":"1,3,1,4,1,1,1,1,1,1,1,1"},{"name":"减伤斩绝绝","desc":"PVE","sq":"1,3,1,4,1,3,1,1,1,1,1,1"},{"name":"打断斩绝绝","desc":"PVE","sq":"1,3,1,4,1,4,1,1,1,1,1,1"},{"name":"吃鸡","desc":"PVP","sq":"1,3,1,4,3,1,2,1,1,2,4,4"},{"name":"竞技场组排","desc":"PVP","sq":"1,3,1,4,4,2,2,1,1,2,1,4"}],"焚影圣诀":[{"name":"竞技场带奶","desc":"PVP","sq":"2,2,1,3,1,1,4,1,1,1,4,4"},{"name":"竞技场花毒","desc":"PVP","sq":"2,2,1,3,1,1,4,4,1,1,4,4"},{"name":"竞技场气蓬","desc":"PVP","sq":"2,2,1,3,2,1,4,4,4,1,4,4"},{"name":"驱夷单体","desc":"PVE","sq":"2,2,3,1,1,1,2,1,1,3,4,2"},{"name":"驱夷群体","desc":"PVE","sq":"2,3,3,1,1,1,2,4,1,3,4,2"},{"name":"苟鸡","desc":"PVP","sq":"3,2,1,3,4,2,3,3,4,1,4,4"},{"name":"浪客行","desc":"PVE","sq":"3,2,3,1,1,1,2,1,1,3,4,2"},{"name":"吃鸡组排","desc":"PVP","sq":"3,2,3,3,3,2,2,1,4,1,4,4"}],"花间游":[{"name":"副本常用","desc":"PVE","sq":"2,1,3,2,1,1,2,2,1,1,1,1"}],"惊羽诀":[{"name":"百里追魂流","desc":"PVE","sq":"2,2,2,2,1,4,3,2,2,1,1,4"}],"离经易道":[{"name":"寒遥刷团流","desc":"PVE","sq":"1,1,2,3,4,1,1,2,3,1,1,4"},{"name":"寒砚刷团流","desc":"PVE","sq":"1,1,2,3,4,1,1,2,3,1,2,4"},{"name":"南柯保T","desc":"PVE","sq":"1,2,1,3,3,1,1,2,1,1,1,4"},{"name":"五二刷团流","desc":"PVE","sq":"1,2,2,3,4,1,1,2,1,1,2,4"},{"name":"竞技场抗压","desc":"PVP","sq":"2,1,1,2,3,4,2,3,4,3,3,4"}],"凌海诀":[{"name":"吃鸡","desc":"PVP","sq":"1,2,2,2,1,3,2,3,3,1,3,1"},{"name":"副本常用","desc":"PVE","sq":"3,2,1,1,3,1,4,1,1,1,1,2"},{"name":"吃鸡组排","desc":"PVP","sq":"3,2,2,2,4,3,3,3,1,2,3,4"}],"明尊琉璃体":[{"name":"刷朝奇穴","desc":"PVE","sq":"2,1,2,4,3,4,4,3,4,1,1,1"},{"name":"正常明尊","desc":"PVE","sq":"2,2,1,4,1,4,1,3,4,1,1,4"},{"name":"常规主T","desc":"PVE","sq":"2,2,1,4,2,4,1,3,4,1,1,4"},{"name":"闪避流","desc":"PVE","sq":"2,2,2,4,2,3,1,2,3,3,4,4"},{"name":"群拉仇恨","desc":"PVE","sq":"2,2,2,4,3,3,1,3,4,1,1,4"},{"name":"仇恨群拉","desc":"PVE","sq":"2,2,4,4,2,3,1,3,4,4,3,1"}],"莫问":[{"name":"单体大徵","desc":"PVE","sq":"2,1,1,1,1,1,1,3,4,4,1,2"},{"name":"高山鹿鸣","desc":"PVE","sq":"2,3,3,3,2,1,4,3,2,4,2,1"},{"name":"清绝剑宫","desc":"PVE","sq":"2,3,4,2,4,4,3,3,1,4,1,1"}],"太虚剑意":[{"name":"副本常用","desc":"PVE","sq":"2,2,4,1,2,3,3,1,1,1,1,3"}],"天罗诡道":[{"name":"神机千算流","desc":"PVE","sq":"1,2,1,2,3,1,4,1,2,1,1,1"},{"name":"聚精凝神流","desc":"PVE","sq":"1,2,1,2,3,2,4,1,2,1,1,1"},{"name":"攻防团战","desc":"PVP","sq":"1,2,4,2,3,1,4,1,2,1,1,4"},{"name":"竞技场单体","desc":"PVP","sq":"1,3,4,2,2,2,1,2,2,4,1,1"},{"name":"抗压兼具","desc":"PVP","sq":"1,3,4,3,2,2,4,1,2,4,2,4"},{"name":"吃鸡奇穴","desc":"PVP","sq":"1,3,4,3,2,4,2,1,3,4,2,4"},{"name":"雷甲流","desc":"PVE","sq":"2,2,1,2,3,2,4,1,2,1,1,1"},{"name":"暴雨雷甲流","desc":"PVE","sq":"2,2,3,2,3,2,4,1,2,1,1,1"},{"name":"千秋群怪流","desc":"PVE","sq":"2,2,3,2,3,2,4,1,2,1,1,4"}],"铁骨衣":[{"name":"万能单刷","desc":"PVE","sq":"2,1,4,3,4,1,1,4,1,4,2,1"},{"name":"万能T本","desc":"PVE","sq":"2,2,1,3,4,3,1,1,1,4,2,1"},{"name":"高内防流","desc":"PVE","sq":"2,3,3,3,1,3,1,1,3,1,2,4"}],"铁牢律":[{"name":"副本群仇","desc":"PVE","sq":"3,1,2,3,1,4,4,4,3,2,4,4"},{"name":"铁牢主T","desc":"PVE","sq":"3,1,3,3,2,4,4,4,2,4,4,4"}],"问水诀":[{"name":"景行映波流","desc":"PVE","sq":"2,2,1,1,1,3,1,4,3,2,1,4"},{"name":"造化碧归流","desc":"PVE","sq":"2,2,1,1,4,3,1,4,3,1,1,4"},{"name":"造化残雪流","desc":"PVE","sq":"2,2,1,1,4,3,1,4,3,2,1,4"}],"洗髓经":[{"name":"大明主T","desc":"PVE","sq":"2,1,1,4,2,4,1,1,1,4,4,4"},{"name":"取法主T","desc":"PVE","sq":"2,3,1,4,2,4,1,1,1,4,4,4"},{"name":"天龙音回血","desc":"PVE","sq":"2,3,1,4,2,4,3,1,1,4,4,4"},{"name":"打断辅助","desc":"PVE","sq":"2,3,4,4,2,4,3,1,1,3,4,4"}],"相知":[{"name":"洞天血歌流","desc":"PVE","sq":"2,2,3,3,1,1,1,3,2,1,1,2"},{"name":"枕流盾歌流","desc":"PVE","sq":"2,3,1,4,2,1,3,3,2,4,1,3"},{"name":"高山血歌流","desc":"PVE","sq":"3,2,1,3,1,1,1,3,2,1,1,1"},{"name":"梅花盾歌流","desc":"PVE","sq":"3,2,1,3,4,4,3,2,2,4,1,3"},{"name":"争簇血歌流","desc":"PVE","sq":"3,2,2,3,1,1,1,3,2,1,1,2"},{"name":"谪仙盾歌流","desc":"PVE","sq":"3,2,2,4,1,4,3,2,2,4,1,3"}],"笑尘诀":[{"name":"坚冰群怪流","desc":"PVE","sq":"2,1,3,2,2,4,1,2,2,2,1,1"},{"name":"双元一掌流","desc":"PVE","sq":"2,2,3,2,2,4,1,2,2,2,1,1"},{"name":"追远回蓝流","desc":"PVE","sq":"2,3,3,2,2,4,1,2,2,2,1,1"},{"name":"竞技场常用","desc":"PVP","sq":"3,2,1,4,1,4,1,2,2,4,4,3"}],"易筋经":[{"name":"涅果六识流","desc":"PVE","sq":"1,1,1,1,1,4,1,3,2,3,3,4"},{"name":"幻身明澈流","desc":"PVE","sq":"1,2,2,1,1,2,1,3,2,3,1,4"},{"name":"清心非梵流","desc":"PVP","sq":"1,3,4,4,4,1,3,4,3,1,2,1"},{"name":"普心群体","desc":"PVE","sq":"2,1,3,3,2,4,3,3,2,1,3,4"},{"name":"静色明王身","desc":"PVP","sq":"2,3,4,4,3,1,3,1,3,1,2,4"},{"name":"明澈试炼","desc":"PVE","sq":"3,1,1,1,1,4,1,3,2,2,1,4"},{"name":"佛果试炼","desc":"PVE","sq":"3,1,1,1,1,4,1,3,2,2,3,4"},{"name":"明法六识流","desc":"PVE","sq":"3,1,1,1,1,4,1,3,2,3,3,4"},{"name":"明法幻身流","desc":"PVE","sq":"3,2,1,1,1,4,1,3,2,3,3,4"}],"隐龙诀":[{"name":"归鸿北阙流","desc":"PVE","sq":"1,3,3,1,2,1,1,1,1,4,3,4"},{"name":"折意重霄流","desc":"PVE","sq":"1,3,4,1,1,1,1,1,1,4,3,4"},{"name":"折意北阙流","desc":"PVE","sq":"1,3,4,1,2,1,1,1,1,4,3,4"}],"云裳心经":[{"name":"香蕊刷团流","desc":"PVE","sq":"1,1,2,2,1,2,1,2,1,1,2,4"},{"name":"回蓝刷团流","desc":"PVE","sq":"3,1,2,2,1,2,1,2,1,1,2,4"},{"name":"单体刷血","desc":"PVE","sq":"3,2,1,2,1,1,2,2,1,1,2,4"}],"紫霞功":[{"name":"自化流","desc":"PVE","sq":"2,2,3,2,2,2,3,1,2,1,4,2"},{"name":"吃鸡抗揍","desc":"PVP","sq":"2,3,1,4,4,3,4,2,3,2,4,3"}]}')},b263:function(e,t,n){}});
//# sourceMappingURL=talent.0e9da184.js.map