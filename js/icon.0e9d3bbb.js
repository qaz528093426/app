(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],h=0,v=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={icon:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://cdn.jsdelivr.net/gh/JX3BOX/app@gh-pages/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([3,"chunk-vendors","chunk-common"]),n()})({3:function(t,e,n){t.exports=n("b93c")},"5b64":function(t,e,n){},"979c":function(t,e,n){"use strict";var a=n("5b64"),i=n.n(a);i.a},b93c:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("6a69"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"图标大全",slug:"icons",root:"/app/icons"}},[n("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[n("path",{attrs:{d:"M42.1 204.4H5v-8.7c7.2.6 10.5-4.3 10-14.8V75c.5-10.4-2.8-15.3-10-14.8v-8.7h37v8.7c-7.2-.6-10.5 4.3-10 14.8v106c-.5 10.4 2.8 15.3 10 14.8v8.6z"}}),n("path",{attrs:{d:"M105.2 52.5v54.7h-4c-5.3-33-13-48.9-23.1-47.7-12 0-17.9 22.9-17.9 68.6 0 45.1 6.9 68 20.7 68.6 13.5-.6 20.8-17.9 21.9-52.1h4.8c-.5 40.5-10.2 61.3-29.1 62.5-23.1-2.3-35.5-28.6-37-79 2.4-48 14.3-74.4 35.9-79 5.8 0 12.5 4.3 19.9 13l4-9.5h3.9zM108.2 128c2.4-48 14.3-74.4 35.9-79 21.2 5.2 33.1 31.6 35.5 79-2.4 47.5-14.2 73.8-35.5 79-21.6-4.6-33.5-31-35.9-79zm19.1 0c0 45.7 5.6 68.6 16.7 68.6 10.9.6 16.3-22.3 16.3-68.6s-5.4-69.2-16.3-68.6c-11.1 0-16.7 22.9-16.7 68.6z"}}),n("path",{attrs:{d:"M176.9 60.3v-8.7h24.7l34.3 104.2h.4V77.6c.5-9.8-3.1-15.6-10.8-17.4v-8.7H251v8.7c-6.6 1.7-9.7 7.5-9.2 17.4v126.7h-9.6l-39-118.1h-.4V181c-.8 10.4 3.2 15.3 12 14.8v8.7h-27.5v-8.7c7.2.6 10.5-4.3 10-14.8V75c.5-10.4-2.9-15.3-10.4-14.7z"}}),n("g",[n("path",{attrs:{d:"M5 5h246v16H5z"}}),n("path",{attrs:{d:"M5.016 30.016v-25h16v25zM235.016 30.016v-25h16v25zM104.016 30.016v-25h48v25z"}})]),n("g",[n("path",{attrs:{d:"M235.016 251.016v-25h16v25z"}}),n("path",{attrs:{d:"M5 235h246v16H5z"}}),n("path",{attrs:{d:"M5.016 251.016v-25h16v25zM104.016 251.016v-25h48v25z"}})])])]),n("LeftSidebar",[n("Nav")],1),n("Main",{attrs:{withoutRight:!1}},[n("div",{staticClass:"m-icons"},[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[n("el-tab-pane",{attrs:{label:"图标库",name:"icon",lazy:""}},[n("div",{staticClass:"searchbar-wrapper"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入图标ID"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearchIcon(e)}},model:{value:t.searchIconInput,callback:function(e){t.searchIconInput=e},expression:"searchIconInput"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleSearchIcon},slot:"append"})],1),n("el-alert",{attrs:{title:"搜索条件",type:"info",closable:!1}},[n("ul",[n("li",[t._v("输入单个数字，例如1，返回IconID为1的图标；")]),n("li",[t._v("输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；")]),n("li",[t._v("输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；")]),n("li",[t._v("可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；")]),n("li",[t._v("每次上限500个；")]),n("li",[t._v("输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月。")]),n("li",[t._v(" 批量图标下载： "),n("el-link",{attrs:{type:"primary",href:"https://www.jx3box.com/tool/643/",target:"_blank"}},[t._v("剑三图标下载器")])],1)])])],1),n("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.isSearchingByName,expression:"isSearchingByName"}],staticClass:"m-icon-list"},[n("el-alert",{attrs:{title:"以下为部分图标展示，请在上方自定义搜索范围。点击图标即可收藏。",type:"warning","close-text":"知道了",center:"","show-icon":""}}),t._l(t.iconsList,(function(e,a){return n("li",{key:a,on:{click:function(n){return t.handleAddFavorite(a,e)},mouseleave:t.handleMouseLeaveIcon}},[n("i",{staticClass:"u-pic"},[n("el-image",{staticClass:"u-img",attrs:{src:""+t.JX3BOXIconPath+e+".png",lazy:""}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})]),n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-warning-outline"})])]),n("span",{staticClass:"u-love"},[n("i",{staticClass:"w-heart",class:{"w-heart-animation":a==t.clickedIndex}})])],1),n("span",{staticClass:"u-iconid"},[t._v(t._s(e))])])})),t.isSearchingByName&&0===t.iconsList.length?n("div",{staticClass:"loading-placeholder"}):t._e()],2)]),n("el-tab-pane",{attrs:{label:"收藏图标",name:"favicon",lazy:"",loading:t.isSynchronizing}},["favicon"===t.activeTabName?n("ul",{staticClass:"m-icon-list"},[t.faviconNeedsSync?n("el-alert",{attrs:{title:"本地有收藏图标未同步到服务器",type:"info",center:"","show-icon":""}},[n("el-button",{attrs:{type:"text"},on:{click:t.syncFavicon}},[t._v("点此同步未登录收藏数据")])],1):t._e(),n("transition-group",{attrs:{name:"el-fade-in"}},t._l(t.faviconsList,(function(e,a){return n("li",{key:e},[n("i",{staticClass:"u-pic"},[n("el-image",{staticClass:"u-img",attrs:{src:""+t.JX3BOXIconPath+e+".png",lazy:""}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})]),n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-warning-outline"})])]),n("span",{staticClass:"u-remove",on:{click:function(n){return t.handleRemoveFavorite(a,e)}}})],1),n("span",{staticClass:"u-iconid"},[t._v(t._s(e))])])})),0)],1):t._e()]),n("el-tab-pane",{attrs:{label:"表情包",name:"emoji",lazy:""}},[n("ul",{staticClass:"m-emotion-nav"},t._l(t.emojiCategoryOptions,(function(e,a){return n("li",{key:e.name,class:{active:a===t.emojiSelection},on:{click:function(e){return t.handleSelectEmojiCategory(a)}}},[t._v(" "+t._s(e.name)+" "),n("span",[t._v("("+t._s(e.total)+")")])])})),0),n("el-select",{staticClass:"m-emotion-selection",attrs:{placeholder:"请选择"},model:{value:t.emojiSelection,callback:function(e){t.emojiSelection=e},expression:"emojiSelection"}},t._l(t.emojiCategoryOptions,(function(e,a){return n("el-option",{key:e.name,attrs:{value:a,label:e.name}},[n("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("共"+t._s(e.total)+"个")])])})),1),t.emojiCategoryOptions.length>0?[n("ul",{staticClass:"m-emotion-list"},t._l(t.emojiCategoryOptions[t.emojiSelection].total,(function(e,a){return n("li",{key:e},[n("el-image",{attrs:{src:""+t.JX3BOXEmojiPath+t.emojiCategoryOptions[t.emojiSelection].name+"/"+a+".gif",lazy:""}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})]),n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-warning-outline"})])])],1)})),0),n("el-button",{staticClass:"btn-download-emoji",attrs:{loading:t.isDownloadingEmoji,plain:"",icon:"el-icon-download"},nativeOn:{click:function(e){return e.stopPropagation(),t.handleDownloadEmoji(e)}}},[n("div",{staticClass:"m-emotion-down"},[n("b",[t._v("下载")]),n("span",[t._v("Download")])])])]:t._e()],2)],1)],1),n("RightSidebar",[n("div",{staticClass:"m-icons-aside"})]),n("Footer")],1)],1)},o=[],s=(n("99af"),n("4160"),n("a630"),n("caad"),n("c975"),n("a15b"),n("fb6a"),n("a434"),n("b0c0"),n("4fad"),n("d3b7"),n("ac1f"),n("6062"),n("2532"),n("3ca3"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("3835")),c=(n("96cf"),n("1da1")),r=n("b85c"),l=(n("8f33"),n("216c")),u=n("408b"),h=n("ee8f"),v={name:"Icons",data:function(){return{activeTabName:"icon",searchIconInput:"",iconsList:[],clickedIndex:-1,JX3BOXIconPath:h["JX3BOX"].__iconPath+"icon/",JX3BOXEmojiPath:h["JX3BOX"].__iconPath+"emotion/official_mini/",faviconsList:null,localFaviconsList:[],isSynchronizing:!1,total:{},emojiCategoryOptions:[],emojiSelection:0,isDownloadingEmoji:!1,isSearchingByName:!1}},computed:{faviconNeedsSync:function(){if(!this.localFaviconsList||!this.faviconsList||0===this.localFaviconsList.length)return!1;if(this.localFaviconsList.length!==this.faviconsList.length)return!0;var t,e=Object(r["a"])(this.localFaviconsList);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(!this.faviconsList.includes(n))return!0}}catch(a){e.e(a)}finally{e.f()}return!1}},methods:{prepareMounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=[13,316,109,245,889,2178,2179,2180,2588,2589,2646,2647,2648,2789,3089,3111,3112,3113,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3137,3138,3139,3140,3321,4704,4707,4708,4709,4710,4835,4853,5389,8848,10451,10452,10909],t.iconsList=n,t.getFromLocal(),a=h["JX3BOX"].__staticPath.jsdelivr+"jx3-icon@1.1.0/icon.json",i=Object(u["a"])(a,"GET"),o=h["JX3BOX"].__staticPath.jsdelivr+"jx3-icon@1.1.0/emotion.json",s=Object(u["a"])(o,"GET"),null,t.uid?t.getSavedIcons():t.getFromLocal(),!1,Promise.all([i,s]).then((function(e){t.total.icons=e[0].icon,t.emojiCategoryOptions=e[1]})).catch((function(e){switch(e.code){case-1:t.$message.error(e.msg);break;case 9999:t.$message.error("登录失效, 请重新登录"),h["User"].destroy(),setTimeout((function(){h["User"].toLogin()}),2e3);break;default:console.log(e),t.$message.error("[".concat(e.code,"]").concat(e.msg))}}));case 11:case"end":return e.stop()}}),e)})))()},syncFavicon:function(){this.isSynchronizing=!0;var t=this.faviconsList.concat(this.localFaviconsList);t=new Set(t),this.faviconsList=Array.from(t),this.setSavedIcons(),window.localStorage&&(localStorage.removeItem("favicons"),this.localFaviconsList=null)},handleDownloadEmoji:function(){this.isDownloadingEmoji=!0;var t=document.createElement("a");t.href="".concat(this.JX3BOXEmojiPath).concat(this.emojiCategoryOptions[this.emojiSelection].name,".zip"),t.download="".concat(this.emojiCategoryOptions[this.emojiSelection].name,".zip"),t.click(),this.isDownloadingEmoji=!1},handleSelectEmojiCategory:function(t){this.emojiSelection=t},handleClick:function(t,e){},handleAddFavorite:function(t,e){this.clickedIndex=t;var n=e+"";this.faviconsList.includes(n)||(this.faviconsList.push(n),this.setSavedIcons())},handleRemoveFavorite:function(t,e){var n=this.faviconsList.indexOf(e);-1!==n&&(this.faviconsList.splice(n,1),this.setSavedIcons())},handleMouseLeaveIcon:function(){this.clickedIndex=-1},handleSearchIcon:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,i,o,s,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(500,n=0,a=1,i=[],o=t.searchIconInput.replace(/\ /g,""),""!==o){e.next=7;break}return e.abrupt("return");case 7:if(s=[],c=[],o=o.replace(/，|、|\/|\||\\/g,","),o=o.replace(/~/g,"-"),r=/^[0-9]+$/,o.includes(",")||o.includes("-")||r.test(o)){e.next=19;break}return t.isSearchingByName=!0,e.next=16,t.searchIconByName(o);case 16:return e.sent,t.isSearchingByName=!1,e.abrupt("return");case 19:o.includes(",")&&o.includes("-"),o.includes(",")&&(c=o.split(",")),0===c.length&&(c=[o]),c.forEach((function(t){if(t.includes("-")){if(i=t.split("-"),n=parseInt(i[0]),a=parseInt(i[i.length-1]),!isNaN(n)&&!isNaN(a))if(n>a)for(var e=a;e<=n;++e)s.includes(e)||s.push(e);else for(var o=n;o<=a;++o)s.includes(o)||s.push(o)}else isNaN(parseInt(t))||s.push(parseInt(t))})),t.iconsList=s.slice(0,500);case 24:case"end":return e.stop()}}),e)})))()},searchIconByName:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=h["JX3BOX"].__node+"icon/name/"+t,n.abrupt("return",Object(u["a"])(a,"GET").then((function(t){t&&function(){for(var n=[],a=0,i=Object.entries(t);a<i.length;a++){var o=Object(s["a"])(i[a],2),c=(o[0],o[1]);c.forEach((function(t){var e=t.IconID+"";n.includes(e)||n.push(e)}))}e.iconsList=n}()})).catch((function(t){switch(t.code){case-1:e.$message.error(t.msg),e.getFromLocal();break;default:e.$message.error("[".concat(t.code,"]").concat(t.msg)),e.getFromLocal()}})));case 2:case"end":return n.stop()}}),n)})))()},getUserId:function(){h["User"].isLogin()&&(this.uid=h["User"].getInfo().uid)},getSavedIcons:function(){var t=this,e=h["JX3BOX"].__server+"user/meta";this.uid?Object(u["a"])(e,"GET",!0,{},{},{uid:this.uid,key:"favicons"}).then((function(e){if(10050==e.code){var n=e.data.value;n?n.includes("[")?t.faviconsList=JSON.parse(n):t.faviconsList=n.split(","):t.faviconsList=[]}})).catch((function(e){switch(e.code){case-1:t.$message.error(e.msg),t.faviconsList=t.localFaviconsList;break;case 9999:t.$message.error("登录失效, 请重新登录"),h["User"].destroy(),setTimeout((function(){h["User"].toLogin()}),2e3);break;default:t.$message.error("[".concat(e.code,"]").concat(e.msg)),t.faviconsList=t.localFaviconsList}})).then((function(){})):this.faviconsList=this.localFaviconsList},getFromLocal:function(){if(window.localStorage){var t=localStorage.getItem("favicons");t&&(this.localFaviconsList=t.split(","))}},setSavedIcons:function(){var t=this;if(this.uid){var e=h["JX3BOX"].__server+"user/meta";Object(u["a"])(e,"POST",!0,{uid:this.uid,key:"favicons",value:this.faviconsList.join(",")}).then((function(t){t.code})).catch((function(e){var n=t.faviconsList;switch(t.localFaviconsList&&t.localFaviconsList.length>0&&(n=t.localFaviconsList.concat(t.faviconsList)),n=new Set(n),t.faviconsList=Array.from(n),t.setToLocal(),e.code){case-1:t.$message.error(e.msg);break;case 9999:t.$message.error("登录失效, 请重新登录"),h["User"].destroy(),setTimeout((function(){h["User"].toLogin()}),2e3);break;default:t.$message.error("[".concat(e.code,"]").concat(e.msg))}})).then((function(){t.isSynchronizing=!1}))}else this.setToLocal(),this.isSynchronizing=!1},setToLocal:function(){if(window.localStorage){var t=this.faviconsList.join(",");localStorage.setItem("favicons",t),this.localFaviconsList=this.faviconsList}}},filters:{},mounted:function(){this.getUserId(),this.prepareMounted(),this.getSavedIcons()},components:{Nav:l["a"]}},d=v,f=(n("979c"),n("2877")),m=Object(f["a"])(d,i,o,!1,null,null,null),p=m.exports;Vue.config.productionTip=!1,Vue.use(a["a"]),new Vue({render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=icon.0e9d3bbb.js.map