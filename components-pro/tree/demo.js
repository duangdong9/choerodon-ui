webpackJsonp([82],{2292:function(n,a,s){n.exports={dataset:s(3074)}},3074:function(n,a,s){n.exports={content:{"zh-CN":[["p","绑定数据源。"]],"en-US":[["p","DataSet."]]},meta:{order:0,title:{"zh-CN":"绑定数据源","en-US":"DataSet"},filename:"components-pro/tree/demo/dataset.md",id:"components-pro-tree-demo-dataset"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">nodeRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> record<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'text\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    primaryKey<span class="token punctuation">:</span> <span class="token string">\'id\'</span><span class="token punctuation">,</span>\n    queryUrl<span class="token punctuation">:</span> <span class="token string">\'/tree.mock\'</span><span class="token punctuation">,</span>\n    autoQuery<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    parentField<span class="token punctuation">:</span> <span class="token string">\'parentId\'</span><span class="token punctuation">,</span>\n    expandField<span class="token punctuation">:</span> <span class="token string">\'expand\'</span><span class="token punctuation">,</span>\n    idField<span class="token punctuation">:</span> <span class="token string">\'id\'</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'id\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'number\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'expand\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'boolean\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'parentId\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'number\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      select<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> dataSet <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'select\'</span><span class="token punctuation">,</span> record<span class="token punctuation">,</span> dataSet<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      unSelect<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> dataSet <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'unSelect\'</span><span class="token punctuation">,</span> record<span class="token punctuation">,</span> dataSet<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>\n        <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span>\n        <span class="token attr-name">checkable</span>\n        <span class="token attr-name">renderer</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>nodeRenderer<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n){return n.record.get("text")}var e=s(0),o=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),c=s(486),u=function(s){function u(){var s,t,p,e;n(this,u);for(var o=arguments.length,l=Array(o),i=0;i<o;i++)l[i]=arguments[i];return t=p=a(this,(s=u.__proto__||Object.getPrototypeOf(u)).call.apply(s,[this].concat(l))),p.ds=new c.DataSet({primaryKey:"id",queryUrl:"/tree.mock",autoQuery:!0,parentField:"parentId",expandField:"expand",idField:"id",fields:[{name:"id",type:"number"},{name:"expand",type:"boolean"},{name:"parentId",type:"number"}],events:{select:function(n){var a=n.record,s=n.dataSet;return console.log("select",a,s)},unSelect:function(n){var a=n.record,s=n.dataSet;return console.log("unSelect",a,s)}}}),e=t,a(p,e)}return t(u,s),o(u,[{key:"render",value:function(){return e.createElement(c.Tree,{dataSet:this.ds,checkable:!0,renderer:p})}}]),u}(e.Component);return e.createElement(u,null)}}}});