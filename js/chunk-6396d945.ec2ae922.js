(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6396d945"],{"5f47":function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row pt-3"},[s("div",{staticClass:"col-12"},[s("ol",{staticClass:"breadcrumb bg-white mb-0 px-0"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/product/"+t.product.category}},[t._v(t._s(t.categoryCompute))])],1),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-7"},[s("div",{staticClass:"ProductDetail"},[s("img",{attrs:{src:t.product.imageUrl,alt:""}})])]),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"product-content"},[s("h1",{staticClass:"h4 pt-2"},[t._v(t._s(t.product.title))]),t.product.id?s("div",{staticClass:"product-price py-2"},[t.product.price?s("del",[t._v("原價 NT "+t._s(t._f("currency")(t.product.origin_price)))]):t._e(),t.product.price?t._e():s("div",[t._v("原價 NT "+t._s(t._f("currency")(t.product.origin_price)))]),t.product.price?s("div",{staticClass:"text-danger"},[t._v("優惠價 NT "+t._s(t._f("currency")(t.product.price)))]):t._e()]):t._e(),s("div",{staticClass:"row border-top border-bottom mt-3 pb-4"},[s("div",{staticClass:"col-6 py-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.size,expression:"product.size"}],staticClass:"form-control rounded-0 select-size",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"size",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"請選擇尺寸"}},[t._v("請選擇尺寸")]),s("option",{attrs:{value:"S"}},[t._v("S")]),s("option",{attrs:{value:"M"}},[t._v("M")]),s("option",{attrs:{value:"L"}},[t._v("L")])])]),s("div",{staticClass:"col-6 py-3"},[s("div",{staticClass:"btn-group border qty-counter"},[s("button",{staticClass:"btn btn-light rounded-0",attrs:{type:"button"},on:{click:t.minuspcs}},[t._v("-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"input-qty",attrs:{type:"text",readonly:""},domProps:{value:t.product.num},on:{input:function(a){a.target.composing||t.$set(t.product,"num",a.target.value)}}}),s("button",{staticClass:"btn btn-light rounded-0",attrs:{type:"button"},on:{click:function(a){t.product.num++}}},[t._v("+")])])]),s("div",{staticClass:"col-12 mb-4"},[s("a",{staticClass:"btn btn-dark rounded-0 w-100",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addtoCart(t.product.id,t.product.num,t.product.size)}}},[t._v(t._s("請選擇尺寸"===this.product.size?"尚未選擇尺寸":"加入購物車"))])])]),t._m(0)])])])])])},e=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-12"},[r("ul",{staticClass:"nav nav-tab",attrs:{id:"myTab",role:"tablist"}},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"tab-link active",attrs:{id:"description-tab","data-toggle":"tab",href:"#description"}},[r("span",{staticClass:"d-block"},[t._v("DESCRIPTION")]),t._v("商品描述 ")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"tab-link",attrs:{id:"laundry-tab","data-toggle":"tab",href:"#laundry"}},[r("span",{staticClass:"d-block"},[t._v("LAUNDRY")]),t._v("洗滌方式 ")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"tab-link",attrs:{id:"sizechart-tab","data-toggle":"tab",href:"#sizechart"}},[r("span",{staticClass:"d-block"},[t._v("SIZE GUIDE")]),t._v("尺寸表 ")])])]),r("div",{staticClass:"tab-content"},[r("div",{staticClass:"tab-pane active",attrs:{id:"description"}},[r("p",[t._v("*實品顏色依單品照為主")]),r("p",[t._v("棉 95% 聚酯纖維 5%")]),r("p",[t._v("素材產地 / 中國")]),r("p",[t._v("加工產地 / 中國")]),r("p",[t._v("商品長度/正常")]),r("p",[t._v("商品版型/適中")]),r("p",[t._v("商品彈性/稍有")]),r("p",[t._v("*此款材質吸濕性較一般材質大，故洗滌後些微縮水屬正常現象。")])]),r("div",{staticClass:"tab-pane",attrs:{id:"laundry"}},[r("p",[t._v("1.深淺色請分開洗滌，以避免造成互相移染。")]),r("p",[t._v("2.請放入大小適中之細網洗衣袋中弱速水洗，以保持商品型態。")]),r("p",[t._v("3.洗滌時，水溫請低於30°C；請使用中性洗劑；請勿長時間浸泡。")]),r("p",[t._v("4.請勿使用漂白劑、螢光增白劑及衣物柔軟劑，以免破壞布料。")]),r("p",[t._v("5.不可濕放，以免衣物染色；請弱速輕脫水，不可烘乾，以免衣物縮水。")]),r("p",[t._v("6.請採用陰乾方式晾乾，不可擰扭；如需整燙，請以低溫墊布熨燙。(針織商品請平放晾乾)")]),r("p",[t._v("7.穿著時，請留意避免與配件包包等它物接觸摩擦而造成移染情況發生。")]),r("p",[t._v("8.皮革、羊毛、毛尼等毛衣針織商品建議使用乾洗或乾洗溶劑清洗以避免造成縮水捲縮等..情況發生。")])]),r("div",{staticClass:"tab-pane",attrs:{id:"sizechart"}},[r("div",{staticClass:"sizechart text-center"},[r("img",{attrs:{src:s("683c"),alt:""}}),r("table",{staticClass:"table"},[r("tbody",[r("tr",{staticStyle:{"font-weight":"bold"}},[r("td",[t._v("SIZE(CM)")]),r("td",[t._v("S")]),r("td",[t._v("M")]),r("td",[t._v("L")])]),r("tr",[r("td",[t._v("肩寬")]),r("td",[t._v("41")]),r("td",[t._v("44")]),r("td",[t._v("47")])]),r("tr",[r("td",[t._v("胸寬")]),r("td",[t._v("54")]),r("td",[t._v("56")]),r("td",[t._v("59")])]),r("tr",[r("td",[t._v("袖長")]),r("td",[t._v("55")]),r("td",[t._v("57")]),r("td",[t._v("59")])]),r("tr",[r("td",[t._v("衣長")]),r("td",[t._v("66")]),r("td",[t._v("67")]),r("td",[t._v("68")])])])])])])])])])}],i=(s("99af"),{data:function(){return{productId:"",product:{size:""}}},methods:{getDetail:function(){var t=this,a="".concat("https://vue-course-api.herokuapp.com","/api/").concat("haseiyo","/product/").concat(t.productId);t.$http.get(a).then((function(a){t.product=a.data.product,t.$set(t.product,"num",1),t.$set(t.product,"size","請選擇尺寸")}))},minuspcs:function(){this.product.num>1&&this.product.num--},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0,r=this;if("請選擇尺寸"!==r.product.size){var e={product_id:t,qty:a,size:s},i="".concat("https://vue-course-api.herokuapp.com","/api/").concat("haseiyo","/cart");r.$http.post(i,{data:e}).then((function(t){t.data.success&&(r.$bus.$emit("updateBag"),r.$bus.$emit("alertMsg",t.data.message))}))}}},computed:{categoryCompute:function(){var t=this.product.category;switch(t){case"shirts":return"襯衫";case"outer":return"外套";case"pants":return"長褲";case"t-shirt":return"全部上衣";case"t-shirt/longsleeve":return"長袖上衣";case"t-shirt/shortsleeve":return"短袖上衣";default:return" "}}},created:function(){this.productId=this.$route.params.productid,this.getDetail()}}),c=i,o=s("2877"),n=Object(o["a"])(c,r,e,!1,null,null,null);a["default"]=n.exports},"683c":function(t,a,s){t.exports=s.p+"img/size.d93cc8f3.jpg"},8418:function(t,a,s){"use strict";var r=s("c04e"),e=s("9bf2"),i=s("5c6c");t.exports=function(t,a,s){var c=r(a);c in t?e.f(t,c,i(0,s)):t[c]=s}},"99af":function(t,a,s){"use strict";var r=s("23e7"),e=s("d039"),i=s("e8b5"),c=s("861d"),o=s("7b0b"),n=s("50c4"),d=s("8418"),u=s("65f0"),l=s("1dde"),p=s("b622"),v=s("2d00"),_=p("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",f=v>=51||!e((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),h=l("concat"),C=function(t){if(!c(t))return!1;var a=t[_];return void 0!==a?!!a:i(t)},g=!f||!h;r({target:"Array",proto:!0,forced:g},{concat:function(t){var a,s,r,e,i,c=o(this),l=u(c,0),p=0;for(a=-1,r=arguments.length;a<r;a++)if(i=-1===a?c:arguments[a],C(i)){if(e=n(i.length),p+e>b)throw TypeError(m);for(s=0;s<e;s++,p++)s in i&&d(l,p,i[s])}else{if(p>=b)throw TypeError(m);d(l,p++,i)}return l.length=p,l}})}}]);
//# sourceMappingURL=chunk-6396d945.ec2ae922.js.map