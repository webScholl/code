<!--
 * @Author: 姬兵兵
 * @CreateTime: 2020/07/13
 * @LastEditors: FunnySoul300Jin
 * @LastEditTime: 2020/07/13
-->

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgClass() {
      return this.className ? `svg-icon ${this.className}` : 'svg-icon'
    },
    iconName() {
      return `#icon-${this.iconClass}`
    }
  },
  methods: {}
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
