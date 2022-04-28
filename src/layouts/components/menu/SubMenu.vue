<template>
  <div>
    <el-sub-menu :index="index">
        <template #title>
             <MenuItem  :title="menu.title" />
        </template>
        <el-menu-item :index="item.path" v-for="(item, index) in menu.children" :key="index" >
           <MenuItem  :title="item.meta.title" />
        </el-menu-item>
    </el-sub-menu>
  </div>
</template>

<script lang='ts' setup>
import { defineProps } from 'vue'
import { MenuItem } from '@/layouts/components/menu'
defineProps({
    menu: {
        type: Object,
        default: () => ({}),
        required: true
    },
    index: {
        type: String,
        required: true
    }
})
</script>
<style lang="scss" scoped>
</style>
