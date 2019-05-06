(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return y});var a=n(1),r=n(5),s=n(6),o=n(9),c=n(7),i=n(10),l=n(0),u=n.n(l),d=n(19),f=n(22),m=n(23),p=n(24),h=(n(55),n(29)),g=n(2);g.keys(g).forEach(function(t){e[t]=g[t]}),e.F=g,e.R=h;var v=function(e){var t=e.title,n=e.runCode;return u.a.createElement("div",{className:"playground-header"},u.a.createElement("div",{className:"columns"},u.a.createElement("div",{className:"column is-one-quarter"},u.a.createElement("h2",{className:"title is-6"},t)),u.a.createElement("div",{className:"column has-text-right is-one-quarter"},u.a.createElement("button",{onClick:n},"Run"))))},y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={history:[],title:"",js:"",isProcessing:!1},n.setTitle=function(e){return n.setState({title:e})},n.setHistory=function(e){return n.setState({history:e})},n.setJs=function(e){return n.setState({js:e})},n.getGist=function(e){fetch("https://api.github.com/gists/".concat(e)).then(function(e){return e.json()}).then(function(e){console.log(e);var t=Object.keys(e.files).find(function(e){return e.includes(".js")});n.setTitle(e.files[t].filename),t&&n.setJs(e.files[t].content)})},n.addHistory=function(e){var t=[].concat(Object(a.a)(n.state.history),[{text:e}]);n.setHistory(t)},n.clearHistory=function(){return n.setHistory([])},n.runCode=function(){if(n.state.isProcessing)return!1;n.setState({isProcessing:!0});var e=n.state.js;n.setJs(""),setTimeout(function(){n.setJs(e),n.setState({isProcessing:!1})},250)},n}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.gistId||"64956aea8f0f09bb97e7ee7dd2fe5c85";this.getGist(e)}},{key:"render",value:function(){var e=this.state,t=e.history,n=e.title,a=e.js,r=this.props.playgroundId;return u.a.createElement("div",null,u.a.createElement(p.a,{title:"FUTILS"}),u.a.createElement("div",{className:"playground"},u.a.createElement(v,{title:n,runCode:this.runCode}),u.a.createElement("div",{className:"columns"},u.a.createElement(d.a,{language:"javascript",code:a,updateCode:this.setJs}),u.a.createElement(m.a,{history:t,clearHistory:this.clearHistory})),u.a.createElement(f.a,{playgroundId:r,js:a,addHistory:this.addHistory}))," ")}}]),t}(l.Component)}).call(this,n(3))},19:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(5),r=n(6),s=n(9),o=n(7),c=n(10),i=n(0),l=n.n(i),u=n(20),d=n(21),f=n.n(d);n(49),n(50),n(51);n(52),n(53);var m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={value:n.props.code},n.handleChange=function(e,t,a){n.setState({value:a}),n.debouncedUpdate(a)},n.debouncedUpdate=f()(function(e){n.props.updateCode(e)},500),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.code!==this.props.code&&this.setState({value:this.props.code})}},{key:"render",value:function(){var e=this.state.value,t={lineNumbers:!0,mode:this.props.language,theme:"neat"};return l.a.createElement("div",{className:"playground-editor"},l.a.createElement(u.Controlled,{value:e,onBeforeChange:this.handleChange,options:t}))}}]),t}(i.Component)},22:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),s=function(e){return'\n  <html>\n  <head>\n\n  </head>\n  <body>\n\n\n  <script>\n    function getLog() {\n      let output = "", arg, i;\n      for (i = 0; i < arguments.length; i++) {\n        arg = arguments[i];\n        output += typeof arg === "object" ? JSON.stringify(arg) : arg;\n      }\n      window.parent.postMessage(output, \'*\');\n      console.log(...arguments);\n    }\n\n    // -----------------------------------------\n\n    try {\n      '.concat(e,"\n    } catch (err) {\n      window.parent.postMessage(err.message, '*');\n      console.error(err.message);\n    }\n  <\/script>\n  </body>\n  </html>\n")};function o(e){var t=e.js,n=e.addHistory,o=Object(a.useRef)(null);Object(a.useEffect)(function(){window.addEventListener("message",function(e){return!!e.data&&("string"===typeof e.data&&(!e.data.includes("_")&&void n(e.data)))})},[n]),Object(a.useEffect)(function(){for(;o.current.hasChildNodes();)o.current.removeChild(o.current.lastChild);var e=document.createElement("iframe");e.height="100%",e.width="100%",e.sandbox="allow-scripts allow-same-origin",e.style.border="none",e.background="#fff";var n=t.replace(new RegExp("console.log","g"),"getLog").replace(new RegExp("F.","g"),"parent.F.").replace(new RegExp("R.","g"),"parent.R.");e.srcdoc=s(n),o.current.appendChild(e)},[t]);return r.a.createElement("div",{ref:o,className:"iframe-container",style:{height:"100%",width:"100%",background:"white",display:"none"}})}},23:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),s=(n(54),function(e,t){var n=t.current.scrollTop,a=t.current.scrollHeight-n,r=20;!function s(o){var c=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*((e-=1)*(e-2)-1)+t}(o+=r,n,a,e);t.current.scrollTop=c,o<e&&setTimeout(function(){s(o)},r)}(0)});function o(e){var t=e.history,n=e.clearHistory,o=Object(a.useRef)(null);return Object(a.useEffect)(function(){s(300,o)},[t]),r.a.createElement("div",{className:"playground-console-container"},r.a.createElement("div",{ref:o,className:"playground-console"},r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t,className:"console-line"},r.a.createElement("span",{className:"console-carrot"},">")," ",r.a.createElement("span",{className:"console-text"},e.text))}),r.a.createElement("li",null,r.a.createElement("span",{className:"console-carrot"},">"))),r.a.createElement("button",{onClick:n,className:"button is-white is-outlined is-small"},"Clear")))}},24:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(13),o=Object(s.a)("header")({}),c=Object(s.a)("div")({fontSize:"18px"}),i=function(e){return r.a.createElement(o,null,r.a.createElement(c,null,e.title))};i.displayName="Navbar",t.a=i},46:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(0),s=n.n(r),o=n(28);n.n(o).a.render(s.a.createElement(a.a,null),document.getElementById("root"))},51:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.6a96fa1e.chunk.js.map