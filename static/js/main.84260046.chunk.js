(this["webpackJsonpe-commerce-project"]=this["webpackJsonpe-commerce-project"]||[]).push([[0],{39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),n=a(33),s=a.n(n),c=a(20),o=(a(39),a(13)),l=a.n(o),m=a(9),d=a(21),p=a(15),h=a(16),u=a(18),f=a(17),g=a(5),b=a(25),v=(a(66),a(42),function(){var e=Object(d.a)(l.a.mark((function e(t,a){var r,i,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=x.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,n=t.email,s=new Date,e.prev=9,e.next=12,r.set(Object(m.a)({displayName:i,email:n,createdAt:s},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());b.a.initializeApp({apiKey:"AIzaSyAORgxesTgoDfdZDqf_VY1iEzyTaRDohbQ",authDomain:"camera-shop-db.firebaseapp.com",databaseURL:"https://camera-shop-db.firebaseio.com",projectId:"camera-shop-db",storageBucket:"camera-shop-db.appspot.com",messagingSenderId:"80115904774",appId:"1:80115904774:web:e7ada12b2512b713d5ee87",measurementId:"G-KVVK1MMT8P"});var j=b.a.auth(),x=b.a.firestore(),y=new b.a.auth.GoogleAuthProvider;y.setCustomParameters({prompt:"select_account"});var O=function(){return j.signInWithPopup(y)},C=(b.a,a(44),a(19)),w=(a(45),a(2)),k=Object(g.f)((function(e){var t=e.title,a=e.imageUrl,r=e.linkUrl,i=e.history,n=e.match;return Object(w.jsxs)("div",{className:"menu-item",onClick:function(){return i.push("".concat(n.url).concat(r))},children:[Object(w.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("div",{className:"title",children:t}),Object(w.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),E=(a(54),[{title:"Digital SLR Cameras",imageUrl:"assets/images/dslr.jpg",id:1,linkUrl:"dslr"},{title:"Mirrorless Cameras",imageUrl:"assets/images/mirrorless.jpg",id:2,linkUrl:"mirrorless"},{title:"Bridge Cameras",imageUrl:"assets/images/bridge.jpg",id:3,linkUrl:"bridge"},{title:"Compact Cameras",imageUrl:"assets/images/compact.jpg",id:4,linkUrl:"compact"},{title:"Instant Cameras",imageUrl:"assets/images/instant.jpg",id:5,linkUrl:"instant"},{title:"GoPro & Action Cameras",imageUrl:"assets/images/goProAndAction.jpg",id:6,linkUrl:"action"}]),S=["id"],N=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={sections:E},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.sections;return Object(w.jsx)("div",{className:"directory-menu",children:e.map((function(e){var t=e.id,a=Object(C.a)(e,S);return Object(w.jsx)(k,Object(m.a)({},a),t)}))})}}]),a}(i.a.Component);N.displayName="Directory";a(55);var z=function(){return Object(w.jsx)("div",{className:"homepage",children:Object(w.jsx)(N,{})})},D=a(24),P=(a(56),["children","isGoogleSignIn"]),B=function(e){var t=e.children,a=e.isGoogleSignIn,r=Object(C.a)(e,P);return Object(w.jsx)("button",Object(m.a)(Object(m.a)({className:"custom-button ".concat(a?"google-sign-in":"")},r),{},{children:t}))},M=(a(57),["onChange","label"]),I=function(e){var t=e.onChange,a=e.label,r=Object(C.a)(e,M),i="form-input-label ".concat(r.value.length?"shrink":"");return Object(w.jsxs)("div",{className:"group",children:[Object(w.jsx)("input",Object(m.a)({className:"form-input",onChange:t},r)),a?Object(w.jsx)("label",{className:i,children:a}):null]})},A=(a(58),function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.onSubmit=function(){var t=Object(d.a)(l.a.mark((function t(a){var r,i,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=e.state,i=r.email,n=r.password,t.prev=2,t.next=5,j.signInWithEmailAndPassword(i,n);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.onChange=function(t){var a=t.target,r=a.name,i=a.value;e.setState(Object(D.a)({},r,i))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"login",children:[Object(w.jsx)("h2",{className:"title",children:"I already have an account"}),Object(w.jsx)("div",{className:"info",children:"Sign in with your email and password"}),Object(w.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(w.jsx)(I,{name:"email",type:"email",autoComplete:"username",onChange:this.onChange,value:this.state.email,label:"Email",required:!0}),Object(w.jsx)(I,{name:"password",type:"password",autoComplete:"current-password",value:this.state.password,onChange:this.onChange,label:"Password",required:!0}),Object(w.jsxs)("div",{className:"buttons-container",children:[Object(w.jsx)(B,{type:"submit",children:"Sign in"}),Object(w.jsx)(B,{type:"button",onClick:O,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),a}(i.a.Component));A.displayName="LogIn";a(59);var G={displayName:"",email:"",password:"",confirmPassword:""},U=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state=G,e.onSubmit=function(){var t=Object(d.a)(l.a.mark((function t(a){var r,i,n,s,c,o,m;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=e.state,i=r.displayName,n=r.email,s=r.password,c=r.confirmPassword,s===c){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,j.createUserWithEmailAndPassword(n,s);case 8:return o=t.sent,m=o.user,t.next=12,v(m,{displayName:i});case 12:e.setState(G),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.onChange=function(t){var a=t.target,r=a.name,i=a.value;e.setState(Object(D.a)({},r,i))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,r=e.password,i=e.confirmPassword;return Object(w.jsxs)("div",{className:"register",children:[Object(w.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(w.jsx)("div",{className:"info",children:"Register with your email and password"}),Object(w.jsxs)("form",{className:"register-form",onSubmit:this.onSubmit,children:[Object(w.jsx)(I,{name:"displayName",type:"text",onChange:this.onChange,value:t,label:"Display Name",required:!0}),Object(w.jsx)(I,{name:"email",type:"email",autoComplete:"username",onChange:this.onChange,value:a,label:"Email",required:!0}),Object(w.jsx)(I,{name:"password",type:"password",autoComplete:"new-password",value:r,onChange:this.onChange,label:"Password",required:!0}),Object(w.jsx)(I,{name:"confirmPassword",type:"password",autoComplete:"new-password",value:i,onChange:this.onChange,label:"Confirm Password",required:!0}),Object(w.jsx)(B,{type:"submit",children:"Create Account"})]})]})}}]),a}(i.a.Component);U.displayName="Register";a(60);var R,F,L,H,W,T,K,q,X,V,J,Z,_,Y,Q,$,ee,te,ae,re,ie,ne,se,ce,oe,le,me,de,pe=function(){return Object(w.jsxs)("div",{className:"log-in-and-register",children:[Object(w.jsx)(A,{}),Object(w.jsx)(U,{})]})},he=(a(61),[{id:1,title:"Digital SLR Cameras",routeName:"dslr",items:[{id:1,name:"Canon EOS 80D Camera Body with 18-135mm f/3.5-5.6 IS USM Lens | Black",imageDirectory:"assets/images/shop/dslr/canon-eos-80d",price:"1,399.00"},{id:2,name:"Nikon D780 with AF-S 24-85mm ED VR Lens | Black",imageDirectory:"assets/images/shop/dslr/nikon-d780",price:"2,899.00"},{id:3,name:"Pentax K-1 Mark II with 24-70mm F2.8 Lens | Black",imageDirectory:"assets/images/shop/dslr/pentax-k1",price:"2,800.00"},{id:4,name:"Pentax KP Body | Silver",imageDirectory:"assets/images/shop/dslr/pentax-kp",price:"999.00"}]},{id:2,title:"Mirrorless Cameras",routeName:"mirrorless",items:[{id:5,name:"Sony Alpha a7 III Digital Camera with 28-70mm Lens | Black",imageDirectory:"assets/images/shop/mirrorless/sony-alpha-a7",price:"2,499.00"},{id:6,name:"Panasonic GX80 Camera with 12-32mm Lens | Black",imageDirectory:"assets/images/shop/mirrorless/lumix-gx80",price:"489.00"},{id:7,name:"Leica M10-P Edition Safari Camera Body",imageDirectory:"assets/images/shop/mirrorless/leica-m10-p",price:"8,109.00"},{id:8,name:"Sigma FP L Digital Camera Body",imageDirectory:"assets/images/shop/mirrorless/sigma-fp-l",price:"2,299.00"}]},{id:3,title:"Bridge Cameras",routeName:"bridge",items:[{id:9,name:"Panasonic Lumix FZ330 Bridge Camera | Black",imageDirectory:"assets/images/shop/bridge/lumix-fz330",price:"489.00"},{id:10,name:"Kodak PixPro AZ401 Bridge Camera | White",imageDirectory:"assets/images/shop/bridge/kodak-pixpro",price:"189.99"},{id:11,name:"Nikon Coolpix B600 Bridge Camera | Red",imageDirectory:"assets/images/shop/bridge/nikon-coolpix",price:"419.00"},{id:12,name:"Sony Cyber Shot HX400VB Bridge Camera | Black",imageDirectory:"assets/images/shop/bridge/sony-cybershot",price:"399.00"}]},{id:4,title:"Compact Cameras",routeName:"compact",items:[{id:13,name:"Panasonic Lumix DMC-TZ100 Digital Travel Camera | Silver",imageDirectory:"assets/images/shop/compact/lumix-dmc",price:"429.00"},{id:14,name:"Canon PowerShot SX740 HS Compact Camera | Black",imageDirectory:"assets/images/shop/compact/canon-powershot",price:"429.00"},{id:15,name:"Sony Cyber Shot HX90V Compact Camera | Black",imageDirectory:"assets/images/shop/compact/sony-cybershot",price:"349.00"},{id:16,name:"Nikon Coolpix W300 geel OUTLET | Yellow & Black",imageDirectory:"assets/images/shop/compact/nikon-coolpix",price:"354.00"}]},{id:5,title:"Instant Cameras",routeName:"instant",items:[{id:17,name:"Fujifilm Instax Mini 40 Instant Camera | Black",imageDirectory:"assets/images/shop/instant/instax-mini40",price:"95.99"},{id:18,name:"Fujifilm Instax Mini LiPlay Bundle | Elegant Black",imageDirectory:"assets/images/shop/instant/instax-mini-liplay",price:"159.00"},{id:19,name:"Fujifilm Instax Mini 11 Instant Camera | Sky Blue",imageDirectory:"assets/images/shop/instant/instax-mini11",price:"75.99"},{id:20,name:"Polaroid Now Instant Camera | Mint & White",imageDirectory:"assets/images/shop/instant/polaroid",price:"129.99"}]},{id:6,title:"GoPro & Action Cameras",routeName:"action",items:[{id:21,name:"GoPro HERO9 Action Camera | Black",imageDirectory:"assets/images/shop/action/goPro-hero9",price:"429.00"},{id:22,name:"GoPro MAX Action Camera | Black",imageDirectory:"assets/images/shop/action/goPro-max",price:"529.00"},{id:23,name:"Kaiser Baas X450 Action Camera | Black",imageDirectory:"assets/images/shop/action/kaiser-baas",price:"119.00"},{id:24,name:"Insta360 One R 1-inch Edition Action Camera",imageDirectory:"assets/images/shop/action/insta-360",price:"599.00"}]}]),ue=(a(62),a(63),function(e){e.id;var t=e.name,a=e.imageDirectory,r=e.price;return Object(w.jsxs)("div",{className:"collection-item",children:[Object(w.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,"/1.jpg)")}}),Object(w.jsxs)("div",{className:"collection-footer",children:[Object(w.jsx)("span",{className:"name",children:t}),Object(w.jsxs)("span",{className:"price",children:["\u20ac",r]})]})]})}),fe=["id"],ge=function(e){var t=e.title,a=e.items;return Object(w.jsxs)("div",{className:"collection",children:[Object(w.jsx)("div",{className:"title",children:t}),Object(w.jsx)("div",{className:"preview",children:a.map((function(e){var t=e.id,a=Object(C.a)(e,fe);return Object(w.jsx)(ue,Object(m.a)({},a),t)}))})]})},be=["id"],ve=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={collections:he},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.collections;return Object(w.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,a=Object(C.a)(e,be);return Object(w.jsx)(ge,Object(m.a)({},a),t)}))})}}]),a}(i.a.Component);ve.displayName="ShopPage";var je=["title","titleId"];function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function ye(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function Oe(e,t){var a=e.title,i=e.titleId,n=ye(e,je);return r.createElement("svg",xe({viewBox:"0 0 99.270272 99.270279",id:"svg203",sodipodidocname:"logo_bw.svg",width:99.270279,height:99.270279,inkscapeversion:"1.1 (c68e22c387, 2021-05-23)",xmlnsinkscape:"http://www.inkscape.org/namespaces/inkscape",xmlnssodipodi:"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",xmlnssvg:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),a?r.createElement("title",{id:i},a):null,R||(R=r.createElement("sodipodiNamedview",{id:"namedview205",pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:1,inkscapepageshadow:2,inkscapepageopacity:0,inkscapepagecheckerboard:0,showgrid:"false",width:"812.90002px","fit-margin-top":0,"fit-margin-left":0,"fit-margin-right":0,"fit-margin-bottom":0,units:"in",inkscapezoom:2.0998893,inkscapecx:10.714851,inkscapecy:87.861775,"inkscapewindow-width":1920,"inkscapewindow-height":1013,"inkscapewindow-x":-9,"inkscapewindow-y":-9,"inkscapewindow-maximized":1,"inkscapecurrent-layer":"svg203"})),F||(F=r.createElement("linearGradient",{id:"A",gradientUnits:"userSpaceOnUse",x1:33.675999,y1:134.05499,x2:30.82,y2:-520.57501,gradientTransform:"translate(-0.00516161,-0.12456398)"},r.createElement("stop",{offset:0,stopColor:"#e53516",id:"stop108"}),r.createElement("stop",{offset:.5,stopColor:"#ffd405",id:"stop110"}),r.createElement("stop",{offset:1,stopColor:"#e21318",id:"stop112"}))),r.createElement("path",{d:"m 51.694838,66.675436 c -0.7,0.1 -1.3,0.1 -2,0.1 -0.7,0 -1.3,0 -2,-0.1 -18.8,-1 -33.3,-17.2 -32.2,-36 0.2,-4.2 1.2,-8.3 2.9,-12.1 0.8,-1.7 1.7,-3.3 2.7,-4.9 2.8,-4.2 6.5,-7.8 10.8,-10.4 -25.5999996,9.8 -38.3999996,38.5 -28.5999996,64.1 1.1,1.9 2.4,3.6 3.8,5.2 10.8999996,12.1 28.6999996,14.9 42.6999996,6.7 2,-1.2 3.9,-2.6 5.6,-4.1 3.6,-3.2 6.4,-7.1 8.4,-11.5 1.7,-3.8 2.7,-7.9 2.9,-12 -1,7.8 -7.2,14 -15,15 z",fill:"url(#A)",id:"path115",style:{fill:"#1c1c24",fillRule:"evenodd",filter:"url(#filter3366)"}}),L||(L=r.createElement("linearGradient",{id:"B",gradientUnits:"userSpaceOnUse",x1:56.084999,y1:120.967,x2:55.131001,y2:-97.553001,gradientTransform:"translate(-0.00516161,-0.12456398)"},r.createElement("stop",{offset:0,stopColor:"#e64415",id:"stop117"}),r.createElement("stop",{offset:.5,stopColor:"#ffd405",id:"stop119"}),r.createElement("stop",{offset:1,stopColor:"#e21318",id:"stop121"}))),r.createElement("path",{d:"m 66.994838,3.175436 c -11.4,-4.3 -23.8,-4.2 -35.1,0.1 -4.4,2.7 -8.1,6.2 -10.9,10.5 -1,1.6 -1.9,3.2 -2.6,4.9 -7.7,17.2 0,37.4 17.3,45.2 3.8,1.7 7.9,2.7 12.1,2.9 -7.9,-0.9 -14.2,-7.1 -15.1,-15 -0.1,-0.7 -0.1,-1.3 -0.1,-2 0,-0.7 0,-1.3 0.1,-2 1,-18.8 17.2,-33.3 36,-32.2 4.2,0.2 8.2,1.2 12,2.9 1.7,0.8 3.3,1.6 4.9,2.7 4.3,2.8 7.8,6.5 10.5,10.8 -5.2,-13.4 -15.8,-23.8 -29.1,-28.8 z",fill:"url(#B)",id:"path124",style:{fill:"#dbdbe3",fillRule:"evenodd",filter:"url(#filter3370)"}}),H||(H=r.createElement("linearGradient",{id:"C",gradientUnits:"userSpaceOnUse",x1:3.891,y1:43.479,x2:202.81,y2:81.412003,gradientTransform:"translate(-0.00516161,-0.12456398)"},r.createElement("stop",{offset:0,stopColor:"#e32618",id:"stop126"}),r.createElement("stop",{offset:.5,stopColor:"#ffd405",id:"stop128"}),r.createElement("stop",{offset:1,stopColor:"#e21318",id:"stop130"}))),r.createElement("path",{d:"m 95.994838,31.875436 c -2.6,-4.4 -6.2,-8.1 -10.5,-10.8 -1.5,-1 -3.2,-1.9 -4.9,-2.7 -15.3,-6.8 -33.3,-1.6 -42.5,12.4 -3.3,5.1 -5.3,10.9 -5.6,17 1,-8.6 8.3,-15.1 17,-15.3 0.7,0 1.4,0.1 2.1,0.1 9,0.5 17.5,4.5 23.5,11.3 1.6,1.7 2.9,3.6 4.1,5.6 8.2,14 5.4,31.8 -6.7,42.7 -1.6,1.4 -3.4,2.7 -5.2,3.9 13.3,-5.1 23.8,-15.7 28.8,-29 4.300002,-11.4 4.200002,-23.9 -0.1,-35.2 z",fill:"url(#C)",id:"path133",style:{fill:"#9393ac",fillRule:"evenodd",filter:"url(#filter3374)"}}),W||(W=r.createElement("linearGradient",{id:"D",gradientUnits:"userSpaceOnUse",x1:43.882999,y1:136.94,x2:42.924999,y2:-82.68,gradientTransform:"translate(-0.00516161,-0.12456398)"},r.createElement("stop",{offset:.12,stopColor:"#eb660c",id:"stop135"}),r.createElement("stop",{offset:.33,stopColor:"#ffd405",id:"stop137"}))),r.createElement("path",{d:"m 79.294838,49.475436 c -3.6,-6.2 -9.1,-11.1 -15.6,-14 -3.8,-1.7 -7.9,-2.7 -12,-2.9 8.6,1.1 15.1,8.3 15.2,17 0,0.7 0,1.3 -0.1,2 -0.2,4.1 -1.2,8.2 -2.9,12 -2,4.4 -4.8,8.3 -8.4,11.6 -1.7,1.6 -3.6,2.9 -5.6,4.1 -14,8.2 -31.8,5.4 -42.6999996,-6.7 -1.4,-1.6 -2.7,-3.3 -3.8,-5.2 9.7999996,25.6 38.4999996,38.400004 64.0999996,28.6 1.8,-1.1 3.6,-2.4 5.2,-3.8 11.9,-10.8 14.7,-28.7 6.6,-42.7 z",fill:"url(#D)",id:"path140",style:{fill:"#373748",fillRule:"evenodd",filter:"url(#filter3378)"}}),T||(T=r.createElement("path",{d:"m 147.29484,56.075436 h -10 v 19.5 h -10.1 v -51.8 h 20.1 c 10.7,0 17.1,7.4 17.1,16.2 0,8.8 -6.4,16.1 -17.1,16.1 z m -0.6,-23.3 h -9.5 v 14.2 h 9.5 c 4.6,0 7.5,-2.8 7.5,-7.1 0,-4.3 -2.8,-7.1 -7.5,-7.1 z m 51.9,42.9 v -21.8 h -17.6 v 21.7 h -10.1 v -51.8 h 10.1 v 21.2 h 17.6 v -21.2 h 10.1 v 51.9 z m 51.4,-5.3 c -3.7,3.8 -8.7,5.8 -14,5.7 -5.3,0.2 -10.4,-1.9 -14.1,-5.7 -5.2,-5.3 -5.1,-11.7 -5.1,-20.7 0,-9 -0.1,-15.5 5.1,-20.7 3.7,-3.8 8.8,-5.8 14.1,-5.7 5.3,-0.2 10.3,1.9 14,5.7 5.3,5.2 5.2,11.7 5.2,20.7 0,9 0.1,15.5 -5.2,20.7 z m -7.5,-35.3 c -1.6,-1.8 -4,-2.8 -6.5,-2.8 a 8.36,8.36 0 0 0 -6.6,2.8 c -2,2.2 -2.5,4.6 -2.5,14.6 0,10 0.5,12.4 2.5,14.6 1.7,1.8 4.1,2.8 6.6,2.8 2.5,0.1 4.8,-0.9 6.5,-2.8 2,-2.2 2.6,-4.6 2.6,-14.6 0,-10 -0.6,-12.4 -2.6,-14.6 z m 41,-2.3 v 42.9 h -10.1 v -42.9 h -13.6 v -9 h 37.2 v 9 z m 50.8,37.6 c -3.7,3.8 -8.7,5.8 -14,5.7 -5.3,0.2 -10.4,-1.9 -14.1,-5.7 -5.2,-5.3 -5.1,-11.7 -5.1,-20.7 0,-9 -0.1,-15.5 5.1,-20.7 3.7,-3.8 8.8,-5.9 14.1,-5.7 5.3,-0.2 10.3,1.9 14,5.7 5.3,5.2 5.2,11.7 5.2,20.7 0,9 0.1,15.5 -5.2,20.7 z m -7.5,-35.3 c -1.6,-1.8 -4,-2.8 -6.4,-2.8 a 8.36,8.36 0 0 0 -6.6,2.8 c -2,2.2 -2.5,4.6 -2.5,14.6 0,10 0.5,12.4 2.5,14.6 1.7,1.8 4.1,2.8 6.6,2.8 2.5,0.1 4.8,-0.9 6.5,-2.8 2,-2.2 2.5,-4.6 2.5,-14.6 0,-10 -0.6,-12.4 -2.6,-14.6 z m 36.4,41 c -7.8,0 -12.9,-2 -17.8,-6.9 l 3.8,-3.8 c 4.3,4.3 8.3,5.7 14.1,5.7 7.6,0 12.3,-3.6 12.3,-9.6 a 8.03,8.03 0 0 0 -2.5,-6.5 c -1.7,-1.4 -3,-1.9 -6.8,-2.5 l -6,-1 c -4.1,-0.7 -7.3,-2 -9.6,-3.9 -2.6,-2.3 -3.9,-5.5 -3.9,-9.7 0,-8.8 6.3,-14.7 16.6,-14.7 6.6,0 11,1.7 15.5,5.7 l -3.6,3.6 c -3.2,-2.9 -6.6,-4.4 -12.1,-4.4 -6.9,0 -10.9,3.9 -10.9,9.6 -0.2,2.2 0.7,4.5 2.3,6 a 14.82,14.82 0 0 0 7,2.8 l 5.7,0.9 c 4.9,0.7 7.3,1.8 9.5,3.7 2.9,2.6 4.5,6.4 4.4,10.3 -0.1,9.1 -7.2,14.7 -18,14.7 z m 43.4,-21.8 h -13.8 v 21.4 h -5.5 v -51.9 h 19.3 c 9.5,0 16,5.9 16,15.2 0,9.3 -6.5,15.3 -16,15.3 z m -0.5,-25.6 h -13.3 v 20.6 h 13.3 c 6.5,0 11,-3.5 11,-10.4 0,-6.9 -4.5,-10.2 -11,-10.2 z m 23.5,47 v -51.9 h 32.2 v 5 h -26.7 v 18.3 h 22.8 v 5 h -22.8 v 18.7 h 26.7 v 5 z m 56.4,0.4 c -5,0.1 -9.8,-1.9 -13.3,-5.4 -4.9,-4.9 -4.9,-10 -4.9,-21 0,-11 0,-16.1 4.9,-21 3.5,-3.5 8.3,-5.5 13.3,-5.4 9.3,0 16.3,5.7 18,15.5 h -5.7 c -1.4,-6.3 -5.8,-10.5 -12.3,-10.5 -3.4,0 -6.6,1.3 -9,3.6 -3.3,3.3 -3.6,6.9 -3.6,17.8 0,10.9 0.4,14.4 3.6,17.8 2.4,2.4 5.6,3.7 9,3.7 6.5,0 11.1,-4.2 12.5,-10.5 h 5.5 c -1.7,9.7 -8.8,15.4 -18,15.4 z m 27.7,-0.4 v -51.9 h 5.5 v 51.9 z m 46.6,0 -4.1,-11.8 h -22.7 l -4.1,11.7 h -5.9 l 19.1,-51.9 h 4.7 l 19,51.9 z m -15.4,-44 -9.8,27.4 h 19.4 z m 25.6,44 v -51.9 h 5.5 v 47 h 26.5 v 5 z m 38.2,0 v -51.9 h 5.5 v 51.9 z m 31.4,0.4 c -7.8,0 -12.9,-2 -17.8,-6.9 l 3.8,-3.8 c 4.3,4.3 8.3,5.7 14.1,5.7 7.6,0 12.3,-3.6 12.3,-9.6 a 8.03,8.03 0 0 0 -2.5,-6.5 c -1.7,-1.4 -3,-1.9 -6.8,-2.5 l -6,-1 c -4.1,-0.7 -7.3,-2 -9.5,-3.9 -2.6,-2.3 -3.9,-5.5 -3.9,-9.7 0,-8.8 6.3,-14.7 16.6,-14.7 6.6,0 11,1.7 15.5,5.7 l -3.6,3.6 c -3.2,-2.9 -6.6,-4.4 -12.1,-4.4 -6.9,0 -10.9,3.9 -10.9,9.6 -0.2,2.2 0.7,4.5 2.3,6 a 14.82,14.82 0 0 0 7,2.8 l 5.7,0.9 c 4.9,0.7 7.3,1.8 9.5,3.7 2.9,2.6 4.5,6.4 4.4,10.3 -0.2,9.1 -7.3,14.7 -18.1,14.7 z m 42.4,-47.4 v 47 h -5.5 v -47 h -15 v -5 h 35.6 v 5 z m -105.5,65.7 v 4.9 h -2.6 v -13.9 h 4.5 c 0.8,0 1.6,0.1 2.4,0.3 0.6,0.2 1.2,0.5 1.7,0.9 0.4,0.4 0.8,0.9 1,1.4 0.2,0.6 0.3,1.2 0.3,1.8 0,0.6 -0.1,1.2 -0.3,1.8 -0.2,0.6 -0.6,1 -1,1.4 -0.5,0.4 -1.1,0.7 -1.7,0.9 -0.8,0.2 -1.6,0.4 -2.3,0.3 h -2 z m 0,-2 h 1.9 c 0.4,0 0.8,0 1.2,-0.2 0.3,-0.1 0.6,-0.3 0.9,-0.5 0.2,-0.2 0.4,-0.5 0.5,-0.8 0.1,-0.3 0.2,-0.7 0.2,-1 0,-0.3 -0.1,-0.7 -0.2,-1 -0.1,-0.3 -0.3,-0.5 -0.5,-0.8 -0.3,-0.2 -0.5,-0.4 -0.9,-0.5 -0.4,-0.1 -0.8,-0.2 -1.2,-0.2 h -1.9 z m 22.5,-0.1 c 0,1 -0.2,1.9 -0.5,2.8 -0.6,1.7 -1.9,3 -3.6,3.7 a 8,8 0 0 1 -5.7,0 c -1.7,-0.7 -3,-2 -3.6,-3.7 a 7.73,7.73 0 0 1 0,-5.6 c 0.3,-0.8 0.8,-1.6 1.4,-2.2 0.6,-0.6 1.4,-1.1 2.2,-1.5 a 8,8 0 0 1 5.7,0 c 1.7,0.7 3,2 3.6,3.7 0.3,0.9 0.5,1.9 0.5,2.8 z m -2.7,0 c 0,-0.7 -0.1,-1.4 -0.3,-2 -0.2,-0.6 -0.5,-1.1 -0.9,-1.5 -0.4,-0.4 -0.8,-0.8 -1.4,-1 -0.6,-0.2 -1.2,-0.3 -1.8,-0.3 -0.6,0 -1.2,0.1 -1.8,0.3 -0.5,0.2 -1,0.6 -1.4,1 -0.4,0.4 -0.7,1 -0.9,1.5 -0.4,1.3 -0.4,2.7 0,4.1 0.2,0.6 0.5,1.1 0.9,1.5 0.4,0.4 0.9,0.8 1.4,1 0.6,0.2 1.2,0.3 1.8,0.3 0.6,0 1.2,-0.1 1.8,-0.3 0.5,-0.2 1,-0.6 1.4,-1 0.4,-0.4 0.7,-1 0.9,-1.5 0.2,-0.7 0.3,-1.4 0.3,-2.1 z m 3.4,-6.9 h 2.2 c 0.2,0 0.4,0 0.6,0.2 0.1,0.1 0.3,0.2 0.3,0.4 l 2.3,8.3 c 0.1,0.2 0.1,0.4 0.2,0.7 0.1,0.3 0.1,0.5 0.1,0.8 0,-0.3 0.1,-0.5 0.2,-0.8 0.1,-0.3 0.1,-0.5 0.2,-0.7 l 2.7,-8.3 c 0.1,-0.2 0.2,-0.3 0.3,-0.4 0.2,-0.1 0.4,-0.2 0.5,-0.2 h 0.8 c 0.2,0 0.4,0 0.6,0.2 0.1,0.1 0.3,0.2 0.3,0.4 l 2.7,8.3 0.4,1.4 c 0,-0.3 0.1,-0.5 0.1,-0.7 0,-0.2 0.1,-0.4 0.2,-0.6 l 2.3,-8.3 c 0,-0.2 0.1,-0.3 0.3,-0.4 0.2,-0.1 0.4,-0.2 0.6,-0.2 h 2 l -4.3,13.8 h -2.3 l -3,-9.4 c 0,-0.1 -0.1,-0.3 -0.1,-0.4 -0.1,-0.1 -0.1,-0.3 -0.1,-0.4 l -0.1,0.4 c 0,0.1 -0.1,0.3 -0.1,0.4 l -3,9.4 h -2.3 z m 30,0 v 2 h -6.2 v 3.8 h 4.8 v 2 h -4.8 v 3.9 h 6.1 v 2.1 h -8.7 v -13.8 z m 4.8,8.4 v 5.4 h -2.6 v -13.8 h 4.2 c 0.8,0 1.6,0.1 2.4,0.3 0.6,0.2 1.2,0.4 1.7,0.8 0.4,0.3 0.7,0.8 1,1.3 a 4.53,4.53 0 0 1 0.3,1.6 c 0,0.4 -0.1,0.9 -0.2,1.3 -0.1,0.4 -0.3,0.8 -0.6,1.1 -0.3,0.3 -0.6,0.6 -1,0.9 -0.4,0.3 -0.8,0.5 -1.3,0.6 0.3,0.2 0.6,0.5 0.8,0.8 l 3.5,5.1 h -2.3 c -0.2,0 -0.4,0 -0.6,-0.1 a 0.78,0.78 0 0 1 -0.4,-0.4 l -2.9,-4.4 c -0.1,-0.1 -0.2,-0.3 -0.3,-0.4 -0.2,-0.1 -0.4,-0.1 -0.6,-0.1 z m 0,-1.8 h 1.6 c 0.4,0 0.9,-0.1 1.3,-0.2 0.3,-0.1 0.6,-0.3 0.9,-0.5 0.2,-0.2 0.4,-0.5 0.5,-0.8 0.1,-0.3 0.2,-0.7 0.2,-1 0,-0.6 -0.2,-1.2 -0.7,-1.6 -0.6,-0.4 -1.4,-0.6 -2.1,-0.6 h -1.7 z m 18.6,-6.6 v 2 h -6.1 v 3.8 h 4.8 v 2 h -4.8 v 3.9 h 6.1 v 2.1 h -8.7 v -13.8 z m 14.4,6.9 c 0,1 -0.2,1.9 -0.5,2.8 -0.3,0.8 -0.8,1.6 -1.4,2.2 -0.6,0.6 -1.4,1.1 -2.2,1.4 -0.9,0.3 -1.9,0.5 -2.8,0.5 h -5.3 v -13.8 h 5.3 c 1,0 1.9,0.2 2.8,0.5 0.8,0.3 1.6,0.8 2.2,1.4 0.6,0.6 1.1,1.4 1.4,2.2 0.4,0.9 0.6,1.9 0.5,2.8 z m -2.6,0 c 0,-0.7 -0.1,-1.4 -0.3,-2 -0.2,-0.6 -0.5,-1.1 -0.9,-1.5 -0.4,-0.4 -0.8,-0.8 -1.4,-1 -0.6,-0.2 -1.2,-0.3 -1.8,-0.3 h -2.7 v 9.7 h 2.7 c 0.6,0 1.2,-0.1 1.8,-0.3 0.5,-0.2 1,-0.6 1.4,-1 0.4,-0.4 0.7,-1 0.9,-1.5 0.2,-0.7 0.3,-1.4 0.3,-2.1 z m 8.3,6.9 v -13.8 h 4.8 c 0.8,0 1.6,0.1 2.3,0.3 0.6,0.1 1.1,0.4 1.6,0.7 a 2.73,2.73 0 0 1 0.9,1.2 c 0.2,0.5 0.3,1 0.3,1.5 0,0.3 0,0.6 -0.1,0.9 -0.1,0.3 -0.3,0.6 -0.5,0.8 -0.2,0.3 -0.5,0.5 -0.8,0.7 -0.3,0.2 -0.7,0.4 -1.1,0.5 1.9,0.4 2.8,1.4 2.8,3.1 0,0.6 -0.1,1.1 -0.3,1.6 -0.2,0.5 -0.6,0.9 -1,1.3 -0.5,0.4 -1,0.7 -1.6,0.9 -0.7,0.2 -1.4,0.3 -2.1,0.3 z m 2.6,-7.8 h 2.1 c 0.7,0 1.4,-0.1 2,-0.5 0.5,-0.4 0.7,-0.9 0.7,-1.5 a 1.62,1.62 0 0 0 -0.6,-1.5 c -0.6,-0.3 -1.2,-0.5 -1.9,-0.5 h -2.2 z m 0,1.8 v 4 h 2.6 c 0.4,0 0.8,0 1.2,-0.2 0.3,-0.1 0.6,-0.3 0.8,-0.5 0.2,-0.2 0.3,-0.4 0.4,-0.7 0.1,-0.3 0.1,-0.5 0.1,-0.8 0,-0.3 0,-0.5 -0.1,-0.8 -0.1,-0.2 -0.2,-0.5 -0.5,-0.6 -0.2,-0.2 -0.5,-0.3 -0.8,-0.4 -0.4,-0.1 -0.8,-0.1 -1.2,-0.1 z m 16,0.7 v 5.4 h -2.6 v -5.4 l -5,-8.4 h 2.3 c 0.2,0 0.4,0 0.5,0.2 0.1,0.1 0.2,0.3 0.3,0.4 l 2.5,4.6 c 0.1,0.3 0.3,0.5 0.4,0.8 0.1,0.2 0.2,0.5 0.3,0.7 0.1,-0.3 0.2,-0.5 0.3,-0.7 0.1,-0.2 0.2,-0.5 0.4,-0.8 l 2.5,-4.6 c 0.1,-0.1 0.2,-0.3 0.3,-0.4 0.2,-0.1 0.3,-0.2 0.5,-0.2 h 2.3 z",fill:"#ffffff",id:"path142"})),r.createElement("defs",{id:"defs146"},K||(K=r.createElement("colorProfile",{name:"Agfa-:-Swop-Standard",xlinkHref:"../../../WINDOWS/system32/spool/drivers/color/RSWOP.icm",id:"color-profile189120"})),q||(q=r.createElement("path",{id:"E",d:"M 715.3,0 H 813 v 97.4 h -97.7 z"})),X||(X=r.createElement("path",{id:"F",d:"m 747.2,35.2 v 0 l -1.3,6.4 h 2.5 z m -1,-5.1 h 2.1 l 4,17.6 h -2.5 L 749,43.9 h -3.5 l -0.8,3.7 h -2.5 z"})),r.createElement("filter",{style:{colorInterpolationFilters:"sRGB"},inkscapelabel:"Fade to Black or White",id:"filter3366",x:0,y:0,width:1,height:1},V||(V=r.createElement("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",id:"feColorMatrix3364",result:"fbSourceGraphic"})),J||(J=r.createElement("feColorMatrix",{result:"fbSourceGraphicAlpha",in:"fbSourceGraphic",values:"0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0",id:"feColorMatrix3398"})),Z||(Z=r.createElement("feColorMatrix",{id:"feColorMatrix3400",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",in:"fbSourceGraphic"}))),r.createElement("filter",{style:{colorInterpolationFilters:"sRGB"},inkscapelabel:"Fade to Black or White",id:"filter3370",x:0,y:0,width:1,height:1},_||(_=r.createElement("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",id:"feColorMatrix3368",result:"fbSourceGraphic"})),Y||(Y=r.createElement("feColorMatrix",{result:"fbSourceGraphicAlpha",in:"fbSourceGraphic",values:"0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0",id:"feColorMatrix3402"})),Q||(Q=r.createElement("feColorMatrix",{id:"feColorMatrix3404",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",in:"fbSourceGraphic"}))),r.createElement("filter",{style:{colorInterpolationFilters:"sRGB"},inkscapelabel:"Fade to Black or White",id:"filter3374",x:0,y:0,width:1,height:1},$||($=r.createElement("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",id:"feColorMatrix3372",result:"fbSourceGraphic"})),ee||(ee=r.createElement("feColorMatrix",{result:"fbSourceGraphicAlpha",in:"fbSourceGraphic",values:"0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0",id:"feColorMatrix3406"})),te||(te=r.createElement("feColorMatrix",{id:"feColorMatrix3408",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",in:"fbSourceGraphic"}))),r.createElement("filter",{style:{colorInterpolationFilters:"sRGB"},inkscapelabel:"Fade to Black or White",id:"filter3378",x:0,y:0,width:1,height:1},ae||(ae=r.createElement("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",id:"feColorMatrix3376",result:"fbSourceGraphic"})),re||(re=r.createElement("feColorMatrix",{result:"fbSourceGraphicAlpha",in:"fbSourceGraphic",values:"0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0",id:"feColorMatrix3410"})),ie||(ie=r.createElement("feColorMatrix",{id:"feColorMatrix3412",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0",in:"fbSourceGraphic"})))),ne||(ne=r.createElement("clipPath",{id:"G"},r.createElement("use",{xlinkHref:"#E",id:"use148",x:0,y:0,width:"100%",height:"100%"}))),se||(se=r.createElement("defs",{id:"defs168"},r.createElement("path",{id:"H",d:"M 715.3,0 H 813 v 97.4 h -97.7 z"}))),ce||(ce=r.createElement("clipPath",{id:"I"},r.createElement("use",{xlinkHref:"#H",id:"use170",x:0,y:0,width:"100%",height:"100%"}))),oe||(oe=r.createElement("defs",{id:"defs182"},r.createElement("path",{id:"J",d:"M 715.3,0 H 813 v 97.4 h -97.7 z"}))),le||(le=r.createElement("clipPath",{id:"K"},r.createElement("use",{xlinkHref:"#J",id:"use184",x:0,y:0,width:"100%",height:"100%"}))),me||(me=r.createElement("defs",{id:"defs194"},r.createElement("path",{id:"L",d:"M 715.3,0 H 813 v 97.4 h -97.7 z"}))),de||(de=r.createElement("clipPath",{id:"M"},r.createElement("use",{xlinkHref:"#L",id:"use196",x:0,y:0,width:"100%",height:"100%"}))))}var Ce=r.forwardRef(Oe),we=(a.p,a(64),function(e){var t=e.currentUser;return Object(w.jsxs)("div",{className:"header",children:[Object(w.jsxs)(c.b,{className:"brand-container",to:"/",children:[Object(w.jsx)(Ce,{className:"logo"}),Object(w.jsx)("div",{className:"name",children:"Camera Shop"})]}),Object(w.jsxs)("div",{className:"menu-options",children:[Object(w.jsx)(c.b,{className:"option",to:"/shop",children:"Shop"}),Object(w.jsx)(c.b,{className:"option",to:"/",children:"Contact"}),t?Object(w.jsx)("div",{className:"option",onClick:function(){return j.signOut()},children:"Sign Out"}):Object(w.jsx)(c.b,{className:"option",to:"/login",children:"Sign In"})]})]})}),ke=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={currentUser:null},e.unsubscribeFromAuth=null,e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=j.onAuthStateChanged(function(){var t=Object(d.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,v(a);case 3:t.sent.onSnapshot((function(t){e.setState({currentUser:Object(m.a)({id:t.id},t.data())})}));case 5:e.setState({currentUser:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)(we,{currentUser:this.state.currentUser}),Object(w.jsxs)(g.c,{children:[Object(w.jsx)(g.a,{exact:!0,path:"/",component:z}),Object(w.jsx)(g.a,{path:"/shop",component:ve}),Object(w.jsx)(g.a,{path:"/login",component:pe})]})]})}}]),a}(i.a.Component);s.a.render(Object(w.jsx)(c.a,{basename:"/e-commerce-project",children:Object(w.jsx)(ke,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.84260046.chunk.js.map