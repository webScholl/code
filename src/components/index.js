/*
    所有在./components/global目录下的.vue组件自动注册为全局组件
    以<mv-***></mv-***>为组件标签名
   */
import Vue from 'vue'

// 全局注册
const requireContext = require.context('./global', false, /\.vue$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(requireContext).forEach(({ default: item }) => {
  const name = item.name.replace(/([A-Z])/g, ($, $1) => (`-${$1.toLowerCase()}`))
  Vue.component(`mv${name}`, item)
})
