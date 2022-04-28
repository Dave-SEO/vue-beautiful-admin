<template>
  <div>
     <el-menu  background-color="#304156" text-color="#fff" :unique-opened="true" v-if="siderMenu.length > 0">
        <template v-for="(item, index) in siderMenu" :key="index">
            <el-sub-menu :index="item.path" v-if="item.children.length > 0">
                    <template #title>
                        <el-icon><Setting /></el-icon>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <el-menu-item :index="menulist.path" v-for="(menulist, i) in item.children" :key="i">
                        <span>{{menulist.meta.title}}</span>
                    </el-menu-item>
            </el-sub-menu>

            <el-menu-item :index="item.path" v-else>
                <el-icon><Setting /></el-icon>
                <span>{{item.meta.title}}</span>
            </el-menu-item>
            </template>
        </el-menu>
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import router from '@/router'
import { filterRouters, generateMenus } from '@/utils/route'
import { SubMenu, MenuItem } from '@/layouts/components/menu'
const siderMenu = computed(() => {
    return generateMenus(filterRouters(router.getRoutes()))
})
console.log('siderMenu', siderMenu.value)
</script>
<style lang="scss" scoped>
</style>
