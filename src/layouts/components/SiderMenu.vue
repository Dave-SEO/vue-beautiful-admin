<template>
  <div>
     <el-menu  background-color="#304156" text-color="#fff" :unique-opened="true">
         <el-sub-menu index="1">
            <template #title>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
         </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
     </el-menu>
  </div>
</template>

<script lang='ts' setup>
import {} from 'vue'
import { Setting } from '@element-plus/icons-vue'
import router from '@/router'
import { filterRouters, generateMenus } from '@/utils/route'
// console.log('getRoutes', router.getRoutes())
console.log('filterRouters', filterRouters(router.getRoutes()))
const routermenu = generateMenus(filterRouters(router.getRoutes()))
console.log('routermenu', routermenu)
</script>
<style lang="scss" scoped>
</style>
