(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{237:function(t,e,r){var content=r(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("b43efade",content,!0,{sourceMap:!1})},238:function(t,e,r){"use strict";r.r(e);var n={name:"Card",props:{title:{type:String,default:null},headerCls:{type:String,default:"bg-primary text-light text-center text-capitalize"},overlay:{type:Boolean,default:!1},cls:{type:String,default:null},trans:{type:Boolean,default:!1}}},c=(r(239),r(22)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-dark",class:[t.cls,{transparent:t.trans}]},[t.title?r("div",{class:["card-header",t.headerCls]},[t._v("\n        "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t._t("img"),t._v(" "),r("div",{class:t.overlay?"card-img-overlay":"card-body"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"card-footer"},[t._t("footer")],2)],2)}),[],!1,null,"8b6dfc60",null);e.default=component.exports},239:function(t,e,r){"use strict";var n=r(237);r.n(n).a},240:function(t,e,r){(e=r(70)(!1)).push([t.i,".bg-dark.transparent[data-v-8b6dfc60]{background-color:rgba(0,0,0,.4)!important}",""]),t.exports=e},336:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(9),r(69);var n=r(23),c=r(31),l=r(32),o=r(19),d=r(8),f=r(4),v=r(238);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},h=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).nav=[{text:"Dashboard",url:"admin"},{text:"posts",url:"admin/posts"},{text:"projects",url:"admin/projects"},{text:"comments",url:"admin/comments"},{text:"tags",url:"admin/tags"},{text:"categories",url:"admin/categories"}],t}return r}(f.d),x=h=y([Object(f.a)({middleware:"auth",scrollToTop:!0,components:{Card:v.default}})],h),_=r(22),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-sm-3 mb-3"},[r("div",{staticClass:"list-group list-group-flush"},t._l(t.nav,(function(link){return r("nuxt-link",{key:link.text,staticClass:"list-group-item list-group-item-action text-light text-uppercase border-bottom border-secondary",class:t.$route.path==="/"+link.url?"active bg-primary":"bg-dark",attrs:{to:"/"+link.url}},[t._v("\n                    "+t._s(link.text)+"\n                ")])})),1)]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("nuxt-child")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);