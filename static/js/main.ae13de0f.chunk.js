(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{165:function(t,e,s){"use strict";s.r(e);var a=s(3),i=s(0),l=s.n(i),o=s(12),n=s.n(o),c=(s(76),s(59)),h=s(60),r=s(10),u=s(70),d=s(69),p=s.p+"static/media/unnamed.16989a75.gif",v=s.p+"static/media/1.10ff95b7.gif",g=s.p+"static/media/22.523edca7.gif",f=s.p+"static/media/12-1.528ab71d.gif",m=s.p+"static/media/44.6fe800ca.gif",b=s.p+"static/media/38.62b71af9.gif",j=s.p+"static/media/39.134cd4ef.gif",L=s.p+"static/media/17.7ae8170a.gif",x=s.p+"static/media/18.5e24eacc.gif",y=s.p+"static/media/8-1.cb666bdf.gif",O=s.p+"static/media/43.5b33f99f.gif",S=s.p+"static/media/25.95776efe.gif",k=s.p+"static/media/42.36414db4.gif",w=s.p+"static/media/13.1e99b31e.gif",C=s.p+"static/media/5-1.348fb561.gif",_=s.p+"static/media/6.05d4448a.gif",T=s.p+"static/media/2-1.b1f44c28.gif",D=s(9),I=s(15),z=s(41),F=(s(77),s(61)),A=(s(78),s(14)),U=s.n(A),M=s(21),R=s(22),B=s.n(R),q="http://127.0.0.1:8000/";function E(){return(E=Object(M.a)(U.a.mark((function t(e,s,a,i,l,o,n,c,h,r,u){var d,p;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.post(q+"user/",{UserId:e,name:s,foodLevel:a,sleepLevel:i,playLevel:l,timeOfExit:o,sec:n,min:c,hour:h,kusua:r,flag:u});case 2:return d=t.sent,p=d.data,t.abrupt("return",p);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=Object(M.a)(U.a.mark((function t(e){var s,a;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get(q+"user/",{params:{UserId:e}});case 2:return s=t.sent,a=s.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t,e,s,a,i,l,o,n,c,h,r){return G.apply(this,arguments)}function G(){return(G=Object(M.a)(U.a.mark((function t(e,s,a,i,l,o,n,c,h,r,u){var d;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d={UserId:e,name:s,foodLevel:a,playLevel:i,sleepLevel:l,timeOfExit:o,sec:n,min:c,hour:h,kusua:r,flag:u},console.log("body:",d),t.next=4,B.a.put(q+"user/",{UserId:e,name:s,foodLevel:a,playLevel:i,sleepLevel:l,timeOfExit:o,sec:n,min:c,hour:h,kusua:r,flag:u});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var H=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(c.a)(this,s),a=e.call(this,t),console.log("constructor"),a.state={notes:[],UserId:"",logo:p,foodLevel:null,sleepLevel:null,playLevel:null,color1:"var(--plasma-colors-accent)",color2:"var(--plasma-colors-accent)",color3:"var(--plasma-colors-accent)",timeOfExit:0,hour:0,min:0,sec:0,name:"\u0422\u0430\u043c\u0430\u0433\u043e\u0447\u0438",s:"",m:"",ch:"",flag:null,f:!1,kusua:null,f1:null,p1:null,s1:null,size:"m"},a.Change_img=a.Change_img.bind(Object(r.a)(a)),a.changeColor=a.changeColor.bind(Object(r.a)(a)),a.timer=a.timer.bind(Object(r.a)(a)),a.words=a.words.bind(Object(r.a)(a)),a.changeFlag=a.changeFlag.bind(Object(r.a)(a)),a.checkWidth=a.checkWidth.bind(Object(r.a)(a)),a}return Object(h.a)(s,[{key:"timer",value:function(){this.state.logo===b?(this.state.hour=0,this.state.min=0,this.state.sec=0):this.setState({sec:this.state.sec+=1}),this.state.sec>=59&&(this.state.sec=0,this.state.min=this.state.min+1,this.state.min>=59&&(this.state.min=0,this.state.hour+=1)),this.state.our>=1&&(this.state.f=!0)}},{key:"getTimeDifference",value:function(t){var e=new Date(t),s=new Date;console.log("Time of exit: ",e),console.log("Actual time: ",s);var a=s-e-108e5;return console.log("diffTime",a),a}},{key:"componentDidMount",value:function(){var t,e=this;console.log("componentDidMount"),this.assistant=(t=function(){return e.getStateForAssistant()},Object(F.a)({getState:t})),this.assistant.on("data",(function(t){if("smart_app_data"==t.type){console.log("User"),console.log(t),console.log("event.sub",t.sub),void 0!=t.sub&&(console.log("Sub",t.sub),e.state.UserId=t.sub,function(t,e,s,a,i,l,o,n,c,h,r){E.apply(this,arguments)}(e.state.UserId,e.state.name,50,50,50,new Date,e.state.sec,e.state.min,e.state.hour,!1,!0),W(e.state.UserId,e.state.name,e.state.foodLevel,e.state.playLevel,e.state.sleepLevel,new Date,e.state.sec,e.state.min,e.state.hour,e.state.kusua,e.state.flag),function(t){return P.apply(this,arguments)}(e.state.UserId).then((function(t){console.log(t),e.setState({kusua:t.kusua}),e.setState({flag:t.flag}),e.Change_img(),e.setState({name:t.name}),e.setState({foodLevel:t.foodLevel}),e.setState({playLevel:t.playLevel}),e.setState({sleepLevel:t.sleepLevel}),e.didTamagatchiDie(),e.changeColor(),e.setState({sec:t.sec}),e.setState({min:t.min}),e.setState({hour:t.hour});var s=t.timeOfExit,a=e.getTimeDifference(s);e.state.foodLevel=e.state.foodLevel-Math.round(a/12e3),e.state.foodLevel<0&&(e.state.foodLevel=0),e.state.sleepLevel=e.state.sleepLevel-Math.round(a/6e4),e.state.sleepLevel<0&&(e.state.sleepLevel=0),e.state.playLevel=e.state.playLevel-Math.round(a/2e4),e.state.playLevel<0&&(e.state.playLevel=0),e.state.sec=e.state.sec+Math.round(a/1e3%60),e.state.min=e.state.min+Math.round(a/6e4%60),e.state.hour=e.state.hour+Math.round(a/36e5%24)}))),console.log("assistant.on(data)",t);var s=t.action;e.dispatchAssistantAction(s)}})),this.assistant.on("start",(function(t){console.log("assistant.on(start)",t)})),setInterval((function(){W(e.state.UserId,e.state.name,e.state.foodLevel,e.state.playLevel,e.state.sleepLevel,new Date,e.state.sec,e.state.min,e.state.hour,e.state.kusua,e.state.flag)}),6e3),setInterval((function(){e.less(1),e.didTamagatchiDie(),e.changeColor()}),12e3),setInterval((function(){e.less(2),e.didTamagatchiDie(),e.changeColor()}),6e4),setInterval((function(){e.less(3),e.didTamagatchiDie(),e.changeColor()}),2e4),setTimeout((function(){return setInterval((function(){e.timer(),e.words()}),1e3)}),1e3)}},{key:"less",value:function(t){switch(t){case 1:this.state.foodLevel>0?this.setState({foodLevel:this.state.foodLevel-=1}):this.state.foodLevel=0;break;case 2:this.state.sleepLevel>0?this.setState({sleepLevel:this.state.sleepLevel-=1}):this.state.sleepLevel=0;break;case 3:this.state.playLevel>0?this.setState({playLevel:this.state.playLevel-=1}):this.state.playLevel=0}}},{key:"feed",value:function(){this.state.foodLevel=100}},{key:"sleep",value:function(){this.state.sleepLevel=100}},{key:"play",value:function(){this.state.playLevel=100}},{key:"didTamagatchiDie",value:function(){!1===this.state.kusua?(this.state.foodLevel>=60&&this.state.sleepLevel>=60&&this.state.playLevel>=60?this.setState({logo:v}):this.state.foodLevel<=this.state.sleepLevel&&this.state.foodLevel<=this.state.playLevel&&this.state.foodLevel<=60?this.setState({logo:j}):this.state.playLevel<=this.state.sleepLevel&&this.state.playLevel<=this.state.foodLevel&&this.state.playLevel<=60?this.setState({logo:L}):this.state.sleepLevel<=this.state.playLevel&&this.state.sleepLevel<=this.state.foodLevel&&this.state.sleepLevel<=60&&this.setState({logo:x}),this.state.foodLevel<=0&&this.state.sleepLevel<=0&&this.state.playLevel<=0&&this.setState({logo:b})):(this.state.foodLevel>=60&&this.state.sleepLevel>=60&&this.state.playLevel>=60?this.setState({logo:y}):this.state.foodLevel<=this.state.sleepLevel&&this.state.foodLevel<=this.state.playLevel&&this.state.foodLevel<=60?this.setState({logo:w}):this.state.playLevel<=this.state.sleepLevel&&this.state.playLevel<=this.state.foodLevel&&this.state.playLevel<=60?this.setState({logo:_}):this.state.sleepLevel<=this.state.playLevel&&this.state.sleepLevel<=this.state.foodLevel&&this.state.sleepLevel<=60&&this.setState({logo:C}),this.state.foodLevel<=0&&this.state.sleepLevel<=0&&this.state.playLevel<=0&&this.setState({logo:T}))}},{key:"changeColor",value:function(){this.state.foodLevel>60?this.setState({color1:"var(--plasma-colors-accent)"}):this.state.foodLevel<=60&&this.state.foodLevel>=30?this.setState({color1:"var(--plasma-colors-warning)"}):this.setState({color1:"var(--plasma-colors-critical)"}),this.state.playLevel>60?this.setState({color2:"var(--plasma-colors-accent)"}):this.state.playLevel<=60&&this.state.playLevel>=30?this.setState({color2:"var(--plasma-colors-warning)"}):this.setState({color2:"var(--plasma-colors-critical)"}),this.state.sleepLevel>60?this.setState({color3:"var(--plasma-colors-accent)"}):this.state.sleepLevel<=60&&this.state.sleepLevel>=30?this.setState({color3:"var(--plasma-colors-warning)"}):this.setState({color3:"var(--plasma-colors-critical)"})}},{key:"getStateForAssistant",value:function(){console.log("getStateForAssistant: this.state:",this.state);var t={item_selector:{items:this.state.notes.map((function(t,e){return{number:e+1,id:t.id,title:t.title}}))}};return console.log("getStateForAssistant: state:",t),t}},{key:"dispatchAssistantAction",value:function(t){if(console.log("dispatchAssistantAction",t),t)switch(t.type){case"to_feed":return this.Change_img(1);case"to_play":return this.Change_img(2);case"to_sleep":return this.Change_img(3);case"set_name":void 0!==t.note&&this.setState({name:t.note})}}},{key:"Change_img",value:function(t){var e=this;switch(t){case 1:!1===this.state.kusua?this.setState({logo:g}):this.setState({logo:O}),setTimeout((function(){e.didTamagatchiDie()}),3e3),this.feed(),this.changeColor();break;case 2:!1===this.state.kusua?this.setState({logo:f}):this.setState({logo:S}),setTimeout((function(){e.didTamagatchiDie()}),3e3),this.play(),this.changeColor();break;case 3:!1===this.state.kusua?this.setState({logo:m}):this.setState({logo:k}),setTimeout((function(){e.didTamagatchiDie()}),1e5),this.sleep(),this.changeColor();break;default:!1===this.state.kusua?this.setState({logo:v}):!0===this.state.kusua?this.setState({logo:y}):this.setState({logo:p})}}},{key:"changeFlag",value:function(t){switch(t){case 1:this.setState({flag:!0}),this.state.kusua=!1,this.Change_img();break;case 2:!0===this.state.f?(this.setState({flag:!1}),this.state.kusua=!0,this.Change_img()):z.b.success("\u0411\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430, \u043a\u043e\u0433\u0434\u0430 \u0422\u0430\u043c\u0430\u0433\u043e\u0447\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0447\u0430\u0441!",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;default:this.setState({flag:!0})}}},{key:"words",value:function(){0===this.state.min?this.state.m="":1===this.state.min?this.setState({m:"".concat(this.state.min," \u043c\u0438\u043d\u0443\u0442\u0443")}):this.state.min%10>1&&this.state.min%10<5&&12!=this.state.min&&13!=this.state.min&&14!=this.state.min?this.setState({m:"".concat(this.state.min," \u043c\u0438\u043d\u0443\u0442\u044b")}):this.setState({m:"".concat(this.state.min," \u043c\u0438\u043d\u0443\u0442")}),0===this.state.hour?this.state.ch="":1===this.state.hour?this.setState({ch:"".concat(this.state.hour," \u0447\u0430\u0441")}):this.state.hour>1&&this.state.hour<5?this.setState({ch:"".concat(this.state.hour," \u0447\u0430\u0441\u0430")}):this.setState({ch:"".concat(this.state.hour," \u0447\u0430\u0441\u043e\u0432")}),this.state.sec%10===1&&11!=this.state.sec?this.setState({s:"".concat(this.state.sec," \u0441\u0435\u043a\u0443\u043d\u0434\u0443")}):this.state.sec%10>1&&this.state.sec%10<5&&12!=this.state.sec&&13!=this.state.sec&&14!=this.state.sec?this.setState({s:"".concat(this.state.sec," \u0441\u0435\u043a\u0443\u043d\u0434\u044b")}):this.setState({s:"".concat(this.state.sec," \u0441\u0435\u043a\u0443\u043d\u0434")})}},{key:"assistant_global_event",value:function(t){this.assistant.sendData({action:{action_id:t}}),"feed"===t?this.Change_img(1):"play"===t?this.Change_img(2):"sleep"===t&&this.Change_img(3)}},{key:"checkWidth",value:function(){this.state.f1=this.state.foodLevel,this.state.p1=this.state.playLevel,this.state.s1=this.state.sleepLevel,window.screen.width>500?(this.state.f1*=4,this.state.p1*=4,this.state.s1*=4,this.state.size="m",this.state.full=420):(this.state.f1*=1.5,this.state.p1*=1.5,this.state.s1*=1.5,this.state.size="s",this.state.full=170)}},{key:"render",value:function(){var t=this;console.log("render");var e=this.state.color1,s=this.state.color2,i=this.state.color3,l=this.state.name[0].toUpperCase()+this.state.name.slice(1);return this.checkWidth(),Object(a.jsx)("div",{children:Object(a.jsxs)(D.Container,{style:{padding:0},children:[Object(a.jsx)(I.Row,{children:Object(a.jsxs)(D.Col,{sizeXL:9,children:[" ",Object(a.jsxs)("h1",{class:"center",children:[" ",l," \u0436\u0438\u0432\u0435\u0442 ",this.state.ch," ",this.state.m," ",this.state.s," "]})]})}),Object(a.jsx)(I.Row,{children:Object(a.jsxs)(D.Col,{sizeXL:10,offset:1,children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)(D.Tabs,{size:this.state.size,view:"secondary",children:[Object(a.jsx)(D.TabItem,{isActive:this.state.flag,onClick:function(){return t.changeFlag(1)},children:"\u0421\u0431\u0435\u0440\u043a\u043e\u0442"}),Object(a.jsx)(D.TabItem,{isActive:!this.state.flag,onClick:function(){return t.changeFlag(2)},children:"\u041a\u0443\u0441\u044f"})]})," "]}),Object(a.jsx)(z.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),Object(a.jsxs)(I.Row,{children:[Object(a.jsxs)(D.Col,{type:"calc",size:5,children:[" ",Object(a.jsx)("img",{id:"img",src:this.state.logo,class:"img"})]}),Object(a.jsxs)(D.Col,{children:[Object(a.jsxs)("div",{style:{textalign:"center"},children:[Object(a.jsx)(D.Button,{class:"button",style:{margin:"1em",textalign:"center"},text:"\u041f\u043e\u043a\u043e\u0440\u043c\u0438\u0442\u044c!",size:this.state.size,view:"primary",pin:"square-square",onClick:function(){return t.assistant_global_event("feed")}}),Object(a.jsx)(D.Button,{class:"button",style:{margin:"1em",textalign:"center"},text:"\u041f\u043e\u0438\u0433\u0440\u0430\u0442\u044c!",size:this.state.size,view:"primary",pin:"square-square",onClick:function(){return t.assistant_global_event("play")}}),Object(a.jsx)(D.Button,{class:"button",style:{margin:"1em",textalign:"center"},text:"\u041f\u043e\u0441\u043f\u0430\u0442\u044c!",size:this.state.size,view:"primary",pin:"square-square",onClick:function(){return t.assistant_global_event("sleep")}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{class:"box",style:{paddingRight:"1.5em",width:"50px"},children:[" ",this.state.foodLevel," "]}),Object(a.jsx)("div",{class:"box",style:{width:this.state.f1+"px",height:"35px",textalign:"right",backgroundColor:e},children:" "}),Object(a.jsx)("div",{class:"box",style:{width:this.state.full-this.state.f1+"px"},children:" "}),Object(a.jsx)("h2",{class:"box",children:" \u0421\u044b\u0442\u043e\u0441\u0442\u044c "})]}),Object(a.jsx)("div",{class:"two",style:{height:"35px"}}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{class:"box",style:{paddingRight:"1.5em",width:"50px"},children:[" ",this.state.playLevel," "]}),Object(a.jsx)("div",{class:"box",style:{width:this.state.p1+"px",height:"35px",backgroundColor:s},children:" "}),Object(a.jsx)("div",{class:"box",style:{width:this.state.full-this.state.p1+"px",height:"35px"},children:" "}),Object(a.jsx)("h2",{class:"box",children:" \u0421\u0447\u0430\u0441\u0442\u044c\u0435 "})]}),Object(a.jsx)("div",{class:"two",style:{height:"35px"}}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{class:"box",style:{paddingRight:"1.5em",width:"50px"},children:[" ",this.state.sleepLevel," "]}),Object(a.jsx)("div",{class:"box",style:{width:this.state.s1+"px",height:"35px",backgroundColor:i},children:" "}),Object(a.jsx)("div",{class:"box",style:{width:this.state.full-this.state.s1+"px",height:"35px"},children:" "}),Object(a.jsx)("h2",{class:"box",children:" \u0411\u043e\u0434\u0440\u043e\u0441\u0442\u044c "})]})]})]})]}),Object(a.jsxs)(I.Row,{children:[" ",Object(a.jsx)("div",{style:{width:"20px",height:"20px"}})]}),Object(a.jsx)(I.Row,{children:Object(a.jsx)("div",{style:{width:"200px",height:"200px"}})})]})})}}]),s}(l.a.Component),J=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,166)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,l=e.getLCP,o=e.getTTFB;s(t),a(t),i(t),l(t),o(t)}))},X=s(68),K=s(66),N=s(1),Q=s(67),V=s(2);function Y(){var t=Object(K.a)(["\n  html {\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n\n    /** \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043e\u043c \u0432\u0441\u044e \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0443 */\n    min-height: 100vh;\n  }\n"]);return Y=function(){return t},t}var Z=Object(N.createGlobalStyle)(Y(),V.text,V.background,V.gradient),$=Object(N.createGlobalStyle)(Q.darkSber),tt=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Z,{}),Object(a.jsx)($,{})]})};n.a.render(Object(a.jsxs)(X.DeviceThemeProvider,{children:[Object(a.jsx)(tt,{}),Object(a.jsx)(H,{})]}),document.getElementById("root")),J()},76:function(t,e,s){},78:function(t,e,s){}},[[165,1,2]]]);
//# sourceMappingURL=main.ae13de0f.chunk.js.map