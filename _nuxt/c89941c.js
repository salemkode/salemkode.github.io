(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{263:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("b497f204",content,!0,{sourceMap:!1})},264:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5de44012",content,!0,{sourceMap:!1})},265:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("2f2468b5",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n(263)},267:function(t,e,n){var r=n(38)(!1);r.push([t.i,".popup[data-v-819c6fe2]{border-radius:.375rem;display:flex;flex-direction:column;height:350px;padding:1rem;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));width:320px;z-index:60}.popup[data-v-819c6fe2],.popup-shadow[data-v-819c6fe2]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));position:fixed}.popup-shadow[data-v-819c6fe2]{--tw-bg-opacity:0.05;height:100%;width:100%;z-index:50;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}",""]),t.exports=r},268:function(t,e,n){"use strict";n(264)},269:function(t,e,n){var r=n(38)(!1);r.push([t.i,"h1[data-v-6e8692c2]{--tw-bg-opacity:1;background-color:rgba(50,50,50,var(--tw-bg-opacity));--tw-bg-opacity:0.8;border-radius:9999px;padding:.75rem 1.5rem;position:fixed;top:90%;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));z-index:50}",""]),t.exports=r},270:function(t,e,n){"use strict";n.r(e);var r={props:["show"],components:{Fragment:n(135).a}},o=(n(266),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup center-position shadow-card"},[t._t("default")],2)]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup-shadow center-position",on:{click:function(e){return t.$emit("close",e.target.value)}}})])],1)}),[],!1,null,"819c6fe2",null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r={props:["show"]},o=(n(268),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"center-position"},[t._v("My mail is coped")])}),[],!1,null,"6e8692c2",null);e.default=component.exports},272:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("be93783c",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(265)},274:function(t,e,n){var r=n(38)(!1);r.push([t.i,".btn[data-v-ec020e88]{--tw-bg-opacity:1;background-color:rgba(33,36,41,var(--tw-bg-opacity));border-radius:9999px;display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;padding:.75rem;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (min-width:768px){.btn[data-v-ec020e88]{padding-left:1rem;padding-right:1rem}}.btn-mail[data-v-ec020e88]{font-weight:700;margin-top:1rem;padding-left:2rem;padding-right:2rem}.btn .icon[data-v-ec020e88]{padding-left:.5rem;padding-right:.5rem;padding-top:.125rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-property:all}@media (min-width:768px){.btn .icon[data-v-ec020e88]{padding-left:.75rem;padding-right:.75rem}}@media (min-width:640px){.btn:hover .icon[data-v-ec020e88]{padding-left:1.5rem}}",""]),t.exports=r},275:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("c7eea396",content,!0,{sourceMap:!1})},276:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("4667e2ca",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n.r(e);n(63);var r={props:["text","_class"],data:function(){return{email:"kodesalem@gmail.com",popup:!1,alert:!1}},methods:{showPopup:function(){this.popup=!this.popup,this.copyMail()},copyMail:function(){var t=this;navigator.clipboard.writeText(this.email),this.alert||(this.alert=!0,setTimeout((function(e){return t.alert=!1}),500))}},components:{Fragment:n(135).a}},o=(n(273),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("a",{class:"btn "+t._class,attrs:{href:"mailto:"+t.email},on:{click:t.showPopup}},[n("strong",[t._v(t._s(t.text))]),t._v(" "),n("img",{staticClass:"icon",attrs:{src:"landing/next.svg"}})]),t._v(" "),n("pop-up",{attrs:{show:t.popup},on:{close:function(e){t.popup=!t.popup}}},[n("img",{staticClass:"p-3 h-1/2 m-auto",attrs:{src:"mail.svg",alt:""}}),t._v(" "),n("h1",{staticClass:"mt-3 p-3 bg-dark-200 rounded-md text-white bold",domProps:{textContent:t._s(t.email)}}),t._v(" "),n("button",{staticClass:"btn btn-mail",on:{click:function(e){return t.copyMail()}}},[t._v("Copy my mail")])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("Coped",{directives:[{name:"show",rawName:"v-show",value:t.alert,expression:"alert"}]})],1)],1)}),[],!1,null,"ec020e88",null);e.default=component.exports;installComponents(component,{PopUp:n(270).default,Coped:n(271).default})},278:function(t,e,n){"use strict";n(272)},279:function(t,e,n){var r=n(38)(!1);r.push([t.i,".section-landing[data-v-72ed1a84]{height:100vh;position:relative}.section-landing h1[data-v-72ed1a84]{display:flex;align-items:center;font-size:1.125rem;line-height:1.75rem;margin-top:.25rem;margin-bottom:.25rem}@media (min-width:640px){.section-landing h1[data-v-72ed1a84]{font-size:1.5rem;line-height:2rem}}.section-landing h1 .hand-icon[data-v-72ed1a84],.section-landing h1 .hand-icon[data-v-72ed1a84]:hover{-webkit-animation:hello-data-v-72ed1a84 1s;animation:hello-data-v-72ed1a84 1s;-webkit-animation-direction:alternate;animation-direction:alternate}.section-landing .shadow[data-v-72ed1a84]{height:40%;position:absolute;width:100%;z-index:-1;filter:blur(85px);transform:rotate(-5deg) translate(-50%,-50%);background:radial-gradient(109.72% 133.34% at 66.99%,at 117.71%,rgba(38,232,127,.3) 0,rgba(0,163,255,.3) 100%);background:radial-gradient(109.72% 133.34% at 66.99% 117.71%,rgba(38,232,127,.3) 0,rgba(0,163,255,.3) 100%)}.section-landing .mouse[data-v-72ed1a84]{cursor:pointer;display:none;position:absolute;left:50%;top:85%;transform:translate(-50%,-50%)}@media (min-width:768px){.section-landing .mouse[data-v-72ed1a84]{display:block}}.section-landing .mouse rect[data-v-72ed1a84]{transition:all 1s}.section-landing .mouse:hover rect[data-v-72ed1a84]{transform:translateY(26%)}.section-landing .content[data-v-72ed1a84]{display:flex;flex-direction:column-reverse;align-items:center;justify-content:center;height:100%}@media (min-width:768px){.section-landing .content[data-v-72ed1a84]{flex-direction:row}.section-landing .content>*[data-v-72ed1a84]{width:60%}}.section-landing .content .photo[data-v-72ed1a84]{width:80%}@media (min-width:768px){.section-landing .content .photo[data-v-72ed1a84]{width:40%}}.section-landing .content .avater[data-v-72ed1a84]{margin:auto}.section-landing .talk[data-v-72ed1a84]{display:flex;margin-top:2rem}.section-landing .talk .talk-telegram[data-v-72ed1a84]:hover{--tw-bg-opacity:0.14901960784313725;background-color:rgba(33,36,41,var(--tw-bg-opacity))}.section-landing .talk .talk-telegram[data-v-72ed1a84]{--tw-border-opacity:1;border-color:rgba(33,36,41,var(--tw-border-opacity));border-radius:9999px;border-width:1px;display:none;align-items:center;justify-content:center;margin-left:.5rem;margin-right:.5rem;padding:.5rem;transition:all .3s}@media (min-width:768px){.section-landing .talk .talk-telegram[data-v-72ed1a84]{display:flex}}@-webkit-keyframes hello-data-v-72ed1a84{0%{transform:rotate(-9deg)}20%{transform:rotate(30deg)}40%{transform:rotate(-9deg)}60%{transform:rotate(30deg)}80%{transform:rotate(0deg)}}@keyframes hello-data-v-72ed1a84{0%{transform:rotate(-9deg)}20%{transform:rotate(30deg)}40%{transform:rotate(-9deg)}60%{transform:rotate(30deg)}80%{transform:rotate(0deg)}}",""]),t.exports=r},280:function(t,e,n){"use strict";n(275)},281:function(t,e,n){var r=n(38)(!1);r.push([t.i,'.section-service[data-v-41441efd]{width:100%;margin-left:auto;margin-right:auto;--tw-bg-opacity:0.05;overflow:hidden;padding:2.5rem 1rem}@media (min-width:640px){.section-service[data-v-41441efd]{max-width:640px}}@media (min-width:768px){.section-service[data-v-41441efd]{max-width:768px;padding-left:2rem;padding-right:2rem}}@media (min-width:1024px){.section-service[data-v-41441efd]{max-width:1024px;padding-left:4rem;padding-right:4rem}}@media (min-width:1280px){.section-service[data-v-41441efd]{max-width:1280px;padding-left:5rem;padding-right:5rem}}@media (min-width:1536px){.section-service[data-v-41441efd]{max-width:1536px;padding-left:6rem;padding-right:6rem}}.section-service h1[data-v-41441efd]{font-size:1.875rem;line-height:2.25rem}.section-service .content[data-v-41441efd]{padding-top:3.75rem;padding-bottom:3.75rem;position:relative}@media (min-width:768px){.section-service .content[data-v-41441efd]{display:flex}}.section-service .content>.card-container[data-v-41441efd]{position:relative}@media (min-width:768px){.section-service .content>.card-container[data-v-41441efd]{display:flex}}.section-service .content>.card-container[data-v-41441efd]:before{content:"";width:100%;height:100%;position:absolute;background:#606060;opacity:.18;filter:blur(25px);transform:scaleX(1.1)}.section-service .content .card[data-v-41441efd]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.5rem;padding-bottom:2rem;padding-left:1.5rem;padding-right:1.5rem;position:relative;--tw-shadow-color:0,0,0;--tw-shadow:0px 0px 20px 1px rgb(0 0 0/15%);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}@media (min-width:768px){.section-service .content .card[data-v-41441efd]{width:33.333333%}}.section-service .content .card[data-v-41441efd]:nth-child(2){margin-top:1.5rem;margin-bottom:1.5rem}@media (min-width:768px){.section-service .content .card[data-v-41441efd]:nth-child(2){margin:0 1.5rem}}.section-service .content .card>*[data-v-41441efd]{margin-left:auto;margin-right:auto;text-align:center}.section-service .content .card h3[data-v-41441efd]{font-size:1.25rem;line-height:1.75rem;margin-bottom:1rem}',""]),t.exports=r},282:function(t,e,n){"use strict";n(276)},283:function(t,e,n){var r=n(38)(!1);r.push([t.i,".section-skill[data-v-78c245f6]{width:100%;margin-left:auto;margin-right:auto;padding:2.5rem 1rem}@media (min-width:640px){.section-skill[data-v-78c245f6]{max-width:640px}}@media (min-width:768px){.section-skill[data-v-78c245f6]{max-width:768px;padding-left:2rem;padding-right:2rem}}@media (min-width:1024px){.section-skill[data-v-78c245f6]{max-width:1024px;padding-left:4rem;padding-right:4rem}}@media (min-width:1280px){.section-skill[data-v-78c245f6]{max-width:1280px;padding-left:5rem;padding-right:5rem}}@media (min-width:1536px){.section-skill[data-v-78c245f6]{max-width:1536px;padding-left:6rem;padding-right:6rem}}.section-skill h1[data-v-78c245f6]{font-size:1.875rem;line-height:2.25rem}.section-skill .content[data-v-78c245f6]{display:flex;flex-wrap:wrap;justify-content:center;padding-top:3.75rem;padding-bottom:3.75rem;position:relative}.section-skill .content .card[data-v-78c245f6]{border-radius:.5rem;display:flex;height:8.5rem;margin:.5rem;padding:1.5rem;--tw-shadow-color:0,0,0;--tw-shadow:0px 0px 20px 1px rgb(0 0 0/15%);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);width:8.5rem}@media (min-width:768px){.section-skill .content .card[data-v-78c245f6]{margin:1.25rem}}.section-skill .content .card>*[data-v-78c245f6]{margin:auto;text-align:center}.section-skill .content .card h3[data-v-78c245f6]{font-size:1.25rem;line-height:1.75rem;margin-top:.5rem;margin-bottom:.5rem}",""]),t.exports=r},285:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){var t=this;t.makeSquare("talk-telegram"),window.addEventListener("resize",(function(){t.makeSquare("talk-telegram")}))},data:function(){return{}},methods:{down:function(){var t=document.querySelector(".section-landing").offsetHeight-document.querySelector("nav").offsetHeight;window.scrollTo(0,t)},makeSquare:function(t){var e=this.$refs[t];e.style.width="0px",e.style.width=e.offsetHeight+"px"}}},o=(n(278),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-landing container"},[n("div",{staticClass:"shadow center-position"}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"info"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("h1",[t._v("Full stack web developer from Yemen")]),t._v(" "),n("div",{staticClass:"talk"},[n("email-btn",{attrs:{text:"Ready for new opportunities, let’s talk"}}),t._v(" "),n("a",{ref:"talk-telegram",staticClass:"talk-telegram",attrs:{target:"_blank",href:"https://t.me/salemkode"}},[n("img",{attrs:{src:"media/telegram.svg",alt:"icon of telegram"}})])],1)]),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"mouse",on:{click:t.down}},[n("svg",{attrs:{width:"30",height:"45",viewBox:"0 0 30 45",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{opacity:"0.79"}},[n("path",{attrs:{d:"M5 17C5 11.4772 9.47715 7 15 7C20.5228 7 25 11.4772 25 17V28C25 33.5228 20.5228 38 15 38C9.47715 38 5 33.5228 5 28V17Z",fill:"#212429"}}),t._v(" "),n("rect",{attrs:{x:"14",y:"12",width:"2",height:"8",rx:"1",fill:"white"}})])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n                Hi\n                "),n("img",{staticClass:"hand-icon",attrs:{src:"landing/hand.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n                I'm\n                "),n("span",{staticClass:"w-3"}),t._v(" "),n("strong",[t._v("Salem Shamakh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"photo"},[e("img",{staticClass:"avater",attrs:{src:"landing/avater.png",alt:"avater"}})])}],!1,null,"72ed1a84",null);e.default=component.exports;installComponents(component,{EmailBtn:n(277).default})},286:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{services:[{title:"Websites",info:"I mainly develop full dynamic easy to use websites."},{title:"Blockchain",info:"Building and dealing with smart contracts is the future."},{title:"Bot",info:"I develop telegram bots to do some crazy things sometimes."}]}}},o=(n(280),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-service"},[n("h1",[t._v("I develop and maintain")]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"card-container"},t._l(t.services,(function(e){return n("div",{key:e.title,staticClass:"card"},[n("img",{attrs:{src:"service/"+e.title+".svg",alt:""}}),t._v(" "),n("h3",{domProps:{textContent:t._s(e.title)}}),t._v(" "),n("p",{domProps:{textContent:t._s(e.info)}})])})),0)])])}),[],!1,null,"41441efd",null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{skills:{nuxt:"https://nuxtjs.org/",windicss:"https://windicss.org/",nodejs:"https://nodejs.org/",bootstrap:"https://getbootstrap.com/",solidity:"https://soliditylang.org/"}}}},o=(n(282),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-skill"},[n("h1",[t._v("Frameworks I use")]),t._v(" "),n("div",{staticClass:"content"},t._l(t.skills,(function(t,e){return n("a",{key:e,staticClass:"card",attrs:{target:"_blank",href:t}},[n("img",{attrs:{src:"skill/"+e+".svg",alt:""}})])})),0)])}),[],!1,null,"78c245f6",null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var r={components:{Fragment:n(135).a}},o=n(17),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("section-landing"),t._v(" "),n("section-service"),t._v(" "),n("section-skill"),t._v(" "),n("email-btn",{attrs:{text:"Need to know more? Just click to ask",_class:"mx-auto my-8"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionLanding:n(285).default,SectionService:n(286).default,SectionSkill:n(287).default,EmailBtn:n(277).default})}}]);