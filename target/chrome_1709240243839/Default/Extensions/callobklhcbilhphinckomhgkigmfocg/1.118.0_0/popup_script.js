'use strict';var k=function(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=this||self,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},m=function(a,b,c){m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return m.apply(null,arguments)},ca=function(a,
b){function c(){}c.prototype=b.prototype;a.ob=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};var da="getAccounts hello getLogBuffer recordLog getQuirks updateQuirks uiEvent proxyUIEvent getProxyConfig".split(" ");var ka=function(a){switch(a){case ea.name:return ea;case fa.name:return fa;case p.name:return p;case ha.name:return ha;case ia.name:return ia;default:let b=ja.get(a);b||(b=new q(a),ja.set(a,b));return b}},q=class{constructor(a){this.name=a}toString(){return this.name}},ja=new Map,ea=new q("async"),fa=new q("generic"),p=new q("runtime"),ha=new q("system"),ia=new q("crypto"),r=class extends Error{constructor(a,b,c){super(c);this.code=a;this.category=b;Object.setPrototypeOf(this,new.target.prototype)}toString(){return`${this.category}:${this.code} (${this.message||
"Undefined error."})`}};var la=class{constructor(){let a=void 0,b=void 0;this.promise=new Promise((c,d)=>{a=c;b=d});this.resolve=a;this.reject=b}},ma=class extends r{constructor(a,b="One or more errors occurred."){super(1,ea,b);this.errors=a;Object.setPrototypeOf(this,new.target.prototype)}flatten(){const a=[],b=[this.errors.slice(0)];for(;0!==b.length;){const c=b[0];for(;0!==c.length;){const d=c.shift();if(d instanceof ma){b.unshift(d.errors.slice(0));break}else a.push(d)}b[0]===c&&b.shift()}return new ma(a,this.message)}};var na=class{constructor(){this.F=[]}subscribe(a){this.F.push(a)}unsubscribe(a){a=this.F.indexOf(a);if(-1===a)return!1;this.F.splice(a,1);return!0}publish(a){const b=[],c=this.F.slice(0);for(const d of c)b.push(d(a));return b}};function t(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}ca(t,Error);t.prototype.name="CustomError";var u=function(){this.Da=Date.now()},oa=null;u.prototype.set=function(a){this.Da=a};u.prototype.reset=function(){this.set(Date.now())};u.prototype.get=function(){return this.Da};var v=class{constructor(a,b){this.name=a;this.value=b}toString(){return this.name}},w=new v("OFF",Infinity),pa=new v("SEVERE",1E3),x=new v("WARNING",900),qa=new v("INFO",800),ra=new v("CONFIG",700),sa=new v("ALL",0),y=[w,new v("SHOUT",1200),pa,x,qa,ra,new v("FINE",500),new v("FINER",400),new v("FINEST",300),sa],z=null,ta=function(a){if(!z){z={};for(let b=0,c;c=y[b];b++)z[c.value]=c,z[c.name]=c}if(a in z)return z[a];for(let b=0;b<y.length;++b){let c=y[b];if(c.value<=a)return c}return null},ua=class{constructor(){this.X=
0;this.clear()}clear(){this.sa=Array(this.X);this.ua=-1;this.wa=!1}},va,xa=class{constructor(a,b,c){this.Y=void 0;this.reset(a||w,b,c,void 0,void 0)}reset(a,b,c,d,e){this.la=d||Date.now();this.ba=a;this.Wa=b;this.ga=c;this.Y=void 0;this.Za="number"===typeof e?e:wa}getMessage(){return this.Wa}},wa=0,ya=function(a){return a.level?a.level:a.parent?ya(a.parent):w},za=class{constructor(a,b=null){this.level=null;this.F=[];this.parent=b||null;this.children=[];this.ya={J:()=>a}}publish(a){let b=this;for(;b;)b.F.forEach(c=>
{c(a)}),b=b.parent}},A=function(a,b){var c=a.entries[b];if(c)return c;c=A(a,b.slice(0,Math.max(b.lastIndexOf("."),0)));const d=new za(b,c);a.entries[b]=d;c.children.push(d);return d},Aa=class{constructor(){this.entries={};const a=new za("");a.level=ra;this.entries[""]=a}},Ba,B=function(){Ba||(Ba=new Aa);return Ba},Da=function(a){var b=Ca;b&&A(B(),b.J()).F.push(a)},Ea=function(a){var b=Ca;b&&(A(B(),b.J()).level=a)},Fa=function(){var a=Ca;return a?A(B(),a.J()).level:null},C=function(a,b,c){var d;if(d=
a)if(d=a&&b){d=b.value;var e=a?ya(A(B(),a.J())):w;d=d>=e.value}if(d){b=b||w;d=A(B(),a.J());"function"===typeof c&&(c=c());va||(va=new ua);e=va;a=a.J();if(0<e.X){var f=(e.ua+1)%e.X;e.ua=f;e.wa?(e=e.sa[f],e.reset(b,c,a),a=e):(e.wa=f==e.X-1,a=e.sa[f]=new xa(b,c,a))}else a=new xa(b,c,a);a.Y=void 0;d.publish(a)}};var D=class{constructor(a){this.Aa=a}toString(){return this.Aa.toString()}},Ga=function(a){return a instanceof D&&a.constructor===D?a.Aa:"type_error:SafeUrl"},Ha={},Ia=new D("about:invalid#zClosurez",Ha);var Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},La=function(a,b){let c=0;a=Ja(String(a)).split(".");b=Ja(String(b)).split(".");const d=Math.max(a.length,b.length);for(let g=0;0==c&&g<d;g++){var e=a[g]||"",f=b[g]||"";do{e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];if(0==e[0].length&&0==f[0].length)break;c=Ka(0==e[1].length?0:parseInt(e[1],10),0==f[1].length?0:parseInt(f[1],10))||Ka(0==e[2].length,
0==f[2].length)||Ka(e[2],f[2]);e=e[3];f=f[3]}while(0==c)}return c},Ka=function(a,b){return a<b?-1:a>b?1:0};a:for(var Ma=["CLOSURE_FLAGS"],Na=l,Oa=0;Oa<Ma.length;Oa++)if(Na=Na[Ma[Oa]],null==Na)break a;function Pa(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}var E;const Qa=l.navigator;E=Qa?Qa.userAgentData||null:null;function Ra(a){return E?E.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1}function F(a){return-1!=Pa().indexOf(a)};var Sa=class{constructor(a){this.ib=a}};var Ta=new class{constructor(a){this.xa=a;this.ia=this.ma=void 0;this.za=!1}fa(){if(E)return this.ma}load(){const a=this;return k(function*(){if(E)return a.ia||(a.za=!0,a.ia=(()=>k(function*(){try{const b=yield E.getHighEntropyValues([a.xa]);a.ma=b[a.xa];return a.ma}finally{a.za=!1}}()))()),yield a.ia}())}}("fullVersionList");function G(){return!!E&&0<E.brands.length}function Ua(){return G()?!1:F("Opera")}function Va(){return G()?!1:F("Trident")||F("MSIE")}function H(){return G()?!1:F("Edge")}function I(){return G()?Ra("Microsoft Edge"):F("Edg/")}function Wa(){return G()?Ra("Opera"):F("OPR")}function J(){return F("Firefox")||F("FxiOS")}function K(){return G()?Ra("Chromium"):(F("Chrome")||F("CriOS"))&&!H()||F("Silk")}function Xa(a){const b={};a.forEach(c=>{b[c[0]]=c[1]});return c=>b[c.find(d=>d in b)]||""}
function Ya(a){var b=Pa();if("Internet Explorer"===a){if(Va())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}const d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];let e;for(;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);
b=Xa(c);switch(a){case "Opera":if(Ua())return b(["Version","Opera"]);if(Wa())return b(["OPR"]);break;case "Microsoft Edge":if(H())return b(["Edge"]);if(I())return b(["Edg"]);break;case "Chromium":if(K())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&J()||"Safari"===a&&F("Safari")&&!(K()||(G()?0:F("Coast"))||Ua()||H()||I()||Wa()||J()||F("Silk")||F("Android"))||"Android Browser"===a&&F("Android")&&!(K()||J()||Ua()||F("Silk"))||"Silk"===a&&F("Silk")?(b=c[2])&&b[1]||"":""}
function Za(){if(G()){var a=E.brands.find(({brand:b})=>"Chromium"===b);if(!a||!a.version)return NaN;a=a.version.split(".")}else{a=Ya("Chromium");if(""===a)return NaN;a=a.split(".")}return 0===a.length?NaN:Number(a[0])}
class $a{constructor(a,b,c){this.ra=a;this.La=new Sa(c);this.Ka=b}fa(){if(this.Ka){var a=Ta.fa();if(void 0!==a)return a=a.find(({brand:b})=>this.ra===b),new Sa(a.version)}if(ab)return this.La}load(){const a=this;return k(function*(){if(a.Ka){var b=yield Ta.load();if(void 0!==b)return b=b.find(({brand:c})=>a.ra===c),new Sa(b.version)}else yield 0;ab=!0;return a.La}())}}let ab=!1;function bb(){return k(function*(){G()&&(yield Ta.load());ab=!0}())}
function cb(a){let b="";98<=Za()||(b=Ya(a));const c="Silk"!==a&&G();if(c){if(!E.brands.find(({brand:d})=>d===a))return}else if(""===b)return;return new $a(a,c,b)}function db(a){if(G()){var b=cb(a);return b?(b=b.fa())?b.ib:E.brands.find(({brand:c})=>c===a).version:""}return Ya(a)};/*

 SPDX-License-Identifier: Apache-2.0
*/
class eb{constructor(a){this.isValid=a}}function M(a){return new eb(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const fb=[M("data"),M("http"),M("https"),M("mailto"),M("ftp"),new eb(a=>/^[^:]*([/?#]|$)/.test(a))];function gb(a,b=fb){if(a instanceof D)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof eb&&d.isValid(a))return new D(a,Ha)}}const hb="function"===typeof URL;var N=function(a){this.Xa=a||"";oa||(oa=new u);this.bb=oa};N.prototype.qa=!0;N.prototype.ja=!0;N.prototype.Ga=!0;N.prototype.ab=!0;N.prototype.Fa=!1;N.prototype.Ha=!1;var O=function(a){return 10>a?"0"+a:String(a)},ib=function(a){N.call(this,a)};ca(ib,N);
var jb=function(a,b){var c=[];c.push(a.Xa," ");if(a.ja){var d=new Date(b.la);c.push("[",O(d.getFullYear()-2E3)+O(d.getMonth()+1)+O(d.getDate())+" "+O(d.getHours())+":"+O(d.getMinutes())+":"+O(d.getSeconds())+"."+O(Math.floor(d.getMilliseconds()/10)),"] ")}if(a.Ga){d=c.push;var e=a.bb.get();e=(b.la-e)/1E3;var f=e.toFixed(3),g=0;if(1>e)g=2;else for(;100>e;)g++,e*=10;for(;0<g--;)f=" "+f;d.call(c,"[",f,"s] ")}a.ab&&c.push("[",b.ga,"] ");a.Ha&&c.push("[",b.ba.name,"] ");c.push(b.getMessage());a.Fa&&(b=
b.Y,void 0!==b&&c.push("\n",b instanceof Error?b.message:String(b)));a.qa&&c.push("\n");return c.join("")};function kb(a=new ib){a.ja=!0;a.Ga=!1;a.Ha=!0}var nb=class{constructor(a){this.name=a;this.target=A(B(),a).ya}log(a,b){C(this.target,null!=a?a:lb,b)}error(a){C(this.target,pa,a)}warn(a){C(this.target,x,a)}info(a){C(this.target,qa,a)}debug(a){C(this.target,lb,a)}trace(a){C(this.target,mb,a)}},Ca=A(B(),"").ya,lb=new v("DEBUG",600),mb=new v("TRACE",100);y.push(lb);y.push(mb);function ob(a){switch(a.type){case 0:return a.object;case 1:return Error(a.message);case 2:return new r(a.code,ka(a.category),a.message);case 3:return new ma(a.errors.map(ob),a.message)}};var pb=function(a,...b){return k(function*(){const c=new la;chrome.runtime.sendMessage({method:a,args:b},d=>{const e=chrome.runtime.lastError;e?c.reject(new r(1,p,`Operation '${String(a)}' failed. ${e.message||"Undefined error."}`)):d.error?c.reject(ob(d.error)):c.resolve(d.output)});return c.promise}())},qb=function(a){for(const [c,d]of a.Ba){const e=c;var b=d;if(da.every(f=>e.has(f)))return b}b={};for(const c of da)Object.defineProperty(b,c,{value:(...d)=>pb(c,...d),writable:!1});a.Ba.set(new Set(da),
b);return b},P=function(a,b){let c=a.events.get(b);if(!c){const d=chrome.runtime.connect({name:b});c={port:d,source:new na,Ca:[]};d.onMessage.addListener(e=>{e=null===e?void 0:e;const f=c.Ca.shift();f?f.resolve(e):c.source.publish(e)});a.events.set(b,c)}return c},Q=function(a,b){a=P(a,b);b=new la;a.Ca.push(b);a.port.postMessage({});return b.promise},rb=class{constructor(){this.events=new Map;this.Ba=new Map}};let sb=void 0;var tb=function(){};function ub(){return k(function*(){return new Promise((a,b)=>{chrome.runtime.getPlatformInfo(c=>{const d=chrome.runtime.lastError;d&&b(new r(1,p,d.message||"Call to c.r.getPlatformInfo failed."));a(c)})})}())}function vb(a){switch(a){case "mac":return 1;case "win":return 2;case "cros":return 4;case "linux":return 3;default:return 0}}function wb(){switch(K()?I()?2:Wa()?4:1:J()?3:0){case 2:return"Microsoft Edge";case 1:return"Chromium";case 3:return"Firefox";case 4:return"Opera"}}
function xb(){return k(function*(){const a=wb();return a?(yield bb(),db(a)):""}())}function yb(){return k(function*(){var a=yield ub();a=vb(a.os);const b=yield xb();return{ha:a,Ua:{browser:K()?I()?2:Wa()?4:1:J()?3:0,version:b,kb:c=>0<=La(b,c),lb:c=>0>=La(b,c)},nb:{version:chrome.runtime.getManifest().version,mb:chrome.runtime.getManifest().manifest_version}}}())};function zb(a,b=`unexpected value ${a}!`){throw Error(b);};function Ab(a,b){if(b instanceof D)b=Ga(b);else{b:if(hb){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.href=b)};function Bb(a){switch(a.ha){case 2:return"https://dl.google.com/tag/s/appguid=%7B5289EAA4-96AA-881C-BCCA-C3A9D2D95347%7D&appname=SecureConnect-Win&needsadmin=false/secureconnect/install/win/regular/EndpointVerification.exe";case 1:return"https://dl.google.com/dl/secureconnect/install/mac/EndpointVerification.dmg";case 3:return"https://support.google.com/a/users/answer/9018161?hl=en#linuxhelper";default:return"#"}}
function R(a,b,c){b=`[${"data-template-id"}='${b}']`;return a.querySelector(void 0!==c?b+`[${"data-variation"}='${c}']`:b+":not([data-variation])")}function S(a,b,c="element"){b=`[${"data-part"}='${b}']`;"element"!==c&&(b=`${c}${b}`);return a.querySelector(b)}function T(a,b="element"){var c=document;a=`#${a}`;"element"!==b&&(a=`${b}${a}`);return c.querySelector(a)}
function U(a,b){a=a.classList;void 0!==b.visible&&a.toggle("invisible",!b.visible);void 0!==b.display&&a.toggle("hidden",!b.display);void 0!==b.active&&a.toggle("is-active",b.active)}function Cb(a){for(;a.firstChild;)a.removeChild(a.firstChild)}const V=new nb("PopupPresenter");
var Db=function(a){k(function*(){a.ka.disabled=!0;try{yield a.background.uiEvent({event:"Sync Button Click"})}catch(b){V.warn(`Failed to send '${"Sync Button Click"}' event notification. ${b.message}`)}finally{a.ka.disabled=!1}}())},Eb=function(a){k(function*(){a.S.disabled=!0;try{yield a.background.uiEvent({event:"VPN Button Click"})}catch(b){V.warn(`Failed to send '${"VPN Button Click"}' UI notification. ${b.message}`)}finally{a.S.disabled=!1}}())},Fb=function(a,b){U(a.eb,{active:b})},Hb=function(a,
b){var c=0!==b;let d=R(a.U,"sync-banner");d&&!c?d.remove():c&&(d||(d=a.cb.cloneNode(!0),a.U.prepend(d)),c=S(d,"error-content","span"),Cb(c),a=Gb(a,b),null!==a&&"string"===typeof a?c.textContent=a:c.append(a))},Mb=function(a,b){V.trace(()=>`Updating state using ${JSON.stringify(b)}.`);var c=b.items,d=c.filter(g=>g.isManaged);a.V=d.some(g=>g.isEnabledForVpn);Ib(a);if(0===d.length){Cb(a.va);U(a.Ia,{display:!1});U(a.R,{display:!0});U(a.Qa,{display:0!==c.length});d=Math.min(c.length,4);for(var e=0;e<d;++e)a.va.append(Jb(a,
c[e]))}else{U(a.Ia,{display:!0});U(a.R,{display:!1});U(a.oa,{display:!0});U(a.Ma,{display:!1});c=new Set(a.v.keys());var f=new Set(d.map(g=>g.id));for(e of d){let g=a.v.get(e.id);g||(g=Kb(a,e),a.v.set(e.id,g),a.oa.append(g));Lb(a,g,e,1<d.length)}for(const g of c)f.has(g)||(a.v.get(g).remove(),a.v.delete(g));d=Math.min(...d.map(g=>{let h;return null!=(h=g.syncTimestamp)?h:0}));d=0!==d?`${chrome.i18n.getMessage("last_sync_date")}: ${(new Date(d)).toLocaleString()}`:chrome.i18n.getMessage("no_sync_date");
a.fb.textContent=d||"PLACEHOLDER";componentHandler.upgradeDom()}},Pb=function(a,b){V.trace(()=>`Selected Account: '${b}'.`);a.B!==b&&(Nb(a,a.B,!1),Ob(a,a.B,!1),a.B=b,Nb(a,a.B,1===a.o),Ob(a,a.B,!0))},Rb=function(a,b){V.trace(()=>`VPN state: ${b}.`);a.o=b;const c=1===a.o;0!==a.o&&(a.na=void 0);Nb(a,a.B,c);Qb(a);Ib(a)},Sb=function(a,b){V.trace(()=>`VPN error: ${b}.`);void 0!==b&&(a.na=b,Ib(a))},Gb=function(a,b){switch(b){case 0:return"";case 99:return a.getMessage("sync_error_text");case 2:return b=
R(a.H,"error-content",`native-messaging:${1===a.runtime.Ua.browser?"chrome":"generic"}`).cloneNode(!0),Ab(S(b,"download-link","a"),gb(Bb(a.runtime))),b;case 4:return a.getMessage("data_integrity_error_text");case 3:b=a.getMessage("data_protection_key_error_text");a:switch(a.runtime.ha){case 2:var c="https://support.google.com/a?p=ev_data_key_troubleshooting_win";break a;case 1:c="https://support.google.com/a?p=ev_data_key_troubleshooting_osx";break a;default:c="https://support.google.com/a?p=ev_troubleshooting"}return Tb(a,
b,c);case 11:return Tb(a,a.getMessage("dpapi_failure_error_text"),"https://support.google.com/a?p=ev_dpapi_troubleshooting");case 21:return Tb(a,a.getMessage("keychain_auth_error_text"),"https://support.google.com/a?p=ev_keychain_troubleshooting");case 22:return a.getMessage("keychain_locked_error_text");case 1:return a.getMessage("admin_install_required_text");case 32:return a.getMessage("platform_keys_inaccessible_text");case 5:return a.getMessage("network_failure_text");case 100:return"";case 110:return"";
default:zb(b,void 0)}},Nb=function(a,b,c){b&&(a=a.v.get(b))&&U(S(S(a,"avatar"),"spinner"),{active:c,display:c})},Ob=function(a,b,c){b&&(a=a.v.get(b))&&(S(a,"account-selector","input").checked=c)},Qb=function(a){const b=2===a.o,c=0===a.o;for(const [d,e]of a.v){const f=e,g=d===a.B,h=S(f,"account-selector","input");h.checked=g;U(h,{display:c&&1<a.v.size});U(S(f,"connection-indicator"),{display:b&&g})}},Ib=function(a){k(function*(){const b=0===a.o;var c=void 0!==a.na;let d=R(a.U,"vpn-banner");d&&!a.V&&
(c||d.remove());if(a.V||c){d||(d=a.jb.cloneNode(!0),a.U.append(d));let e="null";if(c){e="error";c=S(d,"error-content","span");Cb(c);const f=Ub(a,a.na);null!==f&&"string"===typeof f?c.textContent=f:c.append(f);try{yield a.background.uiEvent({event:"VPN Error Shown"})}catch(g){V.warn(`Failed to send '${"VPN Error Shown"}' UI notification. ${g.message}`)}}else switch(a.o){case 0:e="disconnected";break;case 1:e="connecting";break;case 2:e="connected";break;default:zb(a.o,void 0)}d.setAttribute("data-active-item",
e)}U(a.S,{display:!b||a.V});a.S.setAttribute("data-active-item",b?"connect":"disconnect")}())},Jb=function(a,b){a=a.Oa.cloneNode(!0);S(a,"email","span").textContent=b.email;return a},Kb=function(a,b){const c=a.Na.cloneNode(!0);c.id=`account-${b.id}`;S(c,"account-selector","input").addEventListener("click",()=>{Vb(a,b.id);return!1});return c},Lb=function(a,b,c,d){c.isEnabledForVpn?b.setAttribute("data-vpn-enabled",""):b.removeAttribute("data-vpn-enabled");var e=S(b,"picture","img");var f=gb(c.photoUrl,
fb)||Ia;e.src=Ga(f);S(b,"display-name","span").textContent=c.displayName;S(b,"email","span").textContent=c.email;c=c.id===a.B;e=2===a.o;a=0===a.o;f=S(b,"account-selector","input");f.checked=c;U(f,{display:a&&d});U(S(b,"connection-indicator"),{display:c&&e})},Ub=function(a,b){switch(b){case 1:case 8:b=R(a.H,"error-content","native-messaging:generic").cloneNode(!0);a:switch(a.runtime.ha){case 2:a="https://dl.google.com/dl/secureconnect/install/win/admin_helper/BCEClientConnector.msi";break a;case 1:a=
"https://dl.google.com/dl/secureconnect/install/mac/admin_helper/BCEClientConnector.dmg";break a;default:a="https://cloud.google.com/beyondcorp-enterprise/"}Ab(S(b,"download-link","a"),gb(a));return b;case 2:return a.getMessage("get_auth_token_error_text");case 3:return a.getMessage("vpn_auth_verification_failed_text");case 4:return a.getMessage("vpn_connection_timed_out_text");case 5:return a.getMessage("vpn_connection_reset_text");case 6:return a.getMessage("vpn_connection_tls_error_text");case 7:return a.getMessage("vpn_adapter_error_text");
case 10:return a.getMessage("vpn_network_not_available_text");default:return a.getMessage("vpn_generic_error_text")}},Vb=function(a,b){k(function*(){try{yield a.background.uiEvent({event:"Account Selector Click",accountId:b})}catch(c){V.warn(`Failed to send '${"Account Selector Click"}' UI notification. ${c.message}`)}}())},Tb=function(a,b,c){a=a.Ra.cloneNode(!0);S(a,"text","span").textContent=b;Ab(S(a,"help-link","a"),gb(c));return a},Xb=class{constructor(a){var b=Wb;this.g=b;this.runtime=a;this.v=
new Map;this.V=!1;this.o=0;this.background=qb(b);this.H=T("templates");this.cb=R(this.H,"sync-banner");this.jb=R(this.H,"vpn-banner");this.Ra=R(this.H,"error-content","text_and_help_link");this.Na=R(this.H,"account");this.Oa=R(this.H,"account-tooltip");this.R=T("signin-view");this.Qa=S(this.R,"disabled-accounts");this.va=S(this.R,"account-list");this.U=T("banners");a=T("accounts");this.Ma=S(a,"load-indicator");this.oa=S(a,"account-list");this.S=T("vpn-button","button");this.Ia=T("sync-view");this.fb=
S(T("sync-status"),"content","span");this.ka=T("sync-button","button");this.eb=T("sync-spinner");a=document.querySelectorAll("[data-requires-sku]:not([data-requires-sku=external])");for(const c of a)c.remove()}initialize(){const a=this;return k(function*(){S(a.R,"add-account","button").onclick=()=>{chrome.tabs.create({url:"https://accounts.google.com/addsession"})};a.ka.onclick=()=>{Db(a)};a.S.onclick=()=>{Eb(a)};P(a.g,"sync/inProgress:change").source.subscribe(c=>{Fb(a,c)});Fb(a,yield Q(a.g,"sync/inProgress:change"));
P(a.g,"sync:completion").source.subscribe(c=>{Hb(a,c)});Hb(a,yield Q(a.g,"sync:completion"));P(a.g,"accounts:update").source.subscribe(c=>{Mb(a,c)});var b=yield Q(a.g,"accounts:update");if(!b)try{b=yield a.background.getAccounts()}catch(c){V.warn(`Failed to retrieve accounts. ${c.message}`)}b&&Mb(a,b);P(a.g,"accounts/selectedId:change").source.subscribe(c=>{Pb(a,c)});Pb(a,yield Q(a.g,"accounts/selectedId:change"));P(a.g,"vpn/state:change").source.subscribe(c=>{Rb(a,c)});Rb(a,yield Q(a.g,"vpn/state:change"));
P(a.g,"vpn/error:change").source.subscribe(c=>{Sb(a,c)});Sb(a,yield Q(a.g,"vpn/error:change"));b=document.querySelectorAll("[data-i18n]");for(const c of b)b=c.getAttribute("data-i18n"),c.textContent=chrome.i18n.getMessage(b)||chrome.i18n.getMessage(`${b}_${"external"}`)||"PLACEHOLDER"}())}getMessage(a){const b=chrome.i18n?chrome.i18n.getMessage(a):"";return void 0===b?(V.warn(`i18n key '${a}' not found.`),"PLACEHOLDER"):b}};var Yb=function(){m(this.pa,this);this.O=new ib;this.O.ja=!1;this.O.Fa=!1;this.O.qa=!1;this.Ta={}};Yb.prototype.pa=function(a){function b(f){if(f){if(f.value>=pa.value)return"error";if(f.value>=x.value)return"warn";if(f.value>=ra.value)return"log"}return"debug"}if(!this.Ta[a.ga]){var c=jb(this.O,a),d=Zb;if(d){var e=b(a.ba);$b(d,e,c,a.Y)}}};var Zb=l.console,$b=function(a,b,c,d){if(a[b])a[b](c,void 0===d?"":d);else a.log(c,void 0===d?"":d)};class ac{constructor(a,b){this.Va=100;this.Pa=a;this.Ya=b;this.ca=0;this.aa=null}get(){let a;0<this.ca?(this.ca--,a=this.aa,this.aa=a.next,a.next=null):a=this.Pa();return a}put(a){this.Ya(a);this.ca<this.Va&&(this.ca++,a.next=this.aa,this.aa=a)}};var bc=function(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};var cc,dc=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=bc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=m(function(n){if(("*"==h||n.origin==h)&&n.data==g)this.port1.onmessage()},this);f.addEventListener("message",
e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!Va()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ta;c.ta=null;e()}};return function(e){d.next={ta:e};d=d.next;b.port2.postMessage(0)}}return function(e){l.setTimeout(e,0)}};function ec(a){l.setTimeout(()=>{throw a;},0)};class fc{constructor(){this.da=this.N=null}add(a,b){const c=gc.get();c.set(a,b);this.da?this.da.next=c:this.N=c;this.da=c}remove(){let a=null;this.N&&(a=this.N,this.N=this.N.next,this.N||(this.da=null),a.next=null);return a}}var gc=new ac(()=>new hc,a=>a.reset());class hc{constructor(){this.next=this.scope=this.fn=null}set(a,b){this.fn=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.fn=null}};let ic,jc=!1,kc=new fc,mc=(a,b)=>{ic||lc();jc||(ic(),jc=!0);kc.add(a,b)},lc=()=>{if(l.Promise&&l.Promise.resolve){const a=l.Promise.resolve(void 0);ic=()=>{a.then(nc)}}else ic=()=>{var a=nc;"function"!==typeof l.setImmediate||l.Window&&l.Window.prototype&&!H()&&l.Window.prototype.setImmediate==l.setImmediate?(cc||(cc=dc()),cc(a)):l.setImmediate(a)}};var nc=()=>{let a;for(;a=kc.remove();){try{a.fn.call(a.scope)}catch(b){ec(b)}gc.put(a)}jc=!1};var X=function(a){this.j=0;this.Ea=void 0;this.I=this.A=this.G=null;this.Z=this.ea=!1;if(a!=tb)try{var b=this;a.call(void 0,function(c){W(b,2,c)},function(c){W(b,3,c)})}catch(c){W(this,3,c)}},oc=function(){this.next=this.context=this.K=this.P=this.C=null;this.T=!1};oc.prototype.reset=function(){this.context=this.K=this.P=this.C=null;this.T=!1};var pc=new ac(function(){return new oc},function(a){a.reset()}),qc=function(a,b,c){var d=pc.get();d.P=a;d.K=b;d.context=c;return d};
X.prototype.then=function(a,b,c){return rc(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};X.prototype.$goog_Thenable=!0;X.prototype.Ja=function(a,b){return rc(this,null,a,b)};X.prototype.catch=X.prototype.Ja;X.prototype.cancel=function(a){if(0==this.j){var b=new Y(a);mc(function(){sc(this,b)},this)}};
var sc=function(a,b){if(0==a.j)if(a.G){var c=a.G;if(c.A){for(var d=0,e=null,f=null,g=c.A;g&&(g.T||(d++,g.C==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.j&&1==d?sc(c,b):(f?(d=f,d.next==c.I&&(c.I=d),d.next=d.next.next):tc(c),uc(c,e,3,b)))}a.G=null}else W(a,3,b)},wc=function(a,b){a.A||2!=a.j&&3!=a.j||vc(a);a.I?a.I.next=b:a.A=b;a.I=b},rc=function(a,b,c,d){var e=qc(null,null,null);e.C=new X(function(f,g){e.P=b?function(h){try{var n=b.call(d,h);f(n)}catch(L){g(L)}}:f;e.K=c?function(h){try{var n=c.call(d,
h);void 0===n&&h instanceof Y?g(h):f(n)}catch(L){g(L)}}:g});e.C.G=a;wc(a,e);return e.C};X.prototype.gb=function(a){this.j=0;W(this,2,a)};X.prototype.hb=function(a){this.j=0;W(this,3,a)};
var W=function(a,b,c){if(0==a.j){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.j=1;a:{var d=c,e=a.gb,f=a.hb;if(d instanceof X){wc(d,qc(e||tb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(L){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if("object"==h&&null!=d||"function"==h)try{var n=d.then;if("function"===typeof n){xc(d,n,e,f,a);g=!0;break a}}catch(L){f.call(a,L);g=!0;break a}g=!1}}}g||(a.Ea=c,a.j=b,a.G=null,vc(a),3!=b||c instanceof Y||yc(a,c))}},
xc=function(a,b,c,d,e){var f=!1,g=function(n){f||(f=!0,c.call(e,n))},h=function(n){f||(f=!0,d.call(e,n))};try{b.call(a,g,h)}catch(n){h(n)}},vc=function(a){a.ea||(a.ea=!0,mc(a.Sa,a))},tc=function(a){var b=null;a.A&&(b=a.A,a.A=b.next,b.next=null);a.A||(a.I=null);return b};X.prototype.Sa=function(){for(var a;a=tc(this);)uc(this,a,this.j,this.Ea);this.ea=!1};
var uc=function(a,b,c,d){if(3==c&&b.K&&!b.T)for(;a&&a.Z;a=a.G)a.Z=!1;if(b.C)b.C.G=null,zc(b,c,d);else try{b.T?b.P.call(b.context):zc(b,c,d)}catch(e){Ac.call(null,e)}pc.put(b)},zc=function(a,b,c){2==b?a.P.call(a.context,c):a.K&&a.K.call(a.context,c)},yc=function(a,b){a.Z=!0;mc(function(){a.Z&&Ac.call(null,b)})},Ac=ec,Y=function(a){t.call(this,a)};ca(Y,t);Y.prototype.name="cancel";var Bc=function(a,b){if("function"!==typeof a)if(a&&"function"==typeof a.handleEvent)a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},Cc=function(a){var b=null;return(new X(function(c,d){b=Bc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).Ja(function(c){l.clearTimeout(b);throw c;})};const Wb=new rb,Dc=qb(Wb);(function(){Ea(sa);const a=new Yb;kb(a.O);Da(c=>{const d=c.ba;d&&d.value>=x.value&&a.pa(c)});let b=!1;Da(c=>{if(!b){b=!0;try{var d=Dc.recordLog;var e={t:c.la,l:c.ba.value,m:c.getMessage(),n:c.ga,s:c.Za};d.call(Dc,e)}catch(f){}finally{b=!1}}})})();const Z=new nb("Popup Script");
function Ec(){k(function*(){Z.debug("Initializing...");const a=yield yb();if(sb)throw new r(416,fa,"Runtime Info has already been initialized.");sb=a;for(var b=1;10>=b;++b)try{yield Dc.hello();break}catch(d){const e=d;if(10<=b)throw Z.error(`Failed to communicate with background page after ${b} attempts. ${e.message}`),e;yield Cc(100+(15<<b))}b=yield Q(Wb,"log/level:change");b=ta(b);Ea(b);let c;Z.warn(`Log level is set to ${null==(c=Fa())?void 0:c.name}.`);P(Wb,"log/level:change").source.subscribe(d=>
{d=ta(d);Ea(d);let e;Z.warn(`Log level is set to ${null==(e=Fa())?void 0:e.name}.`)});try{yield Dc.uiEvent({event:"Popup Load"})}catch(d){Z.warn(`Failed to send '${"Popup Load"}' event notification. ${d.message}`)}yield(new Xb(a)).initialize();Z.debug("Done.")}())}document.addEventListener("DOMContentLoaded",()=>{Z.trace("Handling DOMContentLoaded...");Ec()});const Fc=document.querySelector("#templates");
null==Fc||Fc.addEventListener("mdl-componentupgrading",a=>{Z.info("Handling mdl-componentupgrading...");a.preventDefault()});