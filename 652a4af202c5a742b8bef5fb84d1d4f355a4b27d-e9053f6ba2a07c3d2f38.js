(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function T(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){s.push(this),T()},l.componentDidUpdate=function(){T()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=(n("wcMv"),n("Wbzz")),l=function(e){return o.a.createElement("header",{id:"header",className:"alt"},o.a.createElement(i.Link,{to:"/",className:"logo"},o.a.createElement("strong",null,"Forty")," ",o.a.createElement("span",null,"by HTML5 UP")),o.a.createElement("nav",null,o.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},c=function(e){return o.a.createElement("nav",{id:"menu"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"links"},o.a.createElement("li",null,o.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/landing"},"Landing")),o.a.createElement("li",null,o.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/generic"},"Generic")),o.a.createElement("li",null,o.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/elements"},"Elements"))),o.a.createElement("ul",{className:"actions vertical"},o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:"button special fit"},"Get Started")),o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:"button fit"},"Log In")))),o.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},u=function(e){return o.a.createElement("section",{id:"contact"},o.a.createElement("div",{className:"inner"},o.a.createElement("section",null,o.a.createElement("form",{method:"post",action:"#"},o.a.createElement("div",{className:"field half first"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",id:"name"})),o.a.createElement("div",{className:"field half"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"text",name:"email",id:"email"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),o.a.createElement("li",null,o.a.createElement("input",{type:"reset",value:"Clear"}))))),o.a.createElement("section",{className:"split"},o.a.createElement("section",null,o.a.createElement("div",{className:"contact-method"},o.a.createElement("span",{className:"icon alt fa-envelope"}),o.a.createElement("h3",null,"Email"),o.a.createElement("a",{href:"#"},"information@untitled.tld"))),o.a.createElement("section",null,o.a.createElement("div",{className:"contact-method"},o.a.createElement("span",{className:"icon alt fa-phone"}),o.a.createElement("h3",null,"Phone"),o.a.createElement("span",null,"(000) 000-0000 x12387"))),o.a.createElement("section",null,o.a.createElement("div",{className:"contact-method"},o.a.createElement("span",{className:"icon alt fa-home"}),o.a.createElement("h3",null,"Address"),o.a.createElement("span",null,"1234 Somewhere Road #5432",o.a.createElement("br",null),"Nashville, TN 00000",o.a.createElement("br",null),"United States of America"))))))},s=function(e){return o.a.createElement("footer",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"Twitter",className:"icon alt fa-twitter"},o.a.createElement("span",{className:"label"},"Twitter"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"Facebook",className:"icon alt fa-facebook"},o.a.createElement("span",{className:"label"},"Facebook"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"Instagram",className:"icon alt fa-instagram"},o.a.createElement("span",{className:"label"},"Instagram"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"GitHub",className:"icon alt fa-github"},o.a.createElement("span",{className:"label"},"GitHub"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#","aria-label":"LinkedIn",className:"icon alt fa-linkedin"},o.a.createElement("span",{className:"label"},"LinkedIn")))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© Untitled"),o.a.createElement("li",null,"Design: ",o.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))},T=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isMenuVisible:!1,loading:"is-loading"},n.handleToggleMenu=n.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},n.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},o.a.createElement("div",{id:"wrapper"},o.a.createElement(l,{onToggleMenu:this.handleToggleMenu}),e,o.a.createElement(u,null),o.a.createElement(s,null)),o.a.createElement(c,{onToggleMenu:this.handleToggleMenu}))},t}(o.a.Component);t.a=T},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var s=e[u],T=t[u];if(!1===(a=n?n.call(r,s,T,u):void 0)||void 0===a&&s!==T)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),i=T(n("17x9")),l=T(n("8+s/")),c=T(n("bmMU")),u=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,p,A,h=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),S=(d=h,A=p=function(e){function t(){return E(this,t),m(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=d.peek,p.rewind=function(){var e=d.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,u,s=r(t),T=r(n);if(s&&T){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=T)return!1;var f=t instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return t.getTime()==n.getTime();var m=t instanceof RegExp,d=n instanceof RegExp;if(m!=d)return!1;if(m&&d)return t.toString()==n.toString();var p=a(t);if((c=p.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!o.call(n,p[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(u=p[l])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("6qGY")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=p(e,l.TAG_NAMES.TITLE),n=p(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return p(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var u=o[c],s=(0,i.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,E=e.titleAttributes;N(l.TAG_NAMES.BODY,r),N(l.TAG_NAMES.HTML,a),M(f,E);var m={baseTag:R(l.TAG_NAMES.BASE,n),linkTags:R(l.TAG_NAMES.LINK,o),metaTags:R(l.TAG_NAMES.META,i),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,c),scriptTags:R(l.TAG_NAMES.SCRIPT,s),styleTags:R(l.TAG_NAMES.STYLE,T)},d={},p={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(p[e]=m[e].oldTags)})),t&&t(),u(e,d,p)},g=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),N(l.TAG_NAMES.TITLE,t)},N=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var T=o.indexOf(u);-1!==T&&o.splice(T,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=O(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=g(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&b(v),e.defer?v=S((function(){_(e,(function(){v=null}))})):(_(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,E=e.titleAttributes;return{base:C(l.TAG_NAMES.BASE,t,r),bodyAttributes:C(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(l.ATTRIBUTE_NAMES.HTML,a,r),link:C(l.TAG_NAMES.LINK,o,r),meta:C(l.TAG_NAMES.META,i,r),noscript:C(l.TAG_NAMES.NOSCRIPT,c,r),script:C(l.TAG_NAMES.SCRIPT,u,r),style:C(l.TAG_NAMES.STYLE,s,r),title:C(l.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:m([l.TAG_PROPERTIES.HREF],e),bodyAttributes:E(l.ATTRIBUTE_NAMES.BODY,e),defer:p(e,l.HELMET_PROPS.DEFER),encode:p(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(l.ATTRIBUTE_NAMES.HTML,e),linkTags:d(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:d(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:d(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:E(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=y}).call(this,n("yLpj"))},wcMv:function(e,t,n){},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=652a4af202c5a742b8bef5fb84d1d4f355a4b27d-e9053f6ba2a07c3d2f38.js.map