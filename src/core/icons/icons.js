Vue.config.productionTip = false;

// 第三方UI组件
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);


// 通用UI模块
import JX3BOX_UI from '@jx3box/jx3box-common-ui'
import "@jx3box/jx3box-common/css/element.css";
Vue.use(JX3BOX_UI);

// import router from "../router";
// import store from "../store";

import Icons from "./Icons.vue";

new Vue({
    // router,
    // store,
    render: (h) => h(Icons),
}).$mount("#app");
