webpackJsonp([65],{2245:function(n,a,s){n.exports={basic:s(2987),controlled:s(2988),dataset:s(2989),multiple:s(2990)}},2987:function(n,a,s){n.exports={content:{"zh-CN":[["p","基本使用。"]],"en-US":[["p","Basic usage example."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic usage"},filename:"components-pro/number-field/demo/basic.md",id:"components-pro-number-field-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberField<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>请输入整数<span class="token punctuation">"</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>log<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>精确两位小数<span class="token punctuation">"</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.01</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>step</span> <span class="token attr-value"><span class="token punctuation">=</span> 1.1,</span> <span class="token attr-name">min</span> <span class="token attr-value"><span class="token punctuation">=</span> 0.3,</span> <span class="token attr-name">max</span> <span class="token attr-value"><span class="token punctuation">=</span> 9<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>log<span class="token punctuation">}</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1.1</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.3</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>step</span> <span class="token attr-value"><span class="token punctuation">=</span> 1.1,</span> <span class="token attr-name">min</span> <span class="token attr-value"><span class="token punctuation">=</span> -0.3<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>log<span class="token punctuation">}</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1.1</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">0.3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){console.log(n)}var a=s(0),t=(s(7),s(486));return a.createElement("div",null,a.createElement(t.Row,{gutter:10},a.createElement(t.Col,{span:12},a.createElement(t.NumberField,{placeholder:"请输入整数",step:1,onChange:n})),a.createElement(t.Col,{span:12},a.createElement(t.NumberField,{placeholder:"精确两位小数",step:.01,min:0}))),a.createElement(t.Row,{gutter:10},a.createElement(t.Col,{span:12},a.createElement(t.NumberField,{placeholder:"step = 1.1, min = 0.3, max = 9",onChange:n,step:1.1,min:.3,max:9})),a.createElement(t.Col,{span:12},a.createElement(t.NumberField,{placeholder:"step = 1.1, min = -0.3",onChange:n,step:1.1,min:-.3}))))}}},2988:function(n,a,s){n.exports={content:{"zh-CN":[["p","受控数字输入框"]],"en-US":[["p","Controlled NumberField"]]},meta:{order:1,title:{"zh-CN":"受控数字输入框","en-US":"Controlled NumberField"},filename:"components-pro/number-field/demo/controlled.md",id:"components-pro-number-field-demo-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NumberField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[newValue]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleInput <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[input]\'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleInput<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),o=s(486),c=function(s){function c(s){n(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,s));return t.handleChange=function(n,a){console.log("[newValue]",n,"[oldValue]",a),t.setState({value:n})},t.handleInput=function(n){console.log("[input]",n.target.value)},t.state={value:"default"},t}return t(c,s),e(c,[{key:"render",value:function(){return p.createElement(o.NumberField,{value:this.state.value,onChange:this.handleChange,onInput:this.handleInput})}}]),c}(p.Component);return p.createElement(c,null)}}},2989:function(n,a,s){n.exports={content:{"zh-CN":[["p","绑定数据源。"]],"en-US":[["p","DataSet binding."]]},meta:{order:2,title:{"zh-CN":"数据源","en-US":"DataSet"},filename:"components-pro/number-field/demo/dataset.md",id:"components-pro-number-field-demo-dataset"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> NumberField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset newValue]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`[record.get(\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\')]`</span></span><span class="token punctuation">,</span> record<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'number\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token number">100000000000000</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n){var a=n.record,s=n.name,t=n.value,p=n.oldValue;console.log("[dataset newValue]",t,"[oldValue]",p,"[record.get('"+s+"')]",a.get(s))}var e=s(0),o=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),c=s(486),u=function(s){function u(){var s,t,e,o;n(this,u);for(var l=arguments.length,i=Array(l),k=0;k<l;k++)i[k]=arguments[k];return t=e=a(this,(s=u.__proto__||Object.getPrototypeOf(u)).call.apply(s,[this].concat(i))),e.ds=new c.DataSet({autoCreate:!0,fields:[{name:"age",type:"number",defaultValue:1e14,required:!0}],events:{update:p}}),o=t,a(e,o)}return t(u,s),o(u,[{key:"render",value:function(){return e.createElement(c.NumberField,{dataSet:this.ds,name:"age"})}}]),u}(e.Component);return e.createElement(u,null)}}},2990:function(n,a,s){n.exports={content:{"zh-CN":[["p","通过属性",["code","multiple"],"设置为多值。"]],"en-US":[["p","Multiple values via property ",["code","multiple"],"."]]},meta:{order:6,title:{"zh-CN":"多值","en-US":"Multiple"},filename:"components-pro/number-field/demo/multiple.md",id:"components-pro-number-field-demo-multiple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> NumberField<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[multiple]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset multiple]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`[record.get(\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\')]`</span></span><span class="token punctuation">,</span> record<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  user<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    data<span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'size\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'number\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'尺码\'</span><span class="token punctuation">,</span> multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> step<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> max<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> min<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span> <span class="token attr-name">gutter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>size<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>数据源多选<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NumberField</span> <span class="token attr-name">multiple</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>多选<span class="token punctuation">"</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n,a){console.log("[multiple]",n,"[oldValue]",a)}function e(n){var a=n.record,s=n.name,t=n.value,p=n.oldValue;console.log("[dataset multiple]",t,"[oldValue]",p,"[record.get('"+s+"')]",a.get(s))}var o=s(0),c=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),u=s(486),l=[{user:[31]}],i=function(s){function i(){var s,t,p,o;n(this,i);for(var c=arguments.length,k=Array(c),r=0;r<c;r++)k[r]=arguments[r];return t=p=a(this,(s=i.__proto__||Object.getPrototypeOf(i)).call.apply(s,[this].concat(k))),p.ds=new u.DataSet({data:l,fields:[{name:"size",type:"number",label:"尺码",multiple:!0,step:1,max:10,min:5,required:!0}],events:{update:e}}),o=t,a(p,o)}return t(i,s),c(i,[{key:"render",value:function(){return o.createElement(u.Row,{gutter:10},o.createElement(u.Col,{span:12},o.createElement(u.NumberField,{dataSet:this.ds,name:"size",placeholder:"数据源多选"})),o.createElement(u.Col,{span:12},o.createElement(u.NumberField,{multiple:!0,onChange:p,placeholder:"多选",step:1,max:10,min:5})))}}]),i}(o.Component);return o.createElement(i,null)}}}});