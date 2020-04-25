import Vue from "vue";
Vue.prototype.$bus = new Vue();
// updateBag 更新購物包包內容及數量 at productdetail, cartpage, shoppingBag components
// alertMsg 相關提示視窗訊息 at order, productdetail