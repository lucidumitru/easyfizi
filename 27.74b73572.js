(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(91),l=a(97),c=a(88);t.default=function(e){var t=e.metadata,a=e.items,n=t.allTagsPath,s=t.name,i=t.count;return r.a.createElement(o.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i," ",function(e,t){return e>1?t+"s":t}(i,"post"),' tagged with "',s,'"'),r.a.createElement(c.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.a.createElement(l.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.a.createElement(t,null))})))))))}},92:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l};e.exports=n,e.exports.default=n},93:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var o=[],l=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=l);for(var c=a;c!=r;c+=l)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},94:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),l=a(88),c=a(87),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(20).a,theme:s};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=u({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=n[l]++)<r[l];){var i=void 0,m=t[l],u=a[l][o];if("string"==typeof u?(m=l>0?m:["plain"],i=u):(m=g(m,u.type),u.alias&&(m=g(m,u.alias)),i=u.content),"string"==typeof i){var y=i.split(p),h=y.length;c.push({types:m,content:y[0]});for(var f=1;f<h;f++)d(c),s.push(c=[]),c.push({types:m,content:y[f]})}else l++,t.push(m),a.push(i),n.push(0),r.push(i.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return d(c),s}(void 0!==l?t.tokenize(n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=a(92),b=a.n(v),k=a(93),E=a.n(k),j=a(86),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(96),x=function(){var e=Object(j.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(O.a)().isDarkTheme,n=t.theme||N,r=t.darkTheme||n;return a?r:n},T=a(47),w=a.n(T),_=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},C=/title=".*"/,B=function(e){var t=e.children,a=e.className,l=e.metastring,s=Object(j.a)().siteConfig.themeConfig.prism,m=void 0===s?{}:s,u=Object(r.useState)(!1),p=u[0],d=u[1],g=Object(r.useState)(!1),y=g[0],h=g[1];Object(r.useEffect)((function(){h(!0)}),[]);var v=Object(r.useRef)(null),k=[],N="",O=x();if(l&&_.test(l)){var T=l.match(_)[1];k=E.a.parse(T).filter((function(e){return e>0}))}l&&C.test(l)&&(N=l.match(C)[0].split("title=")[1].replace(/"+/g,""));var B=a&&a.replace(/language-/,"");!B&&m.defaultLanguage&&(B=m.defaultLanguage);var S=t.replace(/\n$/,"");if(0===k.length&&void 0!==B){for(var A,D="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(B),I=t.replace(/\n$/,"").split("\n"),R=0;R<I.length;){var F=R+1,M=I[R].match(L);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=F+",";break;case"highlight-start":A=F;break;case"highlight-end":D+=A+"-"+(F-1)+","}I.splice(R,1)}else R+=1}k=E.a.parse(D),S=I.join("\n")}var J=function(){b()(S),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(f,Object(n.a)({},i,{key:String(y),theme:O,code:S,language:B}),(function(e){var t,a,r=e.className,l=e.style,s=e.tokens,i=e.getLineProps,m=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,N&&o.a.createElement("div",{style:l,className:w.a.codeBlockTitle},N),o.a.createElement("div",{className:w.a.codeBlockContent},o.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(w.a.copyButton,(t={},t[w.a.copyButtonWithTitle]=N,t)),onClick:J},p?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(c.a)(r,w.a.codeBlock,(a={},a[w.a.codeBlockWithTitle]=N,a))},o.a.createElement("div",{className:w.a.codeBlockLines,style:l},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return k.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return o.a.createElement("span",Object(n.a)({key:t},m({token:e,key:t})))})))}))))))}))},S=a(6),A=(a(48),a(49)),D=a.n(A),L=function(e){return function(t){var a,n=t.id,r=Object(S.a)(t,["id"]),l=Object(j.a)().siteConfig,s=(l=void 0===l?{}:l).themeConfig,i=(s=void 0===s?{}:s).navbar,m=(i=void 0===i?{}:i).hideOnScroll,u=void 0!==m&&m;return n?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",(a={},a[D.a.enhancedAnchor]=!u,a)),id:n}),r.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},I=a(50),R=a.n(I),F={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(B,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(l.a,e)},pre:function(e){return o.a.createElement("div",Object(n.a)({className:R.a.mdxCodeBlock},e))},h1:L("h1"),h2:L("h2"),h3:L("h3"),h4:L("h4"),h5:L("h5"),h6:L("h6")};t.a=F},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(87),l=a(89),c=a(95),s=a(88),i=a(94),m=a(90),u=a(51),p=a.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,u,g,y=e.children,h=e.frontMatter,f=e.metadata,v=e.truncated,b=e.isBlogPostPage,k=void 0!==b&&b,E=f.date,j=f.permalink,N=f.tags,O=f.readingTime,x=h.author,T=h.title,w=h.image,_=h.keywords,P=h.author_url||h.authorURL,C=h.author_title||h.authorTitle,B=h.author_image_url||h.authorImageURL,S=Object(m.a)(w,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,_&&_.length&&r.a.createElement("meta",{name:"keywords",content:_.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:S}),w&&r.a.createElement("meta",{property:"twitter:image",content:S}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+T})),r.a.createElement("article",{className:k?void 0:"margin-bottom--xl"},(t=k?"h1":"h2",a=E.substring(0,10).split("-"),n=a[0],u=d[parseInt(a[1],10)-1],g=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(o.a)("margin-bottom--sm",p.a.blogPostTitle)},k?T:r.a.createElement(s.a,{to:j},T)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:p.a.blogPostDate},u," ",g,", ",n," ",O&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(O)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},B&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:B,alt:x})),r.a.createElement("div",{className:"avatar__intro"},x&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},x)),r.a.createElement("small",{className:"avatar__subtitle"},C)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(l.a,{components:i.a},y)),(N.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:f.permalink,"aria-label":"Read more about "+T},r.a.createElement("strong",null,"Read More"))))))}}}]);