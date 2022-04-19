<template>
  <div>
    <nav-sider />
    <div class="main">
        <nav-header />
        <nav-content />
    </div>
  </div>
</template>

<script lang='ts' setup>
import {} from 'vue'
import NavHeader from './components/Header.vue'
import NavSider from './components/Sider.vue'
import NavContent from './components/Content.vue'
</script>
<style lang="scss" scoped>
.main{
    @include clearfix;
    margin-left: $siderWidth;
}
</style>
