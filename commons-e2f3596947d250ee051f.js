(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),i=n.n(r),o=n("Wbzz"),a=n("qhky"),u=n("vOnD"),c=function(e){var t=e.title,n=e.linkTo,r=e.icon;return i.a.createElement("li",null,i.a.createElement("a",{href:n,style:{color:"#08d9d6"}},r?i.a.createElement("img",{src:r,alt:t}):i.a.createElement("p",null,t)))},l=n("OH5e"),s=n.n(l),f=n("o9+5"),p=n.n(f),d=u.a.div.withConfig({displayName:"Header__StyledSiteTitle",componentId:"ww0un5-0"})(["color:#ff2e63;font-family:'Archivo Black',sans-serif;text-align:center;display:flex;justify-content:center;align-items:center;font-size:3rem;margin-top:25px;&::before{content:'{';margin-right:10px;color:#08d9d6;}&::after{content:'}';margin-left:10px;color:#08d9d6;}"]),y=u.a.ul.withConfig({displayName:"Header__StyledNavbar",componentId:"ww0un5-1"})(["display:flex;justify-content:space-between;align-items:center;width:20vw;padding:0;margin:0 auto;& > li{list-style:none;}& > li > a{text-decoration:none;}"]),M=function(e){var t=e.siteTitle,n=e.siteDescription;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Between Brackets"),i.a.createElement("link",{rel:"canonical",href:"localhost:1337"})),i.a.createElement(o.a,{to:"/",style:{textDecoration:"none"}},i.a.createElement(d,null,i.a.createElement("div",null,t))),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"#08d9d6"}},i.a.createElement("p",null,n)),i.a.createElement(y,null,i.a.createElement(c,{title:"Home Page",linkTo:"https://www.jeremyhage.dev",icon:null}," "),i.a.createElement(c,{title:"GitHub",linkTo:"https://github.com/Kimchi-Coder",icon:s.a}),i.a.createElement(c,{title:"Twitter",linkTo:"https://twitter.com/KimchiCoder",icon:p.a})))},T=u.a.main.withConfig({displayName:"Layout__AppStyles",componentId:"sc-1q9f5ll-0"})(["width:60vw;margin:0 auto;"]),h=function(e){var t=e.children,n=Object(o.c)("4080856488").site.siteMetadata,r=n.title,a=n.description;return i.a.createElement(T,null,i.a.createElement(M,{siteTitle:r,siteDescription:a}),t)}},"8+s/":function(e,t,n){"use strict";var r,i=n("q1tI"),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},OH5e:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9J3JnYig4LCAyMTcsIDIxNCknIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5HaXRIdWIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg=="},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,l,s;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!e(t[c],a[c]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],a.get(c.value[0])))return!1;return!0}if(i&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((u=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(n&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],a[l[c]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},"o9+5":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9J3JnYig4LCAyMTcsIDIxNCknIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5Ud2l0dGVyIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMy45NTQgNC41NjljLS44ODUuMzg5LTEuODMuNjU0LTIuODI1Ljc3NSAxLjAxNC0uNjExIDEuNzk0LTEuNTc0IDIuMTYzLTIuNzIzLS45NTEuNTU1LTIuMDA1Ljk1OS0zLjEyNyAxLjE4NC0uODk2LS45NTktMi4xNzMtMS41NTktMy41OTEtMS41NTktMi43MTcgMC00LjkyIDIuMjAzLTQuOTIgNC45MTcgMCAuMzkuMDQ1Ljc2NS4xMjcgMS4xMjRDNy42OTEgOC4wOTQgNC4wNjYgNi4xMyAxLjY0IDMuMTYxYy0uNDI3LjcyMi0uNjY2IDEuNTYxLS42NjYgMi40NzUgMCAxLjcxLjg3IDMuMjEzIDIuMTg4IDQuMDk2LS44MDctLjAyNi0xLjU2Ni0uMjQ4LTIuMjI4LS42MTZ2LjA2MWMwIDIuMzg1IDEuNjkzIDQuMzc0IDMuOTQ2IDQuODI3LS40MTMuMTExLS44NDkuMTcxLTEuMjk2LjE3MS0uMzE0IDAtLjYxNS0uMDMtLjkxNi0uMDg2LjYzMSAxLjk1MyAyLjQ0NSAzLjM3NyA0LjYwNCAzLjQxNy0xLjY4IDEuMzE5LTMuODA5IDIuMTA1LTYuMTAyIDIuMTA1LS4zOSAwLS43NzktLjAyMy0xLjE3LS4wNjcgMi4xODkgMS4zOTQgNC43NjggMi4yMDkgNy41NTcgMi4yMDkgOS4wNTQgMCAxMy45OTktNy40OTYgMTMuOTk5LTEzLjk4NiAwLS4yMDkgMC0uNDItLjAxNS0uNjMuOTYxLS42ODkgMS44LTEuNTYgMi40Ni0yLjU0OGwtLjA0Ny0uMDJ6Ii8+PC9zdmc+"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Me}));var r,i,o,a,u=n("17x9"),c=n.n(u),l=n("8+s/"),s=n.n(l),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),y=n.n(d),M=n("6qGY"),T=n.n(M),h="bodyAttributes",m="htmlAttributes",g="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},L=(Object.keys(j).map((function(e){return j[e]})),"charset"),I="cssText",b="href",w="http-equiv",A="innerHTML",v="itemprop",S="name",N="property",E="rel",C="src",D="target",O={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",k="defer",z="encodeSpecialCharacters",P="onChangeClientState",Y="titleTemplate",U=Object.keys(O).reduce((function(e,t){return e[O[t]]=t,e}),{}),R=[j.NOSCRIPT,j.SCRIPT,j.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=X(e,j.TITLE),n=X(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,x);return t||r||void 0},F=function(e){return X(e,P)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var u=o[a],c=u.toLowerCase();-1===t.indexOf(c)||n===E&&"canonical"===e[n].toLowerCase()||c===E&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==A&&u!==I&&u!==v||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var u=o[a],c=T()({},r[u],i[u]);r[u]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ce(j.BODY,r),ce(j.HTML,i),ue(f,p);var d={baseTag:le(j.BASE,n),linkTags:le(j.LINK,o),metaTags:le(j.META,a),noscriptTags:le(j.NOSCRIPT,u),scriptTags:le(j.SCRIPT,l),styleTags:le(j.STYLE,s)},y={},M={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(M[e]=d[e].oldTags)})),t&&t(),c(e,y,M)},ae=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ce(j.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(j.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===I)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[O[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,i=fe(n,r),[y.a.createElement(j.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case m:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=O[e]||e;if(n===A||n===I){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),y.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===A||e===I)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(j.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(m,i,r),link:pe(j.LINK,o,r),meta:pe(j.META,a,r),noscript:pe(j.NOSCRIPT,u,r),script:pe(j.SCRIPT,c,r),style:pe(j.STYLE,l,r),title:pe(j.TITLE,{title:f,titleAttributes:p},r)}},ye=s()((function(e){return{baseTag:K([b,D],e),bodyAttributes:J(h,e),defer:X(e,k),encode:X(e,z),htmlAttributes:J(m,e),linkTags:V(j.LINK,[E,b],e),metaTags:V(j.META,[S,L,w,N,v],e),noscriptTags:V(j.NOSCRIPT,[A],e),onChangeClientState:F(e),scriptTags:V(j.SCRIPT,[C,A],e),styleTags:V(j.STYLE,[I],e),title:Z(e),titleAttributes:J(g,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),Me=(i=ye,a=o=function(e){function t(){return Q(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case j.TITLE:return B({},i,((t={})[r.type]=a,t.titleAttributes=B({},o),t));case j.BODY:return B({},i,{bodyAttributes:B({},o)});case j.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return y.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(q(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),y.a.createElement(i,r)},_(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(y.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Me.renderStatic=Me.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-e2f3596947d250ee051f.js.map