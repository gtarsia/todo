(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6358)}])},6358:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Nt}});var r=n(5893),o=n(7294),i=n(4184),a=n.n(i),c=n(8172),u=n(4671),s=n(4051),l=n.n(s),f="documents",d="selected-document",v=function(t){return"documents:".concat(t,":tasks")};function p(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,c,"next",t)}function c(t){p(i,r,o,a,c,"throw",t)}a(void 0)}))}}var x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e=t.prototype;return e.saveDocuments=function(t){return m(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem(f,JSON.stringify(t));case 1:case"end":return e.stop()}}),e)})))()},e.getDocuments=function(){return m(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem(f),t.abrupt("return",e?JSON.parse(e):[]);case 2:case"end":return t.stop()}}),t)})))()},e.saveSelectedDocument=function(t){return m(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem(d,t);case 1:case"end":return e.stop()}}),e)})))()},e.getSelectedDocument=function(){return m(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",localStorage.getItem(d)||"");case 1:case"end":return t.stop()}}),t)})))()},t}(),h=n(7557),g=n.n(h);function y(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))}}var b=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e=t.prototype;return e.getTasks=function(t){return k(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem(v(t)),e.abrupt("return",n?JSON.parse(n):[]);case 2:case"end":return e.stop()}}),e)})))()},e.saveTasks=function(t,e){return k(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=e.map((function(t){return g()(t,"ref")})),localStorage.setItem(v(t),JSON.stringify(e));case 2:case"end":return n.stop()}}),n)})))()},t}(),w=new x,S=new b,j=(0,u.Z)((function(t,e){return{documents:[],documentId:"",document:function(){var t=e(),n=t.documents,r=t.documentId;return n.filter((function(t){return t&&t.id===r}))[0]}}}));function A(t){j.setState({documents:t}),w.saveDocuments(t)}var I=n(5934);function N(t){var e=j.getState().documents,n=(0,c.ZP)(e,(function(e){e.push(function(t){return{id:(0,I.Z)(),name:t}}(t))}));A(n)}function D(t,e,n){var r=new Map;return n.forEach((function(t,e){r.set(t,e)})),t.map((function(t){if(null==t)return t;var n=e[t],o=r.get(n);return null==o?null:o}))}var O=(0,u.Z)((function(t){return{tasks:[],indexes:[],focusIndex:void 0}}));function _(t,e){var n=O.getState(),r=n.focusIndex,o=n.tasks;if(void 0!==r){var i=o[r],a=t.findIndex((function(t){return t===i}));a>-1&&(r=a)}var c=j.getState().documentId;c&&(O.setState({tasks:t,indexes:e,focusIndex:r}),0!==t.length&&S.saveTasks(c,t))}function E(t){var e,n;null===(e=O.getState().tasks[t])||void 0===e||null===(n=e.ref)||void 0===n||n.focus()}function P(t){E(t-1)}function T(){E(0)}function C(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function Z(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){C(i,r,o,a,c,"next",t)}function c(t){C(i,r,o,a,c,"throw",t)}a(void 0)}))}}function F(t){return L.apply(this,arguments)}function L(){return(L=Z(l().mark((function t(e){var n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getTasks(e);case 2:0===(n=t.sent).length&&n.push({checked:!1,text:"Write here...",indent:0,type:"task"}),r=n.map((function(t,e){return e})),O.setState({tasks:n,indexes:r,focusIndex:0}),setTimeout((function(){T()}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t,e){for(var n=e,r=1,o=t[e].indent,i=e+1;i<t.length;i+=1){if(!(t[i].indent>o))break;r+=1}return{start:n,count:r}}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function K(t){return function(t){if(Array.isArray(t))return B(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(t,e,n){var r,o,i=e.start<n.start?e:n,a=e.start<n.start?n:e,c=t.slice(i.start,i.start+i.count),u=(r=t).splice.apply(r,[a.start,a.count].concat(K(c)));(o=t).splice.apply(o,[i.start,i.count].concat(K(u)))}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z(t){return function(t){if(Array.isArray(t))return R(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t){!function(t){var e=O.getState(),n=(0,c.ZP)(e.tasks,(function(e){e[t].checked=!e[t].checked}));O.setState({tasks:n})}(t);var e=O.getState(),n=e.tasks,r=e.indexes,o=n[t].checked,i=n.slice(),a=n.slice(),u=r;if(o){var s,l=function(t,e){for(var n=e,r=t[e].indent,o=e;o<t.length;o+=1){var i=t[o];if(i.indent<r)break;i.indent!==r||i.checked||(n=o)}return n}(a,t),f=M(a,t),d=M(a,l);(s=a).splice.apply(s,[d.start+d.count,0].concat(z(n.slice(f.start,f.start+f.count)))),a.splice(t,f.count),u=D(r,i,a)}_(a,u),setTimeout((function(){E(t)}))}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function Q(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){H(i,r,o,a,c,"next",t)}function c(t){H(i,r,o,a,c,"throw",t)}a(void 0)}))}}function W(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(){return(X=Q(l().mark((function t(){var e,n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=W,t.next=3,Promise.all([w.getDocuments(),w.getSelectedDocument()]);case 3:t.t1=t.sent,e=(0,t.t0)(t.t1,2),n=e[0],r=e[1],j.setState({documents:n,documentId:r}),F(r);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){j.setState({documentId:""}),O.setState({tasks:[],indexes:[],focusIndex:void 0})}function Y(t,e){var n=j.getState().documents,r=(n=n.slice())[t];n[t]=n[e],n[e]=r,A(n)}var q=n(7761),V=n.n(q);function tt(t){return(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:a()(V().document,"grow px-4 py-1 mb-2 hover:bg-zinc-200","rounded-md cursor-pointer",t.selected?"selected":"",t.selected?"text-gray-700":" text-[#7C7C7A]",t.selected?"bg-[#F5F5F5]":""),onClick:function(){return e=t.doc.id,w.saveSelectedDocument(e),j.setState({documentId:e}),void F(e);var e},children:t.doc.name}),(0,r.jsx)("button",{className:"icon-button ml-0.5",onClick:function(){return function(t){var e=j.getState().documents.findIndex((function(e){return e.id===t}));0!==e&&Y(e,e-1)}(t.doc.id)},children:(0,r.jsx)("span",{className:"material-icons-outlined leading-6",children:"arrow_upward"})}),(0,r.jsx)("button",{className:"icon-button ml-0.5",onClick:function(){return function(t){var e=j.getState().documents,n=e.findIndex((function(e){return e.id===t}));n>=e.length-1||Y(n,n+1)}(t.doc.id)},children:(0,r.jsx)("span",{className:"material-icons-outlined leading-6",children:"arrow_downward"})}),(0,r.jsx)("button",{className:"icon-button ml-0.5",onClick:function(){var e=prompt("Enter new name for the document",t.doc.name);e&&function(t,e){var n=j.getState().documents,r=n.findIndex((function(e){return e.id===t}));-1!==r&&A(n=(0,c.ZP)(n,(function(t){t[r].name=e})))}(t.doc.id,e)},children:(0,r.jsx)("span",{className:"material-icons-outlined leading-6",children:"edit"})}),(0,r.jsx)("button",{className:"icon-button ml-0.5 ml-0.5",onClick:function(){confirm("Do you confirm deleting document ".concat(t.doc.name,"?"))&&function(t){var e=j.getState().documents;A(e=e.filter((function(e){return e.id!==t})))}(t.doc.id)},children:(0,r.jsx)("span",{className:"material-icons-outlined leading-6",children:"delete"})})]})}function et(){var t=j(),e=t.documents,n=t.documentId;return(0,r.jsx)("div",{children:e.map((function(t,e){return(0,r.jsx)(tt,{doc:t,selected:n===t.id},e)}))})}var nt=n(1122),rt=n.n(nt);function ot(){return(0,r.jsxs)("div",{className:"bg-white p-4 border-r h-full drop-shadow",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:a()(rt().documentListTitle,"text-gray-900 mb-6 grow"),children:"Documents"}),(0,r.jsx)("button",{className:"icon-button",onClick:function(){var t=prompt("What's the name of the new task?");t&&N(t)},children:(0,r.jsx)("span",{className:"material-icons-outlined cursor-pointer text-gray-600",children:"note_add"})})]}),(0,r.jsx)(et,{})]})}var it=n(3279),at=n.n(it);function ct(t){var e=t.selectionDirection,n=t.selectionStart,r=t.selectionEnd;return"forward"===e?r:n}var ut=n(8376),st=n.n(ut);function lt(t){var e=(0,o.useRef)(null);(0,o.useEffect)((function(){e.current&&(e.current.value=t.task.text)}),[t.task]),(0,o.useEffect)((function(){if(e.current){var n=e.current;r=t.index,o=n,O.getState().tasks[r].ref=o}var r,o}),[t.task,t.index]),(0,o.useEffect)((function(){var n=function(e){"Enter"===e.key&&(e.ctrlKey?(J(t.index),e.preventDefault()):(!function(t){for(var e=O.getState(),n=e.tasks,r=e.indexes,o=n.slice(),i=n[t].indent,a=t+1,u=a;a<n.length&&n[u].indent>i;u+=1)a=u+1;var s=(0,c.ZP)(n,(function(e){var r,o={checked:!1,text:"",indent:i,type:(null===(r=n[t])||void 0===r?void 0:r.type)||"task"};e.splice(a,0,o)})),l=D(r,o,s);l.push(a),_(s,l),setTimeout((function(){E(a)}))}(t.index),e.preventDefault())),"K"===e.key&&e.ctrlKey&&(!function(t){var e=O.getState();_((0,c.ZP)(e.tasks,(function(e){var n=e[t].type;e[t].type="task"===n?"discuss":"discuss"===n?"container":"task"})),e.indexes)}(t.index),e.preventDefault())},r=function(e){"ArrowUp"===e.key&&(e.ctrlKey?(!function(t){var e=O.getState(),n=e.tasks,r=e.indexes;if(0===t)return!1;var o=n.slice(),i=n.slice(),a=M(i,t),c=function(t,e){for(var n=e,r=t[e].indent,o=e-1;o>=0;o-=1){var i=t[o];if(i.indent<r)break;if(i.indent===r){n=o;break}}return n}(i,t);U(i,a,M(i,c)),_(i,D(r,o,i))}(t.index),e.preventDefault()):function(t){var e=t.value.indexOf("\n"),n=ct(t);return-1===e||e>=n}(o)&&(P(t.index),e.preventDefault())),"ArrowDown"===e.key&&(e.ctrlKey?(!function(t){var e=O.getState(),n=e.tasks,r=e.indexes;if(t>=n.length-1)return!1;var o=n.slice(),i=n.slice(),a=M(i,t),c=function(t,e){for(var n=e,r=t[e].indent,o=e+1;o<t.length;o+=1){var i=t[o];if(i.indent<r)break;if(i.indent===r){n=o;break}}return n}(i,t);U(i,a,M(i,c)),_(i,D(r,o,i))}(t.index),e.preventDefault()):function(t){var e=t.value.lastIndexOf("\n"),n=ct(t);return-1===e||e<n}(o)&&(E(t.index+1),e.preventDefault())),"Backspace"===e.key&&function(t){return 0===ct(t)}(o)&&!function(t){return t.selectionStart!==t.selectionEnd}(o)&&(!function(t){var e=O.getState(),n=e.tasks,r=e.indexes;if(!(n.length<2)){0===t?T():P(t);var o=n.slice(),i=n.slice();i.splice(t,1),_(i,D(r,o,i))}}(t.index),e.preventDefault()),"Tab"===e.key&&(e.shiftKey?function(t){var e=O.getState(),n=e.tasks,r=e.indexes;n[t].indent>0&&_((0,c.ZP)(n,(function(e){e[t].indent-=1})),r)}(t.index):function(t){var e=O.getState(),n=e.tasks,r=e.indexes;_((0,c.ZP)(n,(function(e){e[t].indent+=1})),r)}(t.index),e.preventDefault())};if(null===e||void 0===e?void 0:e.current){var o=e.current;return o.addEventListener("keypress",n),o.addEventListener("keydown",r),function(){o.removeEventListener("keypress",n),o.removeEventListener("keydown",r)}}}),[t.index]);var n=(0,o.useCallback)(at()((function(e){!function(t,e){var n=O.getState(),r=n.tasks,o=n.indexes;r[t].text=e,_(r,o)}(t.index,e)}),100),[t.index]),i="".concat(st().taskText," resize-none w-full text-lg\n    outline-none bg-gray-100 bg-opacity-0\n    hover:bg-gray-200/50\n    px-2 pb-1 relative top-1 rounded-lg\n    antialiased text-gray-800 h-8");return(0,r.jsx)("textarea",{className:i,ref:e,onChange:function(t){n(t.target.value)},onFocus:function(){return e=t.index,void O.setState({focusIndex:e});var e}})}var ft=(0,u.Z)((function(t){return{props:{task:{text:"",checked:!1,indent:0,type:"task"},index:-1},active:!1}}));function dt(t){ft.setState({props:t})}function vt(t){ft.setState({active:t})}function pt(){vt(!1)}function mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xt(t){var e=ft.getState();if(e.props.index!==t.index&&e.props.task.indent===t.task.indent){var n=function(t,e){var n=O.getState(),r=n.tasks,o=n.indexes,i=r.slice(),a=r.slice();return U(a,M(a,t),M(a,e)),_(a,D(o,i,a)),a.findIndex((function(e){return e===i[t]}))}(e.props.index,t.index);dt(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){mt(t,e,n[e])}))}return t}({},e.props,{index:n}))}}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gt(t){var e=ft.getState(),n=function(t,e){var n=O.getState(),r=n.tasks,o=n.indexes,i=(0,c.ZP)(r,(function(n){n[t].indent=e}));return _(i,o),i[t]}(e.props.index,t);dt(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){ht(t,e,n[e])}))}return t}({},e.props,{task:n}))}function yt(t){var e="bg-opacity-0 border-2 border-amber-500",n="bg-amber-400 text-white";t.checked;return(0,r.jsx)("div",{role:"checkbox","aria-checked":t.checked,"aria-labelledby":"task",className:a()("checkbox rounded-lg",t.checked?n:e),onClick:function(){return J(t.index)},draggable:"true",onDragStart:function(e){var n=document.createElement("img");n.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.dataTransfer.setDragImage(n,0,0),e.dataTransfer.effectAllowed="move",setTimeout((function(){var e;e=t.index,dt({task:O.getState().tasks[e],index:e}),vt(!0)}))},onDragEnd:pt,style:{width:"24px",height:"24px"},children:t.checked&&(0,r.jsx)("svg",{viewBox:"-5 0 35 25",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:(0,r.jsx)("path",{fill:"#FFFFFF",d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})})})}var kt=(0,o.memo)((function(t){var e="".concat(30*t.task.indent,"px");return(0,r.jsxs)("div",{className:"task flex absolute w-full",style:{left:e},children:[(0,r.jsx)(yt,{checked:t.task.checked,index:t.index}),(0,r.jsx)("div",{className:"ml-2",children:"task"===t.task.type?"\ud83d\udea9":"container"===t.task.type?"\ud83d\udce5":"\ud83d\udcac"}),(0,r.jsx)("div",{className:"ml-0.5 grow -m-2",children:(0,r.jsx)(lt,{task:t.task,index:t.index})})]})}));var bt=(0,u.Z)((function(t){return{focusMode:!1,focusIndexes:[]}}));function wt(){var t=bt.getState().focusMode,e=O.getState(),n=e.tasks,r=e.focusIndex;if(t){var o=[];o=null==r?n.map((function(){return!0})):function(t,e){var n=t.map((function(){return!1}));n[e]=!0;for(var r=t[e].indent,o=e+1;o<t.length&&t[o].indent>r;o+=1)n[o]=!0;return n}(n,r),bt.setState({focusIndexes:o})}}function St(){!function(t){bt.setState({focusMode:t}),wt()}(!bt.getState().focusMode)}function jt(t){var e=ft().active;return(0,r.jsx)("div",{className:"absolute w-full",style:{height:"24px",display:e?"block":"none"},children:[0,1,2,3,4].map((function(e,n){return(0,r.jsx)("div",{className:"w-4 absolute h-full",style:{left:30*e+"px",width:"30px"},onDragEnter:function(n){gt(e),xt(t)}},n)}))})}function At(){var t=O((function(t){return t.indexes})),e=O((function(t){return t.tasks})),n=bt(),o=n.focusIndexes,i=n.focusMode,c=j((function(t){return t.document()})),u=t.map((function(t,n){if(null==t)return null;var c=e[t],u="".concat(33*t,"px"),s=!i||o[t];return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:a()("task relative",s?"":"opacity-5"),style:{top:u},children:[(0,r.jsx)(kt,{task:c,index:t}),(0,r.jsx)(jt,{task:c,index:t})]})},n)}));return(0,r.jsxs)("div",{className:"relative left-0 top-0 w-full h-full",onKeyDown:function(t){"F"===t.key&&t.ctrlKey&&St()},children:[(0,r.jsxs)("div",{className:"absolute w-full text-center sm:hidden",style:{lineHeight:"45px",zIndex:2,background:"linear-gradient(rgb(241, 245, 249), rgb(241 245 249), rgb(241 245 249 / 0%))",height:"64px"},children:[(0,r.jsx)("span",{className:"material-icons-outlined cursor-pointer text-gray-600 p-3 absolute left-0",onClick:G,children:"arrow_back"}),c&&c.name]}),(0,r.jsx)("div",{className:a()("absolute w-full h-full overflow-hidden overflow-y-scroll","p-8 pt-16 sm:pt-8"),children:u})]})}function It(){var t=j().documentId;return(0,o.useEffect)((function(){!function(){X.apply(this,arguments)}()}),[]),(0,r.jsxs)("div",{className:"flex h-full",children:[(0,r.jsx)("div",{className:a()("w-full sm:w-96 sm:block",t?"hidden":"block"),children:(0,r.jsx)(ot,{})}),t&&(0,r.jsx)("div",{className:"w-full sm:grow",children:(0,r.jsx)(At,{})})]})}O.subscribe((function(){wt()}));var Nt=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(It,{})})}},1122:function(t){t.exports={documentListTitle:"document-selector_documentListTitle__4UQTS",documentListAddButton:"document-selector_documentListAddButton__iIa32"}},7761:function(t){t.exports={document:"document_document__4YCad",selected:"document_selected__nloUT"}},8376:function(t){t.exports={taskText:"task-text_taskText__lDgDo"}}},function(t){t.O(0,[936,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);