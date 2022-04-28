<template>
  <div>
    <el-icon></el-icon>
    <span>{{title}}</span>
  </div>
</template>

<script lang='ts' setup>
import { defineProps } from 'vue'
defineProps({
  title: {
      type: String,
      required: true
  },
  icon: {}
})
</script>
<style lang="scss" scoped>
</style>
