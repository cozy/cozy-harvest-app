!function(e){function n(n){for(var o,a,l=n[0],c=n[1],s=n[2],u=0,_=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&_.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(n);_.length;)_.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,l=1;l<t.length;l++){var c=t[l];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={0:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=c;i.push([2,1]),t()}({"/KVF":function(e,n,t){var o={"./en":"7dT6","./en.json":"7dT6","./fr":"9pOX","./fr.json":"9pOX"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="/KVF"},"/kYV":function(e,n,t){},0:function(e,n){},1:function(e,n){},2:function(e,n,t){t("55Il"),t("7NIr"),e.exports=t("LiWt")},"2E0U":function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}));var o="io.cozy.konnectors",r="io.cozy.triggers";n.c={triggers:{doctype:r}}},3:function(e,n){},4:function(e,n){},5:function(e,n){},6:function(e,n){},"7dT6":function(e){e.exports=JSON.parse("{}")},"9pOX":function(e){e.exports=JSON.parse("{}")},"G0/2":function(e,n,t){var o={"./en.json":"6wRk","./fr.json":"wNxD"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="G0/2"},LiWt:function(e,n,t){"use strict";t.r(n);t("/8/d"),t("llna"),t("/kYV");var o=t("q1tI"),r=t.n(o),i=t("i8i4"),a=t("PRV4"),l=t("o8Rm"),c=t("SH7X"),s=t.n(c),d=t("buk/"),u=t("xIbs"),_=t("1I/2"),f=t("44Ds"),p=t.n(f),b=t("QCzH"),j=t("pZg0"),x=t.n(j),m=t("2E0U"),w=function(e,n){return/^\{\{\..*\}\}$/.test(e)?n:e},y=function(e){var n=e.app,o=e.locale,r={appIconDefault:t("ZAKO"),appNamePrefixDefault:x.a.name_prefix,appNameDefault:x.a.name,appLocaleDefault:"en"};return{appName:w(n.name,r.appNameDefault),appNamePrefix:w(n.prefix,r.appNamePrefixDefault),iconPath:w(n.icon,r.appIconDefault),lang:w(o,r.appLocaleDefault)}},v=p()((function(){var e=document.querySelector("[role=application]"),n=y(JSON.parse(e.dataset.cozy)),o=n.lang,r=n.appName,i=Object(b.b)(o,(function(e){return t("/KVF")("./".concat(e))})),a=function(){var e=document.querySelector("[role=application]"),n=JSON.parse(e.dataset.cozy),t=window.location.protocol,o="".concat(t,"//").concat(n.domain);return new s.a({uri:o,token:n.token,appMetadata:{slug:x.a.name,version:x.a.version},schema:m.c,store:!1})}();return function(e){var n=e.client,t=e.root,o=e.lang,r=e.appName,i=y(JSON.parse(t.dataset.cozy)),a=i.appNamePrefix,l=i.iconPath;cozy.bar.init({appName:r,appNamePrefix:a,cozyClient:n,iconPath:l,lang:o,replaceTitleOnMobile:!1})}({client:a,root:e,lang:o,appName:r}),{root:e,client:a,lang:o,polyglot:i}})),h=t("xYwX"),g=Object(a.a)({disableGlobal:!0});document.addEventListener("DOMContentLoaded",(function(){var e,n,t,o,a;e=v(),n=e.root,t=e.client,o=e.lang,a=e.polyglot,Object(i.render)(r.a.createElement(l.b,{generateClassName:g},r.a.createElement(c.CozyProvider,{client:t},r.a.createElement(d.b,{lang:o,polyglot:a},r.a.createElement(u.a,null,r.a.createElement(_.a,null,r.a.createElement(h.a,null)))))),n)}))},Uedh:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t("q1tI"),r=t.n(o),i=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"u-ta-center"},"Homepage"),r.a.createElement("p",{className:"u-ta-center"},"Put in url ",r.a.createElement("code",null,"/connected/:konnectorSlug")))}},ZAKO:function(e,n){e.exports="/img/icon.987172dfb4476e75424507f2fb3cb962.svg"},kGy0:function(e,n,t){var o={"./en.json":"8WAw","./fr.json":"H488"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="kGy0"},nw0P:function(e,n,t){var o={"./_lib/build_formatting_tokens_reg_exp/index.js":"kOWh","./ar/build_distance_in_words_locale/index.js":"XxX6","./ar/build_format_locale/index.js":"alis","./ar/index.js":"EDRf","./be/build_distance_in_words_locale/index.js":"LQ09","./be/build_format_locale/index.js":"kj7F","./be/index.js":"YEhR","./bg/build_distance_in_words_locale/index.js":"7K3h","./bg/build_format_locale/index.js":"RrdL","./bg/index.js":"isx8","./ca/build_distance_in_words_locale/index.js":"wqqj","./ca/build_format_locale/index.js":"qcV0","./ca/index.js":"Vwa+","./cs/build_distance_in_words_locale/index.js":"ZKDM","./cs/build_format_locale/index.js":"ipyF","./cs/index.js":"dvhP","./da/build_distance_in_words_locale/index.js":"2Mgc","./da/build_format_locale/index.js":"Gned","./da/index.js":"7ur/","./de/build_distance_in_words_locale/index.js":"5IWf","./de/build_format_locale/index.js":"THCn","./de/index.js":"bgw5","./el/build_distance_in_words_locale/index.js":"o/GB","./el/build_format_locale/index.js":"8T9h","./el/index.js":"dH0v","./en/build_distance_in_words_locale/index.js":"LZbM","./en/build_format_locale/index.js":"6DAA","./en/index.js":"Us+F","./eo/build_distance_in_words_locale/index.js":"qrnn","./eo/build_format_locale/index.js":"Bl15","./eo/index.js":"UB7v","./es/build_distance_in_words_locale/index.js":"GEfZ","./es/build_format_locale/index.js":"O+zC","./es/index.js":"/S0t","./fi/build_distance_in_words_locale/index.js":"VHtQ","./fi/build_format_locale/index.js":"Oydx","./fi/index.js":"ndVD","./fil/build_distance_in_words_locale/index.js":"uq4p","./fil/build_format_locale/index.js":"d7hw","./fil/index.js":"pNfm","./fr/build_distance_in_words_locale/index.js":"IzMR","./fr/build_format_locale/index.js":"I3Zg","./fr/index.js":"LKA2","./hr/build_distance_in_words_locale/index.js":"DPvn","./hr/build_format_locale/index.js":"puw3","./hr/index.js":"L9Jq","./hu/build_distance_in_words_locale/index.js":"w2RQ","./hu/build_format_locale/index.js":"/0iD","./hu/index.js":"Nm+E","./id/build_distance_in_words_locale/index.js":"JbvB","./id/build_format_locale/index.js":"0wlw","./id/index.js":"A6C3","./is/build_distance_in_words_locale/index.js":"qzMC","./is/build_format_locale/index.js":"S3yD","./is/index.js":"N4bE","./it/build_distance_in_words_locale/index.js":"MDEp","./it/build_format_locale/index.js":"aUJd","./it/index.js":"hmb4","./ja/build_distance_in_words_locale/index.js":"nNvt","./ja/build_format_locale/index.js":"buui","./ja/index.js":"uAXs","./ko/build_distance_in_words_locale/index.js":"oEw+","./ko/build_format_locale/index.js":"9SQf","./ko/index.js":"iW8+","./mk/build_distance_in_words_locale/index.js":"nmwZ","./mk/build_format_locale/index.js":"htxJ","./mk/index.js":"GzBU","./nb/build_distance_in_words_locale/index.js":"SL1f","./nb/build_format_locale/index.js":"CJ5F","./nb/index.js":"73vv","./nl/build_distance_in_words_locale/index.js":"Uyu0","./nl/build_format_locale/index.js":"doCD","./nl/index.js":"hCQt","./pl/build_distance_in_words_locale/index.js":"FUBD","./pl/build_format_locale/index.js":"nOYf","./pl/index.js":"B6yL","./pt/build_distance_in_words_locale/index.js":"aTPA","./pt/build_format_locale/index.js":"TTT0","./pt/index.js":"gdks","./ro/build_distance_in_words_locale/index.js":"gI+A","./ro/build_format_locale/index.js":"njjO","./ro/index.js":"r2yp","./ru/build_distance_in_words_locale/index.js":"KmPx","./ru/build_format_locale/index.js":"UUBw","./ru/index.js":"nz/o","./sk/build_distance_in_words_locale/index.js":"q2Bs","./sk/build_format_locale/index.js":"9sxn","./sk/index.js":"Wqan","./sl/build_distance_in_words_locale/index.js":"mlv2","./sl/build_format_locale/index.js":"vHkZ","./sl/index.js":"KYSo","./sr/build_distance_in_words_locale/index.js":"LlkS","./sr/build_format_locale/index.js":"RhjJ","./sr/index.js":"7mU3","./sv/build_distance_in_words_locale/index.js":"UNBN","./sv/build_format_locale/index.js":"zTNB","./sv/index.js":"hxgj","./th/build_distance_in_words_locale/index.js":"XAGa","./th/build_format_locale/index.js":"We2s","./th/index.js":"Pk+z","./tr/build_distance_in_words_locale/index.js":"aFZF","./tr/build_format_locale/index.js":"jh7A","./tr/index.js":"3ZWG","./zh_cn/build_distance_in_words_locale/index.js":"KdB7","./zh_cn/build_format_locale/index.js":"l4EP","./zh_cn/index.js":"8tMq","./zh_tw/build_distance_in_words_locale/index.js":"vyyr","./zh_tw/build_format_locale/index.js":"uYH7","./zh_tw/index.js":"QPlQ"};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="nw0P"},pZg0:function(e,n){e.exports={name:"Cozy harvest-app",slug:"cozy-harvest-app",icon:"icon.svg",categories:[],version:"0.1.0",licence:"AGPL-3.0",editor:"",source:"https://github.com/cozy/cozy-harvest-app.git@build",developer:{name:"cozy",url:""},routes:{"/":{folder:"/",index:"index.html",public:!1}},permissions:{apps:{description:"Required by the cozy-bar to display the icons of the apps",type:"io.cozy.apps",verbs:["GET"]},settings:{description:"Required by the cozy-bar to display Claudy and know which applications are coming soon",type:"io.cozy.settings",verbs:["GET"]},konnectors:{description:"Required to get the list of konnectors",type:"io.cozy.konnectors",verbs:["GET","POST","PUT","DELETE"]},triggers:{description:"Required to run the konnectors",type:"io.cozy.triggers",verbs:["ALL"]},permissions:{description:"Required to run the konnectors",verbs:["ALL"],type:"io.cozy.permissions"}}}},tdiL:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var o=t("lSNA"),r=t.n(o),i=t("J4zp"),a=t.n(i),l=t("yXPU"),c=t.n(l),s=t("o0o1"),d=t.n(s),u=t("q1tI"),_=t.n(u),f=t("Ty5D"),p=t("mwIZ"),b=t.n(p),j=t("SH7X"),x=t("iDCe"),m=t("2E0U");function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(){var e=c()(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(Object(j.Q)(m.a).where({slug:t}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=c()(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(Object(j.Q)(m.b).where({worker:["client","konnector"]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e,n=Object(f.h)().konnectorSlug,t=Object(f.g)(),o=Object(j.useClient)(),r=Object(u.useState)({allTriggers:[],konnector:{}}),i=a()(r,2),l=i[0],s=i[1];Object(u.useEffect)((function(){c()(d.a.mark((function e(){var t,r,i,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(o,n);case 2:return t=e.sent,r=t.data,e.next=6,h(o);case 6:i=e.sent,a=i.data,s({allTriggers:a,konnector:(null==r?void 0:r[0])||{}});case 9:case"end":return e.stop()}}),e)})))()}),[o,n]);var p=Object.keys(l.allTriggers).reduce((function(e,t){var o;return(o=t)._type===m.b&&o.message&&o.message.konnector&&b()(t,"message.konnector")===n&&e.push(t),e}),[]),w=y(y({},l.konnector),{},{triggers:{data:p}});return _.a.createElement(x.a,{konnectorRoot:"/connected/".concat(null===(e=l.konnector)||void 0===e?void 0:e.slug),konnector:w,onDismiss:function(){return t.push("/connected")},datacardOptions:null})}},xYwX:function(e,n,t){"use strict";(function(e){var o=t("q1tI"),r=t.n(o),i=t("55Ip"),a=t("Ty5D"),l=t("0cfB"),c=t("jDpt"),s=t("Uedh"),d=t("tdiL"),u=t("SH7X"),_=t("xIbs"),f=t("wvTK"),p=t("1I/2");n.a=Object(l.hot)(e)((function(){var e=Object(p.b)().isMobile,n=Object(u.useClient)(),t=cozy.bar.BarCenter;return r.a.createElement(i.a,null,r.a.createElement(c.b,{monoColumn:!0},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(t,null,r.a.createElement(_.a,null,r.a.createElement(f.a,null,n.appMetadata.slug)))),r.a.createElement(c.c,null,r.a.createElement(c.a,null,r.a.createElement(a.d,null,r.a.createElement(a.b,{path:"/connected/:konnectorSlug",component:d.a}),r.a.createElement(a.b,{path:"/",component:s.a}),r.a.createElement(a.a,{from:"*",to:"/"}))))))}))}).call(this,t("3UD+")(e))}});