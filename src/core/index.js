import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'

initGlobalAPI(Vue) //挂载静态属性和方法

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

Vue.version = '__VERSION__'

export default Vue


//Vue构造函数第二层处理结果
//
// // src/core/index.js / src/core/global-api/index.js
// Vue.config
// Vue.util = util
// Vue.set = set
// Vue.delete = del
// Vue.nextTick = util.nextTick
// Vue.options = {
//   components: {
//     KeepAlive
//   },
//   directives: {},
//   filters: {},
//   _base: Vue
// }
// Vue.use
// Vue.mixin
// Vue.cid = 0
// Vue.extend
// Vue.component = function(){}
// Vue.directive = function(){}
// Vue.filter = function(){}
//
// Vue.prototype.$isServer
// Vue.version = '__VERSION__'
