(function(t){function s(s){for(var e,n,l=s[0],o=s[1],u=s[2],d=0,p=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);c&&c(s);while(p.length)p.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,s=0;s<a.length;s++){for(var i=a[s],e=!0,l=1;l<i.length;l++){var o=i[l];0!==r[o]&&(e=!1)}e&&(a.splice(s--,1),t=n(n.s=i[0]))}return t}var e={},r={sudoku:0},a=[];function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,s,i){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(i,e,function(s){return t[s]}.bind(null,e));return i},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="https://console.cnyixun.com/static/app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=s,l=l.slice();for(var u=0;u<l.length;u++)s(l[u]);var c=o;a.push([6,"chunk-vendors","chunk-common"]),i()})({6:function(t,s,i){t.exports=i("7657")},7657:function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),r=i("5c96"),a=i.n(r),n=i("6a69"),l=(i("6b30"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("Header"),i("Breadcrumb",{attrs:{name:"九宫格计算器",slug:"sudoku",root:"/sudoku",feedbackEnable:!0}},[i("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 463 463","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[i("path",{attrs:{d:"M57.2 64.8H92l-28.3 37.8c-2.5 3.3-1.8 8 1.5 10.5 1.4 1 2.9 1.5 4.5 1.5 2.3 0 4.5-1.1 6-3L113 61.8c1.7-2.3 2-5.4.7-7.9s-3.9-4.1-6.7-4.1H57.2c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5zM350.6 112.4c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l19.6-19.6 19.6 19.6c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-19.6-19.6L411 62.6c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-19.6 19.6L361.2 52c-2.9-2.9-7.7-2.9-10.6 0-2.9 2.9-2.9 7.7 0 10.6l19.6 19.6-19.6 19.6c-2.9 2.9-2.9 7.7 0 10.6zM350.6 411c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l19.6-19.6 19.6 19.6c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-19.6-19.6 19.6-19.6c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-19.6 19.6-19.6-19.6c-2.9-2.9-7.7-2.9-10.6 0-2.9 2.9-2.9 7.7 0 10.6l19.6 19.6-19.6 19.6c-2.9 2.9-2.9 7.7 0 10.6zM82.8 421.3c12.8 0 23.7-10.8 23.7-23.7 0-6.2-2.6-12-6.7-16.3 4.1-4.4 6.7-10.5 6.7-17.3 0-12.8-10.8-23.7-23.7-23.7-13.7 0-24.9 10.6-24.9 23.7 0 6.9 2.5 13 6.8 17.4-4.2 4.2-6.8 9.9-6.8 16.2 0 13.1 11.2 23.7 24.9 23.7zm0-66c4.5 0 8.7 4.1 8.7 8.7 0 5.5-3.9 9.9-8.7 9.9-5.9.1-9.9-4-9.9-9.9 0-4.8 4.5-8.7 9.9-8.7zm0 33.6c4.5 0 8.7 4.1 8.7 8.7s-4.2 8.7-8.7 8.7c-5.5 0-9.9-3.9-9.9-8.7s4.5-8.7 9.9-8.7zM57.3 255.8h29.8v8.7c0 4.1 3.4 7.5 7.5 7.5 4.2 0 7.5-3.4 7.5-7.5v-8.7h4.9c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-4.9v-42.3c0-3.2-2-6.1-5.1-7.1-3.1-1-6.5 0-8.4 2.6l-37.3 49.8c-1.7 2.3-2 5.4-.7 7.9s3.9 4.1 6.7 4.1zM87.1 221v19.8H72.3L87.1 221zM201.3 261.7c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l19.6-19.6 19.6 19.6c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-19.6-19.6 19.6-19.6c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-19.6 19.6-19.6-19.6c-2.9-2.9-7.7-2.9-10.6 0-2.9 2.9-2.9 7.7 0 10.6l19.6 19.6-19.6 19.6c-2.9 2.9-2.9 7.7 0 10.6zM231.5 114.6c4.1 0 7.5-3.4 7.5-7.5V57.3c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v49.8c0 4.1 3.4 7.5 7.5 7.5z"}}),i("path",{attrs:{d:"M455.5 0H7.5C3.4 0 0 3.4 0 7.5v448c0 4.1 3.4 7.5 7.5 7.5h448c4.1 0 7.5-3.4 7.5-7.5V7.5c0-4.1-3.4-7.5-7.5-7.5zM149.3 448H15V313.7h134.3V448zm0-149.4H15V164.3h134.3v134.3zm0-149.3H15V15h134.3v134.3zM298.7 448H164.4V313.7h134.3V448zm0-149.3H164.4V164.4h134.3v134.3zm0-149.4H164.4V15h134.3v134.3zM448 448H313.7V313.7H448V448zm0-149.3H313.7V164.4H448v134.3zm0-149.4H313.7V15H448v134.3z"}})])]),i("LeftSidebar",[i("Nav")],1),i("Main",{attrs:{withoutRight:!0}},[i("div",{staticClass:"m-sudoku"},[i("h1",{staticClass:"m-sudoku-title"},[t._v("九宫格计算器")]),i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"试炼之地",name:"sudoku1"}}),i("el-tab-pane",{attrs:{label:"荻花宫",name:"sudoku2"}})],1),i("div",{staticClass:"m-table"},[i("el-row",{staticClass:"u-list"},t._l(t.list,(function(s,e){return i("el-col",{key:e,staticClass:"u-item",attrs:{span:8}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.list[e],expression:"list[i]"}],attrs:{type:"text",min:"1",max:"9",disabled:4==e},domProps:{value:t.list[e]},on:{input:[function(s){s.target.composing||t.$set(t.list,e,s.target.value)},function(s){return t.check(t.list[e],e)}]}})])})),1),i("el-button",{staticClass:"u-clear",attrs:{type:"primary"},on:{click:function(s){return t.clear()}}},[t._v("清空")])],1),i("div",{staticClass:"m-preview"},[i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"试炼之地",name:"sudoku1"}},[i("h2",{staticClass:"u-mode"},[t._v(t._s(t.mode1))]),i("div",{staticClass:"u-imglist-1"},[i("el-image",{attrs:{src:t.url,"preview-src-list":t.srcList}})],1)]),i("el-tab-pane",{attrs:{label:"荻花宫",name:"sudoku2"}},[i("h2",{staticClass:"u-mode"},[t._v(t._s(t.mode2))]),i("div",{staticClass:"u-imglist-2"},t._l(t.srcList2,(function(s,e){return i("el-image",{key:"dh"+e,attrs:{src:t.showpic(e),"preview-src-list":t.srcList2}})})),1),i("ul",{staticClass:"u-demolist"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("常见序列")]),i("li",[t._v("245361")]),i("li",[t._v("423516")]),i("li",[t._v("615324")]),i("li",[t._v("163542")]),i("li",[t._v("341562")]),i("li",[t._v("265143")])],1)])],1)],1)],1),i("Footer")],1)],1)}),o=[],u=(i("4160"),i("a15b"),i("fb6a"),i("d3b7"),i("159b"),i("ddb0"),i("3835")),c=i("b85c"),d=i("216c"),p=(i("f114"),i("64c7")),h={name:"Sudoku",data:function(){return{activeName:"sudoku1",list:["","","","","5","","","",""],url:p["__ossMirror"]+"image/app/sudoku/sudoku1.jpg",srcList:[p["__ossMirror"]+"image/app/sudoku/sudoku1.jpg"],srcList2:[p["__ossMirror"]+"image/app/sudoku/sudoku2/0.png",p["__ossMirror"]+"image/app/sudoku/sudoku2/1.png",p["__ossMirror"]+"image/app/sudoku/sudoku2/2.png",p["__ossMirror"]+"image/app/sudoku/sudoku2/3.png",p["__ossMirror"]+"image/app/sudoku/sudoku2/4.png",p["__ossMirror"]+"image/app/sudoku/sudoku2/5.png",p["__ossMirror"]+"image/app/sudoku/sudoku2/6.png"]}},computed:{len:function(){return this.list.length},isready:function(){var t=0,s=this.len;return t+=~~(this.list[0]||this.list[s]),t+=~~(this.list[1]||this.list[s-1]),t+=~~(this.list[2]||this.list[s-2]),t+=~~(this.list[3]||this.list[s-3]),t>=3},matrix:function(){return[[this.list[0],this.list[1],this.list[2]],[this.list[3],this.list[4],this.list[5]],[this.list[6],this.list[7],this.list[8]]]},matrixR:function(){return[[this.list[0],this.list[3],this.list[6]],[this.list[1],this.list[4],this.list[7]],[this.list[2],this.list[5],this.list[8]]]},mode1:function(){return this.list.slice(0,5).join(" ")},mode2:function(){for(var t=[],s=0;s<this.len;s++){var i=this.list[s];parseInt(i)<=6&&t.push(i)}return t.join(" ")}},methods:{check:function(t,s){if(t.length>1)return this.list[s]=t.slice(0,1);if(!/^[12346789]$/.test(t))return this.list[s]="";for(var i=0;i<=this.len;i++)if(this.list[i]==t&&s!=i){this.list[i]="";break}this.isready&&this.compute()},compute:function(){this.isdone()||(this.scanX(),this.scanY())},scanX:function(t){var s,i=Object(c["a"])(this.matrix.entries());try{for(i.s();!(s=i.n()).done;){var e=Object(u["a"])(s.value,2),r=e[0],a=e[1];if(this.hasSpecifiedTrueValue(a,2)){var n=this.solve(a),l=Object(u["a"])(n,2),o=l[0],d=l[1];this.list[3*r+d]=o}}}catch(p){i.e(p)}finally{i.f()}},scanY:function(){var t,s=Object(c["a"])(this.matrixR.entries());try{for(s.s();!(t=s.n()).done;){var i=Object(u["a"])(t.value,2),e=i[0],r=i[1];if(this.hasSpecifiedTrueValue(r,2)){var a=this.solve(r),n=Object(u["a"])(a,2),l=n[0],o=n[1];this.list[3*o+e]=l}}}catch(d){s.e(d)}finally{s.f()}},hasSpecifiedTrueValue:function(t,s){var i=0;return t.forEach((function(t){i+=Boolean(t)})),i==s},solve:function(t){var s=15,i=null;return t.forEach((function(t,e){t?s-=parseInt(t):i=e})),[s,i]},isdone:function(){for(var t=0;t<this.len;t++){var s=this.list[t];if(!s)return!1}return!0},clear:function(){this.list=["","","","","5","","","",""]},handleClick:function(){},showpic:function(t){return p["__ossMirror"]+"image/app/sudoku/sudoku2/"+t+".png"}},filters:{},mounted:function(){},components:{Nav:d["a"]}},f=h,v=(i("faad"),i("2877")),m=Object(v["a"])(f,l,o,!1,null,null,null),b=m.exports;e["default"].config.productionTip=!1,e["default"].use(a.a),e["default"].use(n["a"]),new e["default"]({render:function(t){return t(b)}}).$mount("#app")},b252:function(t,s,i){},faad:function(t,s,i){"use strict";var e=i("b252"),r=i.n(e);r.a}});
//# sourceMappingURL=sudoku.1ef80e04.js.map