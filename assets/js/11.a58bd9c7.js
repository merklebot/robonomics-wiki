(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1ZDK":function(_,e,t){},AEAl:function(_,e,t){"use strict";t("1ZDK")},F3eC:function(_,e,t){"use strict";t.r(e);var s=t("H2Ju").a,i=(t("AEAl"),t("KHd+")),a=t("Kw5r"),o=a.a.config.optionMergeStrategies.computed,r={metadata:{defaultLocale:"en"}},c=function(_){var e=_.options;e.__staticData?e.__staticData.data=r:(e.__staticData=a.a.observable({data:r}),e.computed=o({$static:function(){return e.__staticData.data}},e.computed))},n=Object(i.a)(s,(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ul",{staticClass:"menu"},_._l(_.items,(function(e,s){return t("li",{key:s},[e.link&&0!=e.published?t("g-link",{staticClass:"menu-link",attrs:{to:_.$path(e.link,_.locale),exact:""}},[_._v("\n      "+_._s(_.getTitle(e))+"\n    ")]):[0!=e.published?t("h4",{staticClass:"menu-subtitle",class:_.hascurrent(e.items)?"open":"close",on:{click:_.toggle}},[_._v("\n        "+_._s(_.getTitle(e))+"\n      ")]):_._e(),t("List",{attrs:{items:e.items}})]],2)})),0)}),[],!1,null,"4b99b4f5",null);"function"==typeof c&&c(n);e.default=n.exports},H2Ju:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("07d7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("PKPk"),core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("3bBZ"),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("mRH6"),core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.a={props:{items:{default:[]}},components:{List:function(){return Promise.resolve().then(__webpack_require__.bind(null,"F3eC"))}},computed:{locale:function(){return this.$store.state.locale}},methods:{toggle:function(_){_.target.classList.toggle("open")},hascurrent:function(_){for(var e=this.$route.matched[0].path+"/",t=!1,s=0;s<_.length;s++)_[s].items?this.hascurrent(_[s].items)&&(t=!0):this.$path(_[s].link,this.locale)==e&&(t=!0);return t},getTitle:function getTitle(item){return eval("item.title_".concat(this.locale))?eval("item.title_".concat(this.locale)):eval("item.title_".concat(this.$static.metadata.defaultLocale))?eval("item.title_".concat(this.$static.metadata.defaultLocale)):void 0}}}}}]);