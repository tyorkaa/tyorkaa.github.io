(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(t,e,r){"use strict";r.r(e);r(33),r(77),r(78),r(48);var n=r(0),o=r(7),i=r.n(o),s=r(138),a=(r(145),r(147),r(149),r(150),r(151),s.with("mobile-slider-slide")),c=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props,e=t.width,r=t.touchPosition,o=t.index,i=t.current,s=t.isScrolling,c=t.pic,u=t.geo,l=t.onClick,h=(o-i)*e+r;return n.createElement("div",{className:a("image-wrap",{smooth:!s}),style:{left:h+"px"},onClick:l},n.createElement("div",{className:a("image"),style:{backgroundImage:"url("+c.src+")",backgroundPositionX:u.positionX+"px",backgroundPositionY:u.positionY+"px",backgroundSize:u.size+"%"}}))},e}(n.Component),u=(r(153),r(155)),l=r(156),h=s.with("mobile-slider"),d=function(t){function e(e){var r;return(r=t.call(this,e)||this).container=null,r.updateWidth=function(){if(r.container){var t=r.container.getBoundingClientRect().width;r.setState({width:t})}},r.onTouchMove=function(t){var e=r.state.touchStartPosition;r.setState({touchPosition:r.getTouchPosition(t.touches[0].pageX-e)})},r.onTouchStart=function(t){r.setState({touchStartPosition:t.touches[0].pageX,isScrolling:!0})},r.onTouchEnd=function(t){r.setState({current:r.getCurrent(),touchPosition:0,isScrolling:!1})},r.state={width:0,current:0,touchPosition:0,touchStartPosition:0,isScrolling:!0,zoomed:!1},r}i()(e,t);var r=e.prototype;return r.render=function(){var t=this,e=this.props,r=e.slug,o=e.pics,i=e.onClick,s=this.state,a=s.current,d=s.width,f=s.touchPosition,p=s.isScrolling;return n.createElement("div",{className:h(),ref:function(e){return t.container=e}},n.createElement("div",{className:h("wrapper"),style:{height:d/1.5+"px"}},d&&o.map(function(t,e){return n.createElement(c,{key:e,slug:r,name:t.name,pic:t.preview,geo:{positionX:t.positionX,positionY:t.positionY,size:t.size},index:e,width:d,height:d/1.5,current:a,touchPosition:f,isScrolling:p,onClick:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return i(t)})})})),n.createElement("div",{className:h("dots")},o.map(function(e,r){return n.createElement("div",{key:r,className:h("dot"),onClick:function(){return t.setState({current:r})}},n.createElement("img",{src:r===t.state.current?l:u,alt:"o"}))})))},r.getTouchPosition=function(t){var e=this.props.pics,r=this.state.current;return e.length&&(0===r&&t>0||r===e.length-1&&t<0)?t/10:t},r.getCurrent=function(){var t=this.props.pics,e=this.state,r=e.width,n=e.touchPosition,o=e.current,i=Math.round(n/(r/2)),s=o-(i?i/Math.abs(i):0);if(t.length){if(s<0)return 0;if(s>t.length-1)return t.length-1}return s},r.componentDidMount=function(){this.updateWidth(),window.addEventListener("resize",this.updateWidth),window.document.addEventListener("resize",this.updateWidth),this.container&&(this.container.addEventListener("touchmove",this.onTouchMove),this.container.addEventListener("touchstart",this.onTouchStart),this.container.addEventListener("touchend",this.onTouchEnd),this.container.addEventListener("touchcancel",this.onTouchEnd))},r.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWidth),this.container&&(this.container.removeEventListener("touchmove",this.onTouchMove),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd))},e}(n.Component),f=(r(157),s.with("zoom")),p=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).overlay=null,e.image=null,e}i()(e,t);var r=e.prototype;return r.render=function(){var t=this,e=this.props,r=e.src,o=e.onClose;return n.createElement("div",{className:f(),onClick:o,ref:function(e){return t.overlay=e}},n.createElement("img",{ref:function(e){return t.image=e},src:r}))},r.componentDidMount=function(){window.addEventListener("touchstart",this.onTouchStart),window.document.body.classList.add("overflow-hidden")},r.componentWillUnmount=function(){window.removeEventListener("touchstart",this.onTouchStart),window.document.body.classList.remove("overflow-hidden")},r.onTouchStart=function(t){console.log(t.touches)},e}(n.Component),y=(r(159),s.with("single")),m=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={},e}return i()(e,t),e.prototype.render=function(){var t=this,e=this.props,r=e.slug,o=e.pics,i=e.title,s=e.description,a=e.price,c=this.state.zoomed;return n.createElement("section",{className:y()},n.createElement(d,{pics:o,slug:r,onClick:function(e){return t.setState({zoomed:e})}}),c&&n.createElement(p,Object.assign({},c.original,{onClose:function(){return t.setState({zoomed:void 0})}})),n.createElement("div",{className:y("title")},i),n.createElement("div",{className:y("description")},s),!!a&&n.createElement(n.Fragment,null,n.createElement("div",{className:y("price")},"Цена: ",n.createElement("span",null,a," Р")),n.createElement("button",{className:y("buy-btn")},"Купить")))},e}(n.Component);r.d(e,"query",function(){return b});var b="2637456461",g=function(t,e){return t.allFile.edges.map(function(t){var r=t.node,n=r.relativePath.split("/")[1],o=e.find(function(t){return t.id===n});return Object.assign({name:n,preview:r.childImageSharp.resize,original:r.childImageSharp.original},o)})};e.default=function(t){var e=t.pathContext,r=(e.id,e.title),o=e.description,i=e.price,s=e.slug,a=e.slides,c=t.data;return n.createElement(m,{slug:s,pics:g(c,a),title:r,description:o,price:i})}},138:function(t,e,r){!function(e,r){"use strict";t.exports=function(){function t(e){if(!(this instanceof t))return r(e);e=e||{},this.tailSpace=e.tailSpace||"",this.elementSeparator=e.elementSeparator||"__",this.modSeparator=e.modSeparator||"_",this.modValueSeparator=e.modValueSeparator||"_",this.classSeparator=e.classSeparator||" ",this.isFullModifier=void 0===e.isFullModifier||e.isFullModifier,this.isFullBoolValue=void 0!==e.isFullBoolValue&&e.isFullBoolValue}function e(t,e,r){return this.bind.apply(this,[null].concat(Array.prototype.slice.call(arguments)))}function r(r){var n=new t(r),o=n.stringify.bind(n);return o.with=o.lock=e,o}t.prototype={_stringifyModifier:function(t,e,r){var n="";return void 0===r?n:this.isFullBoolValue||!1!==r?(n+=this.classSeparator+t+this.modSeparator+e,(this.isFullBoolValue||!0!==r)&&(n+=this.modValueSeparator+String(r)),n):n},_stringifyModifiers:function(t,e){var r="";for(var n in this.isFullModifier||(t=""),e)e.hasOwnProperty(n)&&(r+=this._stringifyModifier(t,n,e[n]));return r},stringify:function(t,e,r){var n=String(t);return e&&"object"==typeof e&&void 0===r&&(r=e,e=null),e&&(n+=this.elementSeparator+String(e)),r&&(n+=this._stringifyModifiers(n,r)),n+this.tailSpace}};var n=r();return n.B=t,n}()}()},142:function(t,e,r){"use strict";var n=r(10);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},145:function(t,e,r){r(146),t.exports=self.fetch.bind(self)},146:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",function(){return u}),r.d(e,"Request",function(){return m}),r.d(e,"Response",function(){return g}),r.d(e,"DOMException",function(){return w}),r.d(e,"fetch",function(){return E});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function u(t){this.map={},t instanceof u?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=f(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=s(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},u.prototype.delete=function(t){delete this.map[s(t)]},u.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},u.prototype.set=function(t,e){this.map[s(t)]=a(e)},u.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},u.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),c(t)},u.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},u.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),c(t)},n.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r,n,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),y.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function g(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];g.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var w=self.DOMException;try{new w}catch(t){(w=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function E(t,e){return new Promise(function(r,o){var i=new m(t,e);if(i.signal&&i.signal.aborted)return o(new w("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new g(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new w("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=u,self.Request=m,self.Response=g)},147:function(t,e,r){"use strict";r(148);var n=r(10),o=r(142),i=r(16),s=/./.toString,a=function(t){r(17)(RegExp.prototype,"toString",t,!0)};r(18)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?a(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=s.name&&a(function(){return s.call(this)})},148:function(t,e,r){r(16)&&"g"!=/./g.flags&&r(25).f(RegExp.prototype,"flags",{configurable:!0,get:r(142)})},149:function(t,e,r){var n=Date.prototype,o=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r(17)(n,"toString",function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"})},150:function(t,e,r){var n=r(25).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||r(16)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},151:function(t,e,r){},153:function(t,e,r){},155:function(t,e,r){t.exports=r.p+"static/unchecked-295110b012c345d99b76fe0d7ee1f269.png"},156:function(t,e,r){t.exports=r.p+"static/checked-8e4a99812894e754cd4d63d134c7e64a.png"},157:function(t,e,r){},159:function(t,e,r){}}]);
//# sourceMappingURL=component---src-templates-single-tsx-fe5ab3289cba9278b3fd.js.map