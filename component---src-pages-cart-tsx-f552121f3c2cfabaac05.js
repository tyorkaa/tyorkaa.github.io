(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6klD":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p}));var r=n("q1tI"),c=n("VXBa"),i=(n("v9g0"),n("CxFS")),u=n("/MKj"),a=n("ViTx"),o=(n("WRGC"),i.with("cart-item")),l=function(e){var t=e.product,n=t.id,c=t.cover,i=t.title,l=t.price,d=e.count,s=Object(u.b)();return r.createElement("div",{className:o()},r.createElement("div",{className:o("photo")},r.createElement("img",{src:c})),r.createElement("div",null,r.createElement("div",{className:o("title")},i),r.createElement("div",{className:o("price")},l," ₽")),r.createElement("div",{className:o("count")},d," шт."),r.createElement("div",{className:o("remove-btn"),onClick:function(){return s(a.c.removeFromCart(n))}}))},d=(n("UGIB"),i.with("cart")),s=function(e){var t=e.products,n=Object(u.c)((function(e){return e.cart.items})).map((function(e){return{product:t.find((function(t){return t.id===e.id})),count:e.count}})).filter((function(e){return!!e.product})),c=n.reduce((function(e,t){var n=t.product,r=t.count;return e+(n.price||0)*r}),0);return r.createElement("div",{className:d()},r.createElement("h1",null,"Ваша корзина"),n.map((function(e){var t=e.product,n=e.count;return r.createElement(l,{product:t,count:n})})),c>0&&r.createElement("div",{className:d("total")},"Итого: ",c," ₽"))},f=function(e,t){var n=e.allFile.edges.filter((function(e){return 0==e.node.relativePath.indexOf(t+"/")}))[0];return n?n.node.childImageSharp.resize.src:""},m=function(e){return e.allProductsJson.edges[0].node.products.filter((function(e){return!!e.price})).map((function(t){return{id:t.id,url:"/shop/"+t.path,cover:f(e,t.path),title:t.title,price:t.price}}))},p="937682536";t.default=function(e){var t=e.data;return r.createElement(c.a,null,r.createElement(s,{products:m(t)}))}},UGIB:function(e,t,n){},WRGC:function(e,t,n){},v9g0:function(e,t,n){"use strict";var r=n("P8UN"),c=n("Wadk")(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")("find")}}]);
//# sourceMappingURL=component---src-pages-cart-tsx-f552121f3c2cfabaac05.js.map