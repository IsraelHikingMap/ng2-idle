(self.webpackChunkng_idle=self.webpackChunkng_idle||[]).push([[396],{396:()=>{!function(e,n){"use strict";var t,r="hljs-ln",o="hljs-ln-code",a="hljs-ln-n",i="data-line-number",l=/\r\n|\r|\n/g;function s(t){try{var r=n.querySelectorAll("code.hljs,code.nohighlight");for(var o in r)r.hasOwnProperty(o)&&(r[o].classList.contains("nohljsln")||c(r[o],t))}catch(a){e.console.error("LineNumbers error: ",a)}}function c(n,t){"object"==typeof n&&e.setTimeout(function(){n.innerHTML=u(n,t)},0)}function u(e,n){var t=function(e,n){return{singleLine:d(n=n||{}),startFrom:f(e,n)}}(e,n);return h(e),function(e,n){var t=v(e);if(""===t[t.length-1].trim()&&t.pop(),t.length>1||n.singleLine){for(var l="",s=0,c=t.length;s<c;s++)l+=g('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',["hljs-ln-line","hljs-ln-numbers",a,i,o,s+n.startFrom,t[s].length>0?t[s]:" "]);return g('<table class="{0}">{1}</table>',[r,l])}return e}(e.innerHTML,t)}function d(e){return!!e.singleLine&&e.singleLine}function f(e,n){var t=1;isFinite(n.startFrom)&&(t=n.startFrom);var r=function(e,n){return e.hasAttribute(n)?e.getAttribute(n):null}(e,"data-ln-start-from");return null!==r&&(t=function(e,n){if(!e)return 1;var t=Number(e);return isFinite(t)?t:1}(r)),t}function h(e){var n=e.childNodes;for(var t in n)if(n.hasOwnProperty(t)){var r=n[t];(r.textContent.trim().match(l)||[]).length>0&&(r.childNodes.length>0?h(r):m(r.parentNode))}}function m(e){var n=e.className;if(/hljs-/.test(n)){for(var t=v(e.innerHTML),r=0,o="";r<t.length;r++)o+=g('<span class="{0}">{1}</span>\n',[n,t[r].length>0?t[r]:" "]);e.innerHTML=o.trim()}}function v(e){return 0===e.length?[]:e.split(l)}function g(e,n){return e.replace(/\{(\d+)\}/g,function(e,t){return void 0!==n[t]?n[t]:e})}e.hljs?(e.hljs.initLineNumbersOnLoad=function(t){"interactive"===n.readyState||"complete"===n.readyState?s(t):e.addEventListener("DOMContentLoaded",function(){s(t)})},e.hljs.lineNumbersBlock=c,e.hljs.lineNumbersValue=function(e,n){if("string"==typeof e){var t=document.createElement("code");return t.innerHTML=e,u(t,n)}},(t=n.createElement("style")).type="text/css",t.innerHTML=g(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[r,a,i]),n.getElementsByTagName("head")[0].appendChild(t)):e.console.error("highlight.js not detected!"),document.addEventListener("copy",function(e){var n,t=window.getSelection();(function(e){for(var n=e;n;){if(n.className&&-1!==n.className.indexOf("hljs-ln-code"))return!0;n=n.parentNode}return!1})(t.anchorNode)&&(n=-1!==window.navigator.userAgent.indexOf("Edge")?function(e){for(var n=e.toString(),t=e.anchorNode;"TD"!==t.nodeName;)t=t.parentNode;for(var r=e.focusNode;"TD"!==r.nodeName;)r=r.parentNode;var a=parseInt(t.dataset.lineNumber),l=parseInt(r.dataset.lineNumber);if(a!=l){var s=t.textContent,c=r.textContent;if(a>l){var u=a;a=l,l=u,u=s,s=c,c=u}for(;0!==n.indexOf(s);)s=s.slice(1);for(;-1===n.lastIndexOf(c);)c=c.slice(0,-1);for(var d=s,f=function(e){for(var n=e;"TABLE"!==n.nodeName;)n=n.parentNode;return n}(t),h=a+1;h<l;++h){var m=g('.{0}[{1}="{2}"]',[o,i,h]);d+="\n"+f.querySelector(m).textContent}return d+"\n"+c}return n}(t):t.toString(),e.clipboardData.setData("text/plain",n),e.preventDefault())})}(window,document)}}]);