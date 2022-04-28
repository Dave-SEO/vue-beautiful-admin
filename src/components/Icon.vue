<template>
  <div>
      <i class="iconfont icon" :class="[`icon-${icon}`,{'active': $route.path === index}]" :style="{fontSize:size, color}"></i>
  </div>
</template>

<script lang='ts' setup>
import { defineProps } from 'vue'
defineProps({
    size: {
        type: String,
        default: '20px'
    },
    color: {
        type: String,
        default: '#fff'
    },
    icon: {
        type: String,
        required: true
    },
    activeTextColor: {
        type: String,
        default: '#fff'
    },
    index: {
        type: String
    }
})
</script>
<style lang="scss" scoped>
.icon{
    margin-right: 10px;
    &.active{
        color: #409EFF !important
    }
}
</style>
