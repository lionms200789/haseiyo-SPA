(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22b13954"],{1175:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"row justify-content-center mb-3"},[e("div",{staticClass:"col-md-10 text-center"},[t._m(0),e("table",{staticClass:"table pay-table table-borderless"},[e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("訂單編號")]),e("td",{staticClass:"text-danger"},[t._v(t._s(t.orderid))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("Email:")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("姓名:")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("收件人電話:")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("收件人地址:")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("訂單金額:")]),e("td",[t._v(t._s(t._f("currency")(t.order.total)))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("訂單時間:")]),e("td",[t._v(t._s(t._f("date")(t.order.create_at)))])]),e("tr"),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("付款狀態")]),t.order.is_paid?t._e():e("td",{staticClass:"text-danger font-weight-bold"},[t._v("尚未付款")]),t.order.is_paid?e("td",{staticClass:"text-info font-weight-bold"},[t._v("付款成功")]):t._e()])])]),e("div",{staticClass:"text-center"},[!1===t.order.is_paid?e("button",{staticClass:"btn btn-dark rounded-0 w-40",staticStyle:{width:"100px"},on:{click:t.paycheck}},[t._v("確認付款去")]):t._e(),!0===t.order.is_paid?e("router-link",{staticClass:"btn btn-dark rounded-0",staticStyle:{width:"100px","margin-right":"10px"},attrs:{to:"/"}},[t._v("回首頁")]):t._e(),!0===t.order.is_paid?e("router-link",{staticClass:"btn btn-dark rounded-0",staticStyle:{width:"100px"},attrs:{to:"/product/t-shirt"}},[t._v("繼續購物")]):t._e()],1)])])])},s=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ul",{staticClass:"shop-steps list-unstyled d-flex"},[e("li",[e("span",[t._v("1.CHECK ORDER 確認購買清單")])]),e("li",[e("span",[t._v("2.SHIPPING ORDER 填寫訂單")])]),e("li",{staticClass:"active"},[e("span",[t._v("3.ALL DONE! 訂單完成")])])])}],o=(e("99af"),{data:function(){return{orderid:"",order:{user:{}}}},methods:{getOrder:function(){var t=this,r="".concat("https://vue-course-api.herokuapp.com","/api/").concat("haseiyo","/order/").concat(t.orderid);t.$http.get(r).then((function(r){t.order=r.data.order}))},paycheck:function(){var t=this,r="".concat("https://vue-course-api.herokuapp.com","/api/").concat("haseiyo","/pay/").concat(t.orderid);t.$http.post(r).then((function(r){r.data.success&&t.getOrder()}))}},created:function(){var t=this;t.orderid=t.$route.params.orderid,t.getOrder()}}),c=o,i=e("2877"),n=Object(i["a"])(c,a,s,!1,null,null,null);r["default"]=n.exports},8418:function(t,r,e){"use strict";var a=e("c04e"),s=e("9bf2"),o=e("5c6c");t.exports=function(t,r,e){var c=a(r);c in t?s.f(t,c,o(0,e)):t[c]=e}},"99af":function(t,r,e){"use strict";var a=e("23e7"),s=e("d039"),o=e("e8b5"),c=e("861d"),i=e("7b0b"),n=e("50c4"),d=e("8418"),u=e("65f0"),l=e("1dde"),p=e("b622"),_=e("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",b=_>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=l("concat"),y=function(t){if(!c(t))return!1;var r=t[v];return void 0!==r?!!r:o(t)},m=!b||!w;a({target:"Array",proto:!0,forced:m},{concat:function(t){var r,e,a,s,o,c=i(this),l=u(c,0),p=0;for(r=-1,a=arguments.length;r<a;r++)if(o=-1===r?c:arguments[r],y(o)){if(s=n(o.length),p+s>h)throw TypeError(f);for(e=0;e<s;e++,p++)e in o&&d(l,p,o[e])}else{if(p>=h)throw TypeError(f);d(l,p++,o)}return l.length=p,l}})}}]);
//# sourceMappingURL=chunk-22b13954.4246cb31.js.map