(this.webpackJsonproommate=this.webpackJsonproommate||[]).push([[17],{113:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},114:function(t,e,n){var r=n(158).default;function a(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(a=function(t){return t?n:e})(t)}t.exports=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var n=a(e);if(n&&n.has(t))return n.get(t);var o={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var u=c?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=t[i]}return o.default=t,n&&n.set(t,o),o},t.exports.default=t.exports,t.exports.__esModule=!0},115:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(26)},122:function(t,e,n){"use strict";function r(t){return t&&t.ownerDocument||document}n.d(e,"a",(function(){return r}))},123:function(t,e,n){"use strict";var r=n(160),a=n.n(r).a.create({headers:{"Content-Type":"application/json",accept:"application/json"}});e.a=a},128:function(t,e,n){"use strict";function r(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var c=this,i=function(){t.apply(c,a)};clearTimeout(e),e=setTimeout(i,n)}return r.clear=function(){clearTimeout(e)},r}n.d(e,"a",(function(){return r}))},132:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(122);function a(t){return Object(r.a)(t).defaultView||window}},133:function(t,e,n){"use strict";function r(t,e,n,r,a){return null}n.d(e,"a",(function(){return r}))},136:function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return null==e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];t.apply(this,r),e.apply(this,r)}}),(function(){}))}n.d(e,"a",(function(){return r}))},137:function(t,e,n){"use strict";function r(t){return function(){return null}}n.d(e,"a",(function(){return r}))},138:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0);function a(t){var e=t.controlled,n=t.default,a=(t.name,t.state,r.useRef(void 0!==e).current),o=r.useState(n),c=o[0],i=o[1];return[a?e:c,r.useCallback((function(t){a||i(t)}),[])]}},158:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},162:function(t,e,n){"use strict";var r=n(199),a=n(200),o=n(203),c=n(201),i=n(0),u=n(523),s=n(524),l=n(525),f=n(526),d=n(527),p=n(528),j=n(529),b=n(530),x=n(2),m=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.url,n=void 0===e?String(window.location):e,r=t.title,a=void 0===r?"RoomMate ":r,o=t.size,c=void 0===o?"2rem":o;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.a,{url:n,quote:a,children:Object(x.jsx)(s.a,{size:c})}),Object(x.jsx)(l.a,{url:n,title:a,children:Object(x.jsx)(f.a,{size:c})}),Object(x.jsx)(d.a,{url:n,title:a,separator:":: ",children:Object(x.jsx)(p.a,{size:c})}),Object(x.jsx)(j.a,{url:n,title:a,windowWidth:750,windowHeight:600,children:Object(x.jsx)(b.a,{size:c})})]})}}]),n}(i.Component);e.a=m},205:function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var r=n(134),a=n.n(r),o=n(135),c=n(126),i=n(97),u=n(732),s=n(733),l=n(246),f=n(98),d=n(734),p=n(591),j=n(592),b=n(522),x=n(735),m=n(310),O=n.n(m),h=n(240),v=n.n(h),y=n(239),g=n.n(y),w=n(241),_=n.n(w),S=n(242),C=n.n(S),M=n(198),k=n.n(M),R=n(311),P=n.n(R),T=n(0),F=n(123),D=n(5),E=n(309),N=n.n(E),W=n(162),z=n(2),A=Object(i.a)((function(t){return{root:{flexGrow:1,marginTop:"2rem"},card:{transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"}},icon:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignContent:"center",justifyContent:"space-around"},details:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignContent:"center",justifyContent:"space-around",padding:"1px"},media:{height:0,paddingTop:"56.25%"},share:{marginLeft:"auto"}}}));function I(t){var e=t.item,n=t.ridfun,r=t.rid,i=A(),m=Object(T.useState)(!1),h=Object(c.a)(m,2),y=h[0],w=h[1],S=Object(T.useState)(""),M=Object(c.a)(S,2),R=M[0],E=M[1],I=Object(T.useState)(!1),G=Object(c.a)(I,2),L=G[0],q=G[1],B=Object(D.f)().push,H=function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("/api/room/fav/".concat(e));case 2:201===t.sent.status?w(!1):w(!0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(T.useEffect)((function(){return fetch("/api/users/list",{method:"GET",headers:{Accept:"appllication/json","Content-Type":"application/json"},credentials:"include"},{}).then((function(t){return t.json()})).then((function(t){var e;(null===(e=t.data)||void 0===e?void 0:e.fav)&&E(t.data.fav)})),function(){console.log("unmount")}}),[]),Object(T.useEffect)((function(){var t;return t=e._id,R.includes(t)&&w(!0),function(){console.log("unmount")}}),[R,e._id]);return Object(z.jsxs)(u.a,{className:i.card,children:[Object(z.jsx)(s.a,{avatar:Object(z.jsx)(l.a,{"aria-label":"profile",alt:e.users.name,src:e.users.image}),action:r?Object(z.jsx)(f.a,{"aria-label":"favorite",onClick:function(){return n(e._id)},children:Object(z.jsx)(N.a,{color:"secondary"})}):Object(z.jsx)(f.a,{"aria-label":"favorite",onClick:function(){return H(e._id)},children:y?Object(z.jsx)(k.a,{color:"secondary"}):Object(z.jsx)(O.a,{color:"secondary"})}),title:e.name+" (".concat(e.reviews.length,")"),subheader:"".concat(e.address.city,",").concat(e.address.state)}),Object(z.jsxs)(d.a,{onClick:function(){return function(t){B("/roomview/".concat(t._id))}(e)},children:[Object(z.jsx)(p.a,{className:i.media,image:e.images[0],title:"room_image"}),Object(z.jsxs)(j.a,{className:i.icon,children:[Object(z.jsx)(g.a,{color:e.facility.wifi?"primary":"disabled"}),Object(z.jsx)(v.a,{color:e.facility.food?"primary":"disabled"}),Object(z.jsx)(_.a,{color:e.facility.electric?"primary":"disabled"}),Object(z.jsx)(C.a,{color:e.facility.water?"primary":"disabled"})]}),Object(z.jsxs)(j.a,{className:i.details,children:[Object(z.jsxs)(b.a,{variant:"body2",children:["TYPE : ",Object(z.jsx)("b",{children:e.type.toUpperCase()})]}),Object(z.jsxs)(b.a,{variant:"body2",children:["FOR :",Object(z.jsxs)("b",{children:[" ",e.onlyfor]})]})]})]}),Object(z.jsxs)(x.a,{disableSpacing:!0,children:[Object(z.jsxs)(b.a,{variant:"h6",component:"h6",style:{marginLeft:"15px"},children:[e.price," "]}),Object(z.jsx)(f.a,{className:i.share,"aria-label":"share",onClick:function(){return q(!0)},children:L?Object(z.jsx)(W.a,{url:String(window.location+"roomview/".concat(e._id)),title:e.name}):Object(z.jsx)(P.a,{})})]})]})}},26:function(t,e,n){"use strict";n.r(e),n.d(e,"capitalize",(function(){return r.a})),n.d(e,"createChainedFunction",(function(){return a.a})),n.d(e,"createSvgIcon",(function(){return o.a})),n.d(e,"debounce",(function(){return c.a})),n.d(e,"deprecatedPropType",(function(){return i.a})),n.d(e,"isMuiElement",(function(){return u.a})),n.d(e,"ownerDocument",(function(){return s.a})),n.d(e,"ownerWindow",(function(){return l.a})),n.d(e,"requirePropFactory",(function(){return f.a})),n.d(e,"setRef",(function(){return d.a})),n.d(e,"unsupportedProp",(function(){return p.a})),n.d(e,"useControlled",(function(){return j.a})),n.d(e,"useEventCallback",(function(){return b.a})),n.d(e,"useForkRef",(function(){return x.a})),n.d(e,"unstable_useId",(function(){return O})),n.d(e,"useIsFocusVisible",(function(){return h.a}));var r=n(15),a=n(136),o=n(81),c=n(128),i=n(80),u=n(129),s=n(122),l=n(132),f=n(137),d=n(39),p=n(133),j=n(138),b=n(19),x=n(30),m=n(0);function O(t){var e=m.useState(t),n=e[0],r=e[1],a=t||n;return m.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}var h=n(47)},747:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(134),a=n.n(r),o=n(135),c=n(126),i=n(0),u=n(97),s=n(205),l=n(568),f=n(522),d=n(123),p=n(175),j=n(152),b=n(2),x=Object(u.a)((function(t){return{root:{flexGrow:1,marginTop:"2rem"},text:{justifyContent:"center",right:"50%"}}}));function m(){var t=Object(i.useState)(!1),e=Object(c.a)(t,2),n=e[0],r=e[1],u=Object(i.useState)(!0),m=Object(c.a)(u,2),O=m[0],h=m[1],v=function(t){var e=t.items;return 0!==e.length?e.map((function(t){return Object(b.jsx)(l.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(b.jsx)(s.a,{item:t})},t._id)})):(h(!1),Object(b.jsx)(f.a,{variant:"h5",style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"60vh",margin:"auto"},children:"Not favorite found"}))};Object(i.useEffect)((function(){return function(){var t=Object(o.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("/api/users/fav");case 3:return n=t.sent,t.next=6,n.data;case 6:r=t.sent,e(r.data.fav),Boolean(r.data.fav.length)&&h(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()(r),function(){console.log("unmount")}}),[O]);var y=x();return Object(b.jsxs)("div",{className:y.root,children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)("title",{children:"Favorite in RoomMate For Best Room Rental : RoomMate"}),Object(b.jsx)("meta",{name:"description",content:"An Online Room Rental System will provide the Information\nabout Rooms/Flats/Houses which is available for Rent"})]}),O&&Object(b.jsx)(p.DiamonLoading,{}),Object(b.jsx)(l.a,{container:!0,spacing:2,children:n&&Object(b.jsx)(v,{items:n})})]})}},80:function(t,e,n){"use strict";function r(t,e){return function(){return null}}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=17.625d7fb8.chunk.js.map