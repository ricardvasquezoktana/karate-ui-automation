'use strict';var k,m=function(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self,aa=function(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,
e)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return q.apply(null,arguments)},t=function(a,b){function c(){}c.prototype=b.prototype;a.La=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ja=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},u=function(a){return a};var v="getAccounts hello getLogBuffer recordLog getQuirks updateQuirks uiEvent proxyUIEvent getProxyConfig".split(" ");var ia=function(a){switch(a){case w.name:return w;case da.name:return da;case x.name:return x;case ea.name:return ea;case fa.name:return fa;default:let b=ha.get(a);b||(b=new y(a),ha.set(a,b));return b}},y=class{constructor(a){this.name=a}toString(){return this.name}},ha=new Map,w=new y("async"),da=new y("generic"),x=new y("runtime"),ea=new y("system"),fa=new y("crypto"),ja=class extends Error{constructor(a,b,c){super(c);this.code=a;this.category=b;Object.setPrototypeOf(this,new.target.prototype)}toString(){return`${this.category}:${this.code} (${this.message||
"Undefined error."})`}};var ka=class{constructor(){let a=void 0,b=void 0;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}},la=class extends ja{constructor(a,b="One or more errors occurred."){super(1,w,b);this.errors=a;Object.setPrototypeOf(this,new.target.prototype)}flatten(){const a=[],b=[this.errors.slice(0)];for(;0!==b.length;){const c=b[0];for(;0!==c.length;){const d=c.shift();if(d instanceof la){b.unshift(d.errors.slice(0));break}else a.push(d)}b[0]===c&&b.shift()}return new la(a,this.message)}};var ma=class{constructor(){this.B=[]}subscribe(a){this.B.push(a)}unsubscribe(a){a=this.B.indexOf(a);if(-1===a)return!1;this.B.splice(a,1);return!0}publish(a){const b=[],c=this.B.slice(0);for(const d of c)b.push(d(a));return b}};function z(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}t(z,Error);z.prototype.name="CustomError";var na;const oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(let c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};
function qa(a){const b=a.length;if(0<b){const c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}return[]};var ta=function(a){a:{var b=["window","location","href"];var c=n;for(var d=0;d<b.length;d++)if(c=c[b[d]],null==c){c=null;break a}}null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:c,stack:"Not available"};b=!1;try{var e=a.lineNumber||a.line||"Not available"}catch(g){e="Not available",b=!0}try{var f=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||c}catch(g){f="Not available",b=!0}c=ra(a);return!b&&
a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:c}:(b=a.message,null==b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:sa(a.constructor))+'"':"Unknown Error of unknown type","function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(b+=": "+a.toString())),{message:b,name:a.name||"UnknownError",lineNumber:e,fileName:f,stack:c||"Not available"})},
ra=function(a,b){b||(b={});b[ua(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ua(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ra(a,b));return c},ua=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack},va=function(a){var b=Error();if(Error.captureStackTrace)Error.captureStackTrace(b,a||va),b=String(b.stack);else{try{throw b;}catch(c){b=c}b=(b=b.stack)?String(b):null}b||(b=wa(a||arguments.callee.caller,[]));return b},
wa=function(a,b){var c=[];if(0<=oa(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(sa(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=sa(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.slice(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(wa(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")},sa=function(a){if(A[a])return A[a];a=String(a);if(!A[a]){var b=/function\s+([^\(]+)/m.exec(a);A[a]=b?b[1]:"[Anonymous]"}return A[a]},A={};var B=function(){this.ra=Date.now()},xa=null;B.prototype.set=function(a){this.ra=a};B.prototype.reset=function(){this.set(Date.now())};B.prototype.get=function(){return this.ra};var C=class{constructor(a,b){this.name=a;this.value=b}toString(){return this.name}},D=new C("OFF",Infinity),ya=new C("SHOUT",1200),za=new C("SEVERE",1E3),Aa=new C("WARNING",900),Ba=new C("INFO",800),Ca=new C("CONFIG",700),E=[D,ya,za,Aa,Ba,Ca,new C("FINE",500),new C("FINER",400),new C("FINEST",300),new C("ALL",0)],F=null,Da=class{constructor(){this.N=0;this.clear()}clear(){this.fa=Array(this.N);this.ia=-1;this.ka=!1}},Ea,Fa=class{constructor(a,b,c,d,e){this.I=void 0;this.reset(a||D,b,c,d,e)}reset(a,
b,c,d){this.wa=d||Date.now();this.aa=a;this.Ea=b;this.la=c;this.I=void 0}getMessage(){return this.Ea}},Ga=function(a){return a.level?a.level:a.parent?Ga(a.parent):D},Ha=class{constructor(a,b=null){this.level=null;this.B=[];this.parent=b||null;this.children=[];this.Da={Z:()=>a}}publish(a){let b=this;for(;b;)b.B.forEach(c=>{c(a)}),b=b.parent}},G=function(a,b){var c=a.entries[b];if(c)return c;c=G(a,b.slice(0,Math.max(b.lastIndexOf("."),0)));const d=new Ha(b,c);a.entries[b]=d;c.children.push(d);return d},
Ia=class{constructor(){this.entries={};const a=new Ha("");a.level=Ca;this.entries[""]=a}},Ja,H=function(){Ja||(Ja=new Ia);return Ja},Ka=function(a,b,c){var d;if(d=a)if(d=a&&b){d=b.value;var e=a?Ga(G(H(),a.Z())):D;d=d>=e.value}if(d){b=b||D;d=G(H(),a.Z());"function"===typeof c&&(c=c());Ea||(Ea=new Da);e=Ea;a=a.Z();if(0<e.N){var f=(e.ia+1)%e.N;e.ia=f;e.ka?(e=e.fa[f],e.reset(b,c,a),a=e):(e.ka=f==e.N-1,a=e.fa[f]=new Fa(b,c,a))}else a=new Fa(b,c,a);a.I=void 0;d.publish(a)}},Ma=function(a){var b=La;b&&Ka(b,
Ba,a)};function Na(a,b){for(const c in a)b.call(void 0,a[c],c,a)};var Oa;var I=class{constructor(a){this.pa=a}toString(){return this.pa.toString()}},Pa={},Qa=new I("about:invalid#zClosurez",Pa);const Ra={};class Sa{constructor(a){this.oa=a}toString(){return this.oa.toString()}};function J(){var a=n.navigator;return a&&(a=a.userAgent)?a:""}var K;const Ta=n.navigator;K=Ta?Ta.userAgentData||null:null;function Ua(){return K&&0<K.brands.length?!1:-1!=J().indexOf("Trident")||-1!=J().indexOf("MSIE")};const Va={};var M=function(a){return a instanceof L&&a.constructor===L?a.na:"type_error:SafeHtml"},Wa=function(a){if(void 0===Oa){var b=null;var c=n.trustedTypes;if(c&&c.createPolicy)try{b=c.createPolicy("goog#html",{createHTML:u,createScript:u,createScriptURL:u})}catch(d){n.console&&n.console.error(d.message)}Oa=b}a=(b=Oa)?b.createHTML(a):a;return new L(a,Va)};class L{constructor(a){this.na=a}toString(){return this.na.toString()}}var Xa=new L(n.trustedTypes&&n.trustedTypes.emptyHTML||"",Va);/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ya(a){return new Sa(a[0],Ra)};class Za{constructor(a){this.isValid=a}}function N(a){return new Za(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const $a=[N("data"),N("http"),N("https"),N("mailto"),N("ftp"),new Za(a=>/^[^:]*([/?#]|$)/.test(a))];function ab(a,b=$a){if(a instanceof I)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Za&&d.isValid(a))return new I(a,Pa)}}const bb="function"===typeof URL;function O(a,b={}){if(a instanceof L)return a;a=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");b.G&&(a=a.replace(/(^|[\r\n\t ]) /g,"$1&#160;"));b.F&&(a=a.replace(/(\r\n|\n|\r)/g,"<br>"));b.Ka&&(a=a.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>'));return Wa(a)}function P(a){const b=O("");return Wa(a.map(c=>M(O(c))).join(M(b).toString()))}const cb=/^[a-z][a-z\d-]*$/i,db="APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
var eb="AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");const fb=["action","formaction","href"];function gb(a){if(!cb.test(a))throw Error("");if(-1!==db.indexOf(a.toUpperCase()))throw Error("");}function Q(a,b,c){gb(a);let d=`<${a}`;b&&(d+=hb(b));Array.isArray(c)||(c=void 0===c?[]:[c]);-1!==eb.indexOf(a.toUpperCase())?d+=">":(b=P(c.map(e=>e instanceof L?e:O(String(e)))),d+=">"+b.toString()+"</"+a+">");return Wa(d)}
function hb(a){var b="";const c=Object.keys(a);for(let h=0;h<c.length;h++){var d=c[h],e=a[d];if(!cb.test(d))throw Error("");if(void 0!==e&&null!==e){if(/^on/i.test(d))throw Error("");if(-1!==fb.indexOf(d.toLowerCase()))if(e instanceof I)e=e.toString();else{e=String(e);b:{var f=void 0;var g=e;if(bb){try{f=new URL(g)}catch(l){g="https:";break b}g=f.protocol}else c:{f=document.createElement("a");try{f.href=g}catch(l){g=void 0;break c}g=f.protocol;g=":"===g||""===g?"https:":g}}e="javascript:"!==g?e:void 0;
e=e||"about:invalid#zClosurez"}d=`${d}="${O(String(e))}"`;b+=" "+d}}return b};var R=function(a){this.ma=a||"";xa||(xa=new B);this.ua=xa};k=R.prototype;k.ea=!0;k.S=!0;k.ca=!0;k.ta=!0;k.ba=!1;k.da=!1;
var ib=function(a){a=new Date(a.wa);return S(a.getFullYear()-2E3)+S(a.getMonth()+1)+S(a.getDate())+" "+S(a.getHours())+":"+S(a.getMinutes())+":"+S(a.getSeconds())+"."+S(Math.floor(a.getMilliseconds()/10))},S=function(a){return 10>a?"0"+a:String(a)},jb=function(a,b){a=(a.wa-b)/1E3;b=a.toFixed(3);var c=0;if(1>a)c=2;else for(;100>a;)c++,a*=10;for(;0<c--;)b=" "+b;return b},T=function(a){R.call(this,a)};t(T,R);T.prototype.ba=!0;T.prototype.ja=function(a){return a?this.X(a).toString():""};
T.prototype.X=function(a){if(!a)return Xa;switch(a.aa.value){case ya.value:var b="dbg-sh";break;case za.value:b="dbg-sev";break;case Aa.value:b="dbg-w";break;case Ba.value:b="dbg-i";break;default:b="dbg-f"}var c=[];c.push(this.ma," ");this.S&&c.push("[",ib(a),"] ");this.ca&&c.push("[",jb(a,this.ua.get()),"s] ");this.ta&&c.push("[",a.la,"] ");this.da&&c.push("[",a.aa.name,"] ");c=O(c.join(""),{F:!0,G:!0});var d=Xa;if(this.ba&&a.I){d=Q("br");try{var e=ta(a.I);var f=e.fileName;null==f&&(f="");if(/^https?:\/\//i.test(f)){var g=
ab(f,$a)||Qa;var h=new I("view-source:"+(g instanceof I&&g.constructor===I?g.pa:"type_error:SafeUrl"),Pa)}else h=ab("sanitizedviewsrc",$a)||Qa;var l=P([O("Message: "+e.message+"\nUrl: ",{F:!0,G:!0}),Q("a",{href:h,target:"_new"},e.fileName),O("\nLine: "+e.lineNumber+"\n\nBrowser stack:\n"+e.stack+"-> [end]\n\nJS stack traversal:\n"+va(void 0)+"-> ",{F:!0,G:!0})])}catch(r){l=O("Exception trying to expose exception! You win, we lose. "+r,{F:!0,G:!0})}d=P([d,l])}a=O(a.getMessage(),{F:!0,G:!0});b=Q("span",
{"class":b},P([a,d]));return this.ea?P([c,b,Q("br")]):P([c,b])};var U=function(a){R.call(this,a)};t(U,R);U.prototype.ja=function(a){var b=[];b.push(this.ma," ");this.S&&b.push("[",ib(a),"] ");this.ca&&b.push("[",jb(a,this.ua.get()),"s] ");this.ta&&b.push("[",a.la,"] ");this.da&&b.push("[",a.aa.name,"] ");b.push(a.getMessage());this.ba&&(a=a.I,void 0!==a&&b.push("\n",a instanceof Error?a.message:String(a)));this.ea&&b.push("\n");return b.join("")};
U.prototype.X=function(a){return O(U.prototype.ja(a),{F:!0,G:!0})};function kb(a=new U){a.S=!0;a.ca=!1;a.da=!0}function lb(a){a:{var b=a.l;if(!F){F={};for(let c=0,d;d=E[c];c++)F[d.value]=d,F[d.name]=d}if(b in F)b=F[b];else{for(let c=0;c<E.length;++c){let d=E[c];if(d.value<=b){b=d;break a}}b=null}}return new Fa(b,a.m,a.n,a.t,a.s)}G(H(),"");var mb=new C("TRACE",100);E.push(new C("DEBUG",600));E.push(mb);function nb(a){switch(a.type){case 0:return a.object;case 1:return Error(a.message);case 2:return new ja(a.code,ia(a.category),a.message);case 3:return new la(a.errors.map(nb),a.message)}};var ob=function(a,...b){return m(function*(){const c=new ka;chrome.runtime.sendMessage({method:a,args:b},d=>{const e=chrome.runtime.lastError;e?c.reject(new ja(1,x,`Operation '${String(a)}' failed. ${e.message||"Undefined error."}`)):d.error?c.reject(nb(d.error)):c.resolve(d.output)});return c.promise}())},pb=function(a){for(const [c,d]of a.qa){const e=c;var b=d;if(v.every(f=>e.has(f)))return b}b={};for(const c of v)Object.defineProperty(b,c,{value:(...d)=>ob(c,...d),writable:!1});a.qa.set(new Set(v),
b);return b},qb=function(a){let b=a.events.get("log:record");if(!b){const c=chrome.runtime.connect({name:"log:record"});b={port:c,source:new ma,Fa:[]};c.onMessage.addListener(d=>{d=null===d?void 0:d;const e=b.Fa.shift();e?e.resolve(d):b.source.publish(d)});a.events.set("log:record",b)}return b},rb=class{constructor(){this.events=new Map;this.qa=new Map}};var sb=Ua();var tb=function(){};var ub=/^[\w+/_-]+[=]{0,2}$/,vb=function(){var a=n.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&ub.test(a)?a:"":""};var xb=function(a,b){Na(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:wb.hasOwnProperty(d)?a.setAttribute(wb[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})},wb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},yb=function(a,
b,c,d){function e(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(;d<c.length;d++){var f=c[d];if(!aa(f)||p(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(p(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}pa(g?qa(f):f,e)}}},zb=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},Ab=function(a){return 9==a.nodeType?
a:a.ownerDocument||a.document},V=function(a){this.A=a||n.document||document};V.prototype.getElementsByTagName=function(a,b){return(b||this.A).getElementsByTagName(String(a))};var Bb=function(a,b){a=a.A;b=b&&"*"!=b?String(b).toUpperCase():"";b=a.querySelectorAll&&a.querySelector&&b?a.querySelectorAll(b+""):a.getElementsByTagName(b||"*");return b};k=V.prototype;k.setProperties=xb;
k.ha=function(a,b,c){var d=this.A,e=arguments,f=e[1],g=zb(d,String(e[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):xb(g,f));2<e.length&&yb(d,g,e,2);return g};k.createElement=function(a){return zb(this.A,a)};k.createTextNode=function(a){return this.A.createTextNode(String(a))};k.appendChild=function(a,b){a.appendChild(b)};k.append=function(a,b){yb(Ab(a),a,arguments,1)};k.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
k.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};k.getChildren=function(a){return void 0!=a.children?a.children:Array.prototype.filter.call(a.childNodes,function(b){return 1==b.nodeType})};k.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Cb=function(a,b){b=b instanceof Sa&&b.constructor===Sa?b.oa:"type_error:SafeStyleSheet";if(sb&&void 0!==a.cssText)a.cssText=b;else if(n.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Ab(a).createTextNode(String(b)))}else a.innerHTML=b};function Db(a){a=a.tagName;if("SCRIPT"===a||"STYLE"===a)throw Error("");};var Eb=function(a){q(this.U,this);this.Y=new T;this.Y.S=!1;this.g=a;this.Aa=this.g.ownerDocument||this.g.document;this.za=new V(this.Aa);a=Ya`
      .dbg-sev{color:#F00}
      .dbg-w{color:#C40}
      .dbg-sh{font-weight:bold;color:#000}
      .dbg-i{color:#444}
      .dbg-f{color:#999}
      .dbg-ev{color:#0A0}
      .dbg-m{color:#990}
      .logmsg{border-bottom:1px solid #CCC;padding:2px}
      .logsep{background-color: #8C8;}
      .logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}`;var b=(b=this.g)?new V(Ab(b)):na||(na=new V);var c=b.A;if(sb&&c.createStyleSheet)b=c.createStyleSheet(),Cb(b,a);else{c=Bb(b,"HEAD")[0];if(!c){var d=Bb(b,"BODY")[0];c=b.ha("HEAD");d.parentNode.insertBefore(c,d)}d=b.ha("STYLE");var e=vb();e&&d.setAttribute("nonce",e);Cb(d,a);b.appendChild(c,d)}this.g.className+=" logdiv"};
Eb.prototype.U=function(a){if(a){var b=100>=this.g.scrollHeight-this.g.scrollTop-this.g.clientHeight,c=this.za.createElement("DIV");c.className="logmsg";a=this.Y.X(a);1===c.nodeType&&Db(c);c.innerHTML=M(a);this.g.appendChild(c);b&&(this.g.scrollTop=this.g.scrollHeight)}};Eb.prototype.clear=function(){if(this.g){var a=this.g;1===a.nodeType&&Db(a);a.innerHTML=M(Xa)}};var Gb=class{constructor(){var a=Fb;this.xa=a;this.background=pb(a)}initialize(){const a=this;return m(function*(){const b=document.querySelector("#log-buffer"),c=new Eb(b);kb(c.Y);qb(a.xa).source.subscribe(e=>{const f=b.scrollTop===b.scrollHeight;c.U(lb(e));f&&(b.scrollTop=b.scrollHeight)});var d=yield a.background.getLogBuffer();for(const e of d)c.U(lb(e));if(d=document.querySelector("#clear-log"))d.onclick=()=>{c.clear()};d=document.querySelectorAll("[data-i18n]");for(const e of d)d=e.getAttribute("data-i18n"),
e.textContent=chrome.i18n.getMessage(d)||"PLACEHOLDER"}())}};class Hb{constructor(a,b){this.Ca=100;this.ya=a;this.Ga=b;this.R=0;this.P=null}get(){let a;0<this.R?(this.R--,a=this.P,this.P=a.next,a.next=null):a=this.ya();return a}put(a){this.Ga(a);this.R<this.Ca&&(this.R++,a.next=this.P,this.P=a)}};var Ib,Jb=function(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==J().indexOf("Presto")&&(a=function(){var e=zb(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},
this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!Ua()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ga;c.ga=null;e()}};return function(e){d.next={ga:e};d=d.next;b.port2.postMessage(0)}}return function(e){n.setTimeout(e,0)}};function Kb(a){n.setTimeout(()=>{throw a;},0)};class Lb{constructor(){this.T=this.H=null}add(a,b){const c=Mb.get();c.set(a,b);this.T?this.T.next=c:this.H=c;this.T=c}remove(){let a=null;this.H&&(a=this.H,this.H=this.H.next,this.H||(this.T=null),a.next=null);return a}}var Mb=new Hb(()=>new Nb,a=>a.reset());class Nb{constructor(){this.next=this.scope=this.fn=null}set(a,b){this.fn=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.fn=null}};let W,Ob=!1,Pb=new Lb,Rb=(a,b)=>{W||Qb();Ob||(W(),Ob=!0);Pb.add(a,b)},Qb=()=>{if(n.Promise&&n.Promise.resolve){const a=n.Promise.resolve(void 0);W=()=>{a.then(Sb)}}else W=()=>{var a=Sb,b;!(b="function"!==typeof n.setImmediate)&&(b=n.Window&&n.Window.prototype)&&((b=!!K&&0<K.brands.length)||(b=-1==J().indexOf("Edge")),b=b&&n.Window.prototype.setImmediate==n.setImmediate);b?(Ib||(Ib=Jb()),Ib(a)):n.setImmediate(a)}};
var Sb=()=>{let a;for(;a=Pb.remove();){try{a.fn.call(a.scope)}catch(b){Kb(b)}Mb.put(a)}Ob=!1};var Y=function(a){this.i=0;this.sa=void 0;this.v=this.j=this.u=null;this.O=this.V=!1;if(a!=tb)try{var b=this;a.call(void 0,function(c){X(b,2,c)},function(c){X(b,3,c)})}catch(c){X(this,3,c)}},Tb=function(){this.next=this.context=this.C=this.J=this.o=null;this.K=!1};Tb.prototype.reset=function(){this.context=this.C=this.J=this.o=null;this.K=!1};var Ub=new Hb(function(){return new Tb},function(a){a.reset()}),Vb=function(a,b,c){var d=Ub.get();d.J=a;d.C=b;d.context=c;return d};
Y.prototype.then=function(a,b,c){return Wb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};Y.prototype.$goog_Thenable=!0;Y.prototype.va=function(a,b){return Wb(this,null,a,b)};Y.prototype.catch=Y.prototype.va;Y.prototype.cancel=function(a){if(0==this.i){var b=new Z(a);Rb(function(){Xb(this,b)},this)}};
var Xb=function(a,b){if(0==a.i)if(a.u){var c=a.u;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.K||(d++,g.o==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Xb(c,b):(f?(d=f,d.next==c.v&&(c.v=d),d.next=d.next.next):Yb(c),Zb(c,e,3,b)))}a.u=null}else X(a,3,b)},ac=function(a,b){a.j||2!=a.i&&3!=a.i||$b(a);a.v?a.v.next=b:a.j=b;a.v=b},Wb=function(a,b,c,d){var e=Vb(null,null,null);e.o=new Y(function(f,g){e.J=b?function(h){try{var l=b.call(d,h);f(l)}catch(r){g(r)}}:f;e.C=c?function(h){try{var l=c.call(d,
h);void 0===l&&h instanceof Z?g(h):f(l)}catch(r){g(r)}}:g});e.o.u=a;ac(a,e);return e.o};Y.prototype.Ha=function(a){this.i=0;X(this,2,a)};Y.prototype.Ia=function(a){this.i=0;X(this,3,a)};
var X=function(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.Ha,f=a.Ia;if(d instanceof Y){ac(d,Vb(e||tb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(r){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(p(d))try{var l=d.then;if("function"===typeof l){bc(d,l,e,f,a);g=!0;break a}}catch(r){f.call(a,r);g=!0;break a}g=!1}}}g||(a.sa=c,a.i=b,a.u=null,$b(a),3!=b||c instanceof Z||cc(a,c))}},bc=function(a,b,c,d,e){var f=!1,g=function(l){f||
(f=!0,c.call(e,l))},h=function(l){f||(f=!0,d.call(e,l))};try{b.call(a,g,h)}catch(l){h(l)}},$b=function(a){a.V||(a.V=!0,Rb(a.Ba,a))},Yb=function(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.v=null);return b};Y.prototype.Ba=function(){for(var a;a=Yb(this);)Zb(this,a,this.i,this.sa);this.V=!1};
var Zb=function(a,b,c,d){if(3==c&&b.C&&!b.K)for(;a&&a.O;a=a.u)a.O=!1;if(b.o)b.o.u=null,dc(b,c,d);else try{b.K?b.J.call(b.context):dc(b,c,d)}catch(e){ec.call(null,e)}Ub.put(b)},dc=function(a,b,c){2==b?a.J.call(a.context,c):a.C&&a.C.call(a.context,c)},cc=function(a,b){a.O=!0;Rb(function(){a.O&&ec.call(null,b)})},ec=Kb,Z=function(a){z.call(this,a)};t(Z,z);Z.prototype.name="cancel";var fc=function(a,b){if("function"!==typeof a)if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:n.setTimeout(a,b||0)},gc=function(a){var b=null;return(new Y(function(c,d){b=fc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).va(function(c){n.clearTimeout(b);throw c;})};const Fb=new rb,hc=pb(Fb),La=G(H(),"Log Script").Da;function ic(){m(function*(){Ma("Initializing...");for(let b=1;10>=b;++b)try{yield hc.hello();break}catch(c){const d=c;if(10<=b){var a=La;a&&Ka(a,za,`Failed to communicate with background page after ${b} attempts. ${d.message}`);throw d;}yield gc(100+(15<<b))}yield(new Gb).initialize();Ma("Done.")}())}document.addEventListener("DOMContentLoaded",()=>{Ma("Handling DOMContentLoaded...");ic()});
