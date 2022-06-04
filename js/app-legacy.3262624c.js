(function(){"use strict";var t={296:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-up",{scopedSlots:t._u(["todo"===this.$router.currentRoute.name?{key:"logout",fn:function(){return[n("button",{staticClass:"logout",on:{click:t.logout}},[t._v("Logout")])]},proxy:!0}:null],null,!0)}),n("main",{staticClass:"main"},[n("router-view")],1),n("footer-up")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"header__top head"},[r("div",{staticClass:"container"},[r("div",{staticClass:"head-left"},[r("a",{staticClass:"head-left__logo",attrs:{href:"#"}},[r("img",{attrs:{width:"103",height:"66",src:n(9574),alt:"logo"}})]),t._t("logout")],2)])])])},i=[],u={name:"HeaderUp"},l=u,c=n(1001),f=(0,c.Z)(l,o,i,!1,null,null,null),d=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"footer__container"},[r("div",{staticClass:"footer__logo"},[r("img",{attrs:{width:"56",height:"35",src:n(9574),alt:"footer logo"}})]),r("ul",{staticClass:"footer__list"},t._l(t.itemList,(function(e,n){return r("li",{key:n,staticClass:"footer__item"},[r("a",{staticClass:"footer__link",attrs:{href:e.link}},[t._v(t._s(e.txt))])])})),0)]),r("div",{staticClass:"footer__copyright"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender. ")])])])},m=[],v={name:"FooterUp",data:function(){return{itemList:[{txt:"Terms & Conditions",link:"#"},{txt:"Privacy",link:"#"},{txt:"Notice at Collection",link:"#"},{txt:"CA Privacy Hub",link:"#"},{txt:"Contact Us",link:"#"},{txt:"Sitemap",link:"#"}]}}},_=v,h=(0,c.Z)(_,p,m,!1,null,null,null),g=h.exports,b={components:{HeaderUp:d,FooterUp:g},methods:{logout:function(){localStorage.removeItem("user-info"),this.$router.push({path:"login"})}}},y=b,C=(0,c.Z)(y,s,a,!1,null,null,null),k=C.exports,w=(n(1539),n(8783),n(3948),n(2809)),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"business"},[t._m(0),n("div",{staticClass:"business__analitics analitics container"},[n("div",{staticClass:"analitics__container"},[t._m(1),n("ul",{staticClass:"analitics__list"},t._l(t.listItem,(function(e,r){return n("li",{key:r,staticClass:"analitics__item"},[n("h4",{staticClass:"analitics__item-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"analitics__item-text"},[t._v(t._s(e.text))])])})),0)]),n("div",{staticClass:"analitics__form"},[n("sign-in")],1)])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"business__top"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"business__title"},[t._v("Welcome to "),n("br"),t._v(" Business Analytics Online")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"analitics__container-txt"},[n("span",[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's")])}],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form"},[n("div",{staticClass:"form__input"},[n("label",{staticClass:"form__input-title",attrs:{for:"user_name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form__input-name",class:{error:t.errorUser},attrs:{id:"user_name",type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("p",{staticClass:"form__error"},[n("span",{class:{error:t.errorUser}},[t._v("Enter a valid name")])])]),n("div",{staticClass:"form__input"},[n("label",{staticClass:"form__input-title",attrs:{for:"user_password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form__input-password",class:{error:t.errorPass},attrs:{id:"user_password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("p",{staticClass:"form__error"},[n("span",{class:{error:t.errorPass}},[t._v("Enter a valid password")])])]),n("button-up",{staticClass:"form__btn",attrs:{name:t.sign},on:{click:t.submitForm}}),t._m(0),n("div",{staticClass:"form__footer"},[t._v(" Register now ")])],1)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form__link"},[n("a",{staticClass:"form__link-link",attrs:{href:"#!"}},[t._v("Forgot Password")])])}],S=n(7906),U=n(6198),A=(n(8862),n(6166)),j=n.n(A),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-default",on:{click:function(e){return e.preventDefault(),t.clickBtn.apply(null,arguments)}}},[t._v(" "+t._s(t.name)+" ")])},Z=[],$={name:"ButtonUp",props:{name:{type:String,default:"Button"}},methods:{clickBtn:function(){this.$emit("click")}}},I=$,T=(0,c.Z)(I,N,Z,!1,null,null,null),B=T.exports,L={components:{ButtonUp:B},name:"SignIn",data:function(){return{sign:"LOGIN",errorUser:!1,errorPass:!1,username:"",password:"",currentUser:null,currentPass:null}},methods:{submitForm:function(){var t=this;return(0,U.Z)((0,S.Z)().mark((function e(){var n,r,s;return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j().get("https://sheetdb.io/api/v1/hoanq94287jgw");case 3:n=e.sent,r=n.data,s=0;case 6:if(!(s<r.length)){e.next=18;break}if(t.username!==r[s].login){e.next=15;break}if(t.currentUser=r[s].login,t.password!==r[s].pass){e.next=15;break}return t.currentPass=r[s].pass,localStorage.setItem("user-info",JSON.stringify(r[s])),t.errorPass=!1,t.$router.push({path:"todo"}),e.abrupt("break",18);case 15:s++,e.next=6;break;case 18:t.currentUser?t.currentUser&&!t.currentPass&&(t.errorUser=!1,t.errorPass=!0):t.errorUser=!0,e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](0),console.log("error: ",e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))()}},mounted:function(){var t=localStorage.getItem("user-info");t&&this.$router.push({name:"todo"})}},F=L,M=(0,c.Z)(F,E,O,!1,null,null,null),R=M.exports,D={components:{SignIn:R},name:"LoginPage",data:function(){return{listItem:[{title:"Interactive Reporting",text:"In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities."},{title:"Automated data updates",text:"The application automatically updates and structures the data in just 60 seconds, saving you time and money."},{title:"Data Security",text:"The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality."}]}},methods:{}},q=D,H=(0,c.Z)(q,x,P,!1,null,null,null),z=H.exports;r.Z.use(w.Z);var G=[{path:"/",redirect:"/login"},{path:"/login",name:"home",component:z},{path:"/todo",name:"todo",component:function(){return n.e(544).then(n.bind(n,7544))}}],K=new w.Z({mode:"history",base:"/fe-21-01/max/training/test-task/",routes:G}),J=K;r.Z.config.productionTip=!1,new r.Z({router:J,render:function(t){return t(k)}}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.cf8ec950.svg"}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,s,a){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],s=t[c][1],a=t[c][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(i=!1,a<o&&(o=a));if(i){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy.b4871a3d.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".b93fb13a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="test-task:";n.l=function(r,s,a,o){if(t[r])t[r].push(s);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){i=f;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=r),t[r]=[s];var d=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var s=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/fe-21-01/max/training/test-task/"}(),function(){var t=function(t,e,n,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var a=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=i,s.parentNode.removeChild(s),r(u)}};return s.onerror=s.onload=a,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var s=n[r],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===t||a===e))return s}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){s=o[r],a=s.getAttribute("data-href");if(a===t||a===e)return s}},r=function(r){return new Promise((function(s,a){var o=n.miniCssF(r),i=n.p+o;if(e(o,i))return s();t(r,i,s,a)}))},s={143:0};n.f.miniCss=function(t,e){var n={544:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=r(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)r.push(s[2]);else{var a=new Promise((function(n,r){s=t[e]=[n,r]}));r.push(s[2]=a);var o=n.p+n.u(e),i=new Error,u=function(r){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,s[1](i)}};n.l(o,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,a,o=r[0],i=r[1],u=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(u)var c=u(n)}for(e&&e(r);l<o.length;l++)a=o[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(296)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.3262624c.js.map