(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,n,t){"use strict";var a=t("dI71"),l=t("q1tI"),i=t.n(l),r=(t("wcMv"),t("Wbzz")),o=function(e){return i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement("nav",null,i.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},c=function(e){return i.a.createElement("nav",{id:"menu"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"links"},i.a.createElement("li",null,i.a.createElement(r.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(r.Link,{onClick:e.onToggleMenu,to:"/crew"},"Documentary Crew")))),i.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},s=function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Simon Reich"),i.a.createElement("li",null,"Design: ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(a.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(o,{onToggleMenu:this.handleToggleMenu}),e,i.a.createElement(s,null)),i.a.createElement(c,{onToggleMenu:this.handleToggleMenu}))},n}(i.a.Component);n.a=u},w2l6:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),i=t("Bl7J");n.default=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(e,n,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-2d8578ef68923b5a575a.js.map