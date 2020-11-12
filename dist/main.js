(()=>{var n={735:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const o=i},740:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var r=t(645),i=t.n(r),o=t(667),a=t.n(o),s=t(874),d=t.n(s),c=i()((function(n){return n[1]})),l=a()(d());c.push([n.id,"*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  padding: 0 10px;\r\n  background-color: #fff8ee;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 7vh;\r\n  padding: 10px 0;\r\n}\r\n\r\n.logo {\r\n  width: 80vw;\r\n  text-align: center;\r\n  font-size: 1.7rem;\r\n  font-family: 'Merienda', cursive;\r\n}\r\n\r\n.logo a,\r\n.weather-div h2 {\r\n  color: #c25b05;\r\n}\r\n\r\n.main-nav {\r\n  height: 35px;\r\n  width: 35px;\r\n  cursor: pointer;\r\n  background-image: url("+l+');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.main-nav ul {\r\n  position: absolute;\r\n  margin-top: 9vh;\r\n  height: 93vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  left: 100vw;\r\n  top: 0;\r\n  overflow-x: hidden;\r\n  transition: left 200ms;\r\n  background-color: #fff;\r\n  padding-top: 20px;\r\n}\r\n\r\n.main-nav .nav-appear {\r\n  left: 0;\r\n}\r\n\r\n.main-nav li {\r\n  margin: 10px auto;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.fetch-error {\r\n  color: red;\r\n  margin: 50px auto;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.info-div li {\r\n  margin: 10px auto;\r\n}\r\n\r\n.city-search-form label li {\r\n  padding: 20px 30px;\r\n  cursor: pointer;\r\n  background-color: rgb(241, 241, 241);\r\n  border-bottom: 2px solid rgb(211, 211, 211);\r\n}\r\n\r\n.main-nav li:hover {\r\n  background-color: rgba(0, 0, 0, 0.062);\r\n}\r\n\r\nmain {\r\n  min-height: 85vh;\r\n  padding-top: 20px;\r\n  max-width: 80%;\r\n  margin: auto;\r\n}\r\n\r\n.city-search-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 100%;\r\n  transition: max-height 0.55s ease-out;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.city-search-form.shrink {\r\n  max-height: 70px;\r\n  transition: max-height 0.55s ease-in;\r\n}\r\n\r\n.city-search-form.shrink textarea {\r\n  padding-bottom: 0;\r\n}\r\n\r\n.city-search-form input,\r\n.city-search-input {\r\n  width: 100%;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.city-search-input {\r\n  word-wrap: break-word;\r\n  word-break: break-all;\r\n}\r\n\r\n.city-search-form input[type="submit"] {\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.loader {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.loader > div {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 100%;\r\n  border-top: 16px solid #3498db;\r\n  width: auto;\r\n  height: 100%;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n.weather-div {\r\n  text-align: center;\r\n}\r\n\r\n.weather-div h2 {\r\n  margin: 25px auto;\r\n}\r\n\r\n.weather-depict {\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: #3498db;\r\n  margin: auto;\r\n}\r\n\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\nfooter {\r\n  min-height: 1vh;\r\n}\r\n',""]);const p=c},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},300:(n,e)=>{"use strict";var t=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();n.exports=e=t.fetch,t.fetch&&(e.default=t.fetch.bind(t)),e.Headers=t.Headers,e.Request=t.Request,e.Response=t.Response},379:(n,e,t)=>{"use strict";var r,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],i=0;i<n.length;i++){var s=n[i],d=e.base?s[0]+e.base:s[0],c=t[d]||0,l="".concat(d," ").concat(c);t[d]=c+1;var p=a(l),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(o[p].references++,o[p].updater(h)):o.push({identifier:l,updater:f(h,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function h(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var u=null,m=0;function f(n,e){var t,r,i;if(e.singleton){var o=m++;t=u||(u=d(e)),r=p.bind(null,t,o,!1),i=p.bind(null,t,o,!0)}else t=d(e),r=h.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var d=s(n,e),c=0;c<t.length;c++){var l=a(t[c]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=d}}}},874:n=>{n.exports="data:image/svg+xml,%3Csvg styles='fill: white' height='384pt' viewBox='0 -53 384 384' width='384pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0'/%3E%3Cpath d='m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0'/%3E%3Cpath d='m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0'/%3E%3C/svg%3E"}},e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";var n=t(379),e=t.n(n),r=t(735);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=t(740);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const o=t(300),a=({instantPlace:n={},place:e={}})=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instantPlace:n,place:e})}),s=n=>{for(;n.firstChild;)n.removeChild(n.firstChild)};let d;document.querySelector(".main-nav").addEventListener("click",(n=>{n.target===document.querySelector(".main-nav")&&n.target.querySelector(".main-nav ul").classList.toggle("nav-appear")})),document.querySelector('.city-search-form input[type="submit"]').addEventListener("click",(n=>{n.preventDefault();const e=document.querySelector(".city-search-input").value.split(", ");(async n=>{const e=await o("https://backend.moinkhanif.dev/api/v1/weathery",a({place:n})),t=await e.json(),{weatherInfo:r}=t;(n=>{const e=document.querySelector("main").childNodes[1];if(s(e),n.message){const t=e.appendChild(document.createElement("p"));t.className="fetch-error",t.textContent="Error! "+n.message}else{e.appendChild(document.createElement("h2")).textContent=n.name;const t=e.appendChild(document.createElement("img"));t.classList.add("weather-depict");const r=n.gify.data[Math.floor(10*Math.random())];t.setAttribute("src",r.images.original.url);const i=e.appendChild(document.createElement("ul"));i.classList.add("info-div"),i.appendChild(document.createElement("li")).innerHTML=`<b>Temperature</b>: ${n.main.temp}°C`,i.appendChild(document.createElement("li")).innerHTML="<b>Weather description</b>: "+n.weather[0].description,i.appendChild(document.createElement("li")).innerHTML=`<b>Wind Speed</b>: ${n.wind.speed}m/s`}})(r)})(`${e[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"")}, ${e[e.length-1].normalize("NFD").replace(/[\u0300-\u036f]/g,"")}`)})),document.querySelector(".city-search-input").addEventListener("input",(n=>{clearTimeout(d);const e=n.target.parentElement.childNodes[1],t=n.target.value;if(s(e),""!==t&&t.length>=2){const r=e.appendChild(document.createElement("li"));r.classList.add("loader"),r.appendChild(document.createElement("div")),d=setTimeout((()=>{(async(n,e)=>{const t=await o("https://backend.moinkhanif.dev/api/v1/weathery",a({instantPlace:e})),r=await t.json();console.log(r);const i=n.target.parentElement.childNodes[1],d={};s(i),r.places.forEach((e=>{const t=i.appendChild(document.createElement("li"));t.innerHTML=e.display_name,d[e.display_name]=e,t.addEventListener("click",(e=>{n.target.value=d[e.target.textContent].display_name,s(i)}))}))})(n,t)}),600)}}))})()})();