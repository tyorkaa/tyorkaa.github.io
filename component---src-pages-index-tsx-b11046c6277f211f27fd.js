(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QeBL:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return i}));var n=r("q1tI"),a=r("VXBa"),c=r("Wbzz"),l=r("CxFS"),u=(r("wyIA"),l.with("gallery")),o=function(e){var t=e.products;return n.createElement("section",{className:u()},t.map((function(e){return n.createElement(c.a,{to:e.url,key:e.url,className:u("photo")},n.createElement("img",{src:e.cover}),e.sale&&n.createElement("div",{className:u("sale")}))})))},s=function(e,t){var r=e.data.allFile.edges.filter((function(e){return 0==e.node.relativePath.indexOf(t+"/")}))[0];return r?r.node.childImageSharp.resize.src:""},i="2006111782";t.default=function(e){return n.createElement(a.a,null,n.createElement(o,{products:(t=e,t.data.allProductsJson.edges[0].node.products.map((function(e){return{url:"/single/"+e.path,cover:s(t,e.path),sale:!!e.price}})))}));var t}},wyIA:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b11046c6277f211f27fd.js.map