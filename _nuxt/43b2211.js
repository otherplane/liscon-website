(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{282:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var r=n(8),o=(n(31),n(66),n(54),n(377)),l=n(378),c=n(376),d=n(380);function f(t){var e=t.split(" "),n=Object(r.a)(e,2),time=n[0],o=n[1],l=time.split(":"),c=Object(r.a)(l,2),d=c[0],f=c[1];return"12"===d&&(d="00"),"PM"===o&&(d=parseInt(d,10)+12),"".concat(d,":").concat(f)}function v(t,time){var e=time.split(":"),n=Object(r.a)(e,2),l=n[0],d=n[1],f=new Date(2021,9,t,parseInt(l)+2,parseInt(d)).getTime(),v=Object(c.a)(f,"Europe/Lisbon");return Object(o.a)(v)}function m(t){var title=t.title,e=t.startTime,n=t.endTime,r=t.room,o=t.fullSpeaker,c=v(parseInt(t.day),f(e)),m=v(parseInt(t.day),f(n)),w=Object(l.a)(Object(d.a)(c,"Europe/Lisbon"),{format:"basic"}),x=Object(l.a)(Object(d.a)(m,"Europe/Lisbon"),{format:"basic"});return"https://www.google.com/calendar/render?action=TEMPLATE&text=".concat(title,"&location=").concat("LxFactory, R. Rodrigues de Faria 103, 1300-501 Lisboa, Portugal","&dates=").concat(w,"%2F").concat(x,"&details=Speaker: ").concat(o,"%0AStage: ").concat(r)}},295:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("55f3fc40",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(295)},324:function(t,e,n){var r=n(52)(!1);r.push([t.i,'h1[data-v-02fbe552]{font-size:4rem;font-weight:700;font-family:"RousseauDeco",sans-serif}p[data-v-02fbe552]{font-size:1.4rem;font-family:"NeueMachina-Regular",sans-serif}.events-list .title[data-v-02fbe552]{text-align:center;font-size:2rem;margin-bottom:1rem}.events-list .row[data-v-02fbe552]{display:grid;grid-template-columns:285px 1fr minmax(150px,1fr) 180px;padding:24px;font-size:18px;grid-column-gap:34px;align-items:center;justify-items:baseline;border-bottom:1px solid #cbc2bb}.events-list .row .col[data-v-02fbe552]{display:flex;flex-wrap:wrap;flex-direction:column}.events-list .row .col .link-calendar[data-v-02fbe552]{margin:4px;font-size:14px}.events-list .row .col .label[data-v-02fbe552]{border:1px solid #000;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:4px 8px}.events-list .row .col.categories[data-v-02fbe552]{justify-content:flex-end;width:100%}.events-list .row .col.categories .label[data-v-02fbe552]{width:100%;text-align:center}.events-list .row .col .current.label[data-v-02fbe552]{border:1px solid #025099}@media (max-width:930px){.events-list .row[data-v-02fbe552]{display:flex;flex-direction:column}.events-list .row .col[data-v-02fbe552]{text-align:center;margin:8px}.events-list .row .col.categories[data-v-02fbe552]{justify-content:center;margin-right:0;margin-left:0;width:auto}.events-list .row .col.categories .label[data-v-02fbe552]{width:auto}}',""]),t.exports=r},385:function(t,e,n){"use strict";n.r(e);var r=n(282),o={props:{events:{type:Array,default:function(){return[]}},stage:{type:String,default:""}},methods:{generateGoogleCalendarUrl:r.b}},l=(n(323),n(58)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"events-list"},[n("h2",{staticClass:"title"},[t._v(t._s(t.stage))]),t._v(" "),t._l(t.events,(function(e){return n("div",{key:e.fullSpeaker+e.title,staticClass:"row",class:{current:e.current}},[n("div",{staticClass:"col"},[n("p",[t._v(t._s(e.startTime)+" - "+t._s(e.endTime))]),t._v(" "),n("a",{staticClass:"link-calendar",attrs:{href:t.generateGoogleCalendarUrl(e),target:"_blank"}},[t._v("Add to calendar")])]),t._v(" "),n("p",{staticClass:"col"},[t._v(t._s(e.fullSpeaker))]),t._v(" "),n("p",{staticClass:"col"},[t._v(t._s(e.title))]),t._v(" "),e.miniSummit?n("div",{staticClass:"col categories"},[n("p",{staticClass:"label",class:{current:e.current}},[t._v("\n        "+t._s(e.miniSummit)+"\n      ")])]):t._e()])}))],2)}),[],!1,null,"02fbe552",null);e.default=component.exports}}]);