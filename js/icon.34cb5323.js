(function(e){function t(t){for(var n,s,c=t[0],r=t[1],l=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,c=1;c<i.length;c++){var r=i[c];0!==a[r]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},a={icon:0},o=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://console.cnyixun.com/static/app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=r;o.push([4,"chunk-vendors","chunk-common"]),i()})({4:function(e,t,i){e.exports=i("b93c")},"5b64":function(e,t,i){},"979c":function(e,t,i){"use strict";var n=i("5b64"),a=i.n(n);a.a},b93c:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=i("5c96"),o=i.n(a),s=i("6a69"),c=(i("6b30"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Header"),i("Breadcrumb",{attrs:{name:"图标大全",slug:"icons",root:"/app/icons",feedbackEnable:!0}},[i("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 54.391 54.391","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[i("path",{attrs:{d:"M.285 19.392l23.896 29.665-10.839-29.665zM15.472 19.392L27.02 50.998l11.775-31.606zM29.593 49.823l24.512-30.431H40.929zM44.755 3.392H29.297l10.599 13.045zM38.094 17.392L27.195 3.979 16.297 17.392zM25.094 3.392H9.625l4.799 13.133zM7.959 4.658L0 17.392h12.611zM54.391 17.392L46.424 4.645l-4.75 12.747z"}})]),i("div",{staticClass:"m-info"},[e._v("👒 新增支持中文搜索")])]),i("LeftSidebar",[i("Nav")],1),i("Main",{staticClass:"m-icons-page",attrs:{withoutRight:!0}},[i("h1",{staticClass:"m-icons-title"},[e._v("剑三图标大全")]),i("div",{staticClass:"m-icons-box"},[i("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeTabName,callback:function(t){e.activeTabName=t},expression:"activeTabName"}},[i("el-tab-pane",{attrs:{label:"图标库",name:"icon",lazy:""}},[i("div",{staticClass:"searchbar-wrapper"},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入搜索条件，例如：3089、1-100、幽月乱花"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearchIcon(t)}},model:{value:e.searchIconInput,callback:function(t){e.searchIconInput=t},expression:"searchIconInput"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearchIcon},slot:"append"})],1),i("div",{staticClass:"m-icon-search-tip"},[i("ul",[i("li",[e._v(" 输入单个数字，例如1，返回IconID为1的图标； ")]),i("li",[e._v(" 输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标； ")]),i("li",[e._v(" 输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标； ")]),i("li",[e._v(" 可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标； ")]),i("li",[e._v(" 输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月、幽月乱花。 ")]),i("li",[e._v("每次上限500个")])])])],1),i("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.isSearchingByName,expression:"isSearchingByName"}],staticClass:"m-icon-list"},[i("el-alert",{attrs:{title:"以下为部分图标展示，请在上方自定义搜索范围。点击图标即可收藏。",type:"warning","close-text":"知道了",center:"","show-icon":""}}),e._l(e.iconsList,(function(t,n){return i("li",{key:n,on:{click:function(i){return e.handleAddFavorite(n,t)},mouseleave:e.handleMouseLeaveIcon}},[i("i",{staticClass:"u-pic"},[i("el-image",{staticClass:"u-img",attrs:{src:""+e.JX3BOXIconPath+t+".png",lazy:""}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"el-icon-loading"})]),i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-warning-outline"})])]),i("span",{staticClass:"u-love"},[i("i",{staticClass:"w-heart",class:{"w-heart-animation":n==e.clickedIndex}})])],1),i("span",{staticClass:"u-iconid"},[e._v(e._s(t))])])})),e.isSearchingByName&&0===e.iconsList.length?i("div",{staticClass:"loading-placeholder"}):e._e()],2)]),i("el-tab-pane",{attrs:{label:"收藏图标",name:"favicon",lazy:"",loading:e.isSynchronizing}},["favicon"===e.activeTabName?i("ul",{staticClass:"m-icon-list"},[e.faviconNeedsSync?i("el-alert",{staticClass:"m-icons-sync",attrs:{title:"本地有收藏图标未同步到服务器",type:"info",center:"","show-icon":""}},[i("el-button",{attrs:{type:"text"},on:{click:e.syncFavicon}},[e._v("点此同步未登录收藏数据")])],1):e._e(),e.faviconsList.length?i("ul",[i("transition-group",{attrs:{name:"el-fade-in"}},e._l(e.faviconsList,(function(t,n){return i("li",{key:t},[i("i",{staticClass:"u-pic"},[i("el-image",{staticClass:"u-img",attrs:{src:""+e.JX3BOXIconPath+t+".png",lazy:""}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"el-icon-loading"})]),i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-warning-outline"})])]),i("span",{staticClass:"u-remove",on:{click:function(i){return e.handleRemoveFavorite(n,t)}}})],1),i("span",{staticClass:"u-iconid"},[e._v(e._s(t))])])})),0)],1):i("el-alert",{attrs:{title:"没有收藏的图标",type:"info","show-icon":""}})],1):e._e()]),i("el-tab-pane",{attrs:{label:"表情包",name:"emoji",lazy:""}},[i("ul",{staticClass:"m-emotion-nav"},e._l(e.emojiCategoryOptions,(function(t,n){return i("li",{key:t.name,class:{active:n===e.emojiSelection},on:{click:function(t){return e.handleSelectEmojiCategory(n)}}},[e._v(" "+e._s(t.name)+" "),i("span",[e._v("("+e._s(t.total)+")")])])})),0),i("el-select",{staticClass:"m-emotion-selection",attrs:{placeholder:"请选择"},model:{value:e.emojiSelection,callback:function(t){e.emojiSelection=t},expression:"emojiSelection"}},e._l(e.emojiCategoryOptions,(function(t,n){return i("el-option",{key:t.name,attrs:{value:n,label:t.name}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("共"+e._s(t.total)+"个")])])})),1),e.emojiCategoryOptions.length>0?[i("ul",{staticClass:"m-emotion-list"},e._l(e.emojiCategoryOptions[e.emojiSelection].total,(function(t,n){return i("li",{key:t},[i("el-image",{attrs:{src:""+e.JX3BOXEmojiPath+e.emojiCategoryOptions[e.emojiSelection].name+"/"+n+".gif",lazy:""}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[i("i",{staticClass:"el-icon-loading"})]),i("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-warning-outline"})])])],1)})),0),i("el-button",{staticClass:"btn-download-emoji",attrs:{loading:e.isDownloadingEmoji,type:"primary",plain:"",icon:"el-icon-download"},nativeOn:{click:function(t){return t.stopPropagation(),e.handleDownloadEmoji(t)}}},[i("div",{staticClass:"m-emotion-down"},[i("b",[e._v("立即下载")])])])]:e._e()],2)],1)],1),i("Footer")],1)],1)}),r=[],l=(i("99af"),i("4160"),i("a630"),i("caad"),i("c975"),i("a15b"),i("fb6a"),i("a434"),i("b0c0"),i("4fad"),i("d3b7"),i("ac1f"),i("6062"),i("2532"),i("3ca3"),i("5319"),i("1276"),i("159b"),i("ddb0"),i("3835")),u=(i("96cf"),i("1da1")),d=i("b85c"),f=(i("8f33"),i("216c")),h=i("408b"),v=i("ee8f"),m={name:"Icons",data:function(){return{activeTabName:"icon",searchIconInput:"",iconsList:[],clickedIndex:-1,JX3BOXIconPath:v["JX3BOX"].__ossMirror+"icon/",JX3BOXEmojiPath:v["JX3BOX"].__iconPath+"emotion/official_mini/",faviconsList:null,localFaviconsList:[],isSynchronizing:!1,total:{},emojiCategoryOptions:[],emojiSelection:0,isDownloadingEmoji:!1,isSearchingByName:!1}},computed:{faviconNeedsSync:function(){if(!this.localFaviconsList||!this.faviconsList||0===this.localFaviconsList.length)return!1;if(this.localFaviconsList.length!==this.faviconsList.length)return!0;var e,t=Object(d["a"])(this.localFaviconsList);try{for(t.s();!(e=t.n()).done;){var i=e.value;if(!this.faviconsList.includes(i))return!0}}catch(n){t.e(n)}finally{t.f()}return!1}},methods:{prepareMounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var i,n,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[13,316,109,245,889,2178,2179,2180,2588,2589,2646,2647,2648,2789,3089,3111,3112,3113,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3137,3138,3139,3140,3321,4704,4707,4708,4709,4710,4835,4853,5389,8848,10451,10452,10909],e.iconsList=i,e.getFromLocal(),n=v["JX3BOX"].__staticPath.jsdelivr+"jx3-icon@1.1.0/icon.json",a=Object(h["a"])(n,"GET"),o=v["JX3BOX"].__staticPath.jsdelivr+"jx3-icon@1.1.0/emotion.json",s=Object(h["a"])(o,"GET"),null,e.uid?e.getSavedIcons():e.getFromLocal(),!1,Promise.all([a,s]).then((function(t){e.total.icons=t[0].icon,e.emojiCategoryOptions=t[1]})).catch((function(t){switch(t.code){case-1:e.$message.error(t.msg);break;case 9999:e.$message.error("登录失效, 请重新登录"),v["User"].destroy(),setTimeout((function(){v["User"].toLogin()}),2e3);break;default:console.log(t),e.$message.error("[".concat(t.code,"]").concat(t.msg))}}));case 11:case"end":return t.stop()}}),t)})))()},syncFavicon:function(){this.isSynchronizing=!0;var e=this.faviconsList.concat(this.localFaviconsList);e=new Set(e),this.faviconsList=Array.from(e),this.setSavedIcons(),window.localStorage&&(localStorage.removeItem("favicons"),this.localFaviconsList=null)},handleDownloadEmoji:function(){this.isDownloadingEmoji=!0;var e=document.createElement("a");e.href="".concat(this.JX3BOXEmojiPath).concat(this.emojiCategoryOptions[this.emojiSelection].name,".zip"),e.download="".concat(this.emojiCategoryOptions[this.emojiSelection].name,".zip"),e.click(),this.isDownloadingEmoji=!1},handleSelectEmojiCategory:function(e){this.emojiSelection=e},handleClick:function(e,t){},handleAddFavorite:function(e,t){this.clickedIndex=e;var i=t+"";this.faviconsList.includes(i)||(this.faviconsList.push(i),this.setSavedIcons())},handleRemoveFavorite:function(e,t){var i=this.faviconsList.indexOf(t);-1!==i&&(this.faviconsList.splice(i,1),this.setSavedIcons())},handleMouseLeaveIcon:function(){this.clickedIndex=-1},handleSearchIcon:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var i,n,a,o,s,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(500,i=0,n=1,a=[],o=e.searchIconInput.replace(/\ /g,""),""!==o){t.next=7;break}return t.abrupt("return");case 7:if(s=[],c=[],o=o.replace(/，|、|\/|\||\\/g,","),o=o.replace(/~/g,"-"),r=/^[0-9]+$/,o.includes(",")||o.includes("-")||r.test(o)){t.next=19;break}return e.isSearchingByName=!0,t.next=16,e.searchIconByName(o);case 16:return t.sent,e.isSearchingByName=!1,t.abrupt("return");case 19:o.includes(",")&&o.includes("-"),o.includes(",")&&(c=o.split(",")),0===c.length&&(c=[o]),c.forEach((function(e){if(e.includes("-")){if(a=e.split("-"),i=parseInt(a[0]),n=parseInt(a[a.length-1]),!isNaN(i)&&!isNaN(n))if(i>n)for(var t=n;t<=i;++t)s.includes(t)||s.push(t);else for(var o=i;o<=n;++o)s.includes(o)||s.push(o)}else isNaN(parseInt(e))||s.push(parseInt(e))})),e.iconsList=s.slice(0,500);case 24:case"end":return t.stop()}}),t)})))()},searchIconByName:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=v["JX3BOX"].__node+"icon/name/"+e,i.abrupt("return",Object(h["a"])(n,"GET").then((function(e){e&&function(){for(var i=[],n=0,a=Object.entries(e);n<a.length;n++){var o=Object(l["a"])(a[n],2),s=(o[0],o[1]);s.forEach((function(e){var t=e.IconID+"";i.includes(t)||i.push(t)}))}t.iconsList=i}()})).catch((function(e){switch(e.code){case-1:t.$message.error(e.msg),t.getFromLocal();break;default:t.$message.error("[".concat(e.code,"]").concat(e.msg)),t.getFromLocal()}})));case 2:case"end":return i.stop()}}),i)})))()},getUserId:function(){v["User"].isLogin()&&(this.uid=v["User"].getInfo().uid)},getSavedIcons:function(){var e=this,t=v["JX3BOX"].__server+"user/meta";this.uid?Object(h["a"])(t,"GET",!0,{},{},{uid:this.uid,key:"favicons"}).then((function(t){if(10050==t.code){var i=t.data.value;i?i.includes("[")?e.faviconsList=JSON.parse(i):e.faviconsList=i.split(","):e.faviconsList=[]}})).catch((function(t){switch(t.code){case-1:e.$message.error(t.msg),e.faviconsList=e.localFaviconsList;break;case 9999:e.$message.error("登录失效, 请重新登录"),v["User"].destroy(),setTimeout((function(){v["User"].toLogin()}),2e3);break;default:e.$message.error("[".concat(t.code,"]").concat(t.msg)),e.faviconsList=e.localFaviconsList}})).then((function(){})):this.faviconsList=this.localFaviconsList},getFromLocal:function(){if(window.localStorage){var e=localStorage.getItem("favicons");e&&(this.localFaviconsList=e.split(","))}},setSavedIcons:function(){var e=this;if(this.uid){var t=v["JX3BOX"].__server+"user/meta";Object(h["a"])(t,"POST",!0,{uid:this.uid,key:"favicons",value:this.faviconsList.join(",")}).then((function(e){e.code})).catch((function(t){var i=e.faviconsList;switch(e.localFaviconsList&&e.localFaviconsList.length>0&&(i=e.localFaviconsList.concat(e.faviconsList)),i=new Set(i),e.faviconsList=Array.from(i),e.setToLocal(),t.code){case-1:e.$message.error(t.msg);break;case 9999:e.$message.error("登录失效, 请重新登录"),v["User"].destroy(),setTimeout((function(){v["User"].toLogin()}),2e3);break;default:e.$message.error("[".concat(t.code,"]").concat(t.msg))}})).then((function(){e.isSynchronizing=!1}))}else this.setToLocal(),this.isSynchronizing=!1},setToLocal:function(){if(window.localStorage){var e=this.faviconsList.join(",");localStorage.setItem("favicons",e),this.localFaviconsList=this.faviconsList}}},filters:{},mounted:function(){this.getUserId(),this.prepareMounted(),this.getSavedIcons()},components:{Nav:f["a"]}},p=m,g=(i("979c"),i("2877")),b=Object(g["a"])(p,c,r,!1,null,null,null),y=b.exports;n["default"].config.productionTip=!1,n["default"].use(o.a),n["default"].use(s["a"]),new n["default"]({render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=icon.34cb5323.js.map