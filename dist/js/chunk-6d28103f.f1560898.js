(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d28103f"],{"08aa":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"Detail"},[a("div",{staticClass:"header"},[a("van-icon",{attrs:{name:"arrow-left",size:"30px"},on:{click:t.goBack}})],1),a("van-swipe",{staticStyle:{background:"#eee"},attrs:{autoplay:3e3,"indicator-color":"red"}},t._l(t.interfaceAddress.imgs,function(t,i){return a("van-swipe-item",{key:i},[a("img",{attrs:{src:t,width:"375",alt:""}})])}),1),a("div",{staticClass:"d_detail"},[a("div",{staticClass:"tit",domProps:{textContent:t._s(t.interfaceAddress.title)}}),a("div",{staticClass:"price"},[t._v("\n      "+t._s("￥"+t.price)+"\n      "),a("span",{domProps:{textContent:t._s("￥"+t.delprice)}}),a("span",{attrs:{id:"discount"}})]),a("div",{staticClass:"lable"})]),a("div",{staticClass:"d_brand"},[a("p",{staticClass:"d_tit"},[t._v("品牌介绍")]),t.interfaceAddress.brand?a("div",{staticClass:"d_img"},[a("img",{staticStyle:{width:"25px"},attrs:{id:"brand_img",src:"",width:"25",height:"25"}}),a("span",{staticClass:"font",domProps:{textContent:t._s(t.interfaceAddress.brand.name)}})]):t._e(),a("p",{staticClass:"d_deta",attrs:{id:"d_detail"}})]),a("div",{staticClass:"titile"},[t._v("商品详情图")]),a("div",{staticClass:"d_detail2",domProps:{innerHTML:t._s(t.interfaceAddress.detail)}}),a("van-goods-action",{staticClass:"buy"},[a("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"}}),a("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",info:t.num},on:{click:function(i){return t.goToCar()}}}),a("van-goods-action-button",{staticClass:"joinBtn",staticStyle:{background:"#333333"},attrs:{type:"warning",text:"加入购物车"},on:{click:t.joinButton}}),a("van-goods-action-button",{staticStyle:{background:"#fff034"},attrs:{type:"default",text:"立即购买"},on:{click:t.buyButton}})],1),a("van-popup",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("div",{staticClass:"new-alert"},[a("div",{staticClass:"no-login"},[a("span",[t._v("你当前未登录")])]),a("a",{staticClass:"gre-btn",on:{click:function(i){return t.goSign()}}},[t._v("我有wants账号，去登录>>")]),a("a",{staticClass:"gre-btn",on:{click:function(i){return t.goSign()}}},[t._v("去注册>>")]),a("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.close()}}},[a("div",{staticClass:"thisxclose"},[t._v("×")])])])])],1)},n=[],c=(a("7f7f"),a("96cf"),a("3b8d")),e=(a("6b54"),{data:function(){return{interfaceAddress:[],price:"",shopname:"",imgurl:"",title:"",delprice:"",rowid:0,colid:0,num:0,bool:!1,show:!1,show2:!0}},methods:{goBack:function(){this.$router.go(-1)},goSign:function(){this.$router.push("/sign")},joinButton:function(){var t=window.localStorage.getItem("username"),i=this.rowid.toString()+this.colid.toString();void 0==t?this.show=!0:(this.$axios.get("http://10.3.132.218:3000/cart/insert?",{params:{username:t,goodId:i,shopname:this.shopname,price:this.price,imgurl:this.imgurl,title:this.title}}).then(function(t){}),this.num++)},buyButton:function(){},close:function(){this.show2=!1,this.show=!1},goToCar:function(){this.$router.push("/tabbar/car")}},activated:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var i,a,s,n,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=this.$route.path,this.rowid=i.substr(-3,1)-1,this.colid=1*i.substr(-1),a=[["http://api.wantscart.com/product/144074/","http://api.wantscart.com/product/142651/","http://api.wantscart.com/product/150465/"],["http://api.wantscart.com/product/140523/","http://api.wantscart.com/product/145474/","http://api.wantscart.com/product/142382/"],["http://api.wantscart.com/product/144062/","http://api.wantscart.com/product/144596/","http://api.wantscart.com/product/139963/"],["http://api.wantscart.com/product/139255/","http://api.wantscart.com/product/147711/","http://api.wantscart.com/product/147707/"],["http://api.wantscart.com/product/131316/","http://api.wantscart.com/product/144948/","http://api.wantscart.com/product/144948/"],["http://api.wantscart.com/product/142205/","http://api.wantscart.com/product/145307/","http://api.wantscart.com/product/145305/"]],t.next=6,this.$axios(a[this.rowid][this.colid]);case 6:s=t.sent,this.interfaceAddress=s.data,n=this.interfaceAddress.price.toString(),this.price=n.slice(0,-2),c=this.interfaceAddress.tag_price.toString(),this.delprice=c.slice(0,-2),this.shopname=this.interfaceAddress.creator.name,this.imgurl=this.interfaceAddress.small_img,this.title=this.interfaceAddress.title;case 15:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()}),o=e,r=(a("f161"),a("2877")),d=Object(r["a"])(o,s,n,!1,null,"322de15a",null);i["default"]=d.exports},"0bfb":function(t,i,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),i="";return t.global&&(i+="g"),t.ignoreCase&&(i+="i"),t.multiline&&(i+="m"),t.unicode&&(i+="u"),t.sticky&&(i+="y"),i}},3846:function(t,i,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"598c":function(t,i,a){},"6b54":function(t,i,a){"use strict";a("3846");var s=a("cb7c"),n=a("0bfb"),c=a("9e1e"),e="toString",o=/./[e],r=function(t){a("2aba")(RegExp.prototype,e,t,!0)};a("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?r(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?n.call(t):void 0)}):o.name!=e&&r(function(){return o.call(this)})},f161:function(t,i,a){"use strict";var s=a("598c"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-6d28103f.f1560898.js.map