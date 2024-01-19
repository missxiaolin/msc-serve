import com.google.debugging.sourcemap.SourceMapConsumerV3; //导入依赖的package包/类
import com.google.debugging.sourcemap.SourceMapParseException;
import com.google.debugging.sourcemap.proto.Mapping;

import java.lang.reflect.Array;

public class SouceToCode {

    private static final SourceMapConsumerV3 consumer = new SourceMapConsumerV3();

    public static void main(String[] args) throws SourceMapParseException {
        StringBuilder sb = new StringBuilder();
        //输入

        //IN:1.导入Source-map文件
        sb.append("{\"version\":3,\"sources\":[\"webpack:///webpack/bootstrap\",\"webpack:///./src/App.vue?7e02\",\"webpack:///./src/App.vue?1bc4\",\"webpack:///./src/components/HelloWorld.vue?f34e\",\"webpack:///src/components/HelloWorld.vue\",\"webpack:///./src/components/HelloWorld.vue?4efa\",\"webpack:///./src/components/HelloWorld.vue?f177\",\"webpack:///src/App.vue\",\"webpack:///./src/App.vue?1160\",\"webpack:///./src/App.vue?bff9\",\"webpack:///./src/main.js\",\"webpack:///./src/components/HelloWorld.vue?d11c\",\"webpack:///./src/assets/logo.png\"],\"names\":[\"webpackJsonpCallback\",\"data\",\"moduleId\",\"chunkId\",\"chunkIds\",\"moreModules\",\"executeModules\",\"i\",\"resolves\",\"length\",\"Object\",\"prototype\",\"hasOwnProperty\",\"call\",\"installedChunks\",\"push\",\"modules\",\"parentJsonpFunction\",\"shift\",\"deferredModules\",\"apply\",\"checkDeferredModules\",\"result\",\"deferredModule\",\"fulfilled\",\"j\",\"depId\",\"splice\",\"__webpack_require__\",\"s\",\"installedModules\",\"exports\",\"module\",\"l\",\"m\",\"c\",\"d\",\"name\",\"getter\",\"o\",\"defineProperty\",\"enumerable\",\"get\",\"r\",\"Symbol\",\"toStringTag\",\"value\",\"t\",\"mode\",\"__esModule\",\"ns\",\"create\",\"key\",\"bind\",\"n\",\"object\",\"property\",\"p\",\"jsonpArray\",\"window\",\"oldJsonpFunction\",\"slice\",\"_vm\",\"this\",\"_h\",\"$createElement\",\"_c\",\"_self\",\"attrs\",\"staticRenderFns\",\"staticClass\",\"_v\",\"_s\",\"msg\",\"_m\",\"props\",\"String\",\"created\",\"methods\",\"component\",\"components\",\"HelloWorld\",\"formatComponentName\",\"vm\",\"$root\",\"_isVue\",\"$options\",\"_componentTag\",\"__file\",\"Vue\",\"config\",\"productionTip\",\"TraceKit\",\"remoteFetching\",\"collectWindowErrors\",\"report\",\"subscribe\",\"errorReport\",\"index\",\"paramArray\",\"element\",\"reportMsg\",\"func\",\"url\",\"row\",\"line\",\"col\",\"column\",\"encodeURIComponent\",\"reportUrl\",\"indexOf\",\"join\",\"axios\",\"post\",\"then\",\"res\",\"console\",\"log\",\"_oldOnError\",\"errorHandler\",\"error\",\"info\",\"metaData\",\"toString\",\"componentName\",\"propsData\",\"lifecycleHook\",\"JSON\",\"stringify\",\"render\",\"h\",\"App\",\"$mount\"],\"mappings\":\"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\",\"file\":\"js/app.12cfe7c7.js\",\"sourcesContent\":[\" \\t// install a JSONP callback for chunk loading\\n \\tfunction webpackJsonpCallback(data) {\\n \\t\\tvar chunkIds = data[0];\\n \\t\\tvar moreModules = data[1];\\n \\t\\tvar executeModules = data[2];\\n\\n \\t\\t// add \\\"moreModules\\\" to the modules object,\\n \\t\\t// then flag all \\\"chunkIds\\\" as loaded and fire callback\\n \\t\\tvar moduleId, chunkId, i = 0, resolves = [];\\n \\t\\tfor(;i < chunkIds.length; i++) {\\n \\t\\t\\tchunkId = chunkIds[i];\\n \\t\\t\\tif(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {\\n \\t\\t\\t\\tresolves.push(installedChunks[chunkId][0]);\\n \\t\\t\\t}\\n \\t\\t\\tinstalledChunks[chunkId] = 0;\\n \\t\\t}\\n \\t\\tfor(moduleId in moreModules) {\\n \\t\\t\\tif(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\\n \\t\\t\\t\\tmodules[moduleId] = moreModules[moduleId];\\n \\t\\t\\t}\\n \\t\\t}\\n \\t\\tif(parentJsonpFunction) parentJsonpFunction(data);\\n\\n \\t\\twhile(resolves.length) {\\n \\t\\t\\tresolves.shift()();\\n \\t\\t}\\n\\n \\t\\t// add entry modules from loaded chunk to deferred list\\n \\t\\tdeferredModules.push.apply(deferredModules, executeModules || []);\\n\\n \\t\\t// run deferred modules when all chunks ready\\n \\t\\treturn checkDeferredModules();\\n \\t};\\n \\tfunction checkDeferredModules() {\\n \\t\\tvar result;\\n \\t\\tfor(var i = 0; i < deferredModules.length; i++) {\\n \\t\\t\\tvar deferredModule = deferredModules[i];\\n \\t\\t\\tvar fulfilled = true;\\n \\t\\t\\tfor(var j = 1; j < deferredModule.length; j++) {\\n \\t\\t\\t\\tvar depId = deferredModule[j];\\n \\t\\t\\t\\tif(installedChunks[depId] !== 0) fulfilled = false;\\n \\t\\t\\t}\\n \\t\\t\\tif(fulfilled) {\\n \\t\\t\\t\\tdeferredModules.splice(i--, 1);\\n \\t\\t\\t\\tresult = __webpack_require__(__webpack_require__.s = deferredModule[0]);\\n \\t\\t\\t}\\n \\t\\t}\\n\\n \\t\\treturn result;\\n \\t}\\n\\n \\t// The module cache\\n \\tvar installedModules = {};\\n\\n \\t// object to store loaded and loading chunks\\n \\t// undefined = chunk not loaded, null = chunk preloaded/prefetched\\n \\t// Promise = chunk loading, 0 = chunk loaded\\n \\tvar installedChunks = {\\n \\t\\t\\\"app\\\": 0\\n \\t};\\n\\n \\tvar deferredModules = [];\\n\\n \\t// The require function\\n \\tfunction __webpack_require__(moduleId) {\\n\\n \\t\\t// Check if module is in cache\\n \\t\\tif(installedModules[moduleId]) {\\n \\t\\t\\treturn installedModules[moduleId].exports;\\n \\t\\t}\\n \\t\\t// Create a new module (and put it into the cache)\\n \\t\\tvar module = installedModules[moduleId] = {\\n \\t\\t\\ti: moduleId,\\n \\t\\t\\tl: false,\\n \\t\\t\\texports: {}\\n \\t\\t};\\n\\n \\t\\t// Execute the module function\\n \\t\\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\\n\\n \\t\\t// Flag the module as loaded\\n \\t\\tmodule.l = true;\\n\\n \\t\\t// Return the exports of the module\\n \\t\\treturn module.exports;\\n \\t}\\n\\n\\n \\t// expose the modules object (__webpack_modules__)\\n \\t__webpack_require__.m = modules;\\n\\n \\t// expose the module cache\\n \\t__webpack_require__.c = installedModules;\\n\\n \\t// define getter function for harmony exports\\n \\t__webpack_require__.d = function(exports, name, getter) {\\n \\t\\tif(!__webpack_require__.o(exports, name)) {\\n \\t\\t\\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\\n \\t\\t}\\n \\t};\\n\\n \\t// define __esModule on exports\\n \\t__webpack_require__.r = function(exports) {\\n \\t\\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\\n \\t\\t\\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\\n \\t\\t}\\n \\t\\tObject.defineProperty(exports, '__esModule', { value: true });\\n \\t};\\n\\n \\t// create a fake namespace object\\n \\t// mode & 1: value is a module id, require it\\n \\t// mode & 2: merge all properties of value into the ns\\n \\t// mode & 4: return value when already ns object\\n \\t// mode & 8|1: behave like require\\n \\t__webpack_require__.t = function(value, mode) {\\n \\t\\tif(mode & 1) value = __webpack_require__(value);\\n \\t\\tif(mode & 8) return value;\\n \\t\\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\\n \\t\\tvar ns = Object.create(null);\\n \\t\\t__webpack_require__.r(ns);\\n \\t\\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\\n \\t\\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\\n \\t\\treturn ns;\\n \\t};\\n\\n \\t// getDefaultExport function for compatibility with non-harmony modules\\n \\t__webpack_require__.n = function(module) {\\n \\t\\tvar getter = module && module.__esModule ?\\n \\t\\t\\tfunction getDefault() { return module['default']; } :\\n \\t\\t\\tfunction getModuleExports() { return module; };\\n \\t\\t__webpack_require__.d(getter, 'a', getter);\\n \\t\\treturn getter;\\n \\t};\\n\\n \\t// Object.prototype.hasOwnProperty.call\\n \\t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\\n\\n \\t// __webpack_public_path__\\n \\t__webpack_require__.p = \\\"/\\\";\\n\\n \\tvar jsonpArray = window[\\\"webpackJsonp\\\"] = window[\\\"webpackJsonp\\\"] || [];\\n \\tvar oldJsonpFunction = jsonpArray.push.bind(jsonpArray);\\n \\tjsonpArray.push = webpackJsonpCallback;\\n \\tjsonpArray = jsonpArray.slice();\\n \\tfor(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);\\n \\tvar parentJsonpFunction = oldJsonpFunction;\\n\\n\\n \\t// add entry module to deferred list\\n \\tdeferredModules.push([0,\\\"chunk-vendors\\\"]);\\n \\t// run deferred modules when ready\\n \\treturn checkDeferredModules();\\n\",\"export * from \\\"-!../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css&\\\"\",\"var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\\\"id\\\":\\\"app\\\"}},[_c('img',{attrs:{\\\"alt\\\":\\\"Vue logo\\\",\\\"src\\\":require(\\\"./assets/logo.png\\\")}}),_c('HelloWorld',{attrs:{\\\"msg\\\":\\\"Welcome to Your Vue.js App\\\"}})],1)}\\nvar staticRenderFns = []\\n\\nexport { render, staticRenderFns }\",\"var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\\\"hello\\\"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._m(0),_c('h3',[_vm._v(\\\"Installed CLI Plugins\\\")]),_vm._m(1),_c('h3',[_vm._v(\\\"Essential Links\\\")]),_vm._m(2),_c('h3',[_vm._v(\\\"Ecosystem\\\")]),_vm._m(3)])}\\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\\\" For a guide and recipes on how to configure / customize this project,\\\"),_c('br'),_vm._v(\\\" check out the \\\"),_c('a',{attrs:{\\\"href\\\":\\\"https://cli.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"vue-cli documentation\\\")]),_vm._v(\\\". \\\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"babel\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"eslint\\\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"Core Docs\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://forum.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"Forum\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://chat.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"Community Chat\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://twitter.com/vuejs\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"Twitter\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://news.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"News\\\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://router.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"vue-router\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://vuex.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"vuex\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://github.com/vuejs/vue-devtools#vue-devtools\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"vue-devtools\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://vue-loader.vuejs.org\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"vue-loader\\\")])]),_c('li',[_c('a',{attrs:{\\\"href\\\":\\\"https://github.com/vuejs/awesome-vue\\\",\\\"target\\\":\\\"_blank\\\",\\\"rel\\\":\\\"noopener\\\"}},[_vm._v(\\\"awesome-vue\\\")])])])}]\\n\\nexport { render, staticRenderFns }\",\"<template>\\n  <div class=\\\"hello\\\">\\n    <h1>{{ msg }}</h1>\\n    <p>\\n      For a guide and recipes on how to configure / customize this project,<br>\\n      check out the\\n      <a href=\\\"https://cli.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-cli documentation</a>.\\n    </p>\\n    <h3>Installed CLI Plugins</h3>\\n    <ul>\\n      <li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">babel</a></li>\\n      <li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">eslint</a></li>\\n    </ul>\\n    <h3>Essential Links</h3>\\n    <ul>\\n      <li><a href=\\\"https://vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Core Docs</a></li>\\n      <li><a href=\\\"https://forum.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Forum</a></li>\\n      <li><a href=\\\"https://chat.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Community Chat</a></li>\\n      <li><a href=\\\"https://twitter.com/vuejs\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Twitter</a></li>\\n      <li><a href=\\\"https://news.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">News</a></li>\\n    </ul>\\n    <h3>Ecosystem</h3>\\n    <ul>\\n      <li><a href=\\\"https://router.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-router</a></li>\\n      <li><a href=\\\"https://vuex.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vuex</a></li>\\n      <li><a href=\\\"https://github.com/vuejs/vue-devtools#vue-devtools\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-devtools</a></li>\\n      <li><a href=\\\"https://vue-loader.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-loader</a></li>\\n      <li><a href=\\\"https://github.com/vuejs/awesome-vue\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">awesome-vue</a></li>\\n    </ul>\\n  </div>\\n</template>\\n\\n<script>\\nexport default {\\n  name: 'HelloWorld',\\n  props: {\\n    msg: String\\n  },\\n  created() {\\n     const error = new Error('test error');\\n     error.code = -1;\\n     throw error;\\n  },\\n  methods: {\\n  \\n  }\\n}\\n</script>\\n\\n<!-- Add \\\"scoped\\\" attribute to limit CSS to this component only -->\\n<style scoped>\\nh3 {\\n  margin: 40px 0 0;\\n}\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n}\\nli {\\n  display: inline-block;\\n  margin: 0 10px;\\n}\\na {\\n  color: #42b983;\\n}\\n</style>\\n\",\"import mod from \\\"-!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=script&lang=js&\\\"; export default mod; export * from \\\"-!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=script&lang=js&\\\"\",\"import { render, staticRenderFns } from \\\"./HelloWorld.vue?vue&type=template&id=d6ddb9a8&scoped=true&\\\"\\nimport script from \\\"./HelloWorld.vue?vue&type=script&lang=js&\\\"\\nexport * from \\\"./HelloWorld.vue?vue&type=script&lang=js&\\\"\\nimport style0 from \\\"./HelloWorld.vue?vue&type=style&index=0&id=d6ddb9a8&scoped=true&lang=css&\\\"\\n\\n\\n/* normalize component */\\nimport normalizer from \\\"!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\\\"\\nvar component = normalizer(\\n  script,\\n  render,\\n  staticRenderFns,\\n  false,\\n  null,\\n  \\\"d6ddb9a8\\\",\\n  null\\n  \\n)\\n\\nexport default component.exports\",\"<template>\\n  <div id=\\\"app\\\">\\n    <img alt=\\\"Vue logo\\\" src=\\\"./assets/logo.png\\\">\\n    <HelloWorld msg=\\\"Welcome to Your Vue.js App\\\"/>\\n  </div>\\n</template>\\n\\n<script>\\nimport HelloWorld from './components/HelloWorld.vue'\\n\\nexport default {\\n  name: 'App',\\n  components: {\\n    HelloWorld\\n  }\\n}\\n</script>\\n\\n<style>\\n#app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 60px;\\n}\\n</style>\\n\",\"import mod from \\\"-!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js&\\\"; export default mod; export * from \\\"-!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib/index.js!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js&\\\"\",\"import { render, staticRenderFns } from \\\"./App.vue?vue&type=template&id=514e6843&\\\"\\nimport script from \\\"./App.vue?vue&type=script&lang=js&\\\"\\nexport * from \\\"./App.vue?vue&type=script&lang=js&\\\"\\nimport style0 from \\\"./App.vue?vue&type=style&index=0&lang=css&\\\"\\n\\n\\n/* normalize component */\\nimport normalizer from \\\"!../node_modules/vue-loader/lib/runtime/componentNormalizer.js\\\"\\nvar component = normalizer(\\n  script,\\n  render,\\n  staticRenderFns,\\n  false,\\n  null,\\n  null,\\n  null\\n  \\n)\\n\\nexport default component.exports\",\"import Vue from 'vue'\\nimport App from './App.vue'\\nimport TraceKit from 'tracekit'\\nimport axios from 'axios'\\n\\n\\nVue.config.productionTip = false\\n\\nfunction formatComponentName(vm) {\\n  if (vm.$root === vm) {\\n    return 'root instance';\\n  }\\n  var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;\\n  return (\\n    (name ? 'component <' + name + '>' : 'anonymous component') +\\n    (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file : '')\\n  );\\n}\\n\\nTraceKit.remoteFetching = false;\\nTraceKit.collectWindowErrors = false;\\n\\nTraceKit.report.subscribe((errorReport) => {\\n  for (let index = 0; index < errorReport[\\\"stack\\\"].length; index++) {\\n    let paramArray = [];\\n    const element = errorReport[\\\"stack\\\"][index];\\n    var reportMsg = {\\n      msg: element.func,\\n      url: element.url,\\n      row: element.line,\\n      col: element.column,\\n    };\\n    for (let key in reportMsg) {\\n      paramArray.push(key + '=' + encodeURIComponent(reportMsg[key]));\\n    }\\n    var reportUrl = \\\"\\\";\\n    reportUrl += (reportUrl.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');\\n    axios.post(`http://localhost:8055/report` + reportUrl, element)\\n      .then(res => {\\n        console.log('res=>', res);\\n      })\\n  }\\n})\\n\\nconst _oldOnError = Vue.config.errorHandler;\\nVue.config.errorHandler = function (error, vm, info) {\\n  const metaData = {};\\n  if (Object.prototype.toString.call(vm) === '[object Object]') {\\n    metaData.componentName = formatComponentName(vm);\\n    metaData.propsData = vm.$options.propsData;\\n  }\\n\\n  if (typeof info !== 'undefined') {\\n    metaData.lifecycleHook = info;\\n  }\\n\\n  console.log(JSON.stringify(metaData, null, 4));\\n\\n  TraceKit.report(error)\\n\\n  if (typeof _oldOnError === 'function') {\\n    _oldOnError.call(this, error, vm, info);\\n  }\\n}\\n\\nnew Vue({\\n  render: h => h(App),\\n}).$mount('#app')\\n\",\"export * from \\\"-!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src/index.js??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=style&index=0&id=d6ddb9a8&scoped=true&lang=css&\\\"\",\"module.exports = __webpack_public_path__ + \\\"img/logo.82b9c7a5.png\\\";\"],\"sourceRoot\":\"\"}");
        consumer.parse(sb.toString());
        //IN:2.混淆代码列 3.混淆代码行
        Mapping.OriginalMapping mapp = consumer.getMappingForLine(1,4260);

        int index=0;
        Object[] sorceArr = consumer.getOriginalSources().toArray();
        for (int i = 0; i < sorceArr.length; i++) {
            if (mapp.getOriginalFile().equals(sorceArr[i].toString())){
                index=i;
                break;
            }
        }

        //输出
        System.out.println(consumer.getOriginalSourcesContent().toArray()[index]);  //OUT:1.代码
        System.out.println(mapp.getLineNumber());   //OUT:2.代码行
        System.out.println(mapp.getColumnPosition());   //OUT:3.代码列
        System.out.println(mapp.getOriginalFile()); //OUT:4.代码文件


    }
}