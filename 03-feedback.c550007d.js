!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),g=Object.prototype.toString,v=Math.max,m=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,l=setTimeout(O,t),s?p(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function O(){var e=y();if(j(e))return T(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?m(n,a-(e-c)):n}(e))}function T(e){return l=void 0,g&&o?p(e):(o=i=void 0,u)}function w(){var e=y(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return S(f);if(d)return l=setTimeout(O,t),p(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(h(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},w.flush=function(){return void 0===l?u:T(y())},w}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var S=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e.name),console.log(e.message)}},j=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.name),console.log(e.message)}},O=function(e){try{localStorage.removeItem(e);return}catch(e){console.log(e.name),console.log(e.message)}},T=document.querySelector(".feedback-form"),w=(T.querySelector("button"),T.querySelector("input")),x=T.querySelector("textarea"),N="feedback-form-state",E=j(N)||{message:"",email:""};console.log(E),w.value=E.email,x.value=E.message,T.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,o=t.value;E[n]=o,S(N,E)}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),console.log(j(N)),""===E.email||""===E.message?alert("заповніть пусті строки"):(O(N),e.currentTarget.reset(),console.log(E))}))}();
//# sourceMappingURL=03-feedback.c550007d.js.map