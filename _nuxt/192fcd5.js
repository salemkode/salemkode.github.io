(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,5],{253:function(t,e,n){},254:function(t,e,n){},256:function(t,e,n){},257:function(t,e,n){"use strict";n(253)},258:function(t,e,n){"use strict";n(254)},261:function(t,e,n){"use strict";n.r(e);var o={props:["show"],components:{Fragment:n(133).a}},r=(n(257),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup center-position shadow-card"},[t._t("default")],2)]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup-shadow center-position",on:{click:function(e){return t.$emit("close",e.target.value)}}})])],1)}),[],!1,null,"819c6fe2",null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var o={props:["show"]},r=(n(258),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"center-position"},[t._v("My mail is coped")])}),[],!1,null,"6e8692c2",null);e.default=component.exports},264:function(t,e,n){"use strict";n(256)},267:function(t,e,n){"use strict";n.r(e);n(61);var o={props:["text","_class"],data:function(){return{email:"kodesalem@gmail.com",popup:!1,alert:!1}},methods:{showPopup:function(){this.popup=!this.popup,this.copyMail()},copyMail:function(){var t=this;navigator.clipboard.writeText(this.email),this.alert||(this.alert=!0,setTimeout((function(e){return t.alert=!1}),500))}},components:{Fragment:n(133).a}},r=(n(264),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("a",{class:"btn "+t._class,attrs:{href:"mailto:"+t.email},on:{click:t.showPopup}},[n("strong",[t._v(t._s(t.text))]),t._v(" "),n("img",{staticClass:"icon",attrs:{src:"landing/next.svg"}})]),t._v(" "),n("pop-up",{attrs:{show:t.popup},on:{close:function(e){t.popup=!t.popup}}},[n("img",{staticClass:"p-3 h-1/2 m-auto",attrs:{src:"mail.svg",alt:""}}),t._v(" "),n("h1",{staticClass:"mt-3 p-3 bg-dark-200 rounded-md text-white bold",domProps:{textContent:t._s(t.email)}}),t._v(" "),n("button",{staticClass:"btn btn-mail",on:{click:function(e){return t.copyMail()}}},[t._v("Copy my mail")])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("Coped",{directives:[{name:"show",rawName:"v-show",value:t.alert,expression:"alert"}]})],1)],1)}),[],!1,null,"ec020e88",null);e.default=component.exports;installComponents(component,{PopUp:n(261).default,Coped:n(262).default})}}]);