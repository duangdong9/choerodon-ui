webpackJsonp([183],{2070:function(t,n){t.exports={content:["section",["p","按照日历形式展示数据的容器。"],["h2","何时使用"],["p","当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。"]],meta:{category:"Components",type:"Data Display",subtitle:"日历",cols:1,title:"Calendar",filename:"components/calendar/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p",["strong","注意："],"Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale</span>\n<span class="token comment" spellcheck="true">// import moment from \'moment\';</span>\n<span class="token comment" spellcheck="true">// import \'moment/locale/zh-cn\';</span>\n<span class="token comment" spellcheck="true">// moment.locale(\'zh-cn\');</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>\n  <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span>\n\n  <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span>\n\n  <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale\n// import moment from 'moment';\n// import 'moment/locale/zh-cn';\n// moment.locale('zh-cn');\n\n<Calendar\n  dateCellRender={dateCellRender}\n  monthCellRender={monthCellRender}\n\n  onPanelChange={onPanelChange}\n\n  onSelect={onSelect}\n/>"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","dateCellRender"],["td","自定义渲染日期单元格，返回内容会被追加到单元格"],["td","function(date: moment): ReactNode"],["td","无"]],["tr",["td","dateFullCellRender"],["td","自定义渲染日期单元格，返回内容覆盖单元格"],["td","function(date: moment): ReactNode"],["td","无"]],["tr",["td","defaultValue"],["td","默认展示的日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","默认日期"]],["tr",["td","disabledDate"],["td","不可选择的日期"],["td","(currentDate: moment) => boolean"],["td","无"]],["tr",["td","fullscreen"],["td","是否全屏显示"],["td","boolean"],["td","true"]],["tr",["td","locale"],["td","国际化配置"],["td","object"],["td",["a",{title:null,href:"https://github.com/choerodon/choerodon-ui/blob/master/components/date-picker/locale/example.json"},"默认配置"]]],["tr",["td","mode"],["td","初始模式，",["code","month/year"]],["td","string"],["td","month"]],["tr",["td","monthCellRender"],["td","自定义渲染月单元格，返回内容会被追加到单元格"],["td","function(date: moment): ReactNode"],["td","无"]],["tr",["td","monthFullCellRender"],["td","自定义渲染月单元格，返回内容覆盖单元格"],["td","function(date: moment): ReactNode"],["td","无"]],["tr",["td","validRange"],["td","设置可以显示的日期"],["td","[",["a",{title:null,href:"http://momentjs.com/"},"moment"],", ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"]"],["td","无"]],["tr",["td","value"],["td","展示日期"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","当前日期"]],["tr",["td","onPanelChange"],["td","日期面板变化回调"],["td","function(date: moment, mode: string)"],["td","无"]],["tr",["td","onSelect"],["td","点击选择日期回调"],["td","function(date: moment）"],["td","无"]]]]]}}});