(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{165:function(t,e,s){"use strict";s.r(e);var a=s(3),i=s(0),l=s.n(i),n=s(12),o=s.n(n),h=(s(77),s(60)),c=s(61),r=s(10),d=s(71),u=s(70),p=s.p+"static/media/unnamed.16989a75.gif",g=s.p+"static/media/1.1604e800.gif",v=s.p+"static/media/22.4c5ae042.gif",f=s.p+"static/media/12-1.d42c22d6.gif",m=s.p+"static/media/44.6fe800ca.gif",b=s.p+"static/media/38.46c06d30.png",L=s.p+"static/media/39.134cd4ef.gif",j=s.p+"static/media/17.a32c7afe.gif",x=s.p+"static/media/18.1f9f31c6.gif",y=s.p+"static/media/8-1.1baa1012.gif",O=s.p+"static/media/43.5b33f99f.gif",w=s.p+"static/media/25.32555161.gif",k=s.p+"static/media/42.36414db4.gif",S=s.p+"static/media/13.1f4b21fb.gif",C=s.p+"static/media/5-1.348fb561.gif",z=s.p+"static/media/6.05d4448a.gif",D=s.p+"static/media/2-1.b1f44c28.gif",I=s(9),T=s(15),_=s(41),A=(s(78),s(62)),F=(s(79),s(14)),U=s.n(F),M=s(21),R=s(22),B=s.n(R),q="https://serene-inlet-82302.herokuapp.com/";function E(){return(E=Object(M.a)(U.a.mark((function t(e,s,a,i,l,n,o,h,c,r,d){var u,p;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.post(q+"user/",{UserId:e,name:s,foodLevel:a,sleepLevel:i,playLevel:l,timeOfExit:n,sec:o,min:h,hour:c,kusua:r,flag:d});case 2:return u=t.sent,p=u.data,t.abrupt("return",p);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=Object(M.a)(U.a.mark((function t(e){var s,a;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get(q+"user/",{params:{UserId:e}});case 2:return s=t.sent,a=s.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t,e,s,a,i,l,n,o,h,c,r){return G.apply(this,arguments)}function G(){return(G=Object(M.a)(U.a.mark((function t(e,s,a,i,l,n,o,h,c,r,d){var u;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u={UserId:e,name:s,foodLevel:a,playLevel:i,sleepLevel:l,timeOfExit:n,sec:o,min:h,hour:c,kusua:r,flag:d},console.log("body:",u),t.next=4,B.a.put(q+"user/",{UserId:e,name:s,foodLevel:a,playLevel:i,sleepLevel:l,timeOfExit:n,sec:o,min:h,hour:c,kusua:r,flag:d});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var H=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(h.a)(this,s),a=e.call(this,t),console.log("constructor"),a.state={notes:[],UserId:"",logo:p,foodLevel:50,sleepLevel:50,playLevel:50,color1:"var(--plasma-colors-accent)",color2:"var(--plasma-colors-accent)",color3:"var(--plasma-colors-accent)",timeOfExit:0,hour:0,min:0,sec:0,name:"\u0422\u0430\u043c\u0430\u0433\u043e\u0447\u0438",s:"",m:"",ch:"",flag:!0,f:!1,kusua:!1,f1:null,p1:null,s1:null,size:"m",full:null,img:null,sizeImg:null,sizeDiv:null},a.Change_img=a.Change_img.bind(Object(r.a)(a)),a.changeColor=a.changeColor.bind(Object(r.a)(a)),a.timer=a.timer.bind(Object(r.a)(a)),a.words=a.words.bind(Object(r.a)(a)),a.changeFlag=a.changeFlag.bind(Object(r.a)(a)),a.checkWidth=a.checkWidth.bind(Object(r.a)(a)),a}return Object(c.a)(s,[{key:"timer",value:function(){this.state.logo===b?(this.state.hour=0,this.state.min=0,this.state.sec=0):this.setState({sec:this.state.sec+=1}),this.state.sec>=59&&(this.state.sec=0,this.state.min=this.state.min+1,this.state.min>=59&&(this.state.min=0,this.state.hour+=1)),this.state.hour>=1&&(this.state.f=!0)}},{key:"getTimeDifference",value:function(t){var e=new Date(t),s=new Date;console.log("Time of exit: ",e),console.log("Actual time: ",s);var a=s-e-108e5;return console.log("diffTime",a),a}},{key:"componentDidMount",value:function(){var t,e=this;console.log("componentDidMount"),this.assistant=(t=function(){return e.getStateForAssistant()},Object(A.a)({getState:t})),this.assistant.on("data",(function(t){if("smart_app_data"==t.type){console.log("User"),console.log(t),console.log("event.sub",t.sub),void 0!=t.sub&&(console.log("Sub",t.sub),e.state.UserId=t.sub,function(t,e,s,a,i,l,n,o,h,c,r){E.apply(this,arguments)}(e.state.UserId,e.state.name,51,51,51,new Date,e.state.sec,e.state.min,e.state.hour,!1,!0),W(e.state.UserId,e.state.name,e.state.foodLevel,e.state.playLevel,e.state.sleepLevel,new Date,e.state.sec,e.state.min,e.state.hour,e.state.kusua,e.state.flag),function(t){return P.apply(this,arguments)}(e.state.UserId).then((function(t){console.log(t),e.setState({kusua:t.kusua}),e.setState({flag:t.flag}),e.Change_img(),e.setState({name:t.name}),e.setState({foodLevel:t.foodLevel}),e.setState({playLevel:t.playLevel}),e.setState({sleepLevel:t.sleepLevel}),e.didTamagatchiDie(),e.setState({sec:t.sec}),e.setState({min:t.min}),e.setState({hour:t.hour});var s=t.timeOfExit,a=e.getTimeDifference(s);e.state.foodLevel=e.state.foodLevel-Math.round(a/12e3),e.state.foodLevel<0&&(e.state.foodLevel=0),e.state.sleepLevel=e.state.sleepLevel-Math.round(a/6e4),e.state.sleepLevel<0&&(e.state.sleepLevel=0),e.state.playLevel=e.state.playLevel-Math.round(a/2e4),e.state.playLevel<0&&(e.state.playLevel=0),e.state.sec=e.state.sec+Math.round(a/1e3%60),e.state.min=e.state.min+Math.round(a/6e4%60),e.state.hour=e.state.hour+Math.round(a/36e5%24)}))),console.log("assistant.on(data)",t);var s=t.action;e.dispatchAssistantAction(s)}})),this.assistant.on("start",(function(t){console.log("assistant.on(start)",t)})),setInterval((function(){W(e.state.UserId,e.state.name,e.state.foodLevel,e.state.playLevel,e.state.sleepLevel,new Date,e.state.sec,e.state.min,e.state.hour,e.state.kusua,e.state.flag)}),6e3),setTimeout((function(){e.checkWidth(),e.didTamagatchiDie(),e.changeColor()}),1e3),setInterval((function(){e.less(1),e.didTamagatchiDie(),e.changeColor()}),12e3),setInterval((function(){e.less(2),e.didTamagatchiDie(),e.changeColor()}),6e4),setInterval((function(){e.less(3),e.didTamagatchiDie(),e.changeColor()}),2e4),setTimeout((function(){return setInterval((function(){e.timer(),e.words()}),1e3)}),1e3)}},{key:"less",value:function(t){switch(t){case 1:this.state.foodLevel>0?this.setState({foodLevel:this.state.foodLevel-=1}):this.state.foodLevel=0;break;case 2:this.state.sleepLevel>0?this.setState({sleepLevel:this.state.sleepLevel-=1}):this.state.sleepLevel=0;break;case 3:this.state.playLevel>0?this.setState({playLevel:this.state.playLevel-=1}):this.state.playLevel=0}}},{key:"feed",value:function(){this.state.foodLevel=100}},{key:"sleep",value:function(){this.state.sleepLevel=100}},{key:"play",value:function(){this.state.playLevel=100}},{key:"didTamagatchiDie",value:function(){!1===this.state.kusua?(this.state.foodLevel>60&&this.state.sleepLevel>60&&this.state.playLevel>60?this.setState({logo:g}):this.state.foodLevel<=this.state.sleepLevel&&this.state.foodLevel<=this.state.playLevel&&this.state.foodLevel<=60?this.setState({logo:L}):this.state.playLevel<=this.state.sleepLevel&&this.state.playLevel<=this.state.foodLevel&&this.state.playLevel<=60?this.setState({logo:j}):this.state.sleepLevel<=this.state.playLevel&&this.state.sleepLevel<=this.state.foodLevel&&this.state.sleepLevel<=60&&this.setState({logo:x}),this.state.foodLevel<=0&&this.state.sleepLevel<=0&&this.state.playLevel<=0&&this.setState({logo:b})):(this.state.foodLevel>60&&this.state.sleepLevel>60&&this.state.playLevel>60?this.setState({logo:y}):this.state.foodLevel<=this.state.sleepLevel&&this.state.foodLevel<=this.state.playLevel&&this.state.foodLevel<=60?this.setState({logo:S}):this.state.playLevel<=this.state.sleepLevel&&this.state.playLevel<=this.state.foodLevel&&this.state.playLevel<=60?this.setState({logo:C}):this.state.sleepLevel<=this.state.playLevel&&this.state.sleepLevel<=this.state.foodLevel&&this.state.sleepLevel<=60&&this.setState({logo:z}),this.state.foodLevel<=0&&this.state.sleepLevel<=0&&this.state.playLevel<=0&&this.setState({logo:D}))}},{key:"changeColor",value:function(){this.state.foodLevel>60?this.setState({color1:"var(--plasma-colors-accent)"}):this.state.foodLevel<=60&&this.state.foodLevel>=30?this.setState({color1:"var(--plasma-colors-warning)"}):this.setState({color1:"var(--plasma-colors-critical)"}),this.state.playLevel>60?this.setState({color2:"var(--plasma-colors-accent)"}):this.state.playLevel<=60&&this.state.playLevel>=30?this.setState({color2:"var(--plasma-colors-warning)"}):this.setState({color2:"var(--plasma-colors-critical)"}),this.state.sleepLevel>60?this.setState({color3:"var(--plasma-colors-accent)"}):this.state.sleepLevel<=60&&this.state.sleepLevel>=30?this.setState({color3:"var(--plasma-colors-warning)"}):this.setState({color3:"var(--plasma-colors-critical)"})}},{key:"getStateForAssistant",value:function(){console.log("getStateForAssistant: this.state:",this.state);var t={item_selector:{items:this.state.notes.map((function(t,e){return{number:e+1,id:t.id,title:t.title}}))}};return console.log("getStateForAssistant: state:",t),t}},{key:"dispatchAssistantAction",value:function(t){if(console.log("dispatchAssistantAction",t),t)switch(t.type){case"to_feed":return this.Change_img(1);case"to_play":return this.Change_img(2);case"to_sleep":return this.Change_img(3);case"set_name":this.setState({name:t.note});break;case"exit":this.assistant.close()}}},{key:"Change_img",value:function(t){var e=this;switch(t){case 1:!1===this.state.kusua?this.setState({logo:v}):this.setState({logo:O}),setTimeout((function(){e.didTamagatchiDie()}),3e3),this.feed(),this.changeColor();break;case 2:!1===this.state.kusua?this.setState({logo:f}):this.setState({logo:w}),setTimeout((function(){e.didTamagatchiDie()}),3e3),this.play(),this.changeColor();break;case 3:!1===this.state.kusua?this.setState({logo:m}):this.setState({logo:k}),setTimeout((function(){e.didTamagatchiDie()}),1e5),this.sleep(),this.changeColor();break;default:!1===this.state.kusua?this.setState({logo:g}):!0===this.state.kusua?this.setState({logo:y}):this.setState({logo:p})}}},{key:"changeFlag",value:function(t){switch(t){case 1:this.setState({flag:!0}),this.state.kusua=!1,this.didTamagatchiDie();break;case 2:!0===this.state.f?(this.setState({flag:!1}),this.state.kusua=!0,this.didTamagatchiDie()):_.b.success("\u0411\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441!",{position:"top-center",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;default:this.setState({flag:!0})}}},{key:"words",value:function(){0===this.state.min?this.state.m="":1===this.state.min?this.setState({m:"".concat(this.state.min," \u043c\u0438\u043d\u0443\u0442\u0443")}):this.state.min%10>1&&this.state.min%10<5&&12!=this.state.min&&13!=this.state.min&&14!=this.state.min?this.setState({m:"".concat(this.state.min," \u043c\u0438\u043d\u0443\u0442\u044b")}):this.setState({m:"".concat(this.state.min," \u043c\u0438\u043d\u0443\u0442")}),0===this.state.hour?this.state.ch="":1===this.state.hour?this.setState({ch:"".concat(this.state.hour," \u0447\u0430\u0441")}):this.state.hour>1&&this.state.hour<5?this.setState({ch:"".concat(this.state.hour," \u0447\u0430\u0441\u0430")}):this.setState({ch:"".concat(this.state.hour," \u0447\u0430\u0441\u043e\u0432")}),this.state.sec%10===1&&11!=this.state.sec?this.setState({s:"".concat(this.state.sec," \u0441\u0435\u043a\u0443\u043d\u0434\u0443")}):this.state.sec%10>1&&this.state.sec%10<5&&12!=this.state.sec&&13!=this.state.sec&&14!=this.state.sec?this.setState({s:"".concat(this.state.sec," \u0441\u0435\u043a\u0443\u043d\u0434\u044b")}):this.setState({s:"".concat(this.state.sec," \u0441\u0435\u043a\u0443\u043d\u0434")})}},{key:"checkWidth",value:function(){this.state.f1=this.state.foodLevel,this.state.p1=this.state.playLevel,this.state.s1=this.state.sleepLevel,window.screen.width>1750?(this.state.f1*=5,this.state.p1*=5,this.state.s1*=5,this.state.size="l",this.state.full=520,this.state.img=500,this.state.sizeImg=4,this.state.sizeDiv=6):1280===window.screen.width&&800===window.screen.height?(this.state.f1*=2.5,this.state.p1*=2.5,this.state.s1*=2.5,this.state.size="s",this.state.full=270,this.state.img=300,this.state.sizeImg=2,this.state.sizeDiv=3):window.screen.width>1300?(this.state.f1*=4,this.state.p1*=4,this.state.s1*=4,this.state.size="l",this.state.full=420,this.state.img=400,this.state.sizeImg=5,this.state.sizeDiv=6):window.screen.width>900&&window.screen.height<1900?(this.state.f1*=4,this.state.p1*=4,this.state.s1*=4,this.state.size="m",this.state.full=420,this.state.img=400,this.state.sizeImg=5,this.state.sizeDiv=7):window.screen.width>900&&window.screen.height>1900?(this.state.f1*=5,this.state.p1*=5,this.state.s1*=5,this.state.size="l",this.state.full=520,this.state.img=600,this.state.sizeImg=6,this.state.sizeDiv=8):(this.state.offset=2,this.state.f1*=1.5,this.state.p1*=1.5,this.state.s1*=1.5,this.state.size="s",this.state.full=170,this.state.img=200,this.state.sizeImg=3,this.state.sizeDiv=4)}},{key:"assistant_global_event",value:function(t){this.assistant.sendData({action:{action_id:t}}),"feed"===t?this.Change_img(1):"play"===t?this.Change_img(2):"sleep"===t?this.Change_img(3):"exit"===t&&this.assistant.close()}},{key:"render",value:function(){var t=this;console.log("render");var e=this.state.color1,s=this.state.color2,i=this.state.color3,l=this.state.name[0].toUpperCase()+this.state.name.slice(1);return Object(a.jsx)("div",{children:Object(a.jsxs)(I.Container,{style:{padding:0},children:[Object(a.jsx)(T.Row,{children:Object(a.jsxs)(I.Col,{sizeXL:9,children:[" ",Object(a.jsxs)("h1",{class:"center",children:[" ",l," \u0436\u0438\u0432\u0435\u0442 ",this.state.ch," ",this.state.m," ",this.state.s," "]})]})}),Object(a.jsx)(T.Row,{children:Object(a.jsxs)(I.Col,{sizeXL:10,offset:1,children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)(I.Tabs,{size:this.state.size,view:"secondary",children:[Object(a.jsx)(I.TabItem,{isActive:this.state.flag,onClick:function(){return t.changeFlag(1)},children:"\u0421\u0431\u0435\u0440\u043a\u043e\u0442"}),Object(a.jsx)(I.TabItem,{isActive:!this.state.flag,onClick:function(){return t.changeFlag(2)},children:"\u041a\u0443\u0441\u044f"})]})," "]}),Object(a.jsx)(_.a,{position:"top-center",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}),Object(a.jsxs)(T.Row,{children:[Object(a.jsxs)(I.Col,{type:"calc",size:this.state.sizeImg,children:[" ",Object(a.jsx)("img",{id:"img",src:this.state.logo,class:"img"})]}),Object(a.jsxs)(I.Col,{size:this.state.sizeDiv,children:[Object(a.jsxs)("div",{style:{textalign:"center",margin:"0.5em"},children:[Object(a.jsx)(I.Button,{class:"button",style:{margin:"0.5em",textalign:"center"},text:"\u041a\u043e\u0440\u043c\u0438\u0442\u044c",size:this.state.size,view:"primary",pin:"square-square",onClick:function(){return t.assistant_global_event("feed")}}),Object(a.jsx)(I.Button,{class:"button",style:{margin:"0.5em",textalign:"center"},text:"\u0418\u0433\u0440\u0430\u0442\u044c",size:this.state.size,view:"primary",pin:"square-square",onClick:function(){return t.assistant_global_event("play")}}),Object(a.jsx)(I.Button,{class:"button",style:{margin:"0.5em",textalign:"center"},text:"\u0421\u043f\u0430\u0442\u044c",size:this.state.size,view:"primary",pin:"square-square",onClick:function(){return t.assistant_global_event("sleep")}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{class:"box",style:{paddingRight:"1.5em",width:"50px",textAlign:"left"},children:[" ",this.state.foodLevel,"  "]}),Object(a.jsx)("div",{class:"box",style:{width:this.state.f1+"px",height:"35px",textalign:"right",backgroundColor:e,marginLeft:"0.75em"},children:" "}),Object(a.jsx)("div",{class:"box",style:{width:this.state.full-this.state.f1+"px"},children:" "}),Object(a.jsx)("h2",{class:"box",children:" \u0421\u044b\u0442\u043e\u0441\u0442\u044c "})]}),Object(a.jsx)("div",{class:"two",style:{height:"35px"}}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{class:"box",style:{paddingRight:"1.5em",width:"50px",textAlign:"left"},children:[" ",this.state.playLevel," "]}),Object(a.jsx)("div",{class:"box",style:{width:this.state.p1+"px",height:"35px",backgroundColor:s,marginLeft:"0.75em"},children:" "}),Object(a.jsx)("div",{class:"box",style:{width:this.state.full-this.state.p1+"px",height:"35px"},children:" "}),Object(a.jsx)("h2",{class:"box",children:" \u0421\u0447\u0430\u0441\u0442\u044c\u0435 "})]}),Object(a.jsx)("div",{class:"two",style:{height:"35px"}}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{class:"box",style:{paddingRight:"1.5em",width:"50px",textAlign:"left"},children:[" ",this.state.sleepLevel," "]}),Object(a.jsx)("div",{class:"box",style:{width:this.state.s1+"px",height:"35px",backgroundColor:i,marginLeft:"0.75em"},children:" "}),Object(a.jsx)("div",{class:"box",style:{width:this.state.full-this.state.s1+"px",height:"35px"},children:" "}),Object(a.jsx)("h2",{class:"box",children:" \u0411\u043e\u0434\u0440\u043e\u0441\u0442\u044c "})]})]})]})]}),Object(a.jsxs)(T.Row,{children:[" ",Object(a.jsx)("div",{style:{width:"20px",height:"20px"}})]}),Object(a.jsx)(T.Row,{children:Object(a.jsx)("div",{style:{width:"200px",height:"200px"}})})]})})}}]),s}(l.a.Component),J=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,166)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,l=e.getLCP,n=e.getTTFB;s(t),a(t),i(t),l(t),n(t)}))},X=s(69),K=s(67),N=s(1),Q=s(68),V=s(2);function Y(){var t=Object(K.a)(["\n  html {\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n\n    /** \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043e\u043c \u0432\u0441\u044e \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0443 */\n    min-height: 100vh;\n  }\n"]);return Y=function(){return t},t}var Z=Object(N.createGlobalStyle)(Y(),V.text,V.background,V.gradient),$=Object(N.createGlobalStyle)(Q.lightSber),tt=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(Z,{}),Object(a.jsx)($,{})]})};o.a.render(Object(a.jsxs)(X.DeviceThemeProvider,{children:[Object(a.jsx)(tt,{}),Object(a.jsx)(H,{})]}),document.getElementById("root")),J()},77:function(t,e,s){},79:function(t,e,s){}},[[165,1,2]]]);
//# sourceMappingURL=main.58a32390.chunk.js.map