(()=>{var e={300:(e,t)=>{"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{const e=n(300),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({place:"seo"})};(async()=>{const n=await e("https://backend.moinkhanif.dev/api/v1/weathery",t),o=await n.json();console.log(o)})()})()})();