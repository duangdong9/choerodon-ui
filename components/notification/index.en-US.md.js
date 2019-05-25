webpackJsonp([140],{2133:function(t,o){t.exports={content:["section",["p","Display a notification message globally."],["h2","When To Use"],["p","To display a notification message at any of the four corners of the viewport. Typically it can be\nused in the following cases:"],["ul",["li",["p","A notification with complex content."]],["li",["p","A notification providing a feedback based on the user interaction. Or it may show some details\nabout upcoming steps the user may have to follow."]],["li",["p","A notification that is pushed by the application."]]]],meta:{category:"Components",type:"Feedback",noinstant:!0,title:"Notification",filename:"components/notification/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["ul",["li",["p",["code","notification.success(config)"]]],["li",["p",["code","notification.error(config)"]]],["li",["p",["code","notification.info(config)"]]],["li",["p",["code","notification.warning(config)"]]],["li",["p",["code","notification.warn(config)"]]],["li",["p",["code","notification.close(key: String)"]]],["li",["p",["code","notification.destroy()"]]]],["p","The properties of config are as follows:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","btn"],["td","Customized close button"],["td","ReactNode"],["td","-"]],["tr",["td","className"],["td","Customized CSS class"],["td","string"],["td","-"]],["tr",["td","description"],["td","The content of notification box (required)"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","duration"],["td","Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically"],["td","number"],["td","4.5"]],["tr",["td","icon"],["td","Customized icon"],["td","ReactNode"],["td","-"]],["tr",["td","key"],["td","The unique identifier of the Notification"],["td","string"],["td","-"]],["tr",["td","message"],["td","The title of notification box (required)"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","placement"],["td","Position of Notification, can be one of ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td",["code","topRight"]]],["tr",["td","style"],["td","Customized inline style"],["td",["a",{title:null,href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},"React.CSSProperties"]],["td","-"]],["tr",["td","onClose"],["td","Specify a function that will be called when the close button is clicked"],["td","Function"],["td","-"]]]],["p",["code","notification"]," also provides a global ",["code","config()"]," method that can be used for specifying the default options. Once this method is used, all the notification boxes will take into account these globally defined options when displaying."],["ul",["li",["p",["code","notification.config(options)"]]]],["pre",{lang:"js",highlighted:'notification<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  placement<span class="token punctuation">:</span> <span class="token string">\'bottomRight\'</span><span class="token punctuation">,</span>\n  bottom<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","notification.config({\n  placement: 'bottomRight',\n  bottom: 50,\n  duration: 3,\n});"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","bottom"],["td","Distance from the bottom of the viewport, when ",["code","placement"]," is ",["code","bottomRight"]," or ",["code","bottomLeft"]," (unit: pixels)."],["td","number"],["td","24"]],["tr",["td","duration"],["td","Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically"],["td","number"],["td","4.5"]],["tr",["td","getContainer"],["td","Return the mount node for Notification"],["td","() => HTMLNode"],["td","() => document.body"]],["tr",["td","placement"],["td","Position of Notification, can be one of ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td",["code","topRight"]]],["tr",["td","top"],["td","Distance from the top of the viewport, when ",["code","placement"]," is ",["code","topRight"]," or ",["code","topLeft"]," (unit: pixels)."],["td","number"],["td","24"]]]]]}}});