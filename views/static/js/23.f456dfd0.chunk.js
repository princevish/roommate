(this.webpackJsonproommate=this.webpackJsonproommate||[]).push([[23],{119:function(e,t,n){"use strict";var a=n(145),c=n.n(a).a.create({headers:{"Content-Type":"application/json",accept:"application/json"}});t.a=c},737:function(e,t,n){"use strict";n.r(t);var a,c=n(152),r=n(126),i=n.n(r),s=n(127),o=n(120),j=n(0),l=n.n(j),u=n(97),h=n(110),m=n(406),b=n(289),p=n(180),x=n(664),d=n(211),O=n(663),f=n(390),g=n(196),v=n(407),y=n(665),w=n.n(y),S=n(473),k=n.n(S),R=n(5),T=n(708),A=n(119),C=n(155),E=n(140),N=n(2),F=Object(u.a)({profile:{marginTop:"-20px"},messageArea:{height:"55vh",overflowY:"auto"}});t.default=function(){var e=l.a.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1],j=l.a.useState([]),u=Object(o.a)(j,2),y=u[0],S=u[1],J=l.a.useState(!1),B=Object(o.a)(J,2),L=B[0],M=B[1],D=l.a.useState(!0),G=Object(o.a)(D,2),H=G[0],I=G[1],P=l.a.useState(""),U=Object(o.a)(P,2),W=U[0],Y=U[1],q=l.a.useState(""),z=Object(o.a)(q,2),K=z[0],Q=z[1],V=Object(R.g)().room,X=F(),Z=Object(R.f)().push,$=l.a.useRef(""),_=(new Date).toLocaleTimeString();l.a.useEffect((function(){fetch("/api/auth",{method:"GET",headers:{Accept:"appllication/json","Content-Type":"application/json"},credentials:"include"},{}).then((function(e){return e.json()})).then((function(e){Y(e.id),e.id||Z("/signup")})),function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.prev=1,e.next=4,A.a.get("/api/chat/".concat(V));case 4:return t=e.sent,e.next=7,t.data;case 7:n=e.sent,S(n.data),I(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}()()}),[]),l.a.useEffect((function(){if((a=k()("https://roommate2.herokuapp.com:5000/",{transports:["websocket"]})).on("connect",(function(){console.log("coonect"),a.emit("join",{to:W})})),a.on("online",function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0!==t.filter((function(e){return e.user===V})).length?M(!0):M(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.on("recivemsg",(function(e){r((function(t){return[].concat(Object(c.a)(t),[e])}))})),0!==n.length){var e={data:n[n.length-1]},t=JSON.stringify(e);fetch("/api/chat/".concat(V),{method:"POST",body:t,headers:{Accept:"appllication/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}return function(){a.disconnect(),a.off()}}),[n]),l.a.useEffect((function(){return function(){var e=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("/api/chatuser/".concat(V));case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,Q(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()(),function(){console.log("unmount")}}),[]);return Object(N.jsxs)(N.Fragment,{children:[H&&Object(N.jsx)(C.TouchBallLoading,{}),Object(N.jsxs)(m.a,{container:!0,className:X.profile,children:[Object(N.jsxs)(E.a,{children:[Object(N.jsx)("title",{children:"".concat(K.name," in RoomMate User For Best Room Rental : RoomMate")}),Object(N.jsx)("meta",{name:"description",content:"An Online Room Rental System will provide the Information\r\nabout Rooms/Flats/Houses which is available for Rent"})]}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(O.a,{children:Object(N.jsx)(g.a,{alt:K.name,src:K.image})}),Object(N.jsx)(f.a,{primary:K.name}),L&&Object(N.jsx)("h3",{children:"Online"})]})})]}),Object(N.jsxs)(m.a,{container:!0,component:h.a,className:X.chatSection,children:[Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{children:Object(N.jsxs)(T.a,{className:X.messageArea,children:[y.map((function(e,t){return e.to===V?Object(N.jsx)(d.a,{children:Object(N.jsxs)(m.a,{container:!0,children:[Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"right",primary:e.msg})}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"right",secondary:e.time})})]})},t):Object(N.jsx)(d.a,{children:Object(N.jsxs)(m.a,{container:!0,children:[Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"left",primary:e.msg})}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"left",secondary:e.time})})]})},t)}))," ",n.map((function(e,t){return e.to===V?Object(N.jsx)(d.a,{children:Object(N.jsxs)(m.a,{container:!0,children:[Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"right",primary:e.msg})}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"right",secondary:e.time})})]})},t):Object(N.jsx)(d.a,{children:Object(N.jsxs)(m.a,{container:!0,children:[Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"left",primary:e.msg})}),Object(N.jsx)(m.a,{item:!0,xs:12,children:Object(N.jsx)(f.a,{align:"left",secondary:e.time})})]})},t)}))]})})}),Object(N.jsx)(b.a,{}),Object(N.jsxs)(m.a,{container:!0,style:{padding:"5px"},children:[Object(N.jsx)(m.a,{item:!0,xs:10,children:Object(N.jsx)(p.a,{variant:"outlined",inputRef:$,label:"Type Something",fullWidth:!0})}),Object(N.jsx)(m.a,{item:!0,xs:2,align:"center",children:Object(N.jsx)(v.a,{color:"primary","aria-label":"add",onClick:function(){a.emit("sendmsg",{to:V,msg:$.current.value,time:_}),r((function(e){return[].concat(Object(c.a)(e),[{to:V,msg:$.current.value,time:_}])})),$.current.value=""},children:Object(N.jsx)(w.a,{})})})]})]})]})}}}]);
//# sourceMappingURL=23.f456dfd0.chunk.js.map