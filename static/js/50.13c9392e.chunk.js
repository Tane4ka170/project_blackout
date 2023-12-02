"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{2176:function(t){t.exports=function(t,e,n,r,i,o,a,c){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,c],l=0;(s=new Error(e.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},3050:function(t,e,n){n.d(e,{B6:function(){return st},ql:function(){return mt}});var r,i,o=n(4925),a=n(7326),c=n(136),s=n(7277),u=n(3144),l=n(5671),f=n(3433),p=n(4942),d=n(1413),h=n(9439),m=n(2791),y=n(77),g=n.n(y),v=n(2176),T=n.n(v),b=n(9613),Z=n.n(b),A=["children"],k=["children"],C=function(t){return t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t}(C||{}),w={rel:["amphtml","canonical","alternate"]},O={type:["application/ld+json"]},x={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},S=Object.values(C),E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M=Object.entries(E).reduce((function(t,e){var n=(0,h.Z)(e,2),r=n[0];return t[n[1]]=r,t}),{}),j="data-rh",L="defaultTitle",D="defer",H="encodeSpecialCharacters",P="onChangeClientState",I="titleTemplate",U="prioritizeSeoTags",N=function(t,e){for(var n=t.length-1;n>=0;n-=1){var r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},q=function(t){var e=N(t,"title"),n=N(t,I);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,(function(){return e}));var r=N(t,L);return e||r||void 0},R=function(t){return N(t,P)||function(){}},_=function(t,e){return e.filter((function(e){return"undefined"!==typeof e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return(0,d.Z)((0,d.Z)({},t),e)}),{})},z=function(t,e){return e.filter((function(t){return"undefined"!==typeof t.base})).map((function(t){return t.base})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i+=1){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},B=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&(n="Helmet: ".concat(t,' should be of type "Array". Instead found type "').concat(typeof e[t],'"'),console&&"function"===typeof console.warn&&console.warn(n)),!1);var n})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n,o=Object.keys(t),a=0;a<o.length;a+=1){var c=o[a],s=c.toLowerCase();-1===e.indexOf(s)||"rel"===n&&"canonical"===t[n].toLowerCase()||"rel"===s&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(c)||"innerHTML"!==c&&"cssText"!==c&&"itemprop"!==c||(n=c)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var c=o[a],s=(0,d.Z)((0,d.Z)({},r[c]),i[c]);r[c]=s}return t}),[]).reverse()},F=function(t,e){if(Array.isArray(t)&&t.length)for(var n=0;n<t.length;n+=1){if(t[n][e])return!0}return!1},Y=function(t){return Array.isArray(t)?t.join(""):t},K=function(t,e){return Array.isArray(t)?t.reduce((function(t,n){return!function(t,e){for(var n=Object.keys(t),r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1}(n,e)?t.default.push(n):t.priority.push(n),t}),{priority:[],default:[]}):{default:t,priority:[]}},G=function(t,e){return(0,d.Z)((0,d.Z)({},t),{},(0,p.Z)({},e,void 0))},V=["noscript","script","style"],W=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(t){return Object.keys(t).reduce((function(e,n){var r="undefined"!==typeof t[n]?"".concat(n,'="').concat(t[n],'"'):"".concat(n);return e?"".concat(e," ").concat(r):r}),"")},Q=function(t,e,n,r){var i=J(n),o=Y(e);return i?"<".concat(t," ").concat(j,'="true" ').concat(i,">").concat(W(o,r),"</").concat(t,">"):"<".concat(t," ").concat(j,'="true">').concat(W(o,r),"</").concat(t,">")},X=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.reduce((function(e,r){var i=r,o=Object.keys(i).filter((function(t){return!("innerHTML"===t||"cssText"===t)})).reduce((function(t,e){var r="undefined"===typeof i[e]?e:"".concat(e,'="').concat(W(i[e],n),'"');return t?"".concat(t," ").concat(r):r}),""),a=i.innerHTML||i.cssText||"",c=-1===V.indexOf(t);return"".concat(e,"<").concat(t," ").concat(j,'="true" ').concat(o).concat(c?"/>":">".concat(a,"</").concat(t,">"))}),"")},$=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[E[n]||n]=t[n],e}),e)},tt=function(t,e,n){var r=(0,p.Z)({key:e},j,!0),i=$(n,r);return[m.createElement("title",i,e)]},et=function(t,e){return e.map((function(e,n){var r=(0,p.Z)({key:n},j,!0);return Object.keys(e).forEach((function(t){var n=E[t]||t;if("innerHTML"===n||"cssText"===n){var i=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:i}}else r[n]=e[t]})),m.createElement(t,r)}))},nt=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(t){case"title":return{toComponent:function(){return tt(0,e.title,e.titleAttributes)},toString:function(){return Q(t,e.title,e.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return $(e)},toString:function(){return J(e)}};default:return{toComponent:function(){return et(t,e)},toString:function(){return X(t,e,n)}}}},rt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=void 0===r||r,o=t.htmlAttributes,a=t.noscriptTags,c=t.styleTags,s=t.title,u=void 0===s?"":s,l=t.titleAttributes,p=t.prioritizeSeoTags,d=t.linkTags,h=t.metaTags,m=t.scriptTags,y={toComponent:function(){},toString:function(){return""}};if(p){var g=function(t){var e=t.metaTags,n=t.linkTags,r=t.scriptTags,i=t.encode,o=K(e,x),a=K(n,w),c=K(r,O);return{priorityMethods:{toComponent:function(){return[].concat((0,f.Z)(et("meta",o.priority)),(0,f.Z)(et("link",a.priority)),(0,f.Z)(et("script",c.priority)))},toString:function(){return"".concat(nt("meta",o.priority,i)," ").concat(nt("link",a.priority,i)," ").concat(nt("script",c.priority,i))}},metaTags:o.default,linkTags:a.default,scriptTags:c.default}}(t);y=g.priorityMethods,d=g.linkTags,h=g.metaTags,m=g.scriptTags}return{priority:y,base:nt("base",e,i),bodyAttributes:nt("bodyAttributes",n,i),htmlAttributes:nt("htmlAttributes",o,i),link:nt("link",d,i),meta:nt("meta",h,i),noscript:nt("noscript",a,i),script:nt("script",m,i),style:nt("style",c,i),title:nt("title",{title:u,titleAttributes:l},i)}},it=[],ot=!("undefined"===typeof window||!window.document||!window.document.createElement),at=(0,u.Z)((function t(e,n){var r=this;(0,l.Z)(this,t),(0,p.Z)(this,"instances",[]),(0,p.Z)(this,"canUseDOM",ot),(0,p.Z)(this,"context",void 0),(0,p.Z)(this,"value",{setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?it:r.instances},add:function(t){(r.canUseDOM?it:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?it:r.instances).indexOf(t);(r.canUseDOM?it:r.instances).splice(e,1)}}}),this.context=e,this.canUseDOM=n||!1,n||(e.helmet=rt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))})),ct=m.createContext({}),st=(r=function(t){(0,c.Z)(n,t);var e=(0,s.Z)(n);function n(t){var r;return(0,l.Z)(this,n),r=e.call(this,t),(0,p.Z)((0,a.Z)(r),"helmetData",void 0),r.helmetData=new at(r.props.context||{},n.canUseDOM),r}return(0,u.Z)(n,[{key:"render",value:function(){return m.createElement(ct.Provider,{value:this.helmetData.value},this.props.children)}}]),n}(m.Component),(0,p.Z)(r,"canUseDOM",ot),r),ut=function(t,e){var n,r=document.head||document.querySelector("head"),i=r.querySelectorAll("".concat(t,"[").concat(j,"]")),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))if("innerHTML"===i)r.innerHTML=e.innerHTML;else if("cssText"===i)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=i,s="undefined"===typeof e[c]?"":e[c];r.setAttribute(i,s)}r.setAttribute(j,"true"),o.some((function(t,e){return n=e,r.isEqualNode(t)}))?o.splice(n,1):a.push(r)})),o.forEach((function(t){var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),a.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(j),i=r?r.split(","):[],o=(0,f.Z)(i),a=Object.keys(e),c=0,s=a;c<s.length;c++){var u=s[c],l=e[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var p=o.indexOf(u);-1!==p&&o.splice(p,1)}for(var d=o.length-1;d>=0;d-=1)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(j):n.getAttribute(j)!==a.join(",")&&n.setAttribute(j,a.join(","))}},ft=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;lt("body",r),lt("html",i),function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=Y(t)),lt("title",e)}(f,p);var d={baseTag:ut("base",n),linkTags:ut("link",o),metaTags:ut("meta",a),noscriptTags:ut("noscript",c),scriptTags:ut("script",u),styleTags:ut("style",l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),s(t,h,m)},pt=null,dt=function(t){pt&&cancelAnimationFrame(pt),t.defer?pt=requestAnimationFrame((function(){ft(t,(function(){pt=null}))})):(ft(t),pt=null)},ht=function(t){(0,c.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i)),(0,p.Z)((0,a.Z)(t),"rendered",!1),t}return(0,u.Z)(n,[{key:"shouldComponentUpdate",value:function(t){return!Z()(t,this.props)}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this.props.context.helmetInstances.remove(this),this.emitChange()}},{key:"emitChange",value:function(){var t,e=this.props.context,n=e.helmetInstances,r=e.setHelmet,i=null,o=(t=n.get().map((function(t){var e=(0,d.Z)({},t.props);return delete e.context,e})),{baseTag:z(["href"],t),bodyAttributes:_("bodyAttributes",t),defer:N(t,D),encode:N(t,H),htmlAttributes:_("htmlAttributes",t),linkTags:B("link",["rel","href"],t),metaTags:B("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:B("noscript",["innerHTML"],t),onChangeClientState:R(t),scriptTags:B("script",["src","innerHTML"],t),styleTags:B("style",["cssText"],t),title:q(t),titleAttributes:_("titleAttributes",t),prioritizeSeoTags:F(t,U)});st.canUseDOM?dt(o):rt&&(i=rt(o)),r(i)}},{key:"init",value:function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())}},{key:"render",value:function(){return this.init(),null}}]),n}(m.Component),mt=(i=function(t){(0,c.Z)(n,t);var e=(0,s.Z)(n);function n(){return(0,l.Z)(this,n),e.apply(this,arguments)}return(0,u.Z)(n,[{key:"shouldComponentUpdate",value:function(t){return!g()(G(this.props,"helmetData"),G(t,"helmetData"))}},{key:"mapNestedChildrenToProps",value:function(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error("<".concat(t.type," /> elements are self-closing and can not contain children. Refer to our API for more information."))}}},{key:"flattenArrayTypeChildren",value:function(t,e,n,r){return(0,d.Z)((0,d.Z)({},e),{},(0,p.Z)({},t.type,[].concat((0,f.Z)(e[t.type]||[]),[(0,d.Z)((0,d.Z)({},n),this.mapNestedChildrenToProps(t,r))])))}},{key:"mapObjectTypeChildren",value:function(t,e,n,r){var i;switch(t.type){case"title":return(0,d.Z)((0,d.Z)({},e),{},(i={},(0,p.Z)(i,t.type,r),(0,p.Z)(i,"titleAttributes",(0,d.Z)({},n)),i));case"body":return(0,d.Z)((0,d.Z)({},e),{},{bodyAttributes:(0,d.Z)({},n)});case"html":return(0,d.Z)((0,d.Z)({},e),{},{htmlAttributes:(0,d.Z)({},n)});default:return(0,d.Z)((0,d.Z)({},e),{},(0,p.Z)({},t.type,(0,d.Z)({},n)))}}},{key:"mapArrayTypeChildrenToProps",value:function(t,e){var n=(0,d.Z)({},e);return Object.keys(t).forEach((function(e){n=(0,d.Z)((0,d.Z)({},n),{},(0,p.Z)({},e,t[e]))})),n}},{key:"warnOnInvalidChildren",value:function(t,e){return T()(S.some((function(e){return t.type===e})),"function"===typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types ".concat(S.join(", ")," are allowed. Helmet does not support rendering <").concat(t.type,"> elements. Refer to our API for more information.")),T()(!e||"string"===typeof e||Array.isArray(e)&&!e.some((function(t){return"string"!==typeof t})),"Helmet expects a string as a child of <".concat(t.type,">. Did you forget to wrap your children in braces? ( <").concat(t.type,">{``}</").concat(t.type,"> ) Refer to our API for more information.")),!0}},{key:"mapChildrenToProps",value:function(t,e){var n=this,r={};return m.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,a=i.children,c=(0,o.Z)(i,A),s=Object.keys(c).reduce((function(t,e){return t[M[e]||e]=c[e],t}),{}),u=t.type;switch("symbol"===typeof u?u=u.toString():n.warnOnInvalidChildren(t,a),u){case"Symbol(react.fragment)":e=n.mapChildrenToProps(a,e);break;case"link":case"meta":case"noscript":case"script":case"style":r=n.flattenArrayTypeChildren(t,r,s,a);break;default:e=n.mapObjectTypeChildren(t,e,s,a)}}})),this.mapArrayTypeChildrenToProps(r,e)}},{key:"render",value:function(){var t=this.props,e=t.children,n=(0,o.Z)(t,k),r=(0,d.Z)({},n),i=n.helmetData;(e&&(r=this.mapChildrenToProps(e,r)),!i||i instanceof at)||(i=new at(i.context,!0),delete r.helmetData);return i?m.createElement(ht,(0,d.Z)((0,d.Z)({},r),{},{context:i.value})):m.createElement(ct.Consumer,null,(function(t){return m.createElement(ht,(0,d.Z)((0,d.Z)({},r),{},{context:t}))}))}}]),n}(m.Component),(0,p.Z)(i,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),i)}}]);
//# sourceMappingURL=50.13c9392e.chunk.js.map