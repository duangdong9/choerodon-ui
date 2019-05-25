webpackJsonp([196],{2050:function(t,e){t.exports={content:["section",["p","Autocomplete function of input field."],["h2","When To Use"],["p","When there is a need for autocomplete functionality."]],meta:{category:"Components",type:"Data Entry",cols:2,title:"AutoComplete",filename:"components/auto-complete/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'12345\'</span><span class="token punctuation">,</span> <span class="token string">\'23456\'</span><span class="token punctuation">,</span> <span class="token string">\'34567\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoComplete</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","const dataSource = ['12345', '23456', '34567'];\n<AutoComplete dataSource={dataSource} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","allowClear"],["td","Show clear button, effective in multiple mode only."],["td","boolean"],["td","false"]],["tr",["td","autoFocus"],["td","get focus when component mounted"],["td","boolean"],["td","false"]],["tr",["td","backfill"],["td","backfill selected item the input when using keyboard"],["td","boolean"],["td","false"]],["tr",["td","children (for customize input element)"],["td","customize input element"],["td","HTMLInputElement / HTMLTextAreaElement / React.ReactElement",["inputprops"]],["td",["code","<Input />"]]],["tr",["td","children (for dataSource)"],["td","Data source for autocomplet"],["td","React.ReactElement",["optionprops"]," /  Array","<","React.ReactElement",["optionprops"],">"],["td","-"]],["tr",["td","dataSource"],["td","Data source for autocomplete"],["td",["a",{title:null,href:"https://git.io/vMMKF"},"DataSourceItemType"],"[","]"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","Whether active first option by default"],["td","boolean"],["td","true"]],["tr",["td","defaultValue"],["td","Initial selected option."],["td","string","|","string","[","]","|","{ key: string, label: string","|","ReactNode }","|","Array","<","{ key: string, label: string","|","ReactNode }>"],["td","-"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"]],["tr",["td","filterOption"],["td","If true, filter options by input, if function, filter options against it. The function will receive two arguments, ",["code","inputValue"]," and ",["code","option"],", if the function returns ",["code","true"],", the option will be included in the filtered set; Otherwise, it will be excluded."],["td","boolean or function(inputValue, option)"],["td","true"]],["tr",["td","optionLabelProp"],["td","Which prop value of option will render as content of select."],["td","string"],["td",["code","children"]]],["tr",["td","placeholder"],["td","placeholder of input"],["td","string"],["td","-"]],["tr",["td","value"],["td","selected option"],["td","string","|","string","[","]","|","{ key: string, label: string","|","ReactNode }","|","Array","<","{ key: string, label: string","|","ReactNode }>"],["td","-"]],["tr",["td","onChange"],["td","Called when select an option or input value change, or value of input is changed"],["td","function(value)"],["td","-"]],["tr",["td","onSearch"],["td","Called when searching items."],["td","function(value)"],["td","-"]],["tr",["td","onSelect"],["td","Called when a option is selected. param is option's value and option instance."],["td","function(value, option)"],["td","-"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"]]],["tbody",["tr",["td","blur()"],["td","remove focus"]],["tr",["td","focus()"],["td","get focus"]]]]]}}});